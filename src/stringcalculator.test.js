/* eslint-env jest */
const add = require('./stringcalculator')

describe('add()', () => {
  test('Given empty string, should returns 0', () => {
    const given = ""

    const expected = 0;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given input 1,2, should returns 3', () => {
    const given = "1,2"

    const expected = 3;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given input 1,2,3,4, should returns 10', () => {
    const given = "1,2,3,4"

    const expected = 10;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given input 1\n2,3, should returns 6', () => {
    const given = "1\n2,3"

    const expected = 6;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given input //;\n1;2, should returns 3', () => {
    const given = "//;\n1;2"

    const expected = 3;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given input 1,4,-1, should returns negatives not allowed: -1', () => {
    const given = "1,4,-1"

    const expected = "negatives not allowed: -1";

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given input 2,1001, should returns 2', () => {
    const given = "2,1001"

    const expected = 2;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
})
