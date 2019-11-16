import ProductContractD from "./ProductContractD";
import DocumentD from "./DocumentD";
import ConditionDocument from "./ConditionDocument";
import Select from "./Select";
import Action from "../core/Action";

/**
 * Описывает скидки. Хранит условия применения на начальный и изменённый контракт и действия, которые следует выполнять
 * при выполнении указанных условий
 */
export default class DiscountContract {
  /**
   * id скидки
   */
  id: string;
  /**
   * Название скидки
   */
  name: string;
  /**
   * Условия применения на конкретный документ. Данное поле содержит данные проверки того, что конкретный документ
   * в поле [[Document.productContractModified]] хранится контракт, подходящих записанным тут условия. Условия в массиве
   * обрабатываются логическим И (то есть, если хотя бы одно из условий в массиве не будет выполнено, то результат работы
   * функции проверки будет отрицательным).
   */
  conditions: ConditionDocument[];
  /**
   * Минимальная версия модуля обработки скидки
   */
  specificationMinVersion: number;
  /**
   * Условия применения на [[ProductContract]]. Данное поле содержит данные проверки того, что [[ProductContract]] документа
   * в поле [[Document.productContract]] хранится контракт, подходящих записанным тут условия. Условия в массиве
   * обрабатываются логическим И (то есть, если хотя бы одно из условий в массиве не будет выполнено, то результат работы
   * функции проверки будет отрицательным).
   */
  selects: Select[];
  /**
   * Действия, которые следует выполнять при применении скилки
   */
  actions: Action[];

  /**
   *
   * @param id - id
   * @param name - название
   * @param condition - условия применения для изначального [[ProductContract]] в поле [[Document.productContract]]
   * @param specificationMinVersion - минимальная версия модуля
   * @param selects - условия применения для модифицированого [[ProductContract]] в поле [[Document.productContractModified]]
   * @param actions - действия скидки
   */
  constructor(id: string, name: string, condition: ConditionDocument[], specificationMinVersion: number, selects: Select[], actions: Action[]) {
    this.id = id;
    this.name = name;
    this.conditions = condition;
    this.specificationMinVersion = specificationMinVersion;
    this.selects = selects;
    this.actions = actions;
  }

  /**
   * Создаёт новый DiscountContract из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
   * При передаче как параметра екземпляра DiscountContract будет осущствлена попытка его скопировать, однако для таких целей
   * лучше использовать метод [[clone]]. Данный метод выступает как парсер из JSON в объект, а не как клонирование
   * @param id - id
   * @param name - название
   * @param condition - условия применения для изначального [[ProductContract]] в поле [[Document.productContract]]
   * @param specificationMinVersion - минимальная версия модуля
   * @param selects - условия применения для модифицированого [[ProductContract]] в поле [[Document.productContractModified]]
   * @param actions - действия скидки
   */
  public static build({actions, conditions, id, name, selects, specificationMinVersion}: DiscountContract): DiscountContract {
    const selectsObj = selects.map(s => Select.build(s));
    const conditionsObj = conditions.map(c => ConditionDocument.build(c));
    const actionsObj = actions.map(a => Action.build(a));
    return new DiscountContract(id, name, conditionsObj, specificationMinVersion, selectsObj, actionsObj);
  }

  /**
   * Проверяет, что текущую скидку можно применить к некоторому [[Document]]. Проверяется [[Document.productContract]] по
   * условиям хранящимся в [[selects]] и [[Document.productContractModified]] по условиям хранящимся в [[conditions]].
   * Если [[selects]] или [[conditions]] несколько, то результат работы это логическое И результата проверки каждой
   * (при отказе любого условия будет общий отказ функции).
   * @param document - документ, к которому проверяетяся можно ли применить скидку
   */
  public isActive(document: DocumentD): boolean {
    if (document.productContract.discounts.includes(this) || this.canUseForContract(document.productContract)) {
      for (let cond of this.conditions) {
        if (!cond.check(document.productContractModified)) {
          return false;
        }
      }

      return true;
    }

    return false;
  }

  /**
   * Проверяет, что текущую скидку можно применить к некоторому [[ProductContract]]. Проверяет его поля по условиям, записанными
   * в поле [[selects]].
   * @param contract - контракт, к которому проверяетяся можно ли применить скидку
   */
  public canUseForContract(contract: ProductContractD): boolean {
    for (let select of this.selects)
      if (!select.check(contract))
        return false;

    return true;
  }

  /**
   * Активация скидки для некоторого документа. Применение происходит непосредственно, игнорируя все проверки. Перед использованием
   * этой функции рекомендуется проверить возможно ли применять скидку на переданный документ.
   * Активация подразумевает под собой выполнение всех действий, записаных в [[actions]].
   * Данная функция не занимается обнулением функции, для добавления скидки в документ рекомендуется использовать
   * [[DocumentD.addDiscount]]
   * @param document - документ, к которому следует применить скидку
   */
  public activate(document: DocumentD): void {
    for (let action of this.actions) {
      action.activate(document.productContractModified);
    }
  }
}










