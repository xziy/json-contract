[json-contract](../README.md) › [Globals](../globals.md) › ["discount/Select"](../modules/_discount_select_.md) › [Select](_discount_select_.select.md)

# Class: Select

Описывает условия проверки полей контракта продукта, для которого заполняется документ, то есть поля [Document.productContract](_core_document_.document.md#productcontract).

## Hierarchy

* [Condition](_discount_condition_.condition.md)‹[Select](_discount_select_.select.md), [ProductContractD](_discount_productcontractd_.productcontractd.md)›

  ↳ **Select**

## Index

### Constructors

* [constructor](_discount_select_.select.md#constructor)

### Properties

* [AND](_discount_select_.select.md#optional-and)
* [OR](_discount_select_.select.md#optional-or)
* [where](_discount_select_.select.md#optional-where)

### Methods

* [check](_discount_select_.select.md#check)
* [build](_discount_select_.select.md#static-build)
* [buildCondition](_discount_select_.select.md#static-protected-buildcondition)

## Constructors

###  constructor

\+ **new Select**(`where?`: [Property](../interfaces/_core_property_.property.md)‹[ProductContractD](_discount_productcontractd_.productcontractd.md)›[], `and?`: [Select](_discount_select_.select.md)[], `or?`: [Select](_discount_select_.select.md)[]): *[Select](_discount_select_.select.md)*

*Inherited from [Condition](_discount_condition_.condition.md).[constructor](_discount_condition_.condition.md#constructor)*

Defined in discount/Condition.ts:24

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`where?` | [Property](../interfaces/_core_property_.property.md)‹[ProductContractD](_discount_productcontractd_.productcontractd.md)›[] | поля для проверки |
`and?` | [Select](_discount_select_.select.md)[] | другие проверки, к которым применять логическое И |
`or?` | [Select](_discount_select_.select.md)[] | другие проверки, к которым применять логическое ИЛИ  |

**Returns:** *[Select](_discount_select_.select.md)*

## Properties

### `Optional` AND

• **AND**? : *[Select](_discount_select_.select.md)[]*

*Inherited from [Condition](_discount_condition_.condition.md).[AND](_discount_condition_.condition.md#optional-and)*

Defined in discount/Condition.ts:19

Массив екземпляров класса реализации текущего, во время проверки к результату проверки всех будет применяться логическое И
(если хотя бы один елемент в массиве во время проверки отдал отрицательный результат, то общий результат тоже считается
отрицательный)

___

### `Optional` OR

• **OR**? : *[Select](_discount_select_.select.md)[]*

*Inherited from [Condition](_discount_condition_.condition.md).[OR](_discount_condition_.condition.md#optional-or)*

Defined in discount/Condition.ts:13

Массив екземпляров класса реализации текущего, во время проверки к результату проверки всех будет применяться логическое ИЛИ
(если хотя бы один елемент в массиве во время проверки отдал положительный результат, то общий результат тоже считается
положительным)

___

### `Optional` where

• **where**? : *[Property](../interfaces/_core_property_.property.md)‹[ProductContractD](_discount_productcontractd_.productcontractd.md)›[]*

*Inherited from [Condition](_discount_condition_.condition.md).[where](_discount_condition_.condition.md#optional-where)*

Defined in discount/Condition.ts:24

Массив полей для проверки. Тут хранятся пары имя-поля-для-проверки : значение-которому-оно-должно-равняться.
Если хотя бы одно из условий тут не выполняется, будет отдан отрицательный результат.

## Methods

###  check

▸ **check**(`checkObject`: [ProductContractD](_discount_productcontractd_.productcontractd.md)): *boolean*

*Inherited from [Condition](_discount_condition_.condition.md).[check](_discount_condition_.condition.md#check)*

Defined in discount/Condition.ts:64

Проверка что некоторый объект соответствует данному условию.
Проверка идёт в таком порядке:
- проверяются [where](_discount_select_.select.md#optional-where) посредством логического И, то есть если хотя бы одно поле в переданом объекте не соответствует
указаному в [Property](../interfaces/_core_property_.property.md), будет отказ
- проверяются условия внутри поля [OR](_discount_select_.select.md#optional-or). Если хотя бы одно условие было выполнено, то функция вернёт успех
- проверяются условия внутри поля [AND](_discount_select_.select.md#optional-and). Если хотя бы одно условие не было выполнено, то функция вернёт отказ

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`checkObject` | [ProductContractD](_discount_productcontractd_.productcontractd.md) | объект для проверки  |

**Returns:** *boolean*

___

### `Static` build

▸ **build**(`data`: [Select](_discount_select_.select.md)): *[Select](_discount_select_.select.md)*

Defined in discount/Select.ts:12

Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [Select](_discount_select_.select.md) | JSON c полями, аналогичными родетельскому конструктору.  |

**Returns:** *[Select](_discount_select_.select.md)*

___

### `Static` `Protected` buildCondition

▸ **buildCondition**<**T**, **U**>(`__namedParameters`: object, `type`: object): *T*

*Inherited from [Condition](_discount_condition_.condition.md).[buildCondition](_discount_condition_.condition.md#static-protected-buildcondition)*

Defined in discount/Condition.ts:47

Создаёт новый екзеспляр класса наследника, который был передан в эту функцию. Указываются поля для создания класса-
наследника и его тип.

**Type parameters:**

▪ **T**: *[Condition](_discount_condition_.condition.md)‹[Select](_discount_select_.select.md), [ProductContractD](_discount_productcontractd_.productcontractd.md)›*

▪ **U**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`AND` | undefined &#124; T[] | другие проверки, к которым применять логическое И |
`OR` | undefined &#124; T[] | другие проверки, к которым применять логическое ИЛИ |
`args` | object | другие поля класса наследника |
`where` | undefined &#124; [Property](../interfaces/_core_property_.property.md)‹U›[] | поля для проверки |

▪ **type**: *object*

тип класса наследника. Тут указывается название класса, который следует создать

**Returns:** *T*
