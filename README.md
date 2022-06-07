# json-contract

<span class="badge-npmversion"><a href="https://npmjs.org/package/json-contract" title="View this project on NPM"><img src="https://img.shields.io/npm/v/json-contract.svg" alt="NPM version" /></a></span>\

## Установка
Модуль может быть использовать как для NodeJs, так и для браузера. Уставнока с помощью npm:
```bash
npm i json-contract --save
```

## Краткое описание
Данный модуль создания продаж "сложных" (комплексных, составных) продуктов. Продукт может содержать в себе вложенные продукты, которые 
в свою очередь могут менять стоимость, время и доставки и прочие параметры итогового продукта. Например, продаётся ПК. ПК 
с одной стороны является единицей, а с другой стороны он состоит из разных частей, каждая из которых влияет на итоговый
продукт. Предположим, что пользователю дано первым выбрать одну из материнских плат, указанных в списке. От этого выбора
сильно зависят последующие варианты выбора при заполнении данного продукта (ПК). Для этого и создан этот модуль -- реализовать
создание таких составных продуктов.

## Использование
```javascript
// require classes
const ProductContractD = require('json-contract').ProductContractD;
const DiscountContract = require('json-contract').DiscountContract;
const DocumentD = require('json-contract').DocumentD;

// create contract from JSON file
const pcdJson = require('json-contract/example/contracts/contract1');
const pc1 = ProductContractD.build(pcdJson);

// create document from JSON file
const doc1 = new DocumentD(pc1);

// create discount from JSON file
const discountJson = require('json-contract/example/discounts/discount1');
const dc1 = DiscountContract.build(discountJson);

//add new value to document
doc1.addOption('name', 'Some name'); // return true is success

// validate document
doc1.check(); // return true is success

// get rejection reason
doc1.getRejectReason(); // return Reason

// get value of `name`
doc1.getValue('name'); // return `Some name` 

// add discount to document
doc1.addDiscount(dc1); // return true is success

// processing
doc1.processing(); // return true is success

// `dry` document
const result = doc1.dry(); 
console.log(result);
``` 

### Больше примеров
Больше примеров в папке /example. Файл index.js содержит 5 функций-примеров использования, в остальных папках разложены 
Documents, ProductContracts и DiscountContracts для этих примеров.
