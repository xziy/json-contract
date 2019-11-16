import Option from "./Option";
import Reason from "./Reason";

/**
 * Класс, описывающий численное значение для ввода.
 */
export default class OptionNumber extends Option {
  /**
   * Минимальное значение
   */
  min?: number;
  /**
   * Максимальное значение
   */
  max?: number;
  /**
   * RegExp для провеки значения
   */
  regex?: string;

  /**
   * @param id - id
   * @param type - тип
   * @param label - подпись
   * @param isRequired - обязательно ли
   * @param isHidden - скрывать ли опцию
   * @param description - описание
   * @param anyData - любые данные
   * @param min - минимальное значение
   * @param max - максимальное значение
   * @param regex - RegExp для проверки
   */
  constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string, min?: number, max?: number, regex?: string) {
    super(id, type, label, isRequired, isHidden, description, anyData);
    this.min = min;
    this.max = max;
    this.regex = regex;
  }

  /**
   * Создаёт екземпляр OptionNumber из JSON. Если передать объект, то будет создана его копия.
   * @param id - id
   * @param type - тип
   * @param label - подпись
   * @param isRequired - обязательно ли
   * @param isHidden - скрывать ли опцию
   * @param description - описание
   * @param anyData - любые данные
   * @param min - минимальное значение
   * @param max - максимальное значение
   * @param regex - RegExp для проверки
   */
  public static buildOption({anyData, description, id, isRequired, isHidden, label, max, min, regex, type}: OptionNumber): OptionNumber {
    return new OptionNumber(id, type, label, isRequired, isHidden, description, anyData, min, max, regex);
  }

  /**
   * Проверяет валидность переданого значения. А именно, переменная должна быть числом, не меньше минимального значения,
   * не больше максимамльного и соответсвовать regex. Так же произвдится проверка, поставляемая родительским классом.
   * @param value - значение для проверки
   */
  public validate(value: any): boolean {
    if (value) {
      if (typeof value !== 'number')
        return false;
      if (this.min)
        if (value < this.min)
          return false;
      if (this.max)
        if (value > this.max)
          return false;
      if (this.regex)
        if (!value.toString().match(this.regex))
          return false;
    }
    return super.validate(value);
  }

  /**
   * Возращает причину не валидности значения или undefined если значение валидное
   * @param value - значение
   * @return Возможные значения
   * - [[Reason]] {
   *   code: 'IT',
   *   label: 'incorrect type'
   * }
   * - [[Reason]] {
   *   code: 'STM',
   *   label: 'smaller than min'
   * }
   * - [[Reason]] {
   *   code: 'LTM',
   *   label: 'larger than max'
   * }
   * - [[Reason]] {
   *   code: 'RME',
   *   label: 'regex matching error'
   * }
   * - причины отказа родительского класса
   */
  public getRejectReason(value: any): Reason | undefined {
    if (value) {
      if (typeof value !== 'number')
        return new Reason('IT', 'incorrect type');
      if (this.min)
        if (value < this.min)
          return new Reason('STM', 'smaller than min');
      if (this.max)
        if (value > this.max)
          return new Reason('LTM', 'larger than max');
      if (this.regex)
        if (!value.toString().match(this.regex))
          return new Reason('RME', 'regex matching error');
    }
    return super.getRejectReason(value);
  }
}
