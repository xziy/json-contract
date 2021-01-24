'use strict';

const should = require('should');
const sinon = require('sinon');
const Form = require('../../dist/core/Form').default;
const OptionString = require('../../dist/core/OptionString').default;
const OptionNumber = require('../../dist/core/OptionNumber').default;
const OptionSelect = require('../../dist/core/OptionSelect').default;
const Option = require('../../dist/core/Option').default;
const Document = require('../../dist/core/Document').default;
const ProductContract = require('../../dist/core/ProductContract').default;
const Reason = require('../../dist/core/Reason').default;

/**
 * @test {Form}
 */
describe('Form', () => {

  let sandbox;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  })

  /**
   * @test {Form#validate}
   */
  describe('validate', () => {

    it('should validate successfully', () => {
      const numberOption = new OptionNumber('1', 'number', 'number option');
      const stringOption = new OptionString('2', 'string', 'string option');
      const selectOption = new OptionSelect('3', 'select', 'select option', []);

      const options = [numberOption, stringOption, selectOption];
      const form = new Form(options);
      const productContract = new ProductContract(options, 'test', '', '', 1, '', '', 0, '', 0, 0, 0, 0);

      const document = new Document(productContract)

      sandbox.stub(numberOption, 'validate').returns(true);
      sandbox.stub(stringOption, 'validate').returns(true);
      sandbox.stub(selectOption, 'validate').returns(true);

      form.validate(document).should.be.true();
    });

    it('should return false if any of options validation failed', () => {
      const numberOption = new OptionNumber('1', 'number', 'number option');
      const stringOption = new OptionString('2', 'string', 'string option');
      const selectOption = new OptionSelect('3', 'select', 'select option', []);

      const options = [numberOption, stringOption, selectOption];
      const form = new Form(options);
      const productContract = new ProductContract(options, 'test', '', '', 1, '', '', 0, '', 0, 0, 0, 0);

      const document = new Document(productContract)

      sandbox.stub(numberOption, 'validate').returns(true);
      sandbox.stub(stringOption, 'validate').returns(false);
      sandbox.stub(selectOption, 'validate').returns(true);

      form.validate(document).should.be.false();
    });

    it('should return false if select options validation failed', () => {
      const numberOption = new OptionNumber('1', 'number', 'number option');
      const stringOption = new OptionString('2', 'string', 'string option');
      const selectOption = new OptionSelect('3', 'select', 'select option', []);

      const options = [numberOption, stringOption, selectOption];
      const form = new Form(options);
      const productContract = new ProductContract(options, 'test', '', '', 1, '', '', 0, '', 0, 0, 0, 0);

      const document = new Document(productContract)

      sandbox.stub(numberOption, 'validate').returns(true);
      sandbox.stub(stringOption, 'validate').returns(true);
      sandbox.stub(selectOption, 'validate').returns(false);

      form.validate(document).should.be.false();
    });

  });

  /**
   * @test {Form#getRejectReason}
   */
  describe('getRejectReason', () => {

    it('should return undefined if all is ok', async () => {
      const numberOption = new OptionNumber('1', 'number', 'number option');
      const stringOption = new OptionString('2', 'string', 'string option');
      const selectOption = new OptionSelect('3', 'select', 'select option', []);

      const options = [numberOption, stringOption, selectOption];
      const form = new Form(options);
      const productContract = new ProductContract(options, 'test', '', '', 1, '', '', 0, '', 0, 0, 0, 0);

      const document = new Document(productContract)

      sandbox.stub(numberOption, 'getRejectReason');
      sandbox.stub(stringOption, 'getRejectReason');
      sandbox.stub(selectOption, 'getRejectReason');

      should(form.getRejectReason(document)).be.undefined();
    });

    it('should return reject for number option', async () => {
      const numberOption = new OptionNumber('1', 'number', 'number option');
      const stringOption = new OptionString('2', 'string', 'string option');
      const selectOption = new OptionSelect('3', 'select', 'select option', []);

      const options = [numberOption, stringOption, selectOption];
      const form = new Form(options);
      const productContract = new ProductContract(options, 'test', '', '', 1, '', '', 0, '', 0, 0, 0, 0);

      const document = new Document(productContract);
      document.values.push({
        id: '1',
        value: 'test'
      })

      const reason = new Reason('T', 'test');
      sandbox.stub(numberOption, 'getRejectReason').returns(reason);
      sandbox.stub(stringOption, 'getRejectReason');
      sandbox.stub(selectOption, 'getRejectReason');

      const expected = new Reason('T', 'test');
      expected.rejectOption = '1';
      form.getRejectReason(document).should.be.eql(expected);
    });

    it('should return reject for select option', async () => {
      const numberOption = new OptionNumber('1', 'number', 'number option');
      const stringOption = new OptionString('2', 'string', 'string option');
      const selectOption = new OptionSelect('3', 'select', 'select option', []);

      const options = [numberOption, stringOption, selectOption];
      const form = new Form(options);
      const productContract = new ProductContract(options, 'test', '', '', 1, '', '', 0, '', 0, 0, 0, 0);

      const document = new Document(productContract);
      document.values.push({
        id: '3',
        value: 'test'
      })

      const reason = new Reason('T', 'test');
      sandbox.stub(numberOption, 'getRejectReason');
      sandbox.stub(stringOption, 'getRejectReason');
      sandbox.stub(selectOption, 'getRejectReason').returns(reason);

      const expected = new Reason('T', 'test');
      expected.rejectOption = '3';
      form.getRejectReason(document).should.be.eql(expected);
      sinon.assert.calledWith(selectOption.getRejectReason, 'test', document);
    });

  });

  /**
   * @test {Form#processing}
   */
  describe('processing', () => {

    it('should process form', () => {
      const activate = sandbox.stub();
      const contract = {};

      const numberOption = new OptionNumber('1', 'number', 'number option');
      const stringOption = new OptionString('2', 'string', 'string option');
      const selectOption = new OptionSelect('3', 'select', 'select option', []);
      sandbox.stub(selectOption, 'getSelected').returns({
        id: '1',
        action: {
          activate
        }
      });

      const options = [numberOption, stringOption, selectOption];
      const form = new Form(options);
      const productContract = new ProductContract(options, 'test', '', '', 1, '', '', 0, '', 0, 0, 0, 0);
      sandbox.stub(productContract, 'clone').returns(contract);

      const document = new Document(productContract);
      sandbox.stub(document, 'getValue').returns('1');

      form.processing(document);

      sinon.assert.calledOnce(selectOption.getSelected);
      sinon.assert.calledWith(selectOption.getSelected, '1');
      sinon.assert.calledOnce(document.getValue);
      sinon.assert.calledWith(document.getValue, '3');
      sinon.assert.calledOnce(activate);
      sinon.assert.calledWith(activate, contract);
    });

  });

  /**
   * @test {Form#getJSON}
   */
  describe('getJSON', () => {

    it('should get JSON from form', () => {
      const expected = {
        options: [
          {id: '1'},
          {id: '2'},
          {id: '3'}
        ]
      };

      const numberOption = new OptionNumber('1', 'number', 'number option');
      const stringOption = new OptionString('2', 'string', 'string option');
      const selectOption = new OptionSelect('3', 'select', 'select option', []);

      sandbox.stub(numberOption, 'getJSON').returns({id: '1'});
      sandbox.stub(stringOption, 'getJSON').returns({id: '2'});
      sandbox.stub(selectOption, 'getJSON').returns({id: '3'});

      const options = [numberOption, stringOption, selectOption];
      const form = new Form(options);

      const actual = form.getJSON();
      actual.should.eql(expected);
      actual.should.not.be.instanceOf(Form);
    });

  });

  /**
   * @test {Form#clone}
   */
  describe('clone', () => {

    it('should clone form', () => {
      const expected = {
        options: [
          {id: '1'},
          {id: '2'},
          {id: '3'}
        ]
      };
      // make expected object instance of Form for should.eql test
      expected.__proto__ = Form.prototype;

      const numberOption = new OptionNumber('1', 'number', 'number option');
      const stringOption = new OptionString('2', 'string', 'string option');
      const selectOption = new OptionSelect('3', 'select', 'select option', []);

      sandbox.stub(numberOption, 'getJSON').returns({id: '1'});
      sandbox.stub(stringOption, 'getJSON').returns({id: '2'});
      sandbox.stub(selectOption, 'getJSON').returns({id: '3'});

      let counter = 1;
      sandbox.stub(Option, 'getOption').callsFake(() => ({id: String(counter++)}));

      const options = [numberOption, stringOption, selectOption];
      const form = new Form(options);

      const actual = form.clone();
      actual.should.eql(expected);
      actual.should.be.instanceOf(Form);
    });

  })

});
