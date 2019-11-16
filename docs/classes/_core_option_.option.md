[json-contract](../README.md) › [Globals](../globals.md) › ["core/Option"](../modules/_core_option_.md) › [Option](_core_option_.option.md)

# Class: Option

Класс, описывающий значение для ввода. По сути является описанием некоторого поля ввода и параметров его валидации.

## Hierarchy

* **Option**

  ↳ [OptionString](_core_optionstring_.optionstring.md)

  ↳ [OptionNumber](_core_optionnumber_.optionnumber.md)

  ↳ [OptionSelect](_core_optionselect_.optionselect.md)

  ↳ [OptionSelectBuilder](../interfaces/_core_optionselect_.optionselectbuilder.md)

## Index

### Constructors

* [constructor](_core_option_.option.md#constructor)

### Properties

* [anyData](_core_option_.option.md#optional-anydata)
* [description](_core_option_.option.md#optional-description)
* [id](_core_option_.option.md#id)
* [isHidden](_core_option_.option.md#ishidden)
* [isRequired](_core_option_.option.md#isrequired)
* [label](_core_option_.option.md#label)
* [type](_core_option_.option.md#type)

### Methods

* [getJSON](_core_option_.option.md#getjson)
* [getRejectReason](_core_option_.option.md#getrejectreason)
* [validate](_core_option_.option.md#validate)
* [buildOption](_core_option_.option.md#static-buildoption)
* [getOption](_core_option_.option.md#static-getoption)

## Constructors

###  constructor

\+ **new Option**(`id`: string, `type`: string, `label`: string): *[Option](_core_option_.option.md)*

Defined in core/Option.ts:38

Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).
Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |

**Returns:** *[Option](_core_option_.option.md)*

\+ **new Option**(`id`: string, `type`: string, `label`: string, `isRequired`: boolean): *[Option](_core_option_.option.md)*

Defined in core/Option.ts:41

Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).
Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired` | boolean | обязательно ли |

**Returns:** *[Option](_core_option_.option.md)*

\+ **new Option**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true): *[Option](_core_option_.option.md)*

Defined in core/Option.ts:42

Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).
Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired?` | undefined &#124; false &#124; true | обязательно ли |
`isHidden?` | undefined &#124; false &#124; true | скрывать ли опцию |

**Returns:** *[Option](_core_option_.option.md)*

\+ **new Option**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true, `description?`: undefined | string): *[Option](_core_option_.option.md)*

Defined in core/Option.ts:43

Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).
Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired?` | undefined &#124; false &#124; true | обязательно ли |
`isHidden?` | undefined &#124; false &#124; true | скрывать ли опцию |
`description?` | undefined &#124; string | описание |

**Returns:** *[Option](_core_option_.option.md)*

\+ **new Option**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true, `description?`: undefined | string, `anyData?`: undefined | string): *[Option](_core_option_.option.md)*

Defined in core/Option.ts:44

Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).
Если [isRequired](_core_option_.option.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_option_.option.md#ishidden).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired?` | undefined &#124; false &#124; true | обязательно ли |
`isHidden?` | undefined &#124; false &#124; true | скрывать ли опцию |
`description?` | undefined &#124; string | описание |
`anyData?` | undefined &#124; string | любые данные  |

**Returns:** *[Option](_core_option_.option.md)*

## Properties

### `Optional` anyData

• **anyData**? : *undefined | string*

Defined in core/Option.ts:38

Любые прочие данные

___

### `Optional` description

• **description**? : *undefined | string*

Defined in core/Option.ts:34

Описание к полю ввода

___

###  id

• **id**: *string*

Defined in core/Option.ts:10

id екземпляра. Указывается в [Value.id](_core_document_.value.md#id)

___

###  isHidden

• **isHidden**: *boolean*

Defined in core/Option.ts:30

Указывает отображать ли поле. Если true, то поле не отображается

___

###  isRequired

• **isRequired**: *boolean*

Defined in core/Option.ts:26

Указыает обязательно ли поле к заполнению

___

###  label

• **label**: *string*

Defined in core/Option.ts:22

Подпись к полю ввода

___

###  type

• **type**: *string*

Defined in core/Option.ts:18

Тип поля. Доступны варианты
- string - строка
- number - цифра
- select - выбор из нескольких
Подроности смотреть в классах наследниках

## Methods

###  getJSON

▸ **getJSON**(): *[Option](_core_option_.option.md)*

Defined in core/Option.ts:134

Возвращает текущий екземпляр как JSON. Метод противоположный [build](_core_form_.form.md#static-protected-build).

**Returns:** *[Option](_core_option_.option.md)*

___

###  getRejectReason

▸ **getRejectReason**(`value`: any): *[Reason](_core_reason_.reason.md) | undefined*

Defined in core/Option.ts:121

Возращает причину не валидности значения или undefined если значение валидное

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение для проверки |

**Returns:** *[Reason](_core_reason_.reason.md) | undefined*

Возможные значения
- Reason {
  code: 'IR',
  label: 'is required'
}

___

###  validate

▸ **validate**(`value`: any): *boolean*

Defined in core/Option.ts:102

Базовая проверка значения. Если значение не спратно ([isHidden](_core_option_.option.md#ishidden)=false) и оно язвлется обязательны([isRequired](_core_option_.option.md#isrequired)=true)
и значение передано пустым, то валидация не будет пройдена. В ином случае валидация пройдена.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение для проверки  |

**Returns:** *boolean*

___

### `Static` buildOption

▸ **buildOption**(`__namedParameters`: object): *[Option](_core_option_.option.md)*

Defined in core/Option.ts:76

Создаёт екземпляр [Option](_core_option_.option.md) из JSON. Если передать объект, то будет создана его копия.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`anyData` | undefined &#124; string | любые данные  |
`description` | undefined &#124; string | описание |
`id` | string | id |
`isHidden` | boolean | скрывать ли опцию |
`isRequired` | boolean | обязательно ли |
`label` | string | подпись |
`type` | string | тип |

**Returns:** *[Option](_core_option_.option.md)*

___

### `Static` getOption

▸ **getOption**<**T**>(`data`: T): *[Option](_core_option_.option.md)*

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
