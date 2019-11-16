import ProductContract from "./ProductContract";
import Reason from "./Reason";
import Property from "./Property";
export default class Document implements DocumentBuild {
    productContract: ProductContract;
    controlHash: string;
    values: Value[];
    documentId: string;
    productContractModified: ProductContract;
    [x: string]: any;
    constructor(productContract: ProductContract);
    constructor(productContract: ProductContract, values?: Value[]);
    constructor(productContract: ProductContract, values?: Value[], args?: Property<Document>[]);
    static build({ productContract, values, ...args }: DocumentBuild): Document;
    check(): boolean;
    getRejectReason(): Reason | undefined;
    addOption(id: string, value: any): boolean;
    getValue(id: string): any;
    processing(contract?: ProductContract): boolean;
}
export interface DocumentBuild {
    productContract: ProductContract;
    values: Value[];
}
export declare class Value {
    id: string;
    value: any;
    constructor(id: string, value: any);
}
