[json-contract](../README.md) › [Globals](../globals.md) › ["discount/DiscountContract"](../modules/_discount_discountcontract_.md) › [DiscountContract](_discount_discountcontract_.discountcontract.md)

# Class: DiscountContract

Описывает скидки. Хранит условия применения на начальный и изменённый контракт и действия, которые следует выполнять
при выполнении указанных условий

## Hierarchy

* **DiscountContract**

## Index

### Constructors

* [constructor](_discount_discountcontract_.discountcontract.md#constructor)

### Properties

* [actions](_discount_discountcontract_.discountcontract.md#actions)
* [conditions](_discount_discountcontract_.discountcontract.md#conditions)
* [id](_discount_discountcontract_.discountcontract.md#id)
* [name](_discount_discountcontract_.discountcontract.md#name)
* [selects](_discount_discountcontract_.discountcontract.md#selects)
* [specificationMinVersion](_discount_discountcontract_.discountcontract.md#specificationminversion)

### Methods

* [activate](_discount_discountcontract_.discountcontract.md#activate)
* [canUseForContract](_discount_discountcontract_.discountcontract.md#canuseforcontract)
* [isActive](_discount_discountcontract_.discountcontract.md#isactive)
* [build](_discount_discountcontract_.discountcontract.md#static-build)

## Constructors

###  constructor

\+ **new DiscountContract**(`id`: string, `name`: string, `condition`: [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[], `specificationMinVersion`: number, `selects`: [Select](_discount_select_.select.md)[], `actions`: [Action](_core_action_.action.md)[]): *[DiscountContract](_discount_discountcontract_.discountcontract.md)*

Defined in discount/DiscountContract.ts:41

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`name` | string | название |
`condition` | [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[] | условия применения для изначального [ProductContract](_core_productcontract_.productcontract.md) в поле [Document.productContract](_core_document_.document.md#productcontract) |
`specificationMinVersion` | number | минимальная версия модуля |
`selects` | [Select](_discount_select_.select.md)[] | условия применения для модифицированого [ProductContract](_core_productcontract_.productcontract.md) в поле [Document.productContractModified](_core_document_.document.md#productcontractmodified) |
`actions` | [Action](_core_action_.action.md)[] | действия скидки  |

**Returns:** *[DiscountContract](_discount_discountcontract_.discountcontract.md)*

## Properties

###  actions

• **actions**: *[Action](_core_action_.action.md)[]*

Defined in discount/DiscountContract.ts:41

Действия, которые следует выполнять при применении скилки

___

###  conditions

• **conditions**: *[ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[]*

Defined in discount/DiscountContract.ts:26

Условия применения на конкретный документ. Данное поле содержит данные проверки того, что конкретный документ
в поле [Document.productContractModified](_core_document_.document.md#productcontractmodified) хранится контракт, подходящих записанным тут условия. Условия в массиве
обрабатываются логическим И (то есть, если хотя бы одно из условий в массиве не будет выполнено, то результат работы
функции проверки будет отрицательным).

___

###  id

• **id**: *string*

Defined in discount/DiscountContract.ts:15

id скидки

___

###  name

• **name**: *string*

Defined in discount/DiscountContract.ts:19

Название скидки

___

###  selects

• **selects**: *[Select](_discount_select_.select.md)[]*

Defined in discount/DiscountContract.ts:37

Условия применения на [ProductContract](_core_productcontract_.productcontract.md). Данное поле содержит данные проверки того, что [ProductContract](_core_productcontract_.productcontract.md) документа
в поле [Document.productContract](_core_document_.document.md#productcontract) хранится контракт, подходящих записанным тут условия. Условия в массиве
обрабатываются логическим И (то есть, если хотя бы одно из условий в массиве не будет выполнено, то результат работы
функции проверки будет отрицательным).

___

###  specificationMinVersion

• **specificationMinVersion**: *number*

Defined in discount/DiscountContract.ts:30

Минимальная версия модуля обработки скидки

## Methods

###  activate

▸ **activate**(`document`: [DocumentD](_discount_documentd_.documentd.md)): *void*

Defined in discount/DiscountContract.ts:121

Активация скидки для некоторого документа. Применение происходит непосредственно, игнорируя все проверки. Перед использованием
этой функции рекомендуется проверить возможно ли применять скидку на переданный документ.
Активация подразумевает под собой выполнение всех действий, записаных в [actions](_discount_discountcontract_.discountcontract.md#actions).
Данная функция не занимается обнулением функции, для добавления скидки в документ рекомендуется использовать
[DocumentD.addDiscount](_discount_documentd_.documentd.md#adddiscount)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [DocumentD](_discount_documentd_.documentd.md) | документ, к которому следует применить скидку  |

**Returns:** *void*

___

###  canUseForContract

▸ **canUseForContract**(`contract`: [ProductContractD](_discount_productcontractd_.productcontractd.md)): *boolean*

Defined in discount/DiscountContract.ts:105

Проверяет, что текущую скидку можно применить к некоторому [ProductContract](_core_productcontract_.productcontract.md). Проверяет его поля по условиям, записанными
в поле [selects](_discount_discountcontract_.discountcontract.md#selects).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contract` | [ProductContractD](_discount_productcontractd_.productcontractd.md) | контракт, к которому проверяетяся можно ли применить скидку  |

**Returns:** *boolean*

___

###  isActive

▸ **isActive**(`document`: [DocumentD](_discount_documentd_.documentd.md)): *boolean*

Defined in discount/DiscountContract.ts:86

Проверяет, что текущую скидку можно применить к некоторому [Document](_core_document_.document.md). Проверяется [Document.productContract](_core_document_.document.md#productcontract) по
условиям хранящимся в [selects](_discount_discountcontract_.discountcontract.md#selects) и [Document.productContractModified](_core_document_.document.md#productcontractmodified) по условиям хранящимся в [conditions](_discount_discountcontract_.discountcontract.md#conditions).
Если [selects](_discount_discountcontract_.discountcontract.md#selects) или [conditions](_discount_discountcontract_.discountcontract.md#conditions) несколько, то результат работы это логическое И результата проверки каждой
(при отказе любого условия будет общий отказ функции).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [DocumentD](_discount_documentd_.documentd.md) | документ, к которому проверяетяся можно ли применить скидку  |

**Returns:** *boolean*

___

### `Static` build

▸ **build**(`__namedParameters`: object): *[DiscountContract](_discount_discountcontract_.discountcontract.md)*

Defined in discount/DiscountContract.ts:72

Создаёт новый DiscountContract из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
При передаче как параметра екземпляра DiscountContract будет осущствлена попытка его скопировать, однако для таких целей
лучше использовать метод [clone](_core_form_.form.md#clone). Данный метод выступает как парсер из JSON в объект, а не как клонирование

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`actions` | [Action](_core_action_.action.md)[] | действия скидки  |
`conditions` | [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[] | - |
`id` | string | id |
`name` | string | название |
`selects` | [Select](_discount_select_.select.md)[] | условия применения для модифицированого [ProductContract](_core_productcontract_.productcontract.md) в поле [Document.productContractModified](_core_document_.document.md#productcontractmodified) |
`specificationMinVersion` | number | минимальная версия модуля |

**Returns:** *[DiscountContract](_discount_discountcontract_.discountcontract.md)*
