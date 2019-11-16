import ProductContractD from "./ProductContractD";
import Condition from "./Condition";
export default class ConditionDocument extends Condition<ConditionDocument, ProductContractD> {
    static build(data: ConditionDocument): ConditionDocument;
}
