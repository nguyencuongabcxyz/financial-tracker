import { MoneyUtils } from '@/app/utils';

describe('MoneyUtils.getFluctuatedPercentageFormat function', () => {
  it('returns the correct format for positive percentage', () => {
    const percentage = 10;
    const result = MoneyUtils.getFluctuatedPercentageFormat(percentage);
    expect(result).toBe('+10%');
  });

  it('returns the correct format for negative percentage', () => {
    const percentage = -5;
    const result = MoneyUtils.getFluctuatedPercentageFormat(percentage);
    expect(result).toBe('-5%');
  });

  it('returns the correct format for zero percentage', () => {
    const percentage = 0;
    const result = MoneyUtils.getFluctuatedPercentageFormat(percentage);
    expect(result).toBe('0%');
  });
});

describe('MoneyUtils.getNormalFormat function', () => {
  const testCases = [
    { amount: 10, expected: '10 VND' },
    { amount: -100, expected: '-100 VND' },
    { amount: 0, expected: '0 VND' },
  ];

  testCases.forEach(({ amount, expected }) => {
    it(`returns the correct format for amount ${amount}`, () => {
      const result = MoneyUtils.getNormalFormat(amount);
      expect(result).toBe(expected);
    });
  });
});


describe('MoneyUtils.getFluctuatedFormat function', () => {
  it('returns the correct format for positive amount', () => {
    const amount = 10;
    const result = MoneyUtils.getFluctuatedFormat(amount);
    expect(result).toBe('+10 VND');
  });

  it('returns the correct format for negative amount', () => {
    const amount = -10;
    const result = MoneyUtils.getFluctuatedFormat(amount);
    expect(result).toBe('-10 VND');
  });

  it('returns the correct format for zero amount', () => {
    const amount = 0;
    const result = MoneyUtils.getFluctuatedFormat(amount);
    expect(result).toBe('0 VND');
  });
});