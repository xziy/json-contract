/**
 * Описывает действие изменения количественной переменной
 */
export default class Changeable {
  /**
   * Увеличить переменную на указанное значение
   */
  increase?: number;
  /**
   * Уменьшить переменную на указанное значение
   */
  decrease?: number;
  /**
   * Установить переменную на указанное значение
   */
  set?: number;

  /**
   * @param increase - увеличить
   * @param decrease - уменьшить
   * @param set - установить
   */
  constructor(increase?: number, decrease?: number, set?: number) {
    this.increase = increase;
    this.decrease = decrease;
    this.set = set;
  }

  /**
   * Если передан JSON, создаёт новый екзепляр класса, если передан другой екземпляр класса, клонирует его
   * @param increase - увеличить
   * @param decrease - уменьшить
   * @param set - установить
   */
  public static build({increase, decrease, set}: Changeable): Changeable {
    return new Changeable(increase, decrease, set);
  }

  /**
   * Увеличивает, потом уменьшает и  потом устанавливает переданное значение на указанные в екземпляре значения
   * @param value - значение для изменения
   */
  public modify(value: number): number {
    if (this.increase)
      value += this.increase;
    if (this.decrease)
      value -= this.decrease;
    if (this.set)
      value = this.set;

    return value;
  }

  /**
   * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]].
   */
  public getJSON(): Changeable {
    return JSON.parse(JSON.stringify(this));
  }
}
