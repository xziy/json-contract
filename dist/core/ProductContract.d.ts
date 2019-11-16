import Option from "./Option";
import Form from "./Form";
import Property from "./Property";
export default class ProductContract extends Form implements ProductContractBuild {
    name: string;
    locale: string;
    description: string;
    contractId: string;
    specificationMinVersion: number;
    prefix: string;
    badge: string;
    price: number;
    currency: string;
    start: number;
    finish: number;
    revision: number;
    deliveryTime: number;
    controlHash: string;
    [x: string]: any;
    constructor(options: Option[], name: string, locale: string, description: string, specificationMinVersion: number, prefix: string, badge: string, price: number, currency: string, start: number, finish: number, revision: number, deliveryTime: number, args?: Property<ProductContract>[]);
    static build({ locale, name, options, badge, deliveryTime, currency, description, prefix, finish, price, revision, specificationMinVersion, start, ...args }: ProductContractBuild): ProductContract;
    clone(): ProductContract;
    getJSON(): any;
}
export interface ProductContractBuild extends ProductContractInput, Form {
    locale: string;
    specificationMinVersion: number;
    badge: string;
    revision: number;
}
export interface ProductContractInput {
    name: string;
    description: string;
    prefix: string;
    price: number;
    currency: string;
    start: number;
    finish: number;
    deliveryTime: number;
}
