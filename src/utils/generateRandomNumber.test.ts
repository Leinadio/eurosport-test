import { generateRandomNumber } from './generateRandomNumber'

describe('generateRandomNumber', function () {
  it('should return a number', function () {
    const valueTested = generateRandomNumber();
    expect(valueTested).toBe(1);
  });
});