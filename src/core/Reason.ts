/**
 * Описывает ошибку валидации
 */
export default class Reason {
  /**
   * Код ошибки
   */
  code: string;
  /**
   * Краткое описание ошибки
   */
  label?: string;

  constructor(code: string, label?: string, anyData?: string) {
    this.code = code;
    this.label = label;
    this._rejectOption = anyData;
  }

  /**
   * id опции, которая вернула ошибку
   */
  private _rejectOption?: string;

  get rejectOption(): string | undefined {
    return this._rejectOption;
  }

  set rejectOption(value: string | undefined) {
    this._rejectOption = value;
  }
}
