/* eslint-env jest */
const add = require('./stringcalculator');

describe('add()', () => {
  test('Given empty string, should returns 0', () => {
    const given = '';

    const expected = 0;

    const actual = add(given);

    expect(actual).toEqual(expected);
  });

  test('Given a string with one number, should return the exact number', () => {
    const given = '1';

    const expected = 1;

    const actual = add(given);

    expect(actual).toEqual(expected);
  });

  test('Given a string with two number, should return the sum of two numbers', () => {
    const given = '1,2';

    const expected = 3;

    const actual = add(given);

    expect(actual).toEqual(expected);
  });

  test('Given a string with two number, should return the sum of two numbers', () => {
    const given = '3,5,7,2,8,1,10,45';

    const expected = 81;

    const actual = add(given);

    expect(actual).toEqual(expected);
  });

  test('Given a string with two number along with delimiter, should return the sum of the numbers', () => {
    const given = '1\n2,3';

    const expected = 6;

    const actual = add(given);

    expect(actual).toEqual(expected);
  });

  test('Given a string with two number along with custom delimiter, should return the sum of the numbers', () => {
    // const given = '//;\n1;2;3';
    // const given = '//###\n1###2###3';
    const given = '//++\n1++2++3';

    const expected = 6;

    const actual = add(given);

    expect(actual).toEqual(expected);
  });

  test('Given a string with negative numbers, should throw an exception', () => {
    const given = '1,4,-1';

    const expected = 'negatives not allowed: -1';

    const actual = add(given);

    expect(actual).toEqual(expected);
  });

  test('Given a string with big numbers, should be ignored', () => {
    const given = '1,2,3,1001';

    const expected = 6;

    const actual = add(given);

    expect(actual).toEqual(expected);
  });
});
