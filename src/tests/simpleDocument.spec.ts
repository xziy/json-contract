'use strict';

import {Document} from "..";
import should = require("should");
import Reason from '../core/Reason';

const document1Data = require('./data/document1-data.json');
const document1Expected = require('./data/document1-expected.json');
const simpleProductContractData = require('./data/simpleProductContract-data.json');
const simpleProductContractExpected = require('./data/simpleProductContract-expected.json');
const numberProductContract = require('./data/productContract-with-number-option.json');
const stringProductContract = require('./data/productContract-with-string-option.json');

describe('Simple Document', () => {

  it('should correct create document from JSON', () => {
    document1Data.productContract = simpleProductContractData;
    const document = Document.build(document1Data);

    document1Expected.productContract = simpleProductContractExpected;
    document1Expected.productContractModified = simpleProductContractExpected;
    document.should.match(document1Expected);
  });

  describe('validation and rejection errors', () => {

    let document: Document;

    beforeEach(() => {
      document1Data.productContract = simpleProductContractData;
      document = Document.build(document1Data);
    });

    it('should return reject if string options is required but not set', () => {
      const stringValue = document.values.find(v => v.id === 'stringOption');
      if (!stringValue) {
        throw new Error('There is not string option');
      }

      stringValue.value = undefined;

      document.check().should.be.false();
      const reason = new Reason('IR', 'is required');
      reason.rejectOption = 'stringOption';
      should(document.getRejectReason()).be.eql(reason);
    });

    it('should return reject if select options is required but not set', () => {
      const selectValue = document.values.find(v => v.id === 'selectOption');
      if (!selectValue) {
        throw new Error('There is not select option');
      }

      selectValue.value = undefined;

      document.check().should.be.false();
      const reason = new Reason('IR', 'is required');
      reason.rejectOption = 'selectOption';
      should(document.getRejectReason()).be.eql(reason);
    });

    it('should return ok if number options not is required and is not set', () => {
      const numberValue = document.values.find(v => v.id === 'numberOption');
      if (!numberValue) {
        throw new Error('There is not number option');
      }

      numberValue.value = undefined;

      document.check().should.be.true();
      should(document.getRejectReason()).be.undefined();
    });

    describe('for number options', () => {

      beforeEach(() => {
        document = Document.build({
          values: [
            {
              id: 'numberOption',
              value: 50
            }
          ],
          productContract: numberProductContract
        });
      });

      it('should return ok', () => {
        document.check().should.be.true();
        should(document.getRejectReason()).be.undefined();
      });

      it('should return reject if number options is not match regex', () => {
        const numberValue = document.values.find(v => v.id === 'numberOption');
        if (!numberValue) {
          throw new Error('There is not number option');
        }

        numberValue.value = 19;

        document.check().should.be.false();
        const reason = new Reason('RME', 'regex matching error');
        reason.rejectOption = 'numberOption';
        should(document.getRejectReason()).be.eql(reason);
      });

      it('should return reject if number options is larger than maximum', () => {
        const numberValue = document.values.find(v => v.id === 'numberOption');
        if (!numberValue) {
          throw new Error('There is not number option');
        }

        numberValue.value = 200;

        document.check().should.be.false();
        const reason = new Reason('LTM', 'larger than max');
        reason.rejectOption = 'numberOption';
        should(document.getRejectReason()).be.eql(reason);
      });

      it('should return reject if number options is less than minimal', () => {
        const numberValue = document.values.find(v => v.id === 'numberOption');
        if (!numberValue) {
          throw new Error('There is not number option');
        }

        numberValue.value = 5;

        document.check().should.be.false();
        const reason = new Reason('STM', 'smaller than min');
        reason.rejectOption = 'numberOption';
        should(document.getRejectReason()).be.eql(reason);
      });

      it('should return reject if number options has type string', () => {
        const numberValue = document.values.find(v => v.id === 'numberOption');
        if (!numberValue) {
          throw new Error('There is not number option');
        }

        numberValue.value = '50';

        document.check().should.be.false();
        const reason = new Reason('IT', 'incorrect type');
        reason.rejectOption = 'numberOption';
        should(document.getRejectReason()).be.eql(reason);
      });

    });

    describe('for string options', () => {

      beforeEach(() => {
        document = Document.build({
          values: [
            {
              id: 'stringOption',
              value: 'test'
            }
          ],
          productContract: stringProductContract
        });
      });

      it('should return ok', () => {
        document.check().should.be.true();
        should(document.getRejectReason()).be.undefined();
      });

      it('should return reject if string options is not match regex', () => {
        const stringValue = document.values.find(v => v.id === 'stringOption');
        if (!stringValue) {
          throw new Error('There is not string option');
        }

        stringValue.value = '$#!?*';

        document.check().should.be.false();
        const reason = new Reason('RME', 'regex matching error');
        reason.rejectOption = 'stringOption';
        should(document.getRejectReason()).be.eql(reason);
      });

      it('should return reject if string option length is larger than maximum length', () => {
        const stringValue = document.values.find(v => v.id === 'stringOption');
        if (!stringValue) {
          throw new Error('There is not string option');
        }

        stringValue.value = 'qwertyuiopasd';

        document.check().should.be.false();
        const reason = new Reason('LTML', 'larger than max length');
        reason.rejectOption = 'stringOption';
        should(document.getRejectReason()).be.eql(reason);
      });

      it('should return reject if string option length is less than minimal length', () => {
        const stringValue = document.values.find(v => v.id === 'stringOption');
        if (!stringValue) {
          throw new Error('There is not string option');
        }

        stringValue.value = '12';

        document.check().should.be.false();
        const reason = new Reason('STML', 'smaller than min length');
        reason.rejectOption = 'stringOption';
        should(document.getRejectReason()).be.eql(reason);
      });

      it('should return reject if string options has type string', () => {
        const stringValue = document.values.find(v => v.id === 'stringOption');
        if (!stringValue) {
          throw new Error('There is not string option');
        }

        stringValue.value = 50;

        document.check().should.be.false();
        const reason = new Reason('IT', 'incorrect type');
        reason.rejectOption = 'stringOption';
        should(document.getRejectReason()).be.eql(reason);
      });

    });

    it('should return reject if string options is not match regex', () => {
      const stringValue = document.values.find(v => v.id === 'stringOption');
      if (!stringValue) {
        throw new Error('There is not string option');
      }

      stringValue.value = '$#!?';

      document.check().should.be.false();
      const reason = new Reason('RME', 'regex matching error');
      reason.rejectOption = 'stringOption';
      should(document.getRejectReason()).be.eql(reason);
    });

  });

});

