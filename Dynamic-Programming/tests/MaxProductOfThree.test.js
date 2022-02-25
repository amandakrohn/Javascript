import {
  maxProductOfThree
} from '../MaxProductOfThree'

describe('MaxProductOfThree', () => {
  let coverage = null
  beforeAll(() => {
    coverage = new Array(5).fill(false)
  })

  it('expects to throw error for array with only 2 numbers', () => {
    expect(() => {
      maxProductOfThree([1, 3], coverage)
    }).toThrow('Triplet cannot exist with the given array')
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, 6, 5, 3, 1, -10], coverage)).toBe(300)
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, -6, 5, 3, 1, -10], coverage)).toBe(600)
  })

  afterAll(() => {
    for (let i = 0; i < coverage.length; i++) {
      console.log('Branch ' + i + ' taken: ' + coverage[i])
    }
    console.log(coverage)
  })
})
