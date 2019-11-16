export default interface Property<T> {
    property: keyof T;
    value: T[keyof T];
}
