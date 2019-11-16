import Changeable from "./Changeable";
import ProductContract from "./ProductContract";
import Property from "./Property";
export default class Action implements ActionBuilder<ProductContract> {
    modifyPrice?: Changeable;
    modifyDeliveryTime?: Changeable;
    hideOptionsById?: string[];
    showOptionsById?: string[];
    changeProperties?: Property<ProductContract>[];
    setCustomProperties?: Property<object>[];
    constructor(setDiscountInPercentage?: number, modifyPrice?: Changeable, modifyDeliveryTime?: Changeable, hideOptionById?: string[], showOptionsById?: string[], changeProperties?: Property<ProductContract>[], setCustomProperties?: Property<any>[]);
    private _setDiscountInPercentage?;
    setDiscountInPercentage: number | undefined;
    static build({ setDiscountInPercentage, hideOptionsById, modifyDeliveryTime, modifyPrice, showOptionsById, changeProperties, setCustomProperties }: ActionBuilder<ProductContract>): Action;
    activate(contract: ProductContract): void;
}
export interface ActionBuilder<T> {
    setDiscountInPercentage?: number;
    modifyPrice?: Changeable;
    modifyDeliveryTime?: Changeable;
    hideOptionsById?: string[];
    showOptionsById?: string[];
    changeProperties?: {
        [x: string]: any;
    };
    setCustomProperties?: {
        [x: string]: any;
    };
}
