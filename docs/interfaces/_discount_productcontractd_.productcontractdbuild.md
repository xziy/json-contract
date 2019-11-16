[json-contract](../README.md) › [Globals](../globals.md) › ["discount/ProductContractD"](../modules/_discount_productcontractd_.md) › [ProductContractDBuild](_discount_productcontractd_.productcontractdbuild.md)

# Interface: ProductContractDBuild

Содержит поля [ProductContractD](../classes/_discount_productcontractd_.productcontractd.md), который могут быть переданы при его создании с помощью метода build

## Hierarchy

  ↳ [ProductContractBuild](_core_productcontract_.productcontractbuild.md)

  ↳ **ProductContractDBuild**

## Implements

* [FormBuilder](_core_form_.formbuilder.md)

## Implemented by

* [ProductContractD](../classes/_discount_productcontractd_.productcontractd.md)

## Index

### Constructors

* [constructor](_discount_productcontractd_.productcontractdbuild.md#constructor)

### Properties

* [badge](_discount_productcontractd_.productcontractdbuild.md#badge)
* [currency](_discount_productcontractd_.productcontractdbuild.md#currency)
* [deliveryTime](_discount_productcontractd_.productcontractdbuild.md#deliverytime)
* [description](_discount_productcontractd_.productcontractdbuild.md#description)
* [discountAllowed](_discount_productcontractd_.productcontractdbuild.md#discountallowed)
* [discountCumulativeAllowed](_discount_productcontractd_.productcontractdbuild.md#discountcumulativeallowed)
* [discounts](_discount_productcontractd_.productcontractdbuild.md#discounts)
* [finish](_discount_productcontractd_.productcontractdbuild.md#finish)
* [locale](_discount_productcontractd_.productcontractdbuild.md#locale)
* [name](_discount_productcontractd_.productcontractdbuild.md#name)
* [options](_discount_productcontractd_.productcontractdbuild.md#options)
* [prefix](_discount_productcontractd_.productcontractdbuild.md#prefix)
* [price](_discount_productcontractd_.productcontractdbuild.md#price)
* [revision](_discount_productcontractd_.productcontractdbuild.md#revision)
* [specificationMinVersion](_discount_productcontractd_.productcontractdbuild.md#specificationminversion)
* [start](_discount_productcontractd_.productcontractdbuild.md#start)

### Methods

* [clone](_discount_productcontractd_.productcontractdbuild.md#clone)
* [getJSON](_discount_productcontractd_.productcontractdbuild.md#getjson)
* [getRejectReason](_discount_productcontractd_.productcontractdbuild.md#getrejectreason)
* [processing](_discount_productcontractd_.productcontractdbuild.md#processing)
* [validate](_discount_productcontractd_.productcontractdbuild.md#validate)
* [build](_discount_productcontractd_.productcontractdbuild.md#static-protected-build)

## Constructors

###  constructor

\+ **new ProductContractDBuild**(`options?`: [Option](../classes/_core_option_.option.md)[]): *[ProductContractDBuild](_discount_productcontractd_.productcontractdbuild.md)*

*Inherited from [Form](../classes/_core_form_.form.md).[constructor](../classes/_core_form_.form.md#constructor)*

Defined in core/Form.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [Option](../classes/_core_option_.option.md)[] |

**Returns:** *[ProductContractDBuild](_discount_productcontractd_.productcontractdbuild.md)*

## Properties

###  badge

• **badge**: *string*

*Inherited from [ProductContractBuild](_core_productcontract_.productcontractbuild.md).[badge](_core_productcontract_.productcontractbuild.md#badge)*

Defined in core/ProductContract.ts:163

___

###  currency

• **currency**: *string*

*Inherited from [ProductContractInput](_core_productcontract_.productcontractinput.md).[currency](_core_productcontract_.productcontractinput.md#currency)*

Defined in core/ProductContract.ts:175

___

###  deliveryTime

• **deliveryTime**: *number*

*Inherited from [ProductContractInput](_core_productcontract_.productcontractinput.md).[deliveryTime](_core_productcontract_.productcontractinput.md#deliverytime)*

Defined in core/ProductContract.ts:178

___

###  description

• **description**: *string*

*Inherited from [ProductContractInput](_core_productcontract_.productcontractinput.md).[description](_core_productcontract_.productcontractinput.md#description)*

Defined in core/ProductContract.ts:172

___

###  discountAllowed

• **discountAllowed**: *boolean*

Defined in discount/ProductContractD.ts:108

___

###  discountCumulativeAllowed

• **discountCumulativeAllowed**: *boolean*

Defined in discount/ProductContractD.ts:109

___

###  discounts

• **discounts**: *[DiscountContract](../classes/_discount_discountcontract_.discountcontract.md)[]*

Defined in discount/ProductContractD.ts:107

___

###  finish

• **finish**: *number*

*Inherited from [ProductContractInput](_core_productcontract_.productcontractinput.md).[finish](_core_productcontract_.productcontractinput.md#finish)*

Defined in core/ProductContract.ts:177

___

###  locale

• **locale**: *string*

*Inherited from [ProductContractBuild](_core_productcontract_.productcontractbuild.md).[locale](_core_productcontract_.productcontractbuild.md#locale)*

Defined in core/ProductContract.ts:161

___

###  name

• **name**: *string*

*Inherited from [ProductContractInput](_core_productcontract_.productcontractinput.md).[name](_core_productcontract_.productcontractinput.md#name)*

Defined in core/ProductContract.ts:171

___

###  options

• **options**: *[Option](../classes/_core_option_.option.md)[]*

*Inherited from [Form](../classes/_core_form_.form.md).[options](../classes/_core_form_.form.md#options)*

Defined in core/Form.ts:13

Массив [Option](../classes/_core_option_.option.md). По сути это набор полей для ввода, которые в этом классе проверяются и при необходисти иным образом
обрабатываются

___

###  prefix

• **prefix**: *string*

*Inherited from [ProductContractInput](_core_productcontract_.productcontractinput.md).[prefix](_core_productcontract_.productcontractinput.md#prefix)*

Defined in core/ProductContract.ts:173

___

###  price

• **price**: *number*

*Inherited from [ProductContractInput](_core_productcontract_.productcontractinput.md).[price](_core_productcontract_.productcontractinput.md#price)*

Defined in core/ProductContract.ts:174

___

###  revision

• **revision**: *number*

*Inherited from [ProductContractBuild](_core_productcontract_.productcontractbuild.md).[revision](_core_productcontract_.productcontractbuild.md#revision)*

Defined in core/ProductContract.ts:164

___

###  specificationMinVersion

• **specificationMinVersion**: *number*

*Inherited from [ProductContractBuild](_core_productcontract_.productcontractbuild.md).[specificationMinVersion](_core_productcontract_.productcontractbuild.md#specificationminversion)*

Defined in core/ProductContract.ts:162

___

###  start

• **start**: *number*

*Inherited from [ProductContractInput](_core_productcontract_.productcontractinput.md).[start](_core_productcontract_.productcontractinput.md#start)*

Defined in core/ProductContract.ts:176

## Methods

###  clone

▸ **clone**(): *[Form](../classes/_core_form_.form.md)*

*Inherited from [Form](../classes/_core_form_.form.md).[clone](../classes/_core_form_.form.md#clone)*

Defined in core/Form.ts:87

Создаёт глубокую копию текущего екземпляра.

**Returns:** *[Form](../classes/_core_form_.form.md)*

___

###  getJSON

▸ **getJSON**(): *any*

*Inherited from [Form](../classes/_core_form_.form.md).[getJSON](../classes/_core_form_.form.md#getjson)*

Defined in core/Form.ts:94

Создаёт JSON из текущего экземпляра. Метод противоположный [build](_discount_productcontractd_.productcontractdbuild.md#static-protected-build).

**Returns:** *any*

___

###  getRejectReason

▸ **getRejectReason**(`document`: [Document](../classes/_core_document_.document.md)): *[Reason](../classes/_core_reason_.reason.md) | undefined*

*Inherited from [Form](../classes/_core_form_.form.md).[getRejectReason](../classes/_core_form_.form.md#getrejectreason)*

Defined in core/Form.ts:51

Возращает причину не валидности документа или undefined если документ валидный.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [Document](../classes/_core_document_.document.md) |   |

**Returns:** *[Reason](../classes/_core_reason_.reason.md) | undefined*

___

###  processing

▸ **processing**(`document`: [Document](../classes/_core_document_.document.md), `contract?`: [ProductContract](../classes/_core_productcontract_.productcontract.md)): *void*

*Inherited from [Form](../classes/_core_form_.form.md).[processing](../classes/_core_form_.form.md#processing)*

Defined in core/Form.ts:78

Расчитывает цену, время доставки, а так же редактирует productContractModified переданого [Document](../classes/_core_document_.document.md) в соответствии
с выбраными [[OptionsSelect]]. Иными словами, этот метод активирует все [Action](../classes/_core_action_.action.md) для выбраных [SelectItem](../classes/_core_selectitem_.selectitem.md).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [Document](../classes/_core_document_.document.md) | документ, который нужно обработать |
`contract?` | [ProductContract](../classes/_core_productcontract_.productcontract.md) | [ProductContract](../classes/_core_productcontract_.productcontract.md) который использовать для сброса. Если не передан, то используется productContract переденого документа  |

**Returns:** *void*

___

###  validate

▸ **validate**(`document`: [Document](../classes/_core_document_.document.md)): *boolean*

*Inherited from [Form](../classes/_core_form_.form.md).[validate](../classes/_core_form_.form.md#validate)*

Defined in core/Form.ts:33

Проверяет, что переданый документ содержит валиданые значения для options этого екземляра

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`document` | [Document](../classes/_core_document_.document.md) | Документ, подлежащий проверке  |

**Returns:** *boolean*

___

### `Static` `Protected` build

▸ **build**(`__namedParameters`: object): *[Form](../classes/_core_form_.form.md)*

*Inherited from [Form](../classes/_core_form_.form.md).[build](../classes/_core_form_.form.md#static-protected-build)*

Defined in core/Form.ts:23

Создаёт документ из JSON. Используется только при клонировании. Как и другие методы build делает глубокое создание моделей

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`options` | [Option](../classes/_core_option_.option.md)[] |   |

**Returns:** *[Form](../classes/_core_form_.form.md)*
