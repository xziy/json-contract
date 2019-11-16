[json-contract](../README.md) › [Globals](../globals.md) › ["lib/util"](_lib_util_.md)

# External module: "lib/util"

## Index

### Functions

* [objectToProperties](_lib_util_.md#objecttoproperties)

## Functions

###  objectToProperties

▸ **objectToProperties**<**T**>(`args`: T): *[Property](../interfaces/_core_property_.property.md)‹T›[]*

Defined in lib/util.ts:8

Принимает объект, превращает его в Property[]. То есть каждый ключ записывает в [Property.property](../interfaces/_core_property_.property.md#property), а возле него
его пару в поле [Property.value](../interfaces/_core_property_.property.md#value)

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | T | объект для преобразования  |

**Returns:** *[Property](../interfaces/_core_property_.property.md)‹T›[]*
