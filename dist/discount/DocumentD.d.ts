import Document, { DocumentBuild, Value } from "../core/Document";
import DiscountContract from "./DiscountContract";
import ProductContractD from "./ProductContractD";
import Property from "../core/Property";
export default class DocumentD extends Document implements DocumentDiscountBuild {
    discountContracts: DiscountContract[];
    productContract: ProductContractD;
    productContractModified: ProductContractD;
    constructor(productContract: ProductContractD);
    constructor(productContract: ProductContractD, values: Value[]);
    constructor(productContract: ProductContractD, values: Value[], args: Property<Document>[]);
    static build({ productContract, values, ...args }: DocumentDiscountBuild): DocumentD;
    processing(contract?: ProductContractD): boolean;
    addDiscount(discount: DiscountContract): boolean;
}
interface DocumentDiscountBuild extends DocumentBuild {
    discountContracts: DiscountContract[];
    productContract: ProductContractD;
}
export {};
