import Option from "./Option";
import Reason from "./Reason";

/**
 * Класс, описывающий строковое значение для ввода.
 */
export default class OptionString extends Option {
  /**
   * Минимальная длина строки
   */
  minLength?: number;
  /**
   * Максимальная длина строки
   */
  maxLength?: number;
  /**
   * RegExp для проверки значения
   */
  regex?: string;

  constructor(id: string, type: string, label: string);
  constructor(id: string, type: string, label: string, isRequired: boolean);
  constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean);
  constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string);
  constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string, minLength?: number, maxLength?: number, regex?: string);
  /**
   * @param id - id
   * @param type - тип
   * @param label - подпись
   * @param isRequired - обязательно ли
   * @param isHidden - скрывать ли опцию
   * @param description - описание
   * @param anyData - любые данные
   * @param minLength - минимальная длина
   * @param maxLength - максимальная длина
   * @param regex - RegExp для проверки
   */
  constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string, minLength?: number, maxLength?: number, regex?: string) {
    super(id, type, label, isRequired, isHidden, description, anyData);
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.regex = regex;
  }

  /**
   * Создаёт экземпляр OptionString из JSON. Если передать объект, то будет создана его копия.
   * @param id - id
   * @param type - тип
   * @param label - подпись
   * @param isRequired - обязательно ли
   * @param isHidden - скрывать ли опцию
   * @param description - описание
   * @param anyData - любые данные
   * @param minLength - минимальная длина
   * @param maxLength - максимальная длина
   * @param regex - RegExp для проверки
   */
  public static buildOption({anyData, description, id, isRequired, isHidden, label, maxLength, minLength, regex, type}: OptionString): OptionString {
    return new OptionString(id, type, label, isRequired, isHidden, description, anyData, minLength, maxLength, regex);
  }

  /**
   * Проверяет валидность переданного значения. А именно, переменная должна быть строкой, не меньше минимальной длины,
   * не больше максимальной и соответствовать regex. Так же производится проверка, поставляемая родительским классом.
   * @param value - значение для проверки
   */
  public validate(value: any): boolean {
    if (value) {
      if (typeof value !== 'string')
        return false;
      const len = value.length;
      if (this.minLength)
        if (len < this.minLength)
          return false;
      if (this.maxLength)
        if (len > this.maxLength)
          return false;
      if (this.regex)
        if (!value.match(this.regex))
          return false;
    }
    return super.validate(value);
  }

  /**
   * Возвращает причину не валидности значения или undefined если значение валидное
   * @param value - значение
   * @return Возможные значения
   * - [[Reason]] {
   *   code: 'IT',
   *   label: 'incorrect type'
   * }
   * - [[Reason]] {
   *   code: 'STML',
   *   label: 'smaller than min length'
   * }
   * - [[Reason]] {
   *   code: 'LTML',
   *   label: 'larger than max length'
   * }
   * - [[Reason]] {
   *   code: 'RME',
   *   label: 'regex matching error'
   * }
   * - причины отказа родительского класса
   */
  public getRejectReason(value: any): Reason | undefined {
    if (value) {
      if (typeof value !== 'string')
        return new Reason('IT', 'incorrect type');
      const len = value.length;
      if (this.minLength)
        if (len < this.minLength)
          return new Reason('STML', 'smaller than min length');
      if (this.maxLength)
        if (len > this.maxLength)
          return new Reason('LTML', 'larger than max length');
      if (this.regex)
        if (!value.match(this.regex))
          return new Reason('RME', 'regex matching error');
    }
    return super.getRejectReason(value);
  }
}
