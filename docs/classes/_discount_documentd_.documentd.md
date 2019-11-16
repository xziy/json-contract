[json-contract](../README.md) › [Globals](../globals.md) › ["discount/DocumentD"](../modules/_discount_documentd_.md) › [DocumentD](_discount_documentd_.documentd.md)

# Class: DocumentD

Описывает документ с вохможность добавления и обработки скидок. Скидки действуют не на сам документ, а только на
productContractModified

## Hierarchy

* [Document](_core_document_.document.md)

  ↳ **DocumentD**

## Implements

* [DocumentBuild](../interfaces/_core_document_.documentbuild.md)
* [DocumentDiscountBuild](../interfaces/_discount_documentd_.documentdiscountbuild.md)

## Indexable

* \[ **x**: *string*\]: any

Любые другие поля для внешних модулей

## Index

### Constructors

* [constructor](_discount_documentd_.documentd.md#constructor)

### Properties

* [controlHash](_discount_documentd_.documentd.md#controlhash)
* [discountContracts](_discount_documentd_.documentd.md#discountcontracts)
* [documentId](_discount_documentd_.documentd.md#documentid)
* [productContract](_discount_documentd_.documentd.md#productcontract)
* [productContractModified](_discount_documentd_.documentd.md#productcontractmodified)
* [values](_discount_documentd_.documentd.md#values)

### Methods

* [addDiscount](_discount_documentd_.documentd.md#adddiscount)
* [addOption](_discount_documentd_.documentd.md#addoption)
* [check](_discount_documentd_.documentd.md#check)
* [getRejectReason](_discount_documentd_.documentd.md#getrejectreason)
* [getValue](_discount_documentd_.documentd.md#getvalue)
* [processing](_discount_documentd_.documentd.md#processing)
* [build](_discount_documentd_.documentd.md#static-build)

## Constructors

###  constructor

\+ **new DocumentD**(`productContract`: [ProductContractD](_discount_productcontractd_.productcontractd.md)): *[DocumentD](_discount_documentd_.documentd.md)*

*Overrides [Document](_core_document_.document.md).[constructor](_core_document_.document.md#constructor)*

Defined in discount/DocumentD.ts:25

Аналогично родительскому конструктору (см. [Document](_core_document_.document.md))
Аналогично родительскому конструктору (см. [Document](_core_document_.document.md))

**Parameters:**

Name | Type |
------ | ------ |
`productContract` | [ProductContractD](_discount_productcontractd_.productcontractd.md) |

**Returns:** *[DocumentD](_discount_documentd_.documentd.md)*

\+ **new DocumentD**(`productContract`: [ProductContractD](_discount_productcontractd_.productcontractd.md), `values`: [Value](_core_document_.value.md)[]): *[DocumentD](_discount_documentd_.documentd.md)*

*Overrides [Document](_core_document_.document.md).[constructor](_core_document_.document.md#constructor)*

Defined in discount/DocumentD.ts:27

Аналогично родительскому конструктору (см. [Document](_core_document_.document.md))
Аналогично родительскому конструктору (см. [Document](_core_document_.document.md))

**Parameters:**

Name | Type |
------ | ------ |
`productContract` | [ProductContractD](_discount_productcontractd_.productcontractd.md) |
`values` | [Value](_core_document_.value.md)[] |

**Returns:** *[DocumentD](_discount_documentd_.documentd.md)*

\+ **new DocumentD**(`productContract`: [ProductContractD](_discount_productcontractd_.productcontractd.md), `values`: [Value](_core_document_.value.md)[], `args`: [Property](../interfaces/_core_property_.property.md)‹[Document](_core_document_.document.md)›[]): *[DocumentD](_discount_documentd_.documentd.md)*

*Overrides [Document](_core_document_.document.md).[constructor](_core_document_.document.md#constructor)*

Defined in discount/DocumentD.ts:28

Аналогично родительскому конструктору (см. [Document](_core_document_.document.md))
Аналогично родительскому конструктору (см. [Document](_core_document_.document.md))

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`productContract` | [ProductContractD](_discount_productcontractd_.productcontractd.md) | - |
`values` | [Value](_core_document_.value.md)[] | - |
`args` | [Property](../interfaces/_core_property_.property.md)‹[Document](_core_document_.document.md)›[] |   |

**Returns:** *[DocumentD](_discount_documentd_.documentd.md)*

## Properties

###  controlHash

• **controlHash**: *string*

*Inherited from [Document](_core_document_.document.md).[controlHash](_core_document_.document.md#controlhash)*

Defined in core/Document.ts:22

Хеш документа

___

###  discountContracts

• **discountContracts**: *[DiscountContract](_discount_discountcontract_.discountcontract.md)[]*

*Implementation of [DocumentDiscountBuild](../interfaces/_discount_documentd_.documentdiscountbuild.md).[discountContracts](../interfaces/_discount_documentd_.documentdiscountbuild.md#discountcontracts)*

Defined in discount/DocumentD.ts:17

Список скидок, применяемых к текущему документу

___

###  documentId

• **documentId**: *string*

*Inherited from [Document](_core_document_.document.md).[documentId](_core_document_.document.md#documentid)*

Defined in core/Document.ts:30

Just uuid

___

###  productContract

• **productContract**: *[ProductContractD](_discount_productcontractd_.productcontractd.md)*

*Implementation of [DocumentDiscountBuild](../interfaces/_discount_documentd_.documentdiscountbuild.md).[productContract](../interfaces/_discount_documentd_.documentdiscountbuild.md#productcontract)*

*Overrides [Document](_core_document_.document.md).[productContract](_core_document_.document.md#productcontract)*

Defined in discount/DocumentD.ts:21

Аналогично родительскому полю (см. [Document](_core_document_.document.md))

___

###  productContractModified

• **productContractModified**: *[ProductContractD](_discount_productcontractd_.productcontractd.md)*

*Overrides [Document](_core_document_.document.md).[productContractModified](_core_document_.document.md#productcontractmodified)*

Defined in discount/DocumentD.ts:25

Аналогично родительскому полю (см. [Document](_core_document_.document.md))

___

###  values

• **values**: *[Value](_core_document_.value.md)[]*

*Implementation of [DocumentDiscountBuild](../interfaces/_discount_documentd_.documentdiscountbuild.md).[values](../interfaces/_discount_documentd_.documentdiscountbuild.md#values)*

*Inherited from [Document](_core_document_.document.md).[values](_core_document_.document.md#values)*

Defined in core/Document.ts:26

Данные ввода. Хранят пары <id опции>:<значение опции>

## Methods

###  addDiscount

▸ **addDiscount**(`discount`: [DiscountContract](_discount_discountcontract_.discountcontract.md)): *boolean*

Defined in discount/DocumentD.ts:89

Пытается применить переданный [DiscountContract](_discount_discountcontract_.discountcontract.md) к текущему документу. Если [ProductContractD](_discount_productcontractd_.productcontractd.md) позволяет
применять скидки и если скидку возможно применить, то сразу же выполняет все её [Action](_core_action_.action.md).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`discount` | [DiscountContract](_discount_discountcontract_.discountcontract.md) | Скидка, которую следует проверить и, возможно, применить |

**Returns:** *boolean*

Была ли применена скидка

___

###  addOption

▸ **addOption**(`id`: string, `value`: any): *boolean*

*Inherited from [Document](_core_document_.document.md).[addOption](_core_document_.document.md#addoption)*

Defined in core/Document.ts:102

Запись новой пары <id опции>:<значение> или перезапись старой. Если значение не валидно происходит отказ, иначе
запись и выполнение действий, если это [[OptionsSelect]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | [Option](_core_option_.option.md) id |
`value` | any | Новое значение ввода  |

**Returns:** *boolean*

___

###  check

▸ **check**(): *boolean*

*Inherited from [Document](_core_document_.document.md).[check](_core_document_.document.md#check)*

Defined in core/Document.ts:84

Проверяет, что все [Value](_core_document_.value.md) валидны для их [Option](_core_option_.option.md) (проверяет валидность каждой [Option](_core_option_.option.md))

**Returns:** *boolean*

___

###  getRejectReason

▸ **getRejectReason**(): *[Reason](_core_reason_.reason.md) | undefined*

*Inherited from [Document](_core_document_.document.md).[getRejectReason](_core_document_.document.md#getrejectreason)*

Defined in core/Document.ts:91

Возвращает первую причину отказа в успешности проверки или undefined если проверка успешна

**Returns:** *[Reason](_core_reason_.reason.md) | undefined*

___

###  getValue

▸ **getValue**(`id`: string): *any*

*Inherited from [Document](_core_document_.document.md).[getValue](_core_document_.document.md#getvalue)*

Defined in core/Document.ts:129

Возвращает значение по id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | [Option](_core_option_.option.md) id  |

**Returns:** *any*

___

###  processing

▸ **processing**(`contract?`: [ProductContractD](_discount_productcontractd_.productcontractd.md)): *boolean*

*Overrides [Document](_core_document_.document.md).[processing](_core_document_.document.md#processing)*

Defined in discount/DocumentD.ts:69

Применяет все активные для данного документа скидки. То есть проверяется, что они [productContract](_discount_documentd_.documentd.md#productcontract) и
[productContractModified](_discount_documentd_.documentd.md#productcontractmodified) соответсвуют заданому [DiscountContract](_discount_discountcontract_.discountcontract.md). Если [ProductContractD](_discount_productcontractd_.productcontractd.md) запрещает применять несколько скидок,
то применяет только первую. После чего расчитывает цену, время доставки,
а так же редактирует [productContractModified](_discount_documentd_.documentd.md#productcontractmodified) поле в соответствии с выбраными [[OptionsSelect]].
Иными словами, этот метод активирует все [Action](_core_action_.action.md) для выбраных [[OptionsSelect]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contract?` | [ProductContractD](_discount_productcontractd_.productcontractd.md) | [ProductContractD](_discount_productcontractd_.productcontractd.md) который использовать для сброса. Если не передан, то используется [productContract](_discount_documentd_.documentd.md#productcontract) поле |

**Returns:** *boolean*

Успешность расчёта

___

### `Static` build

▸ **build**(`__namedParameters`: object): *[DocumentD](_discount_documentd_.documentd.md)*

*Overrides [Document](_core_document_.document.md).[build](_core_document_.document.md#static-build)*

Defined in discount/DocumentD.ts:53

Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору. Обработка проихсодит рекурсивно, то есть
создаются новые [Value](_core_document_.value.md) и [ProductContractD](_discount_productcontractd_.productcontractd.md)

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`args` | [args](undefined) | Дополнительные поля (для внешних модулей) |
`productContract` | [ProductContractD](_discount_productcontractd_.productcontractd.md) | [ProductContractD](_discount_productcontractd_.productcontractd.md), может быть JSON или екземляр класса. Если это JSON, то будет создан новый екземпляр [ProductContractD](_discount_productcontractd_.productcontractd.md) на его основе, если это екземпляр, то он будет скопирован, опять же, рекурсивно |
`values` | [Value](_core_document_.value.md)[] | Массив пар id-значение. При создании не проверяется, для проверки используйте родительским метод validate |

**Returns:** *[DocumentD](_discount_documentd_.documentd.md)*

new [DocumentD](_discount_documentd_.documentd.md)
