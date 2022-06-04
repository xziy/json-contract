export default class Reason {
    code: string;
    label?: string;
    constructor(code: string, label?: string, anyData?: string);
    private _rejectOption?;
    get rejectOption(): string | undefined;
    set rejectOption(value: string | undefined);
}
