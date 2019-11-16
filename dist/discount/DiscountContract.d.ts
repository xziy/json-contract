import ProductContractD from "./ProductContractD";
import DocumentD from "./DocumentD";
import ConditionDocument from "./ConditionDocument";
import Select from "./Select";
import Action from "../core/Action";
export default class DiscountContract {
    id: string;
    name: string;
    conditions: ConditionDocument[];
    specificationMinVersion: number;
    selects: Select[];
    actions: Action[];
    constructor(id: string, name: string, condition: ConditionDocument[], specificationMinVersion: number, selects: Select[], actions: Action[]);
    static build({ actions, conditions, id, name, selects, specificationMinVersion }: DiscountContract): DiscountContract;
    isActive(document: DocumentD): boolean;
    canUseForContract(contract: ProductContractD): boolean;
    activate(document: DocumentD): void;
}
