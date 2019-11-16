[json-contract](../README.md) › [Globals](../globals.md) › ["core/OptionNumber"](../modules/_core_optionnumber_.md) › [OptionNumber](_core_optionnumber_.optionnumber.md)

# Class: OptionNumber

Класс, описывающий численное значение для ввода.

## Hierarchy

* [Option](_core_option_.option.md)

  ↳ **OptionNumber**

## Index

### Constructors

* [constructor](_core_optionnumber_.optionnumber.md#constructor)

### Properties

* [anyData](_core_optionnumber_.optionnumber.md#optional-anydata)
* [description](_core_optionnumber_.optionnumber.md#optional-description)
* [id](_core_optionnumber_.optionnumber.md#id)
* [isHidden](_core_optionnumber_.optionnumber.md#ishidden)
* [isRequired](_core_optionnumber_.optionnumber.md#isrequired)
* [label](_core_optionnumber_.optionnumber.md#label)
* [max](_core_optionnumber_.optionnumber.md#optional-max)
* [min](_core_optionnumber_.optionnumber.md#optional-min)
* [regex](_core_optionnumber_.optionnumber.md#optional-regex)
* [type](_core_optionnumber_.optionnumber.md#type)

### Methods

* [getJSON](_core_optionnumber_.optionnumber.md#getjson)
* [getRejectReason](_core_optionnumber_.optionnumber.md#getrejectreason)
* [validate](_core_optionnumber_.optionnumber.md#validate)
* [buildOption](_core_optionnumber_.optionnumber.md#static-buildoption)
* [getOption](_core_optionnumber_.optionnumber.md#static-getoption)

## Constructors

###  constructor

\+ **new OptionNumber**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true, `description?`: undefined | string, `anyData?`: undefined | string, `min?`: undefined | number, `max?`: undefined | number, `regex?`: undefined | string): *[OptionNumber](_core_optionnumber_.optionnumber.md)*

*Overrides [Option](_core_option_.option.md).[constructor](_core_option_.option.md#constructor)*

Defined in core/OptionNumber.ts:19

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
`min?` | undefined &#124; number | минимальное значение |
`max?` | undefined &#124; number | максимальное значение |
`regex?` | undefined &#124; string | RegExp для проверки  |

**Returns:** *[OptionNumber](_core_optionnumber_.optionnumber.md)*

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

### `Optional` max

• **max**? : *undefined | number*

Defined in core/OptionNumber.ts:15

Максимальное значение

___

### `Optional` min

• **min**? : *undefined | number*

Defined in core/OptionNumber.ts:11

Минимальное значение

___

### `Optional` regex

• **regex**? : *undefined | string*

Defined in core/OptionNumber.ts:19

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

Defined in core/OptionNumber.ts:101

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
  code: 'STM',
  label: 'smaller than min'
}
- [Reason](_core_reason_.reason.md) {
  code: 'LTM',
  label: 'larger than max'
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

Defined in core/OptionNumber.ts:62

Проверяет валидность переданого значения. А именно, переменная должна быть числом, не меньше минимального значения,
не больше максимамльного и соответсвовать regex. Так же произвдится проверка, поставляемая родительским классом.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение для проверки  |

**Returns:** *boolean*

___

### `Static` buildOption

▸ **buildOption**(`__namedParameters`: object): *[OptionNumber](_core_optionnumber_.optionnumber.md)*

*Overrides [Option](_core_option_.option.md).[buildOption](_core_option_.option.md#static-buildoption)*

Defined in core/OptionNumber.ts:53

Создаёт екземпляр OptionNumber из JSON. Если передать объект, то будет создана его копия.

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
`max` | undefined &#124; number | максимальное значение |
`min` | undefined &#124; number | минимальное значение |
`regex` | undefined &#124; string | RegExp для проверки  |
`type` | string | тип |

**Returns:** *[OptionNumber](_core_optionnumber_.optionnumber.md)*

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
