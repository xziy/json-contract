[json-contract](../README.md) › [Globals](../globals.md) › ["discount/ProductContractD"](../modules/_discount_productcontractd_.md) › [ProductContractD](_discount_productcontractd_.productcontractd.md)

# Class: ProductContractD

Описывает контракт с скидками

## Hierarchy

  ↳ [ProductContract](_core_productcontract_.productcontract.md)

  ↳ **ProductContractD**

## Implements

* [FormBuilder](../interfaces/_core_form_.formbuilder.md)
* [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md)
* [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md)

## Indexable

* \[ **x**: *string*\]: any

Любые другие поля для внешних модулей

## Index

### Constructors

* [constructor](_discount_productcontractd_.productcontractd.md#constructor)

### Properties

* [badge](_discount_productcontractd_.productcontractd.md#badge)
* [contractId](_discount_productcontractd_.productcontractd.md#contractid)
* [controlHash](_discount_productcontractd_.productcontractd.md#controlhash)
* [currency](_discount_productcontractd_.productcontractd.md#currency)
* [deliveryTime](_discount_productcontractd_.productcontractd.md#deliverytime)
* [description](_discount_productcontractd_.productcontractd.md#description)
* [discountAllowed](_discount_productcontractd_.productcontractd.md#discountallowed)
* [discountCumulativeAllowed](_discount_productcontractd_.productcontractd.md#discountcumulativeallowed)
* [discounts](_discount_productcontractd_.productcontractd.md#discounts)
* [finish](_discount_productcontractd_.productcontractd.md#finish)
* [locale](_discount_productcontractd_.productcontractd.md#locale)
* [name](_discount_productcontractd_.productcontractd.md#name)
* [options](_discount_productcontractd_.productcontractd.md#options)
* [prefix](_discount_productcontractd_.productcontractd.md#prefix)
* [price](_discount_productcontractd_.productcontractd.md#price)
* [revision](_discount_productcontractd_.productcontractd.md#revision)
* [specificationMinVersion](_discount_productcontractd_.productcontractd.md#specificationminversion)
* [start](_discount_productcontractd_.productcontractd.md#start)

### Methods

* [clone](_discount_productcontractd_.productcontractd.md#clone)
* [getJSON](_discount_productcontractd_.productcontractd.md#getjson)
* [getRejectReason](_discount_productcontractd_.productcontractd.md#getrejectreason)
* [processing](_discount_productcontractd_.productcontractd.md#processing)
* [validate](_discount_productcontractd_.productcontractd.md#validate)
* [build](_discount_productcontractd_.productcontractd.md#static-build)

## Constructors

###  constructor

\+ **new ProductContractD**(`options`: [Option](_core_option_.option.md)[], `name`: string, `locale`: string, `description`: string, `specificationMinVersion`: number, `prefix`: string, `badge`: string, `price`: number, `currency`: string, `start`: number, `finish`: number, `discountAllowed`: boolean, `discountCumulativeAllowed`: boolean, `revision`: number, `deliveryTime`: number, `discounts`: [DiscountContract](_discount_discountcontract_.discountcontract.md)[], `args?`: [Property](../interfaces/_core_property_.property.md)‹[ProductContract](_core_productcontract_.productcontract.md)›[]): *[ProductContractD](_discount_productcontractd_.productcontractd.md)*

*Overrides [ProductContract](_core_productcontract_.productcontract.md).[constructor](_core_productcontract_.productcontract.md#constructor)*

Defined in discount/ProductContractD.ts:23

Если [discountAllowed](_discount_productcontractd_.productcontractd.md#discountallowed) не передан, устанавливает его в true.
Если [discountCumulativeAllowed](_discount_productcontractd_.productcontractd.md#discountcumulativeallowed) не передан, устанавливает его в true.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Option](_core_option_.option.md)[] | [Option](_core_option_.option.md)[], которые хранит этот контракт |
`name` | string | название |
`locale` | string | локализация |
`description` | string | описание |
`specificationMinVersion` | number | Минимальная версия модуля обработки контракта |
`prefix` | string | префикс |
`badge` | string | - |
`price` | number | цена |
`currency` | string | валюта |
`start` | number | время начала работы |
`finish` | number | время завершения работы |
`discountAllowed` | boolean | разрешение на применение скидок |
`discountCumulativeAllowed` | boolean | разрешение на суммирование скидок |
`revision` | number | - |
`deliveryTime` | number | время доставки |
`discounts` | [DiscountContract](_discount_discountcontract_.discountcontract.md)[] | - |
`args?` | [Property](../interfaces/_core_property_.property.md)‹[ProductContract](_core_productcontract_.productcontract.md)›[] | иные параметры  |

**Returns:** *[ProductContractD](_discount_productcontractd_.productcontractd.md)*

## Properties

###  badge

• **badge**: *string*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[badge](../interfaces/_discount_productcontractd_.productcontractdbuild.md#badge)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[badge](_core_productcontract_.productcontract.md#badge)*

Defined in core/ProductContract.ts:39

___

###  contractId

• **contractId**: *string*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[contractId](_core_productcontract_.productcontract.md#contractid)*

Defined in core/ProductContract.ts:27

UUID

___

###  controlHash

• **controlHash**: *string*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[controlHash](_core_productcontract_.productcontract.md#controlhash)*

Defined in core/ProductContract.ts:67

Хеш контракта

___

###  currency

• **currency**: *string*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[currency](../interfaces/_discount_productcontractd_.productcontractdbuild.md#currency)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[currency](_core_productcontract_.productcontract.md#currency)*

Defined in core/ProductContract.ts:47

Валюта

___

###  deliveryTime

• **deliveryTime**: *number*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[deliveryTime](../interfaces/_discount_productcontractd_.productcontractdbuild.md#deliverytime)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[deliveryTime](_core_productcontract_.productcontract.md#deliverytime)*

Defined in core/ProductContract.ts:63

Время доставки

___

###  description

• **description**: *string*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[description](../interfaces/_discount_productcontractd_.productcontractdbuild.md#description)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[description](_core_productcontract_.productcontract.md#description)*

Defined in core/ProductContract.ts:23

Описание

___

###  discountAllowed

• **discountAllowed**: *boolean*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[discountAllowed](../interfaces/_discount_productcontractd_.productcontractdbuild.md#discountallowed)*

Defined in discount/ProductContractD.ts:19

Разрешение на применение скидок

___

###  discountCumulativeAllowed

• **discountCumulativeAllowed**: *boolean*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[discountCumulativeAllowed](../interfaces/_discount_productcontractd_.productcontractdbuild.md#discountcumulativeallowed)*

Defined in discount/ProductContractD.ts:23

Разрешение на суммирование скидок, то есть применение более одной скидки одновременно

___

###  discounts

• **discounts**: *[DiscountContract](_discount_discountcontract_.discountcontract.md)[]*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[discounts](../interfaces/_discount_productcontractd_.productcontractdbuild.md#discounts)*

Defined in discount/ProductContractD.ts:15

Локальные скидки, которые может применить этот контракт. При применении этих скидок проверка [DiscountContract.selects](_discount_discountcontract_.discountcontract.md#selects)
игнорируется, проверяются только условия [DiscountContract.conditions](_discount_discountcontract_.discountcontract.md#conditions).

___

###  finish

• **finish**: *number*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[finish](../interfaces/_discount_productcontractd_.productcontractdbuild.md#finish)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[finish](_core_productcontract_.productcontract.md#finish)*

Defined in core/ProductContract.ts:55

Время завершения работы контракта

___

###  locale

• **locale**: *string*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[locale](../interfaces/_discount_productcontractd_.productcontractdbuild.md#locale)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[locale](_core_productcontract_.productcontract.md#locale)*

Defined in core/ProductContract.ts:19

Локализация

___

###  name

• **name**: *string*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[name](../interfaces/_discount_productcontractd_.productcontractdbuild.md#name)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[name](_core_productcontract_.productcontract.md#name)*

Defined in core/ProductContract.ts:15

Название

___

###  options

• **options**: *[Option](_core_option_.option.md)[]*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[options](../interfaces/_discount_productcontractd_.productcontractdbuild.md#options)*

*Inherited from [Form](_core_form_.form.md).[options](_core_form_.form.md#options)*

Defined in core/Form.ts:13

Массив [Option](_core_option_.option.md). По сути это набор полей для ввода, которые в этом классе проверяются и при необходисти иным образом
обрабатываются

___

###  prefix

• **prefix**: *string*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[prefix](../interfaces/_discount_productcontractd_.productcontractdbuild.md#prefix)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[prefix](_core_productcontract_.productcontract.md#prefix)*

Defined in core/ProductContract.ts:35

Префикс

___

###  price

• **price**: *number*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[price](../interfaces/_discount_productcontractd_.productcontractdbuild.md#price)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[price](_core_productcontract_.productcontract.md#price)*

Defined in core/ProductContract.ts:43

Цена контракта

___

###  revision

• **revision**: *number*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[revision](../interfaces/_discount_productcontractd_.productcontractdbuild.md#revision)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[revision](_core_productcontract_.productcontract.md#revision)*

Defined in core/ProductContract.ts:59

___

###  specificationMinVersion

• **specificationMinVersion**: *number*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[specificationMinVersion](../interfaces/_discount_productcontractd_.productcontractdbuild.md#specificationminversion)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[specificationMinVersion](_core_productcontract_.productcontract.md#specificationminversion)*

Defined in core/ProductContract.ts:31

Минимальная версия модуля обработки контракта

___

###  start

• **start**: *number*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md).[start](../interfaces/_discount_productcontractd_.productcontractdbuild.md#start)*

*Inherited from [ProductContract](_core_productcontract_.productcontract.md).[start](_core_productcontract_.productcontract.md#start)*

Defined in core/ProductContract.ts:51

Время начала работы контракта

## Methods

###  clone

▸ **clone**(): *[ProductContractD](_discount_productcontractd_.productcontractd.md)*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md)*

*Overrides [ProductContract](_core_productcontract_.productcontract.md).[clone](_core_productcontract_.productcontract.md#clone)*

Defined in discount/ProductContractD.ts:91

Создаёт глубокую копию текущего екземпляра

**Returns:** *[ProductContractD](_discount_productcontractd_.productcontractd.md)*

___

###  getJSON

▸ **getJSON**(): *any*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md)*

*Overrides [ProductContract](_core_productcontract_.productcontract.md).[getJSON](_core_productcontract_.productcontract.md#getjson)*

Defined in discount/ProductContractD.ts:98

 Создаёт JSON из текущего экземпляра. Метод противоположный [build](_discount_productcontractd_.productcontractd.md#static-build)

**Returns:** *any*

___

###  getRejectReason

▸ **getRejectReason**(`document`: [Document](_core_document_.document.md)): *[Reason](_core_reason_.reason.md) | undefined*

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md)*

*Inherited from [Form](_core_form_.form.md).[getRejectReason](_core_form_.form.md#getrejectreason)*

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

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md)*

*Inherited from [Form](_core_form_.form.md).[processing](_core_form_.form.md#processing)*

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

*Implementation of [ProductContractDBuild](../interfaces/_discount_productcontractd_.productcontractdbuild.md)*

*Inherited from [Form](_core_form_.form.md).[validate](_core_form_.form.md#validate)*

Defined in core/Form.ts:33

Проверяет, что переданый документ содержит валиданые значения для options этого екземляра

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [Document](_core_document_.document.md) | Документ, подлежащий проверке  |

**Returns:** *boolean*

___

### `Static` build

▸ **build**(`__namedParameters`: object): *[ProductContractD](_discount_productcontractd_.productcontractd.md)*

*Overrides [ProductContract](_core_productcontract_.productcontract.md).[build](_core_productcontract_.productcontract.md#static-build)*

Defined in discount/ProductContractD.ts:79

Создаёт новый ProductContractD из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
При передаче как параметра екземпляра ProductContractD будет осущствлена попытка его скопировать, однако для таких целей
лучше использовать метод [clone](_discount_productcontractd_.productcontractd.md#clone). Данный метод выступает как парсер из JSON в объект, а не как клонирование

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`args` | [args](undefined) | иные параметры  |
`badge` | string | - |
`currency` | string | валюта |
`deliveryTime` | number | время доставки |
`description` | string | описание |
`discountAllowed` | boolean | разрешение на применение скидок |
`discountCumulativeAllowed` | boolean | разрешение на суммирование скидок |
`discounts` | [DiscountContract](_discount_discountcontract_.discountcontract.md)[] | - |
`finish` | number | время завершения работы |
`locale` | string | локализация |
`name` | string | название |
`options` | [Option](_core_option_.option.md)[] | [Option](_core_option_.option.md)[], которые хранит этот контракт |
`prefix` | string | префикс |
`price` | number | цена |
`revision` | number | - |
`specificationMinVersion` | number | Минимальная версия модуля обработки контракта |
`start` | number | время начала работы |

**Returns:** *[ProductContractD](_discount_productcontractd_.productcontractd.md)*
