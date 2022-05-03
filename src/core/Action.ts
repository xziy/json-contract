import Changeable from "./Changeable";
import ProductContract from "./ProductContract";
import Property from "./Property";

/**
 * Описывает действия. Может менять поля ProductContract, стоимость, время поставки (ETA) и свойство видимости Option
 */
export default class Action implements ActionBuilder<ProductContract> {
  /**
   * Изменение цены. Может увеличить, уменьшить или установить конкретную цену, подробнее см. [[Changeable]]
   */
  modifyPrice?: Changeable;
  /**
   * Изменение времени доставки. Аналогично [[modifyPrice]]
   */
  modifyDeliveryTime?: Changeable;
  /**
   * Массив строк, каждая из которых является id [[Option]] некоторого обрабатываемого [[ProductContract]]. При выполнении
   * их параметр isHidden будет изменён на true
   */
  hideOptionsById?: string[];
  /**
   * Аналогично [[hideOptionsById]], но меняет isHidden на false
   */
  showOptionsById?: string[];
  /**
   * Массив пар <ключ>-<новое значение>, которые будут изменены в переданном [[ProductContract]]
   */
  changeProperties?: Property<ProductContract>[];
  /**
   * Массив пар <ключ>-<значение>, которые будут добавлены в переданный [[ProductContract]]
   */
  setCustomProperties?: Property<object>[];

  /**
   * @param setDiscountInPercentage - значение скидки
   * @param modifyPrice - изменение цены
   * @param modifyDeliveryTime - изменение времени доставки
   * @param hideOptionById - массив строк, которые не будут больше показываться
   * @param showOptionsById - массив строк, которые следует показать
   * @param changeProperties - массив пар ключ-значение, которые будут заменены в [[ProductContract]]
   * @param setCustomProperties - массив пар ключ-значение, которые будут добавлены в [[ProductContract]]
   */
  public constructor(setDiscountInPercentage?: number, modifyPrice?: Changeable, modifyDeliveryTime?: Changeable,
                     hideOptionById?: string[], showOptionsById?: string[], changeProperties?: Property<ProductContract>[],
                     setCustomProperties?: Property<any>[]) {
    this._setDiscountInPercentage = setDiscountInPercentage ?
      setDiscountInPercentage > 0 && setDiscountInPercentage < 100 ?
        setDiscountInPercentage : undefined : setDiscountInPercentage;
    this.modifyPrice = modifyPrice;
    this.modifyDeliveryTime = modifyDeliveryTime;
    this.hideOptionsById = hideOptionById;
    this.showOptionsById = showOptionsById;
    this.changeProperties = changeProperties;
    this.setCustomProperties = setCustomProperties;
  }

  /**
   * Добавить скидку. Это поле содержит некоторое значение от 0 до 100
   */
  private _setDiscountInPercentage?: number;

  get setDiscountInPercentage(): number | undefined {
    return this._setDiscountInPercentage;
  }

  /**
   * Проверяет, что новое значение больше 0 и меньше 100
   * @param value - новое значение
   */
  set setDiscountInPercentage(value: number | undefined) {
    if (value) {
      if (value > 0 && value < 100) {
        this._setDiscountInPercentage = value;
      }
    }
  }

  /**
   * @param setDiscountInPercentage - значение скидки
   * @param modifyPrice - изменение цены
   * @param modifyDeliveryTime - изменение времени доставки
   * @param hideOptionById - массив строк, которые не будут больше показываться
   * @param showOptionsById - массив строк, которые следует показать
   * @param changeProperties - массив пар ключ-значение, которые будут заменены в [[ProductContract]]
   * @param setCustomProperties - массив пар ключ-значение, которые будут добавлены в [[ProductContract]]
   */
  public static build({
                        setDiscountInPercentage, hideOptionsById, modifyDeliveryTime, modifyPrice, showOptionsById,
                        changeProperties, setCustomProperties
                      }: ActionBuilder<ProductContract>): Action {
    let changePropertiesObj, setCustomPropertiesObj;
    if (modifyPrice)
      modifyPrice = Changeable.build(modifyPrice);
    if (modifyDeliveryTime)
      modifyDeliveryTime = Changeable.build(modifyDeliveryTime);
    if (changeProperties)
      changePropertiesObj = Object.keys(changeProperties).map(key => <Property<ProductContract>>{
        property: key,
        value: changeProperties[key]
      });
    if (setCustomProperties)
      setCustomPropertiesObj = Object.keys(setCustomProperties).map(key => <Property<any>>{
        property: key,
        value: setCustomProperties[key]
      });

    return new Action(setDiscountInPercentage, modifyPrice, modifyDeliveryTime, hideOptionsById, showOptionsById,
      changePropertiesObj, setCustomPropertiesObj);
  }

  /**
   * Активация экземпляра. Если поле не undefined, то выполняет изменение, которое в нём указано.
   * - Если указан [[modifyPrice]], происходит изменение цены.
   * - Если указан [[modifyDeliveryTime]], происходит изменение времени доставки
   * - Если указан [[_setDiscountInPercentage]], цена, после возможного изменения выше, уменьшается на указанный процент
   * - Если указан [[showOptionsById]], поле isHidden всех [[Option]], id которых указан в массиве, станет false
   * - Если указан [[hideOptionsById]], поле isHidden всех [[Option]], id которых указан в массиве, станет true
   * - Если указан [[changeProperties]], будут изменены указанные в нём поля на новые значения
   * - Если указан [[setCustomProperties]], будут добавлены указанные в нём поля
   * @param contract - контракт для изменения
   */
  public activate(contract: ProductContract): void {
    if (this.modifyPrice)
      contract.price = this.modifyPrice.modify(contract.price);

    if (this.modifyDeliveryTime)
      contract.deliveryTime = this.modifyDeliveryTime.modify(contract.deliveryTime);

    if (this._setDiscountInPercentage)
      contract.price = contract.price * (100 - this._setDiscountInPercentage) / 100;

    if (this.showOptionsById) {
      for (let id of this.showOptionsById) {
        const option = contract.options.filter(opt => opt.id === id)[0];
        if (option)
          option.isHidden = false;
      }
    }

    if (this.hideOptionsById) {
      for (let id of this.hideOptionsById) {
        const option = contract.options.filter(opt => opt.id === id)[0];
        if (option)
          option.isHidden = true;
      }
    }

    if (this.changeProperties) {
      for (let prop of this.changeProperties) {
        if (contract[prop.property]) {
          contract[prop.property] = <any>prop.value;
        }
      }
    }

    if (this.setCustomProperties) {
      for (let prop of this.setCustomProperties) {
        contract[prop.property] = <any>prop.value;
      }
    }
  }
}

/**
 * Описывает поля, которые могут быть переданы в метод build
 */
export interface ActionBuilder<T> {
  setDiscountInPercentage?: number;
  modifyPrice?: Changeable;
  modifyDeliveryTime?: Changeable;
  hideOptionsById?: string[];
  showOptionsById?: string[];
  changeProperties?: { [x: string]: any };
  setCustomProperties?: { [x: string]: any };
}
