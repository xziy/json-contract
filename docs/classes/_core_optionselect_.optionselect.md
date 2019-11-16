[json-contract](../README.md) › [Globals](../globals.md) › ["core/OptionSelect"](../modules/_core_optionselect_.md) › [OptionSelect](_core_optionselect_.optionselect.md)

# Class: OptionSelect

Класс, описывающий поле выбора из нескольких вариантов

## Hierarchy

* [Option](_core_option_.option.md)

  ↳ **OptionSelect**

## Index

### Constructors

* [constructor](_core_optionselect_.optionselect.md#constructor)

### Properties

* [anyData](_core_optionselect_.optionselect.md#optional-anydata)
* [description](_core_optionselect_.optionselect.md#optional-description)
* [id](_core_optionselect_.optionselect.md#id)
* [isHidden](_core_optionselect_.optionselect.md#ishidden)
* [isRequired](_core_optionselect_.optionselect.md#isrequired)
* [label](_core_optionselect_.optionselect.md#label)
* [options](_core_optionselect_.optionselect.md#options)
* [type](_core_optionselect_.optionselect.md#type)

### Methods

* [getJSON](_core_optionselect_.optionselect.md#getjson)
* [getRejectReason](_core_optionselect_.optionselect.md#getrejectreason)
* [getSelected](_core_optionselect_.optionselect.md#getselected)
* [validate](_core_optionselect_.optionselect.md#validate)
* [buildOption](_core_optionselect_.optionselect.md#static-buildoption)
* [getOption](_core_optionselect_.optionselect.md#static-getoption)

## Constructors

###  constructor

\+ **new OptionSelect**(`id`: string, `type`: string, `label`: string, `options`: [SelectItem](_core_selectitem_.selectitem.md)[], `isRequired?`: undefined | false | true, `isHidden?`: undefined | false | true, `description?`: undefined | string, `anyData?`: undefined | string): *[OptionSelect](_core_optionselect_.optionselect.md)*

*Overrides [Option](_core_option_.option.md).[constructor](_core_option_.option.md#constructor)*

Defined in core/OptionSelect.ts:15

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`type` | string | тип |
`label` | string | подпись |
`options` | [SelectItem](_core_selectitem_.selectitem.md)[] | массив [SelectItem](_core_selectitem_.selectitem.md) которые содержат варианты выбора. |
`isRequired?` | undefined &#124; false &#124; true | обязательно ли |
`isHidden?` | undefined &#124; false &#124; true | скрывать ли опцию |
`description?` | undefined &#124; string | описание |
`anyData?` | undefined &#124; string | любые данные  |

**Returns:** *[OptionSelect](_core_optionselect_.optionselect.md)*

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

###  options

• **options**: *[SelectItem](_core_selectitem_.selectitem.md)[]*

Defined in core/OptionSelect.ts:15

Массив екземпляров, содержащие строки, из которых можно выбрать одну как значение. Тут же хранятся и действия ([Action](_core_action_.action.md)),
которые будут выполнены при выборе конктерного значения и новые [Option](_core_option_.option.md)[], которые будут показаны при выборе конктерного
значения

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

*Overrides [Option](_core_option_.option.md).[getJSON](_core_option_.option.md#getjson)*

Defined in core/OptionSelect.ts:113

Создаёт JSON из текущего экземпляра. Метод противоположный [build](_core_form_.form.md#static-protected-build).

**Returns:** *[Option](_core_option_.option.md)*

___

###  getRejectReason

▸ **getRejectReason**(`value`: any, `document?`: [Document](_core_document_.document.md)): *[Reason](_core_reason_.reason.md) | undefined*

*Overrides [Option](_core_option_.option.md).[getRejectReason](_core_option_.option.md#getrejectreason)*

Defined in core/OptionSelect.ts:83

Возращает причину не валидности значения или undefined если значение валидное

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение |
`document?` | [Document](_core_document_.document.md) | - |

**Returns:** *[Reason](_core_reason_.reason.md) | undefined*

Возможные значения
- [Reason](_core_reason_.reason.md) {
  code: 'NC',
  label: 'not checked'
}
- причины отказа дочерних Option
- причины отказа родительского класса

___

###  getSelected

▸ **getSelected**(`value`: any): *[SelectItem](_core_selectitem_.selectitem.md)*

Defined in core/OptionSelect.ts:106

Возвращает [SelectItem](_core_selectitem_.selectitem.md) для заданого значения

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение  |

**Returns:** *[SelectItem](_core_selectitem_.selectitem.md)*

___

###  validate

▸ **validate**(`value`: any, `document?`: [Document](_core_document_.document.md)): *boolean*

*Overrides [Option](_core_option_.option.md).[validate](_core_option_.option.md#validate)*

Defined in core/OptionSelect.ts:56

Проверка валидности значения. Проверяет, что выбранное значение есть в массиве допустимых значений, а так же
проверяет вложенные значения этого выбора, если был передан документ. У некоторых [SelectItem](_core_selectitem_.selectitem.md) могут быть вложены
свои [Option](_core_option_.option.md)[], которые следует проверить. Тут происходит проверка того, что для опций выбраного значения документ
так же является валидным

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | значение для проверки |
`document?` | [Document](_core_document_.document.md) | документ, в котором хранятся вложенные значения  |

**Returns:** *boolean*

___

### `Static` buildOption

▸ **buildOption**(`__namedParameters`: object): *[OptionSelect](_core_optionselect_.optionselect.md)*

*Overrides [Option](_core_option_.option.md).[buildOption](_core_option_.option.md#static-buildoption)*

Defined in core/OptionSelect.ts:43

Создаёт екземпляр OptionSelect из JSON. Если передать объект, то будет произведена попытка создать копию.

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
`options` | [SelectItemBuilder](../interfaces/_core_selectitem_.selectitembuilder.md)[] | массив SelectItem которые содержат варианты выбора. |
`type` | string | тип |

**Returns:** *[OptionSelect](_core_optionselect_.optionselect.md)*

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
