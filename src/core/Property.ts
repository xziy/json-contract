/**
 * Описывает какое-то свойство класса T
 */
export default interface Property<T> {
  /**
   * Название одного из свойств класса T
   */
  property: keyof T;
  /**
   * Значение данного свойства
   */
  value: T[keyof T];
}
