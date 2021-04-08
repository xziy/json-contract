const ProductContractD = require('..').ProductContractD;
const DocumentD = require('..').DocumentD;
const DiscountContract = require('..').DiscountContract;
const Document = require('..').Document;
const ProductContract = require('..').ProductContract;

function log(str, label) {
  if (label)
    console.log(label);
  console.dir(str, {depth: null});
}

/**
 * Create ProductContract and Document from JSON
 *
 * Using methods:
 * Document
 * - build
 * - check
 * - getRejectReason
 * - getValue
 * - processing
 *
 * ProductContract
 * - build
 */
function test1() {
  // create product contract
  const pcJson1 = require('./contracts/contract1');
  const pc1 = ProductContract.build(pcJson1);
  log(pc1, 'Product Contract 1');

  // create document from product contract object
  const docJson1 = require('./documents/document1');
  docJson1.productContract = pc1;
  const doc1 = Document.build(docJson1);
  log(doc1, 'Document 1');
  const doc2 = new Document(pc1, docJson1.values);
  log(doc2, 'Document 2');

  // create document from product contract json
  docJson1.productContract = pcJson1;
  const doc3 = Document.build(docJson1);
  log(doc3, 'Document 3');

  // document methods
  log(doc3.check(), 'check');
  log(doc3.getRejectReason(), 'reject reason');
  log(doc3.getValue('name'), 'get value by id `name`');

  // document processing change productContractModified
  log(doc3.processing(), 'processing');
  log(doc3, 'Document 3');

  log(doc3.dry(), 'dry');
}

/**
 * Fill new Document
 *
 * Using methods:
 * Document
 * - addOption
 */
function test2() {
  const pcJson1 = require('./contracts/contract2');
  const docJson1 = require('./documents/document2');
  docJson1.productContract = pcJson1;
  const doc1 = Document.build(docJson1);
  log(doc1, 'Document1');

  let n = 1;
  const logValues = () => log(doc1.values, 'Document1 values ' + n++);

  // incorrect set string to number
  log(doc1.addOption('howmany', 'string value'), 'incorrect set');
  logValues();

  // set new correct value
  log(doc1.addOption('howmany', 3), 'correct set');
  logValues();

  // update value
  log(doc1.addOption('name', 'New Example Name'), 'update');
  logValues();
}

/**
 * Processing Document
 * Using methods
 * Document
 * - processing
 */
function test3() {
  const pcJson1 = require('./contracts/contract3');
  const docJson1 = require('./documents/document3');
  docJson1.productContract = pcJson1;
  const doc1 = Document.build(docJson1);
  log(doc1, 'Document1');

  // in this document selected so-1 so deliveryTime increase 12, price increase 15 and front must show new options with
  // id "info" and "message"

  log(doc1.processing(), 'processing 1');
  log(doc1, 'Document 1');

  log(doc1.addOption('select-option', 'so-2'), 'select option 2');

  // reset previous changes, add custom property isManual, change prefix and hide options with id "message" and "info"
  // ("info" is option of so-1 item, "message" hide by this action)
  log(doc1.processing(), 'processing 2');
  log(doc1, 'Document 2');
}

/**
 * Create ProductContractD and ProductContractD from JSON
 *
 */
function test4() {
  // create product contract
  const pcJson1 = require('./contracts/contract4');
  const pc1 = ProductContractD.build(pcJson1);
  log(pc1, 'Product Contract 1');

  // create document from product contract object
  const docJson1 = require('./documents/document1');
  docJson1.productContract = pc1;
  const doc1 = DocumentD.build(docJson1);
  log(doc1, 'Document 1');
  const doc2 = new DocumentD(pc1, docJson1.values);
  log(doc2, 'Document 2');
}

/**
 * Create DocumentD, ProductContractD and DiscountContract
 * Using methods:
 * DocumentD
 * - build
 * - addDiscount
 * - processing
 * ProductContractD
 * - build
 * DiscountContract
 * - build
 */
function test5() {
  // create product contract
  const pcJson1 = require('./contracts/contract4');
  const pc1 = ProductContractD.build(pcJson1);
  log(pc1, 'Product Contract 1');

  // create document from product contract object
  const docJson1 = require('./documents/document1');
  docJson1.productContract = pc1;
  const doc1 = DocumentD.build(docJson1);
  log(doc1, 'Document 1');

  //create discount
  const discountJson1 = require('./discounts/discount1');
  const dc1 = DiscountContract.build(discountJson1);
  log(dc1, 'Discount Contract 1');

  // check discount is compatible with document and activate it
  log(doc1.addDiscount(dc1), 'add discount 1');
  log(doc1, 'DocumentD 1');

  // processing
  log(doc1.processing(), 'processing');
  log(doc1, 'DocumentD 2');
}

// test1();
test2();
// test3();
// test4();
// test5();
