[json-contract](../README.md) › [Globals](../globals.md) › ["core/Changeable"](../modules/_core_changeable_.md) › [Changeable](_core_changeable_.changeable.md)

# Class: Changeable

Описывает действие изменения количественной переменной

## Hierarchy

* **Changeable**

## Index

### Constructors

* [constructor](_core_changeable_.changeable.md#constructor)

### Properties

* [decrease](_core_changeable_.changeable.md#optional-decrease)
* [increase](_core_changeable_.changeable.md#optional-increase)
* [set](_core_changeable_.changeable.md#optional-set)

### Methods

* [getJSON](_core_changeable_.changeable.md#getjson)
* [modify](_core_changeable_.changeable.md#modify)
* [build](_core_changeable_.changeable.md#static-build)

## Constructors

###  constructor

\+ **new Changeable**(`increase?`: undefined | number, `decrease?`: undefined | number, `set?`: undefined | number): *[Changeable](_core_changeable_.changeable.md)*

Defined in core/Changeable.ts:16

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`increase?` | undefined &#124; number | увеличить |
`decrease?` | undefined &#124; number | уменьшить |
`set?` | undefined &#124; number | установить  |

**Returns:** *[Changeable](_core_changeable_.changeable.md)*

## Properties

### `Optional` decrease

• **decrease**? : *undefined | number*

Defined in core/Changeable.ts:12

Уменьшить переменную на указанное значение

___

### `Optional` increase

• **increase**? : *undefined | number*

Defined in core/Changeable.ts:8

Увеличить переменную на указанное значение

___

### `Optional` set

• **set**? : *undefined | number*

Defined in core/Changeable.ts:16

Установить переменную на указанное значение

## Methods

###  getJSON

▸ **getJSON**(): *[Changeable](_core_changeable_.changeable.md)*

Defined in core/Changeable.ts:57

Создаёт JSON из текущего экземпляра. Метод противоположный [build](_core_changeable_.changeable.md#static-build).

**Returns:** *[Changeable](_core_changeable_.changeable.md)*

___

###  modify

▸ **modify**(`value`: number): *number*

Defined in core/Changeable.ts:43

Увеличивает, потом уменьшает и  потом устанавливает переданное значение на указанные в екземпляре значения

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | значение для изменения  |

**Returns:** *number*

___

### `Static` build

▸ **build**(`__namedParameters`: object): *[Changeable](_core_changeable_.changeable.md)*

Defined in core/Changeable.ts:35

Если передан JSON, создаёт новый екзепляр класса, если передан другой екземпляр класса, клонирует его

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`decrease` | undefined &#124; number | уменьшить |
`increase` | undefined &#124; number | увеличить |
`set` | undefined &#124; number | установить  |

**Returns:** *[Changeable](_core_changeable_.changeable.md)*
