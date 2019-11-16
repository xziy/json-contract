import ProductContractD from "./ProductContractD";
import Condition from "./Condition";

/**
 * Описывает условия проверки полей контракта продукта, для которого заполняется документ, то есть поля [[Document.productContract]].
 */
export default class Select extends Condition<Select, ProductContractD> {
  /**
   * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору.
   * @param data - JSON c полями, аналогичными родетельскому конструктору.
   */
  public static build(data: Select): Select {
    return super.buildCondition(data, this);
  }
}
