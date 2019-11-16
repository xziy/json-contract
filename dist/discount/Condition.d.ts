import Property from "../core/Property";
export default class Condition<T extends Condition<T, U>, U> {
    OR?: T[];
    AND?: T[];
    where?: Property<U>[];
    constructor(where?: Property<U>[], and?: T[], or?: T[]);
    protected static buildCondition<T extends Condition<T, U>, U>({ where, OR, AND, ...args }: T, type: new (where?: Property<U>[], and?: T[], or?: T[], ...args: any[]) => T): T;
    check(checkObject: U): boolean;
}
