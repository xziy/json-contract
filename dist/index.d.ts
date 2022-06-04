declare module "core/Reason" {
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
        constructor(code: string, label?: string, anyData?: string);
        /**
         * id опции, которая вернула ошибку
         */
        private _rejectOption?;
        get rejectOption(): string | undefined;
        set rejectOption(value: string | undefined);
    }
}
declare module "core/OptionString" {
    import Option from "core/Option";
    import Reason from "core/Reason";
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
        /**
         * External handler
         */
        handler?: any;
        constructor(id: string, type: string, label: string);
        constructor(id: string, type: string, label: string, isRequired: boolean);
        constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean);
        constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string);
        constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string, minLength?: number, maxLength?: number, regex?: string);
        constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string, minLength?: number, maxLength?: number, regex?: string, handler?: any);
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
         * @param handler - внешний обработчик
         */
        static buildOption({ anyData, description, id, isRequired, isHidden, label, maxLength, minLength, regex, type, handler }: OptionString): OptionString;
        /**
         * Проверяет валидность переданного значения. А именно, переменная должна быть строкой, не меньше минимальной длины,
         * не больше максимальной и соответствовать regex. Так же производится проверка, поставляемая родительским классом.
         * @param value - значение для проверки
         */
        validate(value: any): boolean;
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
        getRejectReason(value: any): Reason | undefined;
    }
}
declare module "core/OptionNumber" {
    import Option from "core/Option";
    import Reason from "core/Reason";
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
         * RegExp для проверки значения
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
         * @param handler - Внешний обработчик
         */
        constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string, min?: number, max?: number, regex?: string, handler?: any);
        /**
         * Создаёт экземпляр OptionNumber из JSON. Если передать объект, то будет создана его копия.
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
         * @param handler - внешний обработчик
         */
        static buildOption({ anyData, description, id, isRequired, isHidden, label, max, min, regex, type, handler }: OptionNumber): OptionNumber;
        /**
         * Проверяет валидность переданного значения. А именно, переменная должна быть числом, не меньше минимального значения,
         * не больше максимального и соответствовать regex. Так же производится проверка, поставляемая родительским классом.
         * @param value - значение для проверки
         */
        validate(value: any): boolean;
        /**
         * Возвращает причину не валидности значения или undefined если значение валидное
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
        getRejectReason(value: any): Reason | undefined;
    }
}
declare module "core/Form" {
    import Option from "core/Option";
    import Document from "core/Document";
    import Reason from "core/Reason";
    /**
     * Содержит в [[Option]][] и методы для обработки [[Option]] в зависимости от значения, что для него записано
     */
    export default class Form implements FormBuilder {
        /**
         * Массив [[Option]]. По сути это набор полей для ввода, которые в этом классе проверяются и при необходимости иным образом
         * обрабатываются
         */
        options: Option[];
        constructor(options?: Option[]);
        /**
         * Создаёт документ из JSON. Используется только при клонировании. Как и другие методы build делает глубокое создание моделей
         * @param options
         */
        protected static build({ options }: Form): Form;
        /**
         * Проверяет, что переданный документ содержит валиданые значения для options этого экземпляра
         * @param document - Документ, подлежащий проверке
         */
        validate(document: Document): boolean;
        /**
         * Возвращает причину не валидности документа или undefined если документ валидный.
         * @param document
         */
        getRejectReason(document: Document): Reason | undefined;
        /**
         * Рассчитывает цену, время поставки (ETA), а так же редактирует productContractModified переданного [[Document]] в соответствии
         * с выбранными [[OptionsSelect]]. Иными словами, этот метод активирует все [[Action]] для выбранных [[SelectItem]].
         * @param document - документ, который нужно обработать
         * @param contract - [[ProductContract]] который использовать для сброса. Если не передан, то используется productContract
         * переданного документа
         */
        processing(document: Document, contract?: ProductContract): void;
        /**
         * Создаёт глубокую копию текущего экземпляра.
         */
        clone(): Form;
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]].
         */
        getJSON(): any;
        /**
         * Возвращает все [[SelectItem]], которые в данный момент выбраны для текущих options в переданном документе.
         * @param document - документ
         */
        private getModifiers;
    }
    /**
     * Интерфейс для создания [[Form]]
     */
    export interface FormBuilder {
        options: Option[];
    }
    import ProductContract from "core/ProductContract";
}
declare module "core/Changeable" {
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
        constructor(increase?: number, decrease?: number, set?: number);
        /**
         * Если передан JSON, создаёт новый экземпляр класса, если передан другой экземпляр класса, клонирует его
         * @param increase - увеличить
         * @param decrease - уменьшить
         * @param set - установить
         */
        static build({ increase, decrease, set }: Changeable): Changeable;
        /**
         * Увеличивает, потом уменьшает и  потом устанавливает переданное значение на указанные в экземпляре значения
         * @param value - значение для изменения
         */
        modify(value: number): number;
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]].
         */
        getJSON(): Changeable;
    }
}
declare module "core/Property" {
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
}
declare module "core/Action" {
    import Changeable from "core/Changeable";
    import ProductContract from "core/ProductContract";
    import Property from "core/Property";
    /**
     * Описывает действия. Может менять поля ProductContract, стоимость, время поставки (ETA) и свойство видимости Option
     */
    export default class Action implements ActionBuilder<ProductContract> {
        /**
         * Изменение цены. Может увеличить, уменьшить или установить конкретную цену, подробнее см. [[Changeable]]
         */
        modifyPrice?: Changeable;
        /**
         * Изменение времени доставки. Аналогично [[modifyPrice]]
         */
        modifyDeliveryTime?: Changeable;
        /**
         * Массив строк, каждая из которых является id [[Option]] некоторого обрабатываемого [[ProductContract]]. При выполнении
         * их параметр isHidden будет изменён на true
         */
        hideOptionsById?: string[];
        /**
         * Аналогично [[hideOptionsById]], но меняет isHidden на false
         */
        showOptionsById?: string[];
        /**
         * Массив пар <ключ>-<новое значение>, которые будут изменены в переданном [[ProductContract]]
         */
        changeProperties?: Property<ProductContract>[];
        /**
         * Массив пар <ключ>-<значение>, которые будут добавлены в переданный [[ProductContract]]
         */
        setCustomProperties?: Property<object>[];
        /**
         * @param setDiscountInPercentage - значение скидки
         * @param modifyPrice - изменение цены
         * @param modifyDeliveryTime - изменение времени доставки
         * @param hideOptionById - массив строк, которые не будут больше показываться
         * @param showOptionsById - массив строк, которые следует показать
         * @param changeProperties - массив пар ключ-значение, которые будут заменены в [[ProductContract]]
         * @param setCustomProperties - массив пар ключ-значение, которые будут добавлены в [[ProductContract]]
         */
        constructor(setDiscountInPercentage?: number, modifyPrice?: Changeable, modifyDeliveryTime?: Changeable, hideOptionById?: string[], showOptionsById?: string[], changeProperties?: Property<ProductContract>[], setCustomProperties?: Property<any>[]);
        /**
         * Добавить скидку. Это поле содержит некоторое значение от 0 до 100
         */
        private _setDiscountInPercentage?;
        get setDiscountInPercentage(): number | undefined;
        /**
         * Проверяет, что новое значение больше 0 и меньше 100
         * @param value - новое значение
         */
        set setDiscountInPercentage(value: number | undefined);
        /**
         * @param setDiscountInPercentage - значение скидки
         * @param modifyPrice - изменение цены
         * @param modifyDeliveryTime - изменение времени доставки
         * @param hideOptionById - массив строк, которые не будут больше показываться
         * @param showOptionsById - массив строк, которые следует показать
         * @param changeProperties - массив пар ключ-значение, которые будут заменены в [[ProductContract]]
         * @param setCustomProperties - массив пар ключ-значение, которые будут добавлены в [[ProductContract]]
         */
        static build({ setDiscountInPercentage, hideOptionsById, modifyDeliveryTime, modifyPrice, showOptionsById, changeProperties, setCustomProperties }: ActionBuilder<ProductContract>): Action;
        /**
         * Активация экземпляра. Если поле не undefined, то выполняет изменение, которое в нём указано.
         * - Если указан [[modifyPrice]], происходит изменение цены.
         * - Если указан [[modifyDeliveryTime]], происходит изменение времени доставки
         * - Если указан [[_setDiscountInPercentage]], цена, после возможного изменения выше, уменьшается на указанный процент
         * - Если указан [[showOptionsById]], поле isHidden всех [[Option]], id которых указан в массиве, станет false
         * - Если указан [[hideOptionsById]], поле isHidden всех [[Option]], id которых указан в массиве, станет true
         * - Если указан [[changeProperties]], будут изменены указанные в нём поля на новые значения
         * - Если указан [[setCustomProperties]], будут добавлены указанные в нём поля
         * @param contract - контракт для изменения
         */
        activate(contract: ProductContract): void;
    }
    /**
     * Описывает поля, которые могут быть переданы в метод build
     */
    export interface ActionBuilder<T> {
        setDiscountInPercentage?: number;
        modifyPrice?: Changeable;
        modifyDeliveryTime?: Changeable;
        hideOptionsById?: string[];
        showOptionsById?: string[];
        changeProperties?: {
            [x: string]: any;
        };
        setCustomProperties?: {
            [x: string]: any;
        };
    }
}
declare module "core/SelectItem" {
    import Form, { FormBuilder } from "core/Form";
    import Action, { ActionBuilder } from "core/Action";
    import ProductContract from "core/ProductContract";
    /**
     * Описывает строку выбора в [[OptionSelect]]. Этот класс может иметь дочерние [[Option]][] и выполнять действия [[Action]] над
     * документом, с которым в данный момент происходит работа.
     */
    export default class SelectItem {
        /**
         * id экземпляра
         */
        id: string;
        /**
         * Строка для отображения
         */
        label: string;
        /**
         * Описание
         */
        description?: string;
        /**
         * Любые прочие данные
         */
        anyData?: string;
        /**
         * Действия, которые следует выполнить при выборе текущего экземпляра
         */
        action: Action;
        /**
         * Form, хранящий [[Option]][], которые следует отображать при выборе текущего экземпляра
         */
        form: Form;
        handler: any;
        /**
         * @param id - id
         * @param label - подпись
         * @param form - [[Form]], хранящий необходимые [[Option]][]
         * @param action - [[Action]], который будет выполнен при выборе этого экземпляра
         * @param description - описание
         * @param anyData - другие данные
         * @param handler - внейшний обработчик
         */
        constructor(id: string, label: string, form: Form, action: Action, description?: string, anyData?: string, handler?: any);
        /**
         * Создаёт SelectItem и вложенные в него [[Form]] и [[Action]].
         * @param id - id
         * @param label - метка
         * @param description - описание
         * @param options - опции для отображения (см. [[Form]])
         * @param changeProperties - изменение свойств (см. [[Action]])
         * @param hideOptionsById - массив id опций, которые нужно скрыть (см. [[Action]])
         * @param modifyDeliveryTime - изменение времени доставки (см. [[Action]])
         * @param modifyPrice - изменение цены (см. [[Action]])
         * @param setDiscountInPercentage - установка скидки (см. [[Action]])
         * @param showOptionsById - массив id опций, которые нужно показать (см. [[Action]])
         * @param setCustomProperties - изменение свойств (см. [[Action]])
         * @param anyData - другие данные
         * @param handler - внейшний обработчик
         */
        static buildItem({ id, label, description, options, changeProperties, hideOptionsById, modifyDeliveryTime, modifyPrice, setDiscountInPercentage, showOptionsById, setCustomProperties, anyData, handler }: SelectItemBuilder): SelectItem;
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]].
         */
        getJSON(): SelectItemBuilder;
    }
    /**
     * Интерфейс для создания [[SelectItem]] с помощью метода build
     */
    export interface SelectItemBuilder extends FormBuilder, ActionBuilder<ProductContract> {
        id: string;
        label: string;
        description?: string;
        anyData?: string;
        handler?: any;
    }
}
declare module "core/OptionSelect" {
    import Option from "core/Option";
    import SelectItem, { SelectItemBuilder } from "core/SelectItem";
    import Reason from "core/Reason";
    import Document from "core/Document";
    /**
     * Класс, описывающий поле выбора из нескольких вариантов
     */
    export default class OptionSelect extends Option {
        /**
         * Массив экземпляров, содержащие строки, из которых можно выбрать одну как значение. Тут же хранятся и действия ([[Action]]),
         * которые будут выполнены при выборе конкретного значения и новые [[Option]][], которые будут показаны при выборе конкретного
         * значения
         */
        options: SelectItem[];
        /**
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param options - массив [[SelectItem]] которые содержат варианты выбора.
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         * @param handler - внешний обработчик
         */
        constructor(id: string, type: string, label: string, options: SelectItem[], isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string, handler?: any);
        /**
         * Создаёт экземпляр OptionSelect из JSON. Если передать объект, то будет произведена попытка создать копию.
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param options - массив SelectItem которые содержат варианты выбора.
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         * @param handler - внешний обработчик
         */
        static buildOption({ anyData, description, id, isRequired, isHidden, label, options, type, handler }: OptionSelectBuilder): OptionSelect;
        /**
         * Проверка валидности значения. Проверяет, что выбранное значение есть в массиве допустимых значений, а так же
         * проверяет вложенные значения этого выбора, если был передан документ. У некоторых [[SelectItem]] могут быть вложены
         * свои [[Option]][], которые следует проверить. Тут происходит проверка того, что для опций выбранного значения документ
         * так же является валидным
         * @param value - значение для проверки
         * @param document - документ, в котором хранятся вложенные значения
         */
        validate(value: any, document?: Document): boolean;
        /**
         * Возвращает причину не валидности значения или undefined если значение валидное
         * @param value - значение
         * @param document
         * @return Возможные значения
         * - [[Reason]] {
         *   code: 'NC',
         *   label: 'not checked'
         * }
         * - причины отказа дочерних Option
         * - причины отказа родительского класса
         */
        getRejectReason(value: any, document?: Document): Reason | undefined;
        /**
         * Возвращает [[SelectItem]] для заданного значения
         * @param value - значение
         */
        getSelected(value: any): SelectItem | undefined;
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]].
         */
        getJSON(): Option;
    }
    /**
     * Интерфейс для создания [[OptionSelect]]
     */
    export interface OptionSelectBuilder extends Option {
        options: SelectItemBuilder[];
    }
}
declare module "core/Option" {
    import Reason from "core/Reason";
    /**
     * Класс, описывающий значение для ввода. По сути является описанием некоторого поля ввода и параметров его валидации.
     */
    export default class Option {
        /**
         * id экземпляра. Указывается в [[Value.id]]
         */
        id: string;
        /**
         * Тип поля. Доступны варианты
         * - string - строка
         * - number - цифра
         * - select - выбор из нескольких
         * Подробности смотреть в классах наследниках
         */
        type: string;
        /**
         * Подпись к полю ввода
         */
        label: string;
        /**
         * Указывает обязательно ли поле к заполнению
         */
        isRequired: boolean;
        /**
         * Указывает отображать ли поле. Если true, то поле не отображается
         */
        isHidden: boolean;
        /**
         * Описание к полю ввода
         */
        description?: string;
        /**
         * Любые прочие данные
         */
        anyData?: string;
        /**
         * Обработчик
         */
        handler?: any;
        constructor(id: string, type: string, label: string);
        constructor(id: string, type: string, label: string, isRequired: boolean);
        constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean);
        constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string);
        constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string);
        constructor(id: string, type: string, label: string, isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string, handler?: any);
        /**
         * Создаёт экземпляр [[Option]] из JSON. Если передать объект, то будет создана его копия.
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         */
        static buildOption({ id, type, label, isRequired, isHidden, description, anyData, handler }: Option): Option;
        /**
         * Создаёт экземпляр того класса, тип которого указан в type в параметре data.
         * Например, если data.type = 'number', то будет создан и отдан [[OptionNumber]].
         * @param data - JSON объект для создания нового [[Option]] или экземпляр [[Option]] для клонирования
         */
        static getOption<T extends Option>(data: T): Option;
        /**
         * Базовая проверка значения. Если значение не спрятано ([[isHidden]]=false) и оно является обязательны([[isRequired]]=true)
         * и значение передано пустым, то валидация не будет пройдена. В ином случае валидация пройдена.
         * @param value - значение для проверки
         */
        validate(value: any): boolean;
        /**
         * Возвращает причину не валидности значения или undefined если значение валидное
         * @param value - значение для проверки
         * @return Возможные значения
         * - Reason {
         *   code: 'IR',
         *   label: 'is required'
         * }
         */
        getRejectReason(value: any): Reason | undefined;
        /**
         * Возвращает текущий экземпляр как JSON. Метод противоположный [[build]].
         */
        getJSON(): Option;
    }
    /**
     * Возможные типы [[Option]]. В данный момент доступны
     * - string
     * - number
     * - select
     */
    export enum OptionTypes {
        STRING = "string",
        NUMBER = "number",
        SELECT = "select"
    }
}
declare module "lib/util" {
    import Property from "core/Property";
    /**
     * Принимает объект, превращает его в Property[]. То есть каждый ключ записывает в [[Property.property]], а возле него
     * его пару в поле [[Property.value]]
     * @param args - объект для преобразования
     */
    export function objectToProperties<T>(args: T): Property<T>[];
}
declare module "core/ProductContract" {
    import Option from "core/Option";
    import Form from "core/Form";
    import Property from "core/Property";
    /**
     * Класс, являющийся шаблоном для заполнения. Хранит в себе общие данные для будущего документа. В документе хранится два
     * экземпляра ProductContract, один для хранения начальных настроек, второй для изменения с помощью [[Action]]
     */
    export default class ProductContract extends Form implements ProductContractBuild {
        /**
         * Название
         */
        name: string;
        /**
         * Локализация
         */
        locale: string;
        /**
         * Описание
         */
        description: string;
        /**
         * UUID
         */
        contractId: string;
        /**
         * Минимальная версия модуля обработки контракта
         */
        specificationMinVersion: number;
        /**
         * Префикс
         */
        prefix: string;
        /**
         *
         */
        badge: string;
        /**
         * Цена контракта
         */
        price: number;
        /**
         * Валюта
         */
        currency: string;
        /**
         * Время начала работы контракта
         */
        start: number;
        /**
         * Время завершения работы контракта
         */
        finish: number;
        /**
         *
         */
        revision: number;
        /**
         * Время доставки
         */
        deliveryTime: number;
        /**
         * Хеш контракта
         */
        controlHash: string;
        /**
         * Любые другие поля для внешних модулей
         */
        [x: string]: any;
        /**
         * @param options - [[Option]][], которые хранит этот контракт
         * @param name - название
         * @param locale - локализация
         * @param description - описание
         * @param specificationMinVersion - Минимальная версия модуля обработки контракта
         * @param prefix - префикс
         * @param badge -
         * @param price - цена
         * @param currency - валюта
         * @param start - время начала работы
         * @param finish - время завершения работы
         * @param revision -
         * @param deliveryTime - время поставки (ETA - minutes)
         * @param args - иные параметры
         */
        constructor(options: Option[], name: string, locale: string, description: string, specificationMinVersion: number, prefix: string, badge: string, price: number, currency: string, start: number, finish: number, revision: number, deliveryTime: number, args?: Property<ProductContract>[]);
        /**
         * Создаёт новый ProductContract из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
         * При передаче как параметра экземпляра ProductContract будет осуществлена попытка его скопировать, однако для таких целей
         * лучше использовать метод [[clone]]. Данный метод выступает как парсер из JSON в объект, а не как клонирование
         *
         * @param options - [[Option]][], которые хранит этот контракт
         * @param name - название
         * @param locale - локализация
         * @param description - описание
         * @param specificationMinVersion - Минимальная версия модуля обработки контракта
         * @param documentsPrefix - префикс
         * @param badge -
         * @param price - цена
         * @param currency - валюта
         * @param start - время начала работы
         * @param finish - время завершения работы
         * @param revision -
         * @param deliveryTime - время поставки (ETA - minutes)
         * @param args - иные параметры
         */
        static build({ locale, name, options, badge, deliveryTime, currency, description, prefix, finish, price, revision, specificationMinVersion, start, ...args }: ProductContractBuild): ProductContract;
        /**
         * Создаёт глубокую копию текущего экземпляра
         */
        clone(): ProductContract;
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]]
         */
        getJSON(): any;
    }
    /**
     * Содержит поля [[ProductContract]], который могут быть переданы при его создании с помощью метода build
     */
    export interface ProductContractBuild extends ProductContractInput, Form {
        locale: string;
        specificationMinVersion: number;
        badge: string;
        revision: number;
    }
    /**
     * Интерфейс, содержащий поля, которые могут быть изменены с помощью [[Action]] в [[ProductContract]]
     */
    export interface ProductContractInput {
        name: string;
        description: string;
        prefix: string;
        price: number;
        currency: string;
        start: number;
        finish: number;
        deliveryTime: number;
    }
}
declare module "core/Document" {
    import ProductContract from "core/ProductContract";
    import Reason from "core/Reason";
    import Property from "core/Property";
    /**
     * Основной класс. Документ хранит пары id-значение для некоторого [[ProductContract]], сам [[ProductContract]] и копию
     * [[ProductContract]], которая может меняться [[Action]]. Эти [[Action]] могут быть активированы [[OptionSelect]] посредством выбора юзера
     * которого из вариантов. Активация [[Action]] происходит в момент записи новой пары OptionSelectId-значение. Документ по
     * сути своей является наполнением для [[ProductContract]]
     */
    export default class Document implements DocumentBuild {
        /**
         * [[ProductContract]] шаблон, используется при сбросе для расчёта стоимости, времени доставки и прочих изменений
         */
        productContract: ProductContract;
        /**
         * Хеш документа
         */
        controlHash: string;
        /**
         * Данные ввода. Хранят пары <id опции>:<значение опции>
         */
        values: Value[];
        /**
         * Just uuid
         */
        documentId: string;
        /**
         * [[ProductContact]] который может быть модифицирован с помощью [[Action]]. [[Value]] нём могут меняться почти любые
         * поля, при расчёте именно он хранит в себе результат работы функции процессинга документа
         */
        productContractModified: ProductContract;
        /**
         * Любые другие поля для внешних модулей
         */
        [x: string]: any;
        constructor(productContract: ProductContract);
        constructor(productContract: ProductContract, values?: Value[]);
        constructor(productContract: ProductContract, values?: Value[], args?: Property<Document>[]);
        /**
         * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору. Обработка происходит рекурсивно, то есть
         * создаются новые [[Value]] и [[ProductContract]]
         *
         * @param productContract - [[ProductContract]], может быть JSON или экземпляр класса. Если это JSON, то будет создан новый экземпляр [[ProductContract]] на его основе,
         * если это экземпляр, то он будет скопирован, опять же, рекурсивно
         * @param values - Массив пар id-значение. При создании не проверяется, для проверки используйте метод [[validate]]
         * @param args - Дополнительные поля (для внешних модулей)
         * @return new [[Document]]
         */
        static build({ productContract, values, ...args }: DocumentBuild): Document;
        /**
         * Проверяет, что все [[Value]] валидны для их [[Option]] (проверяет валидность каждой [[Option]])
         */
        check(): boolean;
        /**
         * Возвращает первую причину отказа в успешности проверки или undefined если проверка успешна
         */
        getRejectReason(): Reason | undefined;
        /**
         * Запись новой пары <id опции>:<значение> или перезапись старой. Если значение не валидно происходит отказ, иначе
         * запись и выполнение действий, если это [[OptionsSelect]]
         *
         * @param id - [[Option]] id
         * @param value - Новое значение ввода
         */
        addOption(id: string, value: any): boolean;
        /**
         * Возвращает значение по id
         *
         * @param id - [[Option]] id
         */
        getValue(id: string): any;
        /**
         * Рассчитывает цену, время поставки (ETA), а так же редактирует [[productContractModified]] поле в соответствии с выбранными [[OptionsSelect]].
         * Иными словами, этот метод активирует все [[Action]] для выбранных [[OptionsSelect]]
         *
         * @param contract - [[ProductContract]] который использовать для сброса. Если не передан, то используется [[productContract]] поле
         * @return Успешность расчёта
         */
        processing(contract?: ProductContract): boolean;
        /**
         * "Осушает" документ. Создаёт объект, который содержит только поля, необходимые для воссоздания его в другом модуле.
         * поле [[productContract]] заменяется на его [[ProductContract.contractId]]
         */
        dry(): DocumentDry;
        private findOptionById;
        private getOptionsOfSelectItem;
    }
    /**
     * Интерфейс для создания документа, содержит только необходимые поля для его создания из JSON
     */
    export interface DocumentBuild {
        productContract: ProductContract;
        values: Value[];
    }
    /**
     * Содержит пары id-значение
     */
    export class Value {
        /**
         * Option id
         */
        id: string;
        /**
         * Значение [[Option]], id которой указан
         */
        value: any;
        /**
         * @param id - option id
         * @param value - option value
         */
        constructor(id: string, value: any);
    }
    /**
     * Описывает "осушенный" документ, в котором вместо productContract id этого контракта
     */
    export interface DocumentDry {
        productContract: string;
        controlHash: string;
        values: Value[];
        documentId: string;
        [x: string]: any;
    }
}
declare module "discount/ProductContractD" {
    import ProductContract, { ProductContractBuild } from "core/ProductContract";
    import DiscountContract from "discount/DiscountContract";
    import Option from "core/Option";
    import Property from "core/Property";
    /**
     * Описывает контракт с скидками
     */
    export default class ProductContractD extends ProductContract implements ProductContractDBuild {
        /**
         * Локальные скидки, которые может применить этот контракт. При применении этих скидок проверка [[DiscountContract.selects]]
         * игнорируется, проверяются только условия [[DiscountContract.conditions]].
         */
        discounts: DiscountContract[];
        /**
         * Разрешение на применение скидок
         */
        discountAllowed: boolean;
        /**
         * Разрешение на суммирование скидок, то есть применение более одной скидки одновременно
         */
        discountCumulativeAllowed: boolean;
        /**
         * Если [[discountAllowed]] не передан, устанавливает его в true.
         * Если [[discountCumulativeAllowed]] не передан, устанавливает его в true.
         * @param options - [[Option]][], которые хранит этот контракт
         * @param name - название
         * @param locale - локализация
         * @param description - описание
         * @param specificationMinVersion - Минимальная версия модуля обработки контракта
         * @param prefix - префикс
         * @param badge -
         * @param price - цена
         * @param currency - валюта
         * @param start - время начала работы
         * @param finish - время завершения работы
         * @param discountAllowed - разрешение на применение скидок
         * @param discountCumulativeAllowed - разрешение на суммирование скидок
         * @param revision -
         * @param deliveryTime - время поставки (ETA - minutes)
         * @param discounts -
         * @param args - иные параметры
         */
        constructor(options: Option[], name: string, locale: string, description: string, specificationMinVersion: number, prefix: string, badge: string, price: number, currency: string, start: number, finish: number, discountAllowed: boolean, discountCumulativeAllowed: boolean, revision: number, deliveryTime: number, discounts: DiscountContract[], args?: Property<ProductContract>[]);
        /**
         * Создаёт новый ProductContractD из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
         * При передаче как параметра екземпляра ProductContractD будет осущствлена попытка его скопировать, однако для таких целей
         * лучше использовать метод [[clone]]. Данный метод выступает как парсер из JSON в объект, а не как клонирование
         * @param options - [[Option]][], которые хранит этот контракт
         * @param name - название
         * @param locale - локализация
         * @param description - описание
         * @param specificationMinVersion - Минимальная версия модуля обработки контракта
         * @param prefix - префикс
         * @param badge -
         * @param price - цена
         * @param currency - валюта
         * @param start - время начала работы
         * @param finish - время завершения работы
         * @param discountAllowed - разрешение на применение скидок
         * @param discountCumulativeAllowed - разрешение на суммирование скидок
         * @param revision -
         * @param deliveryTime - время поставки (ETA - minutes)
         * @param discounts -
         * @param args - иные параметры
         */
        static build({ locale, name, options, discountCumulativeAllowed, badge, deliveryTime, currency, description, discountAllowed, prefix, finish, price, revision, specificationMinVersion, start, discounts, ...args }: ProductContractDBuild): ProductContractD;
        /**
         * Создаёт глубокую копию текущего екземпляра
         */
        clone(): ProductContractD;
        /**
         *  Создаёт JSON из текущего экземпляра. Метод противоположный [[build]]
         */
        getJSON(): any;
    }
    /**
     * Содержит поля [[ProductContractD]], который могут быть переданы при его создании с помощью метода build
     */
    export interface ProductContractDBuild extends ProductContractBuild {
        discounts: DiscountContract[];
        discountAllowed: boolean;
        discountCumulativeAllowed: boolean;
    }
}
declare module "discount/Condition" {
    import Property from "core/Property";
    /**
     * Описывает шаблон класса для проверки данных. Первый параметр T это класс наследник, который реализует данный класс.
     * Второй параметр U это класс, проверка в котором будет совершаться проверка.
     */
    export default class Condition<T extends Condition<T, U>, U> {
        /**
         * Массив екземпляров класса реализации текущего, во время проверки к результату проверки всех будет применяться логическое ИЛИ
         * (если хотя бы один елемент в массиве во время проверки отдал положительный результат, то общий результат тоже считается
         * положительным)
         */
        OR?: T[];
        /**
         * Массив екземпляров класса реализации текущего, во время проверки к результату проверки всех будет применяться логическое И
         * (если хотя бы один елемент в массиве во время проверки отдал отрицательный результат, то общий результат тоже считается
         * отрицательный)
         */
        AND?: T[];
        /**
         * Массив полей для проверки. Тут хранятся пары имя-поля-для-проверки : значение-которому-оно-должно-равняться.
         * Если хотя бы одно из условий тут не выполняется, будет отдан отрицательный результат.
         */
        where?: Property<U>[];
        /**
         *
         * @param where - поля для проверки
         * @param and - другие проверки, к которым применять логическое И
         * @param or - другие проверки, к которым применять логическое ИЛИ
         */
        constructor(where?: Property<U>[], and?: T[], or?: T[]);
        /**
         * Создаёт новый екзеспляр класса наследника, который был передан в эту функцию. Указываются поля для создания класса-
         * наследника и его тип.
         * @param where - поля для проверки
         * @param AND - другие проверки, к которым применять логическое И
         * @param OR - другие проверки, к которым применять логическое ИЛИ
         * @param args - другие поля класса наследника
         * @param type - тип класса наследника. Тут указывается название класса, который следует создать
         */
        protected static buildCondition<T extends Condition<T, U>, U>({ where, OR, AND, ...args }: T, type: new (where?: Property<U>[], and?: T[], or?: T[], ...args: any[]) => T): T;
        /**
         * Проверка что некоторый объект соответствует данному условию.
         * Проверка идёт в таком порядке:
         * - проверяются [[where]] посредством логического И, то есть если хотя бы одно поле в переданом объекте не соответствует
         * указаному в [[Property]], будет отказ
         * - проверяются условия внутри поля [[OR]]. Если хотя бы одно условие было выполнено, то функция вернёт успех
         * - проверяются условия внутри поля [[AND]]. Если хотя бы одно условие не было выполнено, то функция вернёт отказ
         * @param checkObject - объект для проверки
         */
        check(checkObject: U): boolean;
    }
}
declare module "discount/ConditionDocument" {
    import ProductContractD from "discount/ProductContractD";
    import Condition from "discount/Condition";
    /**
     * Описывает условия проверки полей документа, то есть поля [[Document.productContractModified]].
     */
    export default class ConditionDocument extends Condition<ConditionDocument, ProductContractD> {
        /**
         * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору.
         * @param data - JSON c полями, аналогичными родетельскому конструктору.
         */
        static build(data: ConditionDocument): ConditionDocument;
    }
}
declare module "discount/Select" {
    import ProductContractD from "discount/ProductContractD";
    import Condition from "discount/Condition";
    /**
     * Описывает условия проверки полей контракта продукта, для которого заполняется документ, то есть поля [[Document.productContract]].
     */
    export default class Select extends Condition<Select, ProductContractD> {
        /**
         * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору.
         * @param data - JSON c полями, аналогичными родетельскому конструктору.
         */
        static build(data: Select): Select;
    }
}
declare module "discount/DiscountContract" {
    import ProductContractD from "discount/ProductContractD";
    import DocumentD from "discount/DocumentD";
    import ConditionDocument from "discount/ConditionDocument";
    import Select from "discount/Select";
    import Action from "core/Action";
    /**
     * Описывает скидки. Хранит условия применения на начальный и изменённый контракт и действия, которые следует выполнять
     * при выполнении указанных условий
     */
    export default class DiscountContract {
        /**
         * id скидки
         */
        id: string;
        /**
         * Название скидки
         */
        name: string;
        /**
         * Условия применения на конкретный документ. Данное поле содержит данные проверки того, что конкретный документ
         * в поле [[Document.productContractModified]] хранится контракт, подходящих записанным тут условия. Условия в массиве
         * обрабатываются логическим И (то есть, если хотя бы одно из условий в массиве не будет выполнено, то результат работы
         * функции проверки будет отрицательным).
         */
        conditions: ConditionDocument[];
        /**
         * Минимальная версия модуля обработки скидки
         */
        specificationMinVersion: number;
        /**
         * Условия применения на [[ProductContract]]. Данное поле содержит данные проверки того, что [[ProductContract]] документа
         * в поле [[Document.productContract]] хранится контракт, подходящих записанным тут условия. Условия в массиве
         * обрабатываются логическим И (то есть, если хотя бы одно из условий в массиве не будет выполнено, то результат работы
         * функции проверки будет отрицательным).
         */
        selects: Select[];
        /**
         * Действия, которые следует выполнять при применении скилки
         */
        actions: Action[];
        /**
         *
         * @param id - id
         * @param name - название
         * @param condition - условия применения для изначального [[ProductContract]] в поле [[Document.productContract]]
         * @param specificationMinVersion - минимальная версия модуля
         * @param selects - условия применения для модифицированого [[ProductContract]] в поле [[Document.productContractModified]]
         * @param actions - действия скидки
         */
        constructor(id: string, name: string, condition: ConditionDocument[], specificationMinVersion: number, selects: Select[], actions: Action[]);
        /**
         * Создаёт новый DiscountContract из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
         * При передаче как параметра екземпляра DiscountContract будет осущствлена попытка его скопировать, однако для таких целей
         * лучше использовать метод [[clone]]. Данный метод выступает как парсер из JSON в объект, а не как клонирование
         * @param id - id
         * @param name - название
         * @param condition - условия применения для изначального [[ProductContract]] в поле [[Document.productContract]]
         * @param specificationMinVersion - минимальная версия модуля
         * @param selects - условия применения для модифицированого [[ProductContract]] в поле [[Document.productContractModified]]
         * @param actions - действия скидки
         */
        static build({ actions, conditions, id, name, selects, specificationMinVersion }: DiscountContract): DiscountContract;
        /**
         * Проверяет, что текущую скидку можно применить к некоторому [[Document]]. Проверяется [[Document.productContract]] по
         * условиям хранящимся в [[selects]] и [[Document.productContractModified]] по условиям хранящимся в [[conditions]].
         * Если [[selects]] или [[conditions]] несколько, то результат работы это логическое И результата проверки каждой
         * (при отказе любого условия будет общий отказ функции).
         * @param document - документ, к которому проверяетяся можно ли применить скидку
         */
        isActive(document: DocumentD): boolean;
        /**
         * Проверяет, что текущую скидку можно применить к некоторому [[ProductContract]]. Проверяет его поля по условиям, записанными
         * в поле [[selects]].
         * @param contract - контракт, к которому проверяетяся можно ли применить скидку
         */
        canUseForContract(contract: ProductContractD): boolean;
        /**
         * Активация скидки для некоторого документа. Применение происходит непосредственно, игнорируя все проверки. Перед использованием
         * этой функции рекомендуется проверить возможно ли применять скидку на переданный документ.
         * Активация подразумевает под собой выполнение всех действий, записаных в [[actions]].
         * Данная функция не занимается обнулением функции, для добавления скидки в документ рекомендуется использовать
         * [[DocumentD.addDiscount]]
         * @param document - документ, к которому следует применить скидку
         */
        activate(document: DocumentD): void;
    }
}
declare module "discount/DocumentD" {
    import Document, { DocumentBuild, DocumentDry, Value } from "core/Document";
    import DiscountContract from "discount/DiscountContract";
    import ProductContractD from "discount/ProductContractD";
    import Property from "core/Property";
    /**
     * Описывает документ с вохможность добавления и обработки скидок. Скидки действуют не на сам документ, а только на
     * productContractModified
     */
    export default class DocumentD extends Document implements DocumentDiscountBuild {
        /**
         * Список скидок, применяемых к текущему документу
         */
        discountContracts: DiscountContract[];
        /**
         * Аналогично родительскому полю (см. [[Document]])
         */
        productContract: ProductContractD;
        /**
         * Аналогично родительскому полю (см. [[Document]])
         */
        productContractModified: ProductContractD;
        constructor(productContract: ProductContractD);
        constructor(productContract: ProductContractD, values: Value[]);
        constructor(productContract: ProductContractD, values: Value[], args: Property<Document>[]);
        /**
         * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору. Обработка проихсодит рекурсивно, то есть
         * создаются новые [[Value]] и [[ProductContractD]]
         *
         * @param productContract - [[ProductContractD]], может быть JSON или екземляр класса. Если это JSON, то будет создан новый екземпляр [[ProductContractD]] на его основе,
         * если это екземпляр, то он будет скопирован, опять же, рекурсивно
         * @param values - Массив пар id-значение. При создании не проверяется, для проверки используйте родительским метод validate
         * @param args - Дополнительные поля (для внешних модулей)
         * @return new [[DocumentD]]
         */
        static build({ productContract, values, ...args }: DocumentDiscountBuild): DocumentD;
        /**
         * Применяет все активные для данного документа скидки. То есть проверяется, что они [[productContract]] и
         * [[productContractModified]] соответсвуют заданому [[DiscountContract]]. Если [[ProductContractD]] запрещает применять несколько скидок,
         * то применяет только первую. После чего расчитывает цену, время поставки (ETA),
         * а так же редактирует [[productContractModified]] поле в соответствии с выбраными [[OptionsSelect]].
         * Иными словами, этот метод активирует все [[Action]] для выбраных [[OptionsSelect]]
         *
         * @param contract - [[ProductContractD]] который использовать для сброса. Если не передан, то используется [[productContract]] поле
         * @return Успешность расчёта
         */
        processing(contract?: ProductContractD): boolean;
        /**
         * Пытается применить переданный [[DiscountContract]] к текущему документу. Если [[ProductContractD]] позволяет
         * применять скидки и если скидку возможно применить, то сразу же выполняет все её [[Action]].
         * @param discount - Скидка, которую следует проверить и, возможно, применить
         * @return Была ли применена скидка
         */
        addDiscount(discount: DiscountContract): boolean;
        /**
         * "Осущает" документ. Создаёт объект, который содержит только поля, необходимые для воссоздания его в другом модуле.
         * поле [[productContract]] заменяется на его [[ProductContract.contractId]], а [[discountContracts]] на массив из
         * [[DiscountContract.id]] каждой применённой скидки
         */
        dry(): DocumentDDry;
    }
    /**
     * Описывает поля для создания [[DocumentD]] из JSON
     */
    interface DocumentDiscountBuild extends DocumentBuild {
        discountContracts: DiscountContract[];
        productContract: ProductContractD;
    }
    export interface DocumentDDry extends DocumentDry {
        discountContracts: string[];
    }
}
declare module "index" {
    import DocumentD from "discount/DocumentD";
    import Document from "core/Document";
    import ProductContractD from "discount/ProductContractD";
    import ProductContract from "core/ProductContract";
    import DiscountContract from "discount/DiscountContract";
    export { DocumentD, ProductContractD, DiscountContract, Document, ProductContract };
}
