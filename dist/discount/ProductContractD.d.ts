import ProductContract, { ProductContractBuild } from "../core/ProductContract";
import DiscountContract from "./DiscountContract";
import Option from "../core/Option";
import Property from "../core/Property";
export default class ProductContractD extends ProductContract implements ProductContractDBuild {
    discounts: DiscountContract[];
    discountAllowed: boolean;
    discountCumulativeAllowed: boolean;
    constructor(options: Option[], name: string, locale: string, description: string, specificationMinVersion: number, prefix: string, badge: string, price: number, currency: string, start: number, finish: number, discountAllowed: boolean, discountCumulativeAllowed: boolean, revision: number, deliveryTime: number, discounts: DiscountContract[], args?: Property<ProductContract>[]);
    static build({ locale, name, options, discountCumulativeAllowed, badge, deliveryTime, currency, description, discountAllowed, prefix, finish, price, revision, specificationMinVersion, start, discounts, ...args }: ProductContractDBuild): ProductContractD;
    clone(): ProductContractD;
    getJSON(): any;
}
export interface ProductContractDBuild extends ProductContractBuild {
    discounts: DiscountContract[];
    discountAllowed: boolean;
    discountCumulativeAllowed: boolean;
}
