[json-contract](../README.md) › [Globals](../globals.md) › ["core/Document"](../modules/_core_document_.md) › [Document](_core_document_.document.md)

# Class: Document

Основной класс. Документ хранит пары id-зачение для некоторого [ProductContract](_core_productcontract_.productcontract.md), сам [ProductContract](_core_productcontract_.productcontract.md) и копию
[ProductContract](_core_productcontract_.productcontract.md), которая может меняться [Action](_core_action_.action.md). Эти [Action](_core_action_.action.md) могут быть активированы [OptionSelect](_core_optionselect_.optionselect.md) посредством выбора юзера
которого из вариантов. Активация [Action](_core_action_.action.md) происходит в момент записи новой пары OptionSelectId-значение. Документ по
сути своей является наполнением для [ProductContract](_core_productcontract_.productcontract.md)

## Hierarchy

* **Document**

  ↳ [DocumentD](_discount_documentd_.documentd.md)

## Implements

* [DocumentBuild](../interfaces/_core_document_.documentbuild.md)

## Indexable

* \[ **x**: *string*\]: any

Любые другие поля для внешних модулей

## Index

### Constructors

* [constructor](_core_document_.document.md#constructor)

### Properties

* [controlHash](_core_document_.document.md#controlhash)
* [documentId](_core_document_.document.md#documentid)
* [productContract](_core_document_.document.md#productcontract)
* [productContractModified](_core_document_.document.md#productcontractmodified)
* [values](_core_document_.document.md#values)

### Methods

* [addOption](_core_document_.document.md#addoption)
* [check](_core_document_.document.md#check)
* [getRejectReason](_core_document_.document.md#getrejectreason)
* [getValue](_core_document_.document.md#getvalue)
* [processing](_core_document_.document.md#processing)
* [build](_core_document_.document.md#static-build)

## Constructors

###  constructor

\+ **new Document**(`productContract`: [ProductContract](_core_productcontract_.productcontract.md)): *[Document](_core_document_.document.md)*

Defined in core/Document.ts:40

При создании генерирует [documentId](_core_document_.document.md#documentid) и клонирует [ProductContract](_core_productcontract_.productcontract.md) в [productContractModified](_core_document_.document.md#productcontractmodified)
При создании генерирует [documentId](_core_document_.document.md#documentid) и клонирует [ProductContract](_core_productcontract_.productcontract.md) в [productContractModified](_core_document_.document.md#productcontractmodified)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`productContract` | [ProductContract](_core_productcontract_.productcontract.md) | [ProductContract](_core_productcontract_.productcontract.md) для которого предназначен документ |

**Returns:** *[Document](_core_document_.document.md)*

\+ **new Document**(`productContract`: [ProductContract](_core_productcontract_.productcontract.md), `values?`: [Value](_core_document_.value.md)[]): *[Document](_core_document_.document.md)*

Defined in core/Document.ts:42

При создании генерирует [documentId](_core_document_.document.md#documentid) и клонирует [ProductContract](_core_productcontract_.productcontract.md) в [productContractModified](_core_document_.document.md#productcontractmodified)
При создании генерирует [documentId](_core_document_.document.md#documentid) и клонирует [ProductContract](_core_productcontract_.productcontract.md) в [productContractModified](_core_document_.document.md#productcontractmodified)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`productContract` | [ProductContract](_core_productcontract_.productcontract.md) | [ProductContract](_core_productcontract_.productcontract.md) для которого предназначен документ |
`values?` | [Value](_core_document_.value.md)[] | Массив, если такие уже есть |

**Returns:** *[Document](_core_document_.document.md)*

\+ **new Document**(`productContract`: [ProductContract](_core_productcontract_.productcontract.md), `values?`: [Value](_core_document_.value.md)[], `args?`: [Property](../interfaces/_core_property_.property.md)‹[Document](_core_document_.document.md)›[]): *[Document](_core_document_.document.md)*

Defined in core/Document.ts:43

При создании генерирует [documentId](_core_document_.document.md#documentid) и клонирует [ProductContract](_core_productcontract_.productcontract.md) в [productContractModified](_core_document_.document.md#productcontractmodified)
При создании генерирует [documentId](_core_document_.document.md#documentid) и клонирует [ProductContract](_core_productcontract_.productcontract.md) в [productContractModified](_core_document_.document.md#productcontractmodified)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`productContract` | [ProductContract](_core_productcontract_.productcontract.md) | [ProductContract](_core_productcontract_.productcontract.md) для которого предназначен документ |
`values?` | [Value](_core_document_.value.md)[] | Массив, если такие уже есть |
`args?` | [Property](../interfaces/_core_property_.property.md)‹[Document](_core_document_.document.md)›[] | Дополнительные поля (для внешних модулей)  |

**Returns:** *[Document](_core_document_.document.md)*

## Properties

###  controlHash

• **controlHash**: *string*

Defined in core/Document.ts:22

Хеш документа

___

###  documentId

• **documentId**: *string*

Defined in core/Document.ts:30

Just uuid

___

###  productContract

• **productContract**: *[ProductContract](_core_productcontract_.productcontract.md)*

*Implementation of [DocumentBuild](../interfaces/_core_document_.documentbuild.md).[productContract](../interfaces/_core_document_.documentbuild.md#productcontract)*

Defined in core/Document.ts:18

[ProductContract](_core_productcontract_.productcontract.md) шаблон, используется при сбросе для расчёта стоимости, врени доставки и прочих изменений

___

###  productContractModified

• **productContractModified**: *[ProductContract](_core_productcontract_.productcontract.md)*

Defined in core/Document.ts:35

[[ProductContact]] который может быть модифицирован с помощью [Action](_core_action_.action.md). [Value](_core_document_.value.md) нём могут меняться почти любые
поля, при расчёте именно он хранит в себе результат работы функции процессинга документа

___

###  values

• **values**: *[Value](_core_document_.value.md)[]*

*Implementation of [DocumentBuild](../interfaces/_core_document_.documentbuild.md).[values](../interfaces/_core_document_.documentbuild.md#values)*

Defined in core/Document.ts:26

Данные ввода. Хранят пары <id опции>:<значение опции>

## Methods

###  addOption

▸ **addOption**(`id`: string, `value`: any): *boolean*

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

Defined in core/Document.ts:84

Проверяет, что все [Value](_core_document_.value.md) валидны для их [Option](_core_option_.option.md) (проверяет валидность каждой [Option](_core_option_.option.md))

**Returns:** *boolean*

___

###  getRejectReason

▸ **getRejectReason**(): *[Reason](_core_reason_.reason.md) | undefined*

Defined in core/Document.ts:91

Возвращает первую причину отказа в успешности проверки или undefined если проверка успешна

**Returns:** *[Reason](_core_reason_.reason.md) | undefined*

___

###  getValue

▸ **getValue**(`id`: string): *any*

Defined in core/Document.ts:129

Возвращает значение по id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | [Option](_core_option_.option.md) id  |

**Returns:** *any*

___

###  processing

▸ **processing**(`contract?`: [ProductContract](_core_productcontract_.productcontract.md)): *boolean*

Defined in core/Document.ts:140

Расчитывает цену, время доставки, а так же редактирует [productContractModified](_core_document_.document.md#productcontractmodified) поле в соответствии с выбраными [[OptionsSelect]].
Иными словами, этот метод активирует все [Action](_core_action_.action.md) для выбраных [[OptionsSelect]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contract?` | [ProductContract](_core_productcontract_.productcontract.md) | [ProductContract](_core_productcontract_.productcontract.md) который использовать для сброса. Если не передан, то используется [productContract](_core_document_.document.md#productcontract) поле |

**Returns:** *boolean*

Успешность расчёта

___

### `Static` build

▸ **build**(`__namedParameters`: object): *[Document](_core_document_.document.md)*

Defined in core/Document.ts:75

Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору. Обработка проихсодит рекурсивно, то есть
создаются новые [Value](_core_document_.value.md) и [ProductContract](_core_productcontract_.productcontract.md)

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`args` | [args](undefined) | Дополнительные поля (для внешних модулей) |
`productContract` | [ProductContract](_core_productcontract_.productcontract.md) | [ProductContract](_core_productcontract_.productcontract.md), может быть JSON или екземляр класса. Если это JSON, то будет создан новый екземпляр [ProductContract](_core_productcontract_.productcontract.md) на его основе, если это екземпляр, то он будет скопирован, опять же, рекурсивно |
`values` | [Value](_core_document_.value.md)[] | Массив пар id-значение. При создании не проверяется, для проверки используйте метод [validate](_core_optionstring_.optionstring.md#validate) |

**Returns:** *[Document](_core_document_.document.md)*

new [Document](_core_document_.document.md)
