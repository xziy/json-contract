[json-contract](../README.md) › [Globals](../globals.md) › ["core/Form"](../modules/_core_form_.md) › [Form](_core_form_.form.md)

# Class: Form

Содержит в [Option](_core_option_.option.md)[] и методы для обрабокти [Option](_core_option_.option.md) в зависимости от значения, что для него записано

## Hierarchy

* **Form**

  ↳ [ProductContract](_core_productcontract_.productcontract.md)

  ↳ [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md)

## Implements

* [FormBuilder](../interfaces/_core_form_.formbuilder.md)

## Index

### Constructors

* [constructor](_core_form_.form.md#constructor)

### Properties

* [options](_core_form_.form.md#options)

### Methods

* [clone](_core_form_.form.md#clone)
* [getJSON](_core_form_.form.md#getjson)
* [getModifiers](_core_form_.form.md#private-getmodifiers)
* [getRejectReason](_core_form_.form.md#getrejectreason)
* [processing](_core_form_.form.md#processing)
* [validate](_core_form_.form.md#validate)
* [build](_core_form_.form.md#static-protected-build)

## Constructors

###  constructor

\+ **new Form**(`options?`: [Option](_core_option_.option.md)[]): *[Form](_core_form_.form.md)*

Defined in core/Form.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [Option](_core_option_.option.md)[] |

**Returns:** *[Form](_core_form_.form.md)*

## Properties

###  options

• **options**: *[Option](_core_option_.option.md)[]*

*Implementation of [FormBuilder](../interfaces/_core_form_.formbuilder.md).[options](../interfaces/_core_form_.formbuilder.md#options)*

Defined in core/Form.ts:13

Массив [Option](_core_option_.option.md). По сути это набор полей для ввода, которые в этом классе проверяются и при необходисти иным образом
обрабатываются

## Methods

###  clone

▸ **clone**(): *[Form](_core_form_.form.md)*

Defined in core/Form.ts:87

Создаёт глубокую копию текущего екземпляра.

**Returns:** *[Form](_core_form_.form.md)*

___

###  getJSON

▸ **getJSON**(): *any*

Defined in core/Form.ts:94

Создаёт JSON из текущего экземпляра. Метод противоположный [build](_core_form_.form.md#static-protected-build).

**Returns:** *any*

___

### `Private` getModifiers

▸ **getModifiers**(`document`: [Document](_core_document_.document.md)): *[SelectItem](_core_selectitem_.selectitem.md)[]*

Defined in core/Form.ts:104

Возвращает все [SelectItem](_core_selectitem_.selectitem.md), которые в данный момент выбраны для текущих options в переданом документе.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [Document](_core_document_.document.md) | документ  |

**Returns:** *[SelectItem](_core_selectitem_.selectitem.md)[]*

___

###  getRejectReason

▸ **getRejectReason**(`document`: [Document](_core_document_.document.md)): *[Reason](_core_reason_.reason.md) | undefined*

Defined in core/Form.ts:51

Возращает причину не валидности документа или undefined если документ валидный.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [Document](_core_document_.document.md) |   |

**Returns:** *[Reason](_core_reason_.reason.md) | undefined*

___

###  processing

▸ **processing**(`document`: [Document](_core_document_.document.md), `contract?`: [ProductContract](_core_productcontract_.productcontract.md)): *void*

Defined in core/Form.ts:78

Расчитывает цену, время доставки, а так же редактирует productContractModified переданого [Document](_core_document_.document.md) в соответствии
с выбраными [[OptionsSelect]]. Иными словами, этот метод активирует все [Action](_core_action_.action.md) для выбраных [SelectItem](_core_selectitem_.selectitem.md).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [Document](_core_document_.document.md) | документ, который нужно обработать |
`contract?` | [ProductContract](_core_productcontract_.productcontract.md) | [ProductContract](_core_productcontract_.productcontract.md) который использовать для сброса. Если не передан, то используется productContract переденого документа  |

**Returns:** *void*

___

###  validate

▸ **validate**(`document`: [Document](_core_document_.document.md)): *boolean*

Defined in core/Form.ts:33

Проверяет, что переданый документ содержит валиданые значения для options этого екземляра

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [Document](_core_document_.document.md) | Документ, подлежащий проверке  |

**Returns:** *boolean*

___

### `Static` `Protected` build

▸ **build**(`__namedParameters`: object): *[Form](_core_form_.form.md)*

Defined in core/Form.ts:23

Создаёт документ из JSON. Используется только при клонировании. Как и другие методы build делает глубокое создание моделей

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`options` | [Option](_core_option_.option.md)[] |   |

**Returns:** *[Form](_core_form_.form.md)*
