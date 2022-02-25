import { maxProductOfThree } from '../MaxProductOfThree'

/*
* Requirements:
* 1. Array with length < 3 is not allowed
* 2. Multiplication with positive values are allowed
* 3. Multiplication with negative values are allowed
* 4. The input values does not have to be sorted
* 5. The input values must be numbers
*/
describe('MaxProductOfThree', () => {
  // Tests requirement 1
  it('expects to throw error for array with only 2 numbers', () => {
    expect(() => {
      maxProductOfThree([1, 3])
    }).toThrow('Triplet cannot exist with the given array')
  })

  // Tests requirement 2
  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, 6, 5, 3, 1, -10])).toBe(300)
  })

  // Tests requirement 3 and 4
  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, -6, 5, 3, 1, -10])).toBe(600)
  })

  // Tests requirement 2 and 4
  it('Expects to cover the 1st if-statement and product to be 2.', () => {
    expect(maxProductOfThree([1, 2, 3])).toBe(6)
  })
})
