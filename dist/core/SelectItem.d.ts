import Form, { FormBuilder } from "./Form";
import Action, { ActionBuilder } from "./Action";
import ProductContract from "./ProductContract";
export default class SelectItem {
    id: string;
    label: string;
    description?: string;
    anyData?: string;
    action: Action;
    form: Form;
    constructor(id: string, label: string, form: Form, action: Action, description?: string, anyData?: string);
    static buildItem({ id, label, description, options, changeProperties, hideOptionsById, modifyDeliveryTime, modifyPrice, setDiscountInPercentage, showOptionsById, setCustomProperties, anyData }: SelectItemBuilder): SelectItem;
    getJSON(): SelectItemBuilder;
}
export interface SelectItemBuilder extends FormBuilder, ActionBuilder<ProductContract> {
    id: string;
    label: string;
    description?: string;
    anyData?: string;
}
