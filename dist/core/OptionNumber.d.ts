import Option from "./Option";
import Reason from "./Reason";
export default class OptionNumber extends Option {
    min?: number;
    max?: number;
    regex?: string;
    constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string, min?: number, max?: number, regex?: string);
    static buildOption({ anyData, description, id, isRequired, isHidden, label, max, min, regex, type }: OptionNumber): OptionNumber;
    validate(value: any): boolean;
    getRejectReason(value: any): Reason | undefined;
}
