[json-contract](../README.md) › [Globals](../globals.md) › ["core/Action"](../modules/_core_action_.md) › [Action](_core_action_.action.md)

# Class: Action

Описывает действия. Может менять поля ProductContract, стоимость, время доставки и свойство видимости Option

## Hierarchy

* **Action**

## Implements

* [ActionBuilder](../interfaces/_core_action_.actionbuilder.md)‹[ProductContract](_core_productcontract_.productcontract.md)›

## Index

### Constructors

* [constructor](_core_action_.action.md#constructor)

### Properties

* [_setDiscountInPercentage](_core_action_.action.md#private-optional-_setdiscountinpercentage)
* [changeProperties](_core_action_.action.md#optional-changeproperties)
* [hideOptionsById](_core_action_.action.md#optional-hideoptionsbyid)
* [modifyDeliveryTime](_core_action_.action.md#optional-modifydeliverytime)
* [modifyPrice](_core_action_.action.md#optional-modifyprice)
* [setCustomProperties](_core_action_.action.md#optional-setcustomproperties)
* [showOptionsById](_core_action_.action.md#optional-showoptionsbyid)

### Accessors

* [setDiscountInPercentage](_core_action_.action.md#setdiscountinpercentage)

### Methods

* [activate](_core_action_.action.md#activate)
* [build](_core_action_.action.md#static-build)

## Constructors

###  constructor

\+ **new Action**(`setDiscountInPercentage?`: undefined | number, `modifyPrice?`: [Changeable](_core_changeable_.changeable.md), `modifyDeliveryTime?`: [Changeable](_core_changeable_.changeable.md), `hideOptionById?`: string[], `showOptionsById?`: string[], `changeProperties?`: [Property](../interfaces/_core_property_.property.md)‹[ProductContract](_core_productcontract_.productcontract.md)›[], `setCustomProperties?`: [Property](../interfaces/_core_property_.property.md)‹any›[]): *[Action](_core_action_.action.md)*

Defined in core/Action.ts:33

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`setDiscountInPercentage?` | undefined &#124; number | значение скидки |
`modifyPrice?` | [Changeable](_core_changeable_.changeable.md) | изменение цены |
`modifyDeliveryTime?` | [Changeable](_core_changeable_.changeable.md) | изменение времени доставки |
`hideOptionById?` | string[] | массив строк, которые не будут больше показываться |
`showOptionsById?` | string[] | массив строк, которые следует показать |
`changeProperties?` | [Property](../interfaces/_core_property_.property.md)‹[ProductContract](_core_productcontract_.productcontract.md)›[] | массив пар ключ-значение, которые будут заменены в [ProductContract](_core_productcontract_.productcontract.md) |
`setCustomProperties?` | [Property](../interfaces/_core_property_.property.md)‹any›[] | массив пар ключ-значение, которые будут добавлены в [ProductContract](_core_productcontract_.productcontract.md)  |

**Returns:** *[Action](_core_action_.action.md)*

## Properties

### `Private` `Optional` _setDiscountInPercentage

• **_setDiscountInPercentage**? : *undefined | number*

Defined in core/Action.ts:61

Добавить скидку. Это поле содержит некоторое значение от 0 до 100

___

### `Optional` changeProperties

• **changeProperties**? : *[Property](../interfaces/_core_property_.property.md)‹[ProductContract](_core_productcontract_.productcontract.md)›[]*

*Implementation of [ActionBuilder](../interfaces/_core_action_.actionbuilder.md).[changeProperties](../interfaces/_core_action_.actionbuilder.md#optional-changeproperties)*

Defined in core/Action.ts:29

Массив пар <ключ>-<новое значение>, которые будут изменены в переданом [ProductContract](_core_productcontract_.productcontract.md)

___

### `Optional` hideOptionsById

• **hideOptionsById**? : *string[]*

*Implementation of [ActionBuilder](../interfaces/_core_action_.actionbuilder.md).[hideOptionsById](../interfaces/_core_action_.actionbuilder.md#optional-hideoptionsbyid)*

Defined in core/Action.ts:21

Массив строк, каждая из которых является id [Option](_core_option_.option.md) некоторого обрабатываемого [ProductContract](_core_productcontract_.productcontract.md). При выполнении
их параметр isHidden будет изменён на true

___

### `Optional` modifyDeliveryTime

• **modifyDeliveryTime**? : *[Changeable](_core_changeable_.changeable.md)*

*Implementation of [ActionBuilder](../interfaces/_core_action_.actionbuilder.md).[modifyDeliveryTime](../interfaces/_core_action_.actionbuilder.md#optional-modifydeliverytime)*

Defined in core/Action.ts:16

Изменение времени доставки. Аналогично [modifyPrice](_core_action_.action.md#optional-modifyprice)

___

### `Optional` modifyPrice

• **modifyPrice**? : *[Changeable](_core_changeable_.changeable.md)*

*Implementation of [ActionBuilder](../interfaces/_core_action_.actionbuilder.md).[modifyPrice](../interfaces/_core_action_.actionbuilder.md#optional-modifyprice)*

Defined in core/Action.ts:12

Изменение цены. Может увеличить, уменьшить или устновить конкретную цену, подробнее см. [Changeable](_core_changeable_.changeable.md)

___

### `Optional` setCustomProperties

• **setCustomProperties**? : *[Property](../interfaces/_core_property_.property.md)‹object›[]*

*Implementation of [ActionBuilder](../interfaces/_core_action_.actionbuilder.md).[setCustomProperties](../interfaces/_core_action_.actionbuilder.md#optional-setcustomproperties)*

Defined in core/Action.ts:33

Массив пар <ключ>-<значение>, которые будут добавлены в переданый [ProductContract](_core_productcontract_.productcontract.md)

___

### `Optional` showOptionsById

• **showOptionsById**? : *string[]*

*Implementation of [ActionBuilder](../interfaces/_core_action_.actionbuilder.md).[showOptionsById](../interfaces/_core_action_.actionbuilder.md#optional-showoptionsbyid)*

Defined in core/Action.ts:25

Аналогично [hideOptionsById](_core_action_.action.md#optional-hideoptionsbyid), но меняет isHidden на false

## Accessors

###  setDiscountInPercentage

• **get setDiscountInPercentage**(): *number | undefined*

Defined in core/Action.ts:63

Проверяет, что новое значение больше 0 и меньше 100

**Returns:** *number | undefined*

• **set setDiscountInPercentage**(`value`: number | undefined): *void*

Defined in core/Action.ts:71

Проверяет, что новое значение больше 0 и меньше 100

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number &#124; undefined | новое значение  |

**Returns:** *void*

## Methods

###  activate

▸ **activate**(`contract`: [ProductContract](_core_productcontract_.productcontract.md)): *void*

Defined in core/Action.ts:123

Активация екземпляра. Если поле не undefined, то выполняет измненеие, которое в нём указано.
- Если указан [modifyPrice](_core_action_.action.md#optional-modifyprice), происходит измнение цены.
- Если указан [modifyDeliveryTime](_core_action_.action.md#optional-modifydeliverytime), происходит изменение времени доставки
- Если указан [_setDiscountInPercentage](_core_action_.action.md#private-optional-_setdiscountinpercentage), цена, после возможного изменения выше, уменьшаяется на указаный процент
- Если указан [showOptionsById](_core_action_.action.md#optional-showoptionsbyid), поле isHidden всех [Option](_core_option_.option.md), id которых указан в массиве, станет false
- Если указан [hideOptionsById](_core_action_.action.md#optional-hideoptionsbyid), поле isHidden всех [Option](_core_option_.option.md), id которых указан в массиве, станет true
- Если указан [changeProperties](_core_action_.action.md#optional-changeproperties), будут изменены указаные в нём поля на новые значения
- Если указан [setCustomProperties](_core_action_.action.md#optional-setcustomproperties), будут добавлены указаные в нём поля

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contract` | [ProductContract](_core_productcontract_.productcontract.md) | контракт для изменения  |

**Returns:** *void*

___

### `Static` build

▸ **build**(`__namedParameters`: object): *[Action](_core_action_.action.md)*

Defined in core/Action.ts:88

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`changeProperties` | undefined &#124; object | массив пар ключ-значение, которые будут заменены в [ProductContract](_core_productcontract_.productcontract.md) |
`hideOptionsById` | undefined &#124; string[] | - |
`modifyDeliveryTime` | undefined &#124; [Changeable](_core_changeable_.changeable.md) | изменение времени доставки |
`modifyPrice` | undefined &#124; [Changeable](_core_changeable_.changeable.md) | изменение цены |
`setCustomProperties` | undefined &#124; object | массив пар ключ-значение, которые будут добавлены в [ProductContract](_core_productcontract_.productcontract.md)  |
`setDiscountInPercentage` | undefined &#124; number | значение скидки |
`showOptionsById` | undefined &#124; string[] | массив строк, которые следует показать |

**Returns:** *[Action](_core_action_.action.md)*
