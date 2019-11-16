[json-contract](../README.md) › [Globals](../globals.md) › ["discount/Condition"](../modules/_discount_condition_.md) › [Condition](_discount_condition_.condition.md)

# Class: Condition <**T, U**>

Описывает шаблон класса для проверки данных. Первый параметр T это класс наследник, который реализует данный класс.
Второй параметр U это класс, проверка в котором будет совершаться проверка.

## Type parameters

▪ **T**: *[Condition](_discount_condition_.condition.md)‹T, U›*

▪ **U**

## Hierarchy

* **Condition**

  ↳ [ConditionDocument](_discount_conditiondocument_.conditiondocument.md)

  ↳ [Select](_discount_select_.select.md)

## Index

### Constructors

* [constructor](_discount_condition_.condition.md#constructor)

### Properties

* [AND](_discount_condition_.condition.md#optional-and)
* [OR](_discount_condition_.condition.md#optional-or)
* [where](_discount_condition_.condition.md#optional-where)

### Methods

* [check](_discount_condition_.condition.md#check)
* [buildCondition](_discount_condition_.condition.md#static-protected-buildcondition)

## Constructors

###  constructor

\+ **new Condition**(`where?`: [Property](../interfaces/_core_property_.property.md)‹U›[], `and?`: T[], `or?`: T[]): *[Condition](_discount_condition_.condition.md)*

Defined in discount/Condition.ts:24

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`where?` | [Property](../interfaces/_core_property_.property.md)‹U›[] | поля для проверки |
`and?` | T[] | другие проверки, к которым применять логическое И |
`or?` | T[] | другие проверки, к которым применять логическое ИЛИ  |

**Returns:** *[Condition](_discount_condition_.condition.md)*

## Properties

### `Optional` AND

• **AND**? : *T[]*

Defined in discount/Condition.ts:19

Массив екземпляров класса реализации текущего, во время проверки к результату проверки всех будет применяться логическое И
(если хотя бы один елемент в массиве во время проверки отдал отрицательный результат, то общий результат тоже считается
отрицательный)

___

### `Optional` OR

• **OR**? : *T[]*

Defined in discount/Condition.ts:13

Массив екземпляров класса реализации текущего, во время проверки к результату проверки всех будет применяться логическое ИЛИ
(если хотя бы один елемент в массиве во время проверки отдал положительный результат, то общий результат тоже считается
положительным)

___

### `Optional` where

• **where**? : *[Property](../interfaces/_core_property_.property.md)‹U›[]*

Defined in discount/Condition.ts:24

Массив полей для проверки. Тут хранятся пары имя-поля-для-проверки : значение-которому-оно-должно-равняться.
Если хотя бы одно из условий тут не выполняется, будет отдан отрицательный результат.

## Methods

###  check

▸ **check**(`checkObject`: U): *boolean*

Defined in discount/Condition.ts:64

Проверка что некоторый объект соответствует данному условию.
Проверка идёт в таком порядке:
- проверяются [where](_discount_condition_.condition.md#optional-where) посредством логического И, то есть если хотя бы одно поле в переданом объекте не соответствует
указаному в [Property](../interfaces/_core_property_.property.md), будет отказ
- проверяются условия внутри поля [OR](_discount_condition_.condition.md#optional-or). Если хотя бы одно условие было выполнено, то функция вернёт успех
- проверяются условия внутри поля [AND](_discount_condition_.condition.md#optional-and). Если хотя бы одно условие не было выполнено, то функция вернёт отказ

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`checkObject` | U | объект для проверки  |

**Returns:** *boolean*

___

### `Static` `Protected` buildCondition

▸ **buildCondition**<**T**, **U**>(`__namedParameters`: object, `type`: object): *T*

Defined in discount/Condition.ts:47

Создаёт новый екзеспляр класса наследника, который был передан в эту функцию. Указываются поля для создания класса-
наследника и его тип.

**Type parameters:**

▪ **T**: *[Condition](_discount_condition_.condition.md)‹T, U›*

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
