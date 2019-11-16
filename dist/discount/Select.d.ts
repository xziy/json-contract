import ProductContractD from "./ProductContractD";
import Condition from "./Condition";
export default class Select extends Condition<Select, ProductContractD> {
    static build(data: Select): Select;
}
