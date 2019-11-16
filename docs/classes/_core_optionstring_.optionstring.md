[json-contract](../README.md) › [Globals](../globals.md) › ["core/OptionString"](../modules/_core_optionstring_.md) › [OptionString](_core_optionstring_.optionstring.md)

# Class: OptionString

Класс, описывающий строковое значение для ввода.

## Hierarchy

* [Option](_core_option_.option.md)

  ↳ **OptionString**

## Index

### Constructors

* [constructor](_core_optionstring_.optionstring.md#constructor)

### Properties

* [anyData](_core_optionstring_.optionstring.md#optional-anydata)
* [description](_core_optionstring_.optionstring.md#optional-description)
* [id](_core_optionstring_.optionstring.md#id)
* [isHidden](_core_optionstring_.optionstring.md#ishidden)
* [isRequired](_core_optionstring_.optionstring.md#isrequired)
* [label](_core_optionstring_.optionstring.md#label)
* [maxLength](_core_optionstring_.optionstring.md#optional-maxlength)
* [minLength](_core_optionstring_.optionstring.md#optional-minlength)
* [regex](_core_optionstring_.optionstring.md#optional-regex)
* [type](_core_optionstring_.optionstring.md#type)

### Methods

* [getJSON](_core_optionstring_.optionstring.md#getjson)
* [getRejectReason](_core_optionstring_.optionstring.md#getrejectreason)
* [validate](_core_optionstring_.optionstring.md#validate)
* [buildOption](_core_optionstring_.optionstring.md#static-buildoption)
* [getOption](_core_optionstring_.optionstring.md#static-getoption)

## Constructors

###  constructor

\+ **new OptionString**(`id`: string, `type`: string, `label`: string): *[OptionString](_core_optionstring_.optionstring.md)*

*Overrides [Option](_core_option_.option.md).[constructor](_core_option_.option.md#constructor)*

Defined in core/OptionString.ts:19

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |

**Returns:** *[OptionString](_core_optionstring_.optionstring.md)*

\+ **new OptionString**(`id`: string, `type`: string, `label`: string, `isRequired`: boolean): *[OptionString](_core_optionstring_.optionstring.md)*

*Overrides [Option](_core_option_.option.md).[constructor](_core_option_.option.md#constructor)*

Defined in core/OptionString.ts:21

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired` | boolean | обязательно ли |

**Returns:** *[OptionString](_core_optionstring_.optionstring.md)*

\+ **new OptionString**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true): *[OptionString](_core_optionstring_.optionstring.md)*

*Overrides [Option](_core_option_.option.md).[constructor](_core_option_.option.md#constructor)*

Defined in core/OptionString.ts:22

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired?` | undefined &#124; false &#124; true | обязательно ли |
`isHidden?` | undefined &#124; false &#124; true | скрывать ли опцию |

**Returns:** *[OptionString](_core_optionstring_.optionstring.md)*

\+ **new OptionString**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true, `description?`: undefined | string): *[OptionString](_core_optionstring_.optionstring.md)*

*Overrides [Option](_core_option_.option.md).[constructor](_core_option_.option.md#constructor)*

Defined in core/OptionString.ts:23

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired?` | undefined &#124; false &#124; true | обязательно ли |
`isHidden?` | undefined &#124; false &#124; true | скрывать ли опцию |
`description?` | undefined &#124; string | описание |

**Returns:** *[OptionString](_core_optionstring_.optionstring.md)*

\+ **new OptionString**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true, `description?`: undefined | string, `anyData?`: undefined | string, `minLength?`: undefined | number, `maxLength?`: undefined | number, `regex?`: undefined | string): *[OptionString](_core_optionstring_.optionstring.md)*

*Overrides [Option](_core_option_.option.md).[constructor](_core_option_.option.md#constructor)*

Defined in core/OptionString.ts:24

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired?` | undefined &#124; false &#124; true | обязательно ли |
`isHidden?` | undefined &#124; false &#124; true | скрывать ли опцию |
`description?` | undefined &#124; string | описание |
`anyData?` | undefined &#124; string | любые данные |
`minLength?` | undefined &#124; number | минимальная длина |
`maxLength?` | undefined &#124; number | максимальная длина |
`regex?` | undefined &#124; string | RegExp для проверки  |

**Returns:** *[OptionString](_core_optionstring_.optionstring.md)*

## Properties

### `Optional` anyData

• **anyData**? : *undefined | string*

*Inherited from [Option](_core_option_.option.md).[anyData](_core_option_.option.md#optional-anydata)*

Defined in core/Option.ts:38

Любые прочие данные

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [Option](_core_option_.option.md).[description](_core_option_.option.md#optional-description)*

Defined in core/Option.ts:34

Описание к полю ввода

___

###  id

• **id**: *string*

*Inherited from [Option](_core_option_.option.md).[id](_core_option_.option.md#id)*

Defined in core/Option.ts:10

id екземпляра. Указывается в [Value.id](_core_document_.value.md#id)

___

###  isHidden

• **isHidden**: *boolean*

*Inherited from [Option](_core_option_.option.md).[isHidden](_core_option_.option.md#ishidden)*

Defined in core/Option.ts:30

Указывает отображать ли поле. Если true, то поле не отображается

___

###  isRequired

• **isRequired**: *boolean*

*Inherited from [Option](_core_option_.option.md).[isRequired](_core_option_.option.md#isrequired)*

Defined in core/Option.ts:26

Указыает обязательно ли поле к заполнению

___

###  label

• **label**: *string*

*Inherited from [Option](_core_option_.option.md).[label](_core_option_.option.md#label)*

Defined in core/Option.ts:22

Подпись к полю ввода

___

### `Optional` maxLength

• **maxLength**? : *undefined | number*

Defined in core/OptionString.ts:15

Максимальная длина строки

___

### `Optional` minLength

• **minLength**? : *undefined | number*

Defined in core/OptionString.ts:11

Минимальная длина строки

___

### `Optional` regex

• **regex**? : *undefined | string*

Defined in core/OptionString.ts:19

RegExp для провеки значения

___

###  type

• **type**: *string*

*Inherited from [Option](_core_option_.option.md).[type](_core_option_.option.md#type)*

Defined in core/Option.ts:18

Тип поля. Доступны варианты
- string - строка
- number - цифра
- select - выбор из нескольких
Подроности смотреть в классах наследниках

## Methods

###  getJSON

▸ **getJSON**(): *[Option](_core_option_.option.md)*

*Inherited from [Option](_core_option_.option.md).[getJSON](_core_option_.option.md#getjson)*

Defined in core/Option.ts:134

Возвращает текущий екземпляр как JSON. Метод противоположный [build](_core_form_.form.md#static-protected-build).

**Returns:** *[Option](_core_option_.option.md)*

___

###  getRejectReason

▸ **getRejectReason**(`value`: any): *[Reason](_core_reason_.reason.md) | undefined*

*Overrides [Option](_core_option_.option.md).[getRejectReason](_core_option_.option.md#getrejectreason)*

Defined in core/OptionString.ts:107

Возращает причину не валидности значения или undefined если значение валидное

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение |

**Returns:** *[Reason](_core_reason_.reason.md) | undefined*

Возможные значения
- [Reason](_core_reason_.reason.md) {
  code: 'IT',
  label: 'incorrect type'
}
- [Reason](_core_reason_.reason.md) {
  code: 'STML',
  label: 'smaller than min length'
}
- [Reason](_core_reason_.reason.md) {
  code: 'LTML',
  label: 'larger than max length'
}
- [Reason](_core_reason_.reason.md) {
  code: 'RME',
  label: 'regex matching error'
}
- причины отказа родительского класса

___

###  validate

▸ **validate**(`value`: any): *boolean*

*Overrides [Option](_core_option_.option.md).[validate](_core_option_.option.md#validate)*

Defined in core/OptionString.ts:67

Проверяет валидность переданого значения. А именно, переменная должна быть строкой, не меньше минимальной длины,
не больше максимамльной и соответсвовать regex. Так же произвдится проверка, поставляемая родительским классом.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение для проверки  |

**Returns:** *boolean*

___

### `Static` buildOption

▸ **buildOption**(`__namedParameters`: object): *[OptionString](_core_optionstring_.optionstring.md)*

*Overrides [Option](_core_option_.option.md).[buildOption](_core_option_.option.md#static-buildoption)*

Defined in core/OptionString.ts:58

Создаёт екземпляр OptionString из JSON. Если передать объект, то будет создана его копия.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`anyData` | undefined &#124; string | любые данные |
`description` | undefined &#124; string | описание |
`id` | string | id |
`isHidden` | boolean | скрывать ли опцию |
`isRequired` | boolean | обязательно ли |
`label` | string | подпись |
`maxLength` | undefined &#124; number | максимальная длина |
`minLength` | undefined &#124; number | минимальная длина |
`regex` | undefined &#124; string | RegExp для проверки  |
`type` | string | тип |

**Returns:** *[OptionString](_core_optionstring_.optionstring.md)*

___

### `Static` getOption

▸ **getOption**<**T**>(`data`: T): *[Option](_core_option_.option.md)*

*Inherited from [Option](_core_option_.option.md).[getOption](_core_option_.option.md#static-getoption)*

Defined in core/Option.ts:85

Создаёт екземпляр того класса, тип которого указан в type в параметре data.
Например, если data.type = 'number', то будет создан и отдан [OptionNumber](_core_optionnumber_.optionnumber.md).

**Type parameters:**

▪ **T**: *[Option](_core_option_.option.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | T | JSON объект для создания нового [Option](_core_option_.option.md) или екземпляр [Option](_core_option_.option.md) для клонирования  |

**Returns:** *[Option](_core_option_.option.md)*
