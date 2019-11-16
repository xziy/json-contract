[json-contract](../README.md) › [Globals](../globals.md) › ["discount/ConditionDocument"](../modules/_discount_conditiondocument_.md) › [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)

# Class: ConditionDocument

Описывает условия проверки полей документа, то есть поля [Document.productContractModified](_core_document_.document.md#productcontractmodified).

## Hierarchy

* [Condition](_discount_condition_.condition.md)‹[ConditionDocument](_discount_conditiondocument_.conditiondocument.md), [ProductContractD](_discount_productcontractd_.productcontractd.md)›

  ↳ **ConditionDocument**

## Index

### Constructors

* [constructor](_discount_conditiondocument_.conditiondocument.md#constructor)

### Properties

* [AND](_discount_conditiondocument_.conditiondocument.md#optional-and)
* [OR](_discount_conditiondocument_.conditiondocument.md#optional-or)
* [where](_discount_conditiondocument_.conditiondocument.md#optional-where)

### Methods

* [check](_discount_conditiondocument_.conditiondocument.md#check)
* [build](_discount_conditiondocument_.conditiondocument.md#static-build)
* [buildCondition](_discount_conditiondocument_.conditiondocument.md#static-protected-buildcondition)

## Constructors

###  constructor

\+ **new ConditionDocument**(`where?`: [Property](../interfaces/_core_property_.property.md)‹[ProductContractD](_discount_productcontractd_.productcontractd.md)›[], `and?`: [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[], `or?`: [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[]): *[ConditionDocument](_discount_conditiondocument_.conditiondocument.md)*

*Inherited from [Condition](_discount_condition_.condition.md).[constructor](_discount_condition_.condition.md#constructor)*

Defined in discount/Condition.ts:24

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`where?` | [Property](../interfaces/_core_property_.property.md)‹[ProductContractD](_discount_productcontractd_.productcontractd.md)›[] | поля для проверки |
`and?` | [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[] | другие проверки, к которым применять логическое И |
`or?` | [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[] | другие проверки, к которым применять логическое ИЛИ  |

**Returns:** *[ConditionDocument](_discount_conditiondocument_.conditiondocument.md)*

## Properties

### `Optional` AND

• **AND**? : *[ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[]*

*Inherited from [Condition](_discount_condition_.condition.md).[AND](_discount_condition_.condition.md#optional-and)*

Defined in discount/Condition.ts:19

Массив екземпляров класса реализации текущего, во время проверки к результату проверки всех будет применяться логическое И
(если хотя бы один елемент в массиве во время проверки отдал отрицательный результат, то общий результат тоже считается
отрицательный)

___

### `Optional` OR

• **OR**? : *[ConditionDocument](_discount_conditiondocument_.conditiondocument.md)[]*

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
- проверяются [where](_discount_conditiondocument_.conditiondocument.md#optional-where) посредством логического И, то есть если хотя бы одно поле в переданом объекте не соответствует
указаному в [Property](../interfaces/_core_property_.property.md), будет отказ
- проверяются условия внутри поля [OR](_discount_conditiondocument_.conditiondocument.md#optional-or). Если хотя бы одно условие было выполнено, то функция вернёт успех
- проверяются условия внутри поля [AND](_discount_conditiondocument_.conditiondocument.md#optional-and). Если хотя бы одно условие не было выполнено, то функция вернёт отказ

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`checkObject` | [ProductContractD](_discount_productcontractd_.productcontractd.md) | объект для проверки  |

**Returns:** *boolean*

___

### `Static` build

▸ **build**(`data`: [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)): *[ConditionDocument](_discount_conditiondocument_.conditiondocument.md)*

Defined in discount/ConditionDocument.ts:14

Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [ConditionDocument](_discount_conditiondocument_.conditiondocument.md) | JSON c полями, аналогичными родетельскому конструктору.  |

**Returns:** *[ConditionDocument](_discount_conditiondocument_.conditiondocument.md)*

___

### `Static` `Protected` buildCondition

▸ **buildCondition**<**T**, **U**>(`__namedParameters`: object, `type`: object): *T*

*Inherited from [Condition](_discount_condition_.condition.md).[buildCondition](_discount_condition_.condition.md#static-protected-buildcondition)*

Defined in discount/Condition.ts:47

Создаёт новый екзеспляр класса наследника, который был передан в эту функцию. Указываются поля для создания класса-
наследника и его тип.

**Type parameters:**

▪ **T**: *[Condition](_discount_condition_.condition.md)‹[ConditionDocument](_discount_conditiondocument_.conditiondocument.md), [ProductContractD](_discount_productcontractd_.productcontractd.md)›*

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
