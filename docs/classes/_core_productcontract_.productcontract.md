[json-contract](../README.md) › [Globals](../globals.md) › ["core/ProductContract"](../modules/_core_productcontract_.md) › [ProductContract](_core_productcontract_.productcontract.md)

# Class: ProductContract

Класс, являющийся шаблоном для заполнения. Хранит в себе общие данные для будущего документа. В документе хранится два
екземпляра ProductContract, один для хранения начальных настроек, второй для изменения с помощью [Action](_core_action_.action.md)

## Hierarchy

* [Form](_core_form_.form.md)

  ↳ **ProductContract**

  ↳ [ProductContractD](_discount_productcontractd_.productcontractd.md)

## Implements

* [FormBuilder](../interfaces/_core_form_.formbuilder.md)
* [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md)

## Indexable

* \[ **x**: *string*\]: any

Любые другие поля для внешних модулей

## Index

### Constructors

* [constructor](_core_productcontract_.productcontract.md#constructor)

### Properties

* [badge](_core_productcontract_.productcontract.md#badge)
* [contractId](_core_productcontract_.productcontract.md#contractid)
* [controlHash](_core_productcontract_.productcontract.md#controlhash)
* [currency](_core_productcontract_.productcontract.md#currency)
* [deliveryTime](_core_productcontract_.productcontract.md#deliverytime)
* [description](_core_productcontract_.productcontract.md#description)
* [finish](_core_productcontract_.productcontract.md#finish)
* [locale](_core_productcontract_.productcontract.md#locale)
* [name](_core_productcontract_.productcontract.md#name)
* [options](_core_productcontract_.productcontract.md#options)
* [prefix](_core_productcontract_.productcontract.md#prefix)
* [price](_core_productcontract_.productcontract.md#price)
* [revision](_core_productcontract_.productcontract.md#revision)
* [specificationMinVersion](_core_productcontract_.productcontract.md#specificationminversion)
* [start](_core_productcontract_.productcontract.md#start)

### Methods

* [clone](_core_productcontract_.productcontract.md#clone)
* [getJSON](_core_productcontract_.productcontract.md#getjson)
* [getRejectReason](_core_productcontract_.productcontract.md#getrejectreason)
* [processing](_core_productcontract_.productcontract.md#processing)
* [validate](_core_productcontract_.productcontract.md#validate)
* [build](_core_productcontract_.productcontract.md#static-build)

## Constructors

###  constructor

\+ **new ProductContract**(`options`: [Option](_core_option_.option.md)[], `name`: string, `locale`: string, `description`: string, `specificationMinVersion`: number, `prefix`: string, `badge`: string, `price`: number, `currency`: string, `start`: number, `finish`: number, `revision`: number, `deliveryTime`: number, `args?`: [Property](../interfaces/_core_property_.property.md)‹[ProductContract](_core_productcontract_.productcontract.md)›[]): *[ProductContract](_core_productcontract_.productcontract.md)*

*Overrides [Form](_core_form_.form.md).[constructor](_core_form_.form.md#constructor)*

Defined in core/ProductContract.ts:72

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
`revision` | number | - |
`deliveryTime` | number | время доставки |
`args?` | [Property](../interfaces/_core_property_.property.md)‹[ProductContract](_core_productcontract_.productcontract.md)›[] | иные параметры  |

**Returns:** *[ProductContract](_core_productcontract_.productcontract.md)*

## Properties

###  badge

• **badge**: *string*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[badge](../interfaces/_core_productcontract_.productcontractbuild.md#badge)*

Defined in core/ProductContract.ts:39

___

###  contractId

• **contractId**: *string*

Defined in core/ProductContract.ts:27

UUID

___

###  controlHash

• **controlHash**: *string*

Defined in core/ProductContract.ts:67

Хеш контракта

___

###  currency

• **currency**: *string*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[currency](../interfaces/_core_productcontract_.productcontractbuild.md#currency)*

Defined in core/ProductContract.ts:47

Валюта

___

###  deliveryTime

• **deliveryTime**: *number*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[deliveryTime](../interfaces/_core_productcontract_.productcontractbuild.md#deliverytime)*

Defined in core/ProductContract.ts:63

Время доставки

___

###  description

• **description**: *string*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[description](../interfaces/_core_productcontract_.productcontractbuild.md#description)*

Defined in core/ProductContract.ts:23

Описание

___

###  finish

• **finish**: *number*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[finish](../interfaces/_core_productcontract_.productcontractbuild.md#finish)*

Defined in core/ProductContract.ts:55

Время завершения работы контракта

___

###  locale

• **locale**: *string*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[locale](../interfaces/_core_productcontract_.productcontractbuild.md#locale)*

Defined in core/ProductContract.ts:19

Локализация

___

###  name

• **name**: *string*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[name](../interfaces/_core_productcontract_.productcontractbuild.md#name)*

Defined in core/ProductContract.ts:15

Название

___

###  options

• **options**: *[Option](_core_option_.option.md)[]*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[options](../interfaces/_core_productcontract_.productcontractbuild.md#options)*

*Inherited from [Form](_core_form_.form.md).[options](_core_form_.form.md#options)*

Defined in core/Form.ts:13

Массив [Option](_core_option_.option.md). По сути это набор полей для ввода, которые в этом классе проверяются и при необходисти иным образом
обрабатываются

___

###  prefix

• **prefix**: *string*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[prefix](../interfaces/_core_productcontract_.productcontractbuild.md#prefix)*

Defined in core/ProductContract.ts:35

Префикс

___

###  price

• **price**: *number*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[price](../interfaces/_core_productcontract_.productcontractbuild.md#price)*

Defined in core/ProductContract.ts:43

Цена контракта

___

###  revision

• **revision**: *number*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[revision](../interfaces/_core_productcontract_.productcontractbuild.md#revision)*

Defined in core/ProductContract.ts:59

___

###  specificationMinVersion

• **specificationMinVersion**: *number*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[specificationMinVersion](../interfaces/_core_productcontract_.productcontractbuild.md#specificationminversion)*

Defined in core/ProductContract.ts:31

Минимальная версия модуля обработки контракта

___

###  start

• **start**: *number*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md).[start](../interfaces/_core_productcontract_.productcontractbuild.md#start)*

Defined in core/ProductContract.ts:51

Время начала работы контракта

## Methods

###  clone

▸ **clone**(): *[ProductContract](_core_productcontract_.productcontract.md)*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md)*

*Overrides [Form](_core_form_.form.md).[clone](_core_form_.form.md#clone)*

Defined in core/ProductContract.ts:145

Создаёт глубокую копию текущего екземпляра

**Returns:** *[ProductContract](_core_productcontract_.productcontract.md)*

___

###  getJSON

▸ **getJSON**(): *any*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md)*

*Overrides [Form](_core_form_.form.md).[getJSON](_core_form_.form.md#getjson)*

Defined in core/ProductContract.ts:152

Создаёт JSON из текущего экземпляра. Метод противоположный [build](_core_productcontract_.productcontract.md#static-build)

**Returns:** *any*

___

###  getRejectReason

▸ **getRejectReason**(`document`: [Document](_core_document_.document.md)): *[Reason](_core_reason_.reason.md) | undefined*

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md)*

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

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md)*

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

*Implementation of [ProductContractBuild](../interfaces/_core_productcontract_.productcontractbuild.md)*

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

▸ **build**(`__namedParameters`: object): *[ProductContract](_core_productcontract_.productcontract.md)*

*Overrides [Form](_core_form_.form.md).[build](_core_form_.form.md#static-protected-build)*

Defined in core/ProductContract.ts:134

Создаёт новый ProductContract из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
При передаче как параметра екземпляра ProductContract будет осущствлена попытка его скопировать, однако для таких целей
лучше использовать метод [clone](_core_productcontract_.productcontract.md#clone). Данный метод выступает как парсер из JSON в объект, а не как клонирование

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`args` | [args](undefined) | иные параметры  |
`badge` | string | - |
`currency` | string | валюта |
`deliveryTime` | number | время доставки |
`description` | string | описание |
`finish` | number | время завершения работы |
`locale` | string | локализация |
`name` | string | название |
`options` | [Option](_core_option_.option.md)[] | [Option](_core_option_.option.md)[], которые хранит этот контракт |
`prefix` | string | - |
`price` | number | цена |
`revision` | number | - |
`specificationMinVersion` | number | Минимальная версия модуля обработки контракта |
`start` | number | время начала работы |

**Returns:** *[ProductContract](_core_productcontract_.productcontract.md)*
