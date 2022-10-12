let PaymentPackage = require('./paymentPackage');
let { assert } = require('chai');

describe('PaymentPackage tests', () => {
  describe('create instance', () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage('Slavi', 10);
    });

    it('name should be correct', () => {
      assert.equal(paymentPackage._name, 'Slavi', 'name is correct');
    });

    it('value should be correct', () => {
      assert.equal(paymentPackage._value, 10, 'value is correct set to 10');
    });

    it('VAT should be correct', () => {
      assert.equal(paymentPackage._VAT, 20, 'VAT is correct set to 20');
      assert.equal(typeof (paymentPackage._VAT), 'number', 'VAT is correct type')
    });

    it('active should be correct', () => {
      assert.equal(paymentPackage._active, true, 'active is correct set to true');
      assert.equal(typeof (paymentPackage._active), 'boolean', 'active has correct type');
    });
  });
  describe('test getters', () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage('Slavi', 10);
    });

    it('instance should return correct name', () => {
      assert.equal(paymentPackage.name, 'Slavi');
    });

    it('instance should return correct value', () => {
      assert.equal(paymentPackage.value, 10);
    });

    it('test get VAT', () => {
      assert.equal(paymentPackage.VAT, 20);
    });

    it('test get active', () => {
      assert.equal(paymentPackage.active, true);
    });
  });
  describe('test setters', () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage('Slavi', 10);
    });
    it('set incorrect type of name', () => {
      assert.throws(() => (new PaymentPackage(10, 10), 'Name must be a non-empty string'));
    });

    it('set empty name', () => {
      assert.throws(() => (new PaymentPackage('', 10), 'Name must be a non-empty string'));
    });

    it('set correct value', () => {
      assert.equal(paymentPackage.name, 'Slavi');
      paymentPackage.name = 'Gosho';
      assert.equal(paymentPackage.name, 'Gosho')
    });

    it('set incorrect value type', () => {
      assert.throws(() => (new PaymentPackage('Slavi', '10'), 'Value must be a non-negative number'));
    });

    it('set neggative value', () => {
      assert.throws(() => (new PaymentPackage('Slavi', -10), 'Value must be a non-negative number'));
    });

    it('set correct value', () => {
      assert.equal(paymentPackage.value, 10);
      paymentPackage.value = 20;
      assert.equal(paymentPackage.value, 20);
      paymentPackage.value = 0;
      assert.equal(paymentPackage.value, 0);
    });

    it('set incorrect VAT type', () => {
      assert.throws(() => (paymentPackage.VAT = 'Gosho'), 'VAT must be a non-negative number');
    });

    it('set incorrect VAT value', () => {
      assert.throws(() => (paymentPackage.VAT = -10), 'VAT must be a non-negative number');
    });

    it('set correct VAT', () => {
      assert.equal(paymentPackage.VAT, 20);
      paymentPackage.VAT = 50;
      assert.equal(paymentPackage.VAT, 50);
    });

    it('set incorrect active value', () => {
      assert.throws(() => (paymentPackage.active = 'Gosho'), 'Active status must be a boolean');
    });
    it('set correct active', () => {
      assert.equal(paymentPackage.active, true);
      paymentPackage.active = false;
      assert.equal(paymentPackage.active, false);
    });
  });
  describe('toString', () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage('Slavi', 10);
    });

    it('test active state', () => {
      const output = [
        `Package: Slavi`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
      ].join('\n');
      assert.equal(paymentPackage.toString(), output)
    });
    it('test not active state', () => {
      const output = [
        `Package: Slavi (inactive)`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
      ].join('\n');
      paymentPackage.active = false;
      assert.equal(paymentPackage.toString(), output)
    })
  });
});