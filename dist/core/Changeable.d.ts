export default class Changeable {
    increase?: number;
    decrease?: number;
    set?: number;
    constructor(increase?: number, decrease?: number, set?: number);
    static build({ increase, decrease, set }: Changeable): Changeable;
    modify(value: number): number;
    getJSON(): Changeable;
}
