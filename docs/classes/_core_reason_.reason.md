[json-contract](../README.md) › [Globals](../globals.md) › ["core/Reason"](../modules/_core_reason_.md) › [Reason](_core_reason_.reason.md)

# Class: Reason

Описывает ошибку валидации

## Hierarchy

* **Reason**

## Index

### Constructors

* [constructor](_core_reason_.reason.md#constructor)

### Properties

* [_rejectOption](_core_reason_.reason.md#private-optional-_rejectoption)
* [code](_core_reason_.reason.md#code)
* [label](_core_reason_.reason.md#optional-label)

### Accessors

* [rejectOption](_core_reason_.reason.md#rejectoption)

## Constructors

###  constructor

\+ **new Reason**(`code`: string, `label?`: undefined | string, `anyData?`: undefined | string): *[Reason](_core_reason_.reason.md)*

Defined in core/Reason.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |
`label?` | undefined &#124; string |
`anyData?` | undefined &#124; string |

**Returns:** *[Reason](_core_reason_.reason.md)*

## Properties

### `Private` `Optional` _rejectOption

• **_rejectOption**? : *undefined | string*

Defined in core/Reason.ts:23

id опции, которая вернула ошибку

___

###  code

• **code**: *string*

Defined in core/Reason.ts:8

Код ошибки

___

### `Optional` label

• **label**? : *undefined | string*

Defined in core/Reason.ts:12

Краткое описание ошибки

## Accessors

###  rejectOption

• **get rejectOption**(): *string | undefined*

Defined in core/Reason.ts:25

**Returns:** *string | undefined*

• **set rejectOption**(`value`: string | undefined): *void*

Defined in core/Reason.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; undefined |

**Returns:** *void*
