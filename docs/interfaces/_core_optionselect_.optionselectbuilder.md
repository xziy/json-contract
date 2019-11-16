[json-contract](../README.md) › [Globals](../globals.md) › ["core/OptionSelect"](../modules/_core_optionselect_.md) › [OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)

# Interface: OptionSelectBuilder

Интерфейс для создания [OptionSelect](../classes/_core_optionselect_.optionselect.md)

## Hierarchy

* [Option](../classes/_core_option_.option.md)

  ↳ **OptionSelectBuilder**

## Index

### Constructors

* [constructor](_core_optionselect_.optionselectbuilder.md#constructor)

### Properties

* [anyData](_core_optionselect_.optionselectbuilder.md#optional-anydata)
* [description](_core_optionselect_.optionselectbuilder.md#optional-description)
* [id](_core_optionselect_.optionselectbuilder.md#id)
* [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden)
* [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired)
* [label](_core_optionselect_.optionselectbuilder.md#label)
* [options](_core_optionselect_.optionselectbuilder.md#options)
* [type](_core_optionselect_.optionselectbuilder.md#type)

### Methods

* [getJSON](_core_optionselect_.optionselectbuilder.md#getjson)
* [getRejectReason](_core_optionselect_.optionselectbuilder.md#getrejectreason)
* [validate](_core_optionselect_.optionselectbuilder.md#validate)
* [buildOption](_core_optionselect_.optionselectbuilder.md#static-buildoption)
* [getOption](_core_optionselect_.optionselectbuilder.md#static-getoption)

## Constructors

###  constructor

\+ **new OptionSelectBuilder**(`id`: string, `type`: string, `label`: string): *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

*Inherited from [Option](../classes/_core_option_.option.md).[constructor](../classes/_core_option_.option.md#constructor)*

Defined in core/Option.ts:38

Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).
Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |

**Returns:** *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

\+ **new OptionSelectBuilder**(`id`: string, `type`: string, `label`: string, `isRequired`: boolean): *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

*Inherited from [Option](../classes/_core_option_.option.md).[constructor](../classes/_core_option_.option.md#constructor)*

Defined in core/Option.ts:41

Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).
Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired` | boolean | обязательно ли |

**Returns:** *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

\+ **new OptionSelectBuilder**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true): *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

*Inherited from [Option](../classes/_core_option_.option.md).[constructor](../classes/_core_option_.option.md#constructor)*

Defined in core/Option.ts:42

Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).
Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired?` | undefined &#124; false &#124; true | обязательно ли |
`isHidden?` | undefined &#124; false &#124; true | скрывать ли опцию |

**Returns:** *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

\+ **new OptionSelectBuilder**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true, `description?`: undefined | string): *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

*Inherited from [Option](../classes/_core_option_.option.md).[constructor](../classes/_core_option_.option.md#constructor)*

Defined in core/Option.ts:43

Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).
Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`isRequired?` | undefined &#124; false &#124; true | обязательно ли |
`isHidden?` | undefined &#124; false &#124; true | скрывать ли опцию |
`description?` | undefined &#124; string | описание |

**Returns:** *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

\+ **new OptionSelectBuilder**(`id`: string, `type`: string, `label`: string, `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true, `description?`: undefined | string, `anyData?`: undefined | string): *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

*Inherited from [Option](../classes/_core_option_.option.md).[constructor](../classes/_core_option_.option.md#constructor)*

Defined in core/Option.ts:44

Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).
Если [isRequired](_core_optionselect_.optionselectbuilder.md#isrequired) не передан, то он считается false. Аналогично [isHidden](_core_optionselect_.optionselectbuilder.md#ishidden).

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

**Returns:** *[OptionSelectBuilder](_core_optionselect_.optionselectbuilder.md)*

## Properties

### `Optional` anyData

• **anyData**? : *undefined | string*

*Inherited from [Option](../classes/_core_option_.option.md).[anyData](../classes/_core_option_.option.md#optional-anydata)*

Defined in core/Option.ts:38

Любые прочие данные

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [Option](../classes/_core_option_.option.md).[description](../classes/_core_option_.option.md#optional-description)*

Defined in core/Option.ts:34

Описание к полю ввода

___

###  id

• **id**: *string*

*Inherited from [Option](../classes/_core_option_.option.md).[id](../classes/_core_option_.option.md#id)*

Defined in core/Option.ts:10

id екземпляра. Указывается в [Value.id](../classes/_core_document_.value.md#id)

___

###  isHidden

• **isHidden**: *boolean*

*Inherited from [Option](../classes/_core_option_.option.md).[isHidden](../classes/_core_option_.option.md#ishidden)*

Defined in core/Option.ts:30

Указывает отображать ли поле. Если true, то поле не отображается

___

###  isRequired

• **isRequired**: *boolean*

*Inherited from [Option](../classes/_core_option_.option.md).[isRequired](../classes/_core_option_.option.md#isrequired)*

Defined in core/Option.ts:26

Указыает обязательно ли поле к заполнению

___

###  label

• **label**: *string*

*Inherited from [Option](../classes/_core_option_.option.md).[label](../classes/_core_option_.option.md#label)*

Defined in core/Option.ts:22

Подпись к полю ввода

___

###  options

• **options**: *[SelectItemBuilder](_core_selectitem_.selectitembuilder.md)[]*

Defined in core/OptionSelect.ts:124

___

###  type

• **type**: *string*

*Inherited from [Option](../classes/_core_option_.option.md).[type](../classes/_core_option_.option.md#type)*

Defined in core/Option.ts:18

Тип поля. Доступны варианты
- string - строка
- number - цифра
- select - выбор из нескольких
Подроности смотреть в классах наследниках

## Methods

###  getJSON

▸ **getJSON**(): *[Option](../classes/_core_option_.option.md)*

*Inherited from [Option](../classes/_core_option_.option.md).[getJSON](../classes/_core_option_.option.md#getjson)*

Defined in core/Option.ts:134

Возвращает текущий екземпляр как JSON. Метод противоположный [build](../classes/_core_form_.form.md#static-protected-build).

**Returns:** *[Option](../classes/_core_option_.option.md)*

___

###  getRejectReason

▸ **getRejectReason**(`value`: any): *[Reason](../classes/_core_reason_.reason.md) | undefined*

*Inherited from [Option](../classes/_core_option_.option.md).[getRejectReason](../classes/_core_option_.option.md#getrejectreason)*

Defined in core/Option.ts:121

Возращает причину не валидности значения или undefined если значение валидное

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение для проверки |

**Returns:** *[Reason](../classes/_core_reason_.reason.md) | undefined*

Возможные значения
- Reason {
  code: 'IR',
  label: 'is required'
}

___

###  validate

▸ **validate**(`value`: any): *boolean*

*Inherited from [Option](../classes/_core_option_.option.md).[validate](../classes/_core_option_.option.md#validate)*

Defined in core/Option.ts:102

Базовая проверка значения. Если значение не спратно ([isHidden](_core_optionselect_.optionselectbuilder.md#ishidden)=false) и оно язвлется обязательны([isRequired](_core_optionselect_.optionselectbuilder.md#isrequired)=true)
и значение передано пустым, то валидация не будет пройдена. В ином случае валидация пройдена.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение для проверки  |

**Returns:** *boolean*

___

### `Static` buildOption

▸ **buildOption**(`__namedParameters`: object): *[Option](../classes/_core_option_.option.md)*

*Inherited from [Option](../classes/_core_option_.option.md).[buildOption](../classes/_core_option_.option.md#static-buildoption)*

Defined in core/Option.ts:76

Создаёт екземпляр [Option](../classes/_core_option_.option.md) из JSON. Если передать объект, то будет создана его копия.

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

**Returns:** *[Option](../classes/_core_option_.option.md)*

___

### `Static` getOption

▸ **getOption**<**T**>(`data`: T): *[Option](../classes/_core_option_.option.md)*

*Inherited from [Option](../classes/_core_option_.option.md).[getOption](../classes/_core_option_.option.md#static-getoption)*

Defined in core/Option.ts:85

Создаёт екземпляр того класса, тип которого указан в type в параметре data.
Например, если data.type = 'number', то будет создан и отдан [OptionNumber](../classes/_core_optionnumber_.optionnumber.md).

**Type parameters:**

▪ **T**: *[Option](../classes/_core_option_.option.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | T | JSON объект для создания нового [Option](../classes/_core_option_.option.md) или екземпляр [Option](../classes/_core_option_.option.md) для клонирования  |

**Returns:** *[Option](../classes/_core_option_.option.md)*
