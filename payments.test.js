//this took me some time to do. I understand the concept of testing but I was not as confident in 
//creating my own tests yet, so I replicated the solution tests on my own and checked them against the solution
describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });

it('should add a new payment to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
  });

it('should not add a new payment on submitPaymentInfo() with empty input', function () {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

it('should create a new payment on createCurPayment()', function () {
    let expectedPayment = {
      billAmt: '100',
      tipAmt: '20',
      tipPercent: 20,
    }

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    tipPercentInput.value = '';
    paymentId = 0;
    allPayments = {};
  });
})