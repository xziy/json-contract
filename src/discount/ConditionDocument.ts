import ProductContractD from "./ProductContractD";
import Condition from "./Condition";

/**
 * Описывает условия проверки полей документа, то есть поля [[Document.productContractModified]].
 */
export default class ConditionDocument extends Condition<ConditionDocument, ProductContractD> {
  // checkDayOfWeek?: string;

  /**
   * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору.
   * @param data - JSON c полями, аналогичными родетельскому конструктору.
   */
  public static build(data: ConditionDocument): ConditionDocument {
    return super.buildCondition(data, this);
  }
}
