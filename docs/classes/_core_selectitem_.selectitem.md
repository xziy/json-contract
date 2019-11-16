[json-contract](../README.md) › [Globals](../globals.md) › ["core/SelectItem"](../modules/_core_selectitem_.md) › [SelectItem](_core_selectitem_.selectitem.md)

# Class: SelectItem

Описывает строку выбора в [OptionSelect](_core_optionselect_.optionselect.md). Этот класс может иметь дочерние [Option](_core_option_.option.md)[] и выполнять действия [Action](_core_action_.action.md) над
документом, с которым в данный момент происходит работа.

## Hierarchy

* **SelectItem**

## Index

### Constructors

* [constructor](_core_selectitem_.selectitem.md#constructor)

### Properties

* [action](_core_selectitem_.selectitem.md#action)
* [anyData](_core_selectitem_.selectitem.md#optional-anydata)
* [description](_core_selectitem_.selectitem.md#optional-description)
* [form](_core_selectitem_.selectitem.md#form)
* [id](_core_selectitem_.selectitem.md#id)
* [label](_core_selectitem_.selectitem.md#label)

### Methods

* [getJSON](_core_selectitem_.selectitem.md#getjson)
* [buildItem](_core_selectitem_.selectitem.md#static-builditem)

## Constructors

###  constructor

\+ **new SelectItem**(`id`: string, `label`: string, `form`: [Form](_core_form_.form.md), `action`: [Action](_core_action_.action.md), `description?`: undefined | string, `anyData?`: undefined | string): *[SelectItem](_core_selectitem_.selectitem.md)*

Defined in core/SelectItem.ts:34

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`label` | string | подпись |
`form` | [Form](_core_form_.form.md) | [Form](_core_form_.form.md), хранящий необходимые [Option](_core_option_.option.md)[] |
`action` | [Action](_core_action_.action.md) | [Action](_core_action_.action.md), который будет выполнен при выборе этого экземпляра |
`description?` | undefined &#124; string | описание |
`anyData?` | undefined &#124; string | другие данные  |

**Returns:** *[SelectItem](_core_selectitem_.selectitem.md)*

## Properties

###  action

• **action**: *[Action](_core_action_.action.md)*

Defined in core/SelectItem.ts:30

Действия, которые следует выполнить при выборе текущего екземпляра

___

### `Optional` anyData

• **anyData**? : *undefined | string*

Defined in core/SelectItem.ts:26

Любые прочие данные

___

### `Optional` description

• **description**? : *undefined | string*

Defined in core/SelectItem.ts:22

Описание

___

###  form

• **form**: *[Form](_core_form_.form.md)*

Defined in core/SelectItem.ts:34

Form, хранящий [Option](_core_option_.option.md)[], которые следует отображать при выборе текузего экземпляра

___

###  id

• **id**: *string*

Defined in core/SelectItem.ts:14

id екземпляра

___

###  label

• **label**: *string*

Defined in core/SelectItem.ts:18

Строка для отображения

## Methods

###  getJSON

▸ **getJSON**(): *[SelectItemBuilder](../interfaces/_core_selectitem_.selectitembuilder.md)*

Defined in core/SelectItem.ts:92

Создаёт JSON из текущего экземпляра. Метод противоположный [build](_core_form_.form.md#static-protected-build).

**Returns:** *[SelectItemBuilder](../interfaces/_core_selectitem_.selectitembuilder.md)*

___

### `Static` buildItem

▸ **buildItem**(`__namedParameters`: object): *[SelectItem](_core_selectitem_.selectitem.md)*

Defined in core/SelectItem.ts:68

Создаёт SelectItem и вложенные в него [Form](_core_form_.form.md) и [Action](_core_action_.action.md).

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`anyData` | undefined &#124; string | другие данные  |
`changeProperties` | undefined &#124; object | изменение свойств (см. [Action](_core_action_.action.md)) |
`description` | undefined &#124; string | описание |
`hideOptionsById` | undefined &#124; string[] | массив id опций, которые нужно скрыть (см. [Action](_core_action_.action.md)) |
`id` | string | id |
`label` | string | метка |
`modifyDeliveryTime` | undefined &#124; [Changeable](_core_changeable_.changeable.md) | изменение времени доставки (см. [Action](_core_action_.action.md)) |
`modifyPrice` | undefined &#124; [Changeable](_core_changeable_.changeable.md) | изменение цены (см. [Action](_core_action_.action.md)) |
`options` | [Option](_core_option_.option.md)[] | опции для отображения (см. [Form](_core_form_.form.md)) |
`setCustomProperties` | undefined &#124; object | изменение свойств (см. [Action](_core_action_.action.md)) |
`setDiscountInPercentage` | undefined &#124; number | установка скидки (см. [Action](_core_action_.action.md)) |
`showOptionsById` | undefined &#124; string[] | массив id опций, которые нужно показать (см. [Action](_core_action_.action.md)) |

**Returns:** *[SelectItem](_core_selectitem_.selectitem.md)*
