import { generateRandomNumber } from './generateRandomNumber'

jest.mock('./generateRandomNumber', () => ({
  generateRandomNumber: () => 375
}))

describe('generateRandomNumber', function () {
  it('should return a number', function () {
    const valueTested = generateRandomNumber();
    expect(valueTested).toBe(375);
  });
});