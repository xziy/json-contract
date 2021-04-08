'use strict';

require('should');
const OptionString = require('../../dist/core/OptionString').default;
const OptionNumber = require('../../dist/core/OptionNumber').default;
const OptionSelect = require('../../dist/core/OptionSelect').default;
const Option = require('../../dist/core/Option').default;

/**
 * @test {Option}
 */
describe('Option', () => {

  /**
   * @test {Option#buildOption}
   */
  describe('buildOption', () => {

    it('should build option', () => {
      const data = {
        id: 'id',
        type: 'type',
        label: 'label',
        isRequired: true,
        isHidden: false,
        description: 'desc',
        anyData: 'data'
      };
      const actual = Option.buildOption(data);
      const expected = new Option('id', 'type', 'label', true, false, 'desc', 'data');
      actual.should.match(expected);
    });

    it('should build option', () => {
      const data = {
        id: 'id',
        type: 'type',
        label: 'label'
      };
      const actual = Option.buildOption(data);
      const expected = new Option('id', 'type', 'label');
      actual.should.match(expected);
    });

  });

  /**
   * @test {Option#getOption}
   */
  describe('getOption', () => {

    it('should create string option', () => {
      const data = {
        id: 'id',
        type: 'string',
        label: 'label'
      };
      const actual = Option.getOption(data);
      const expected = new OptionString('id', 'string', 'label');
      actual.should.eql(expected);
    });

    it('should create number option', () => {
      const data = {
        id: 'id',
        type: 'number',
        label: 'label'
      };
      const actual = Option.getOption(data);
      const expected = new OptionNumber('id', 'number', 'label');
      actual.should.eql(expected);
    });

    it('should create select option', () => {
      const data = {
        id: 'id',
        type: 'select',
        label: 'label',
        options: []
      };
      const actual = Option.getOption(data);
      const expected = new OptionSelect('id', 'select', 'label', []);
      actual.should.eql(expected);
    });

  });

});