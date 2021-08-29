import Validator from '../index.js';

/*
correct input
*/

test('should return true', () => {
  const input = ['petka', 'JohnSmith', 'Izek123Owner', 'Nagibator01best', 'BestOfTheBestOfTheBest', 'S-t-r-o-n-g-h-o-l-d-e-r'];
  const expectedOutput = true;

  for (const item of input) {
    const actualOutput = new Validator().validateUsername(item);
    expect(actualOutput).toStrictEqual(expectedOutput);
  }
});

/*
incorrect input
*/

test('should return false', () => {
  const input = ['petka1234', '1234petka', '-JohnSmith', 'JohnSmith-', '12345', '', '-----', '____'];
  const expectedOutput = false;

  for (const item of input) {
    const actualOutput = new Validator().validateUsername(item);
    expect(actualOutput).toStrictEqual(expectedOutput);
  }
});
