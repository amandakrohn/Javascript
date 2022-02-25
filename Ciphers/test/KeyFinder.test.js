
import { caesarCipherEncodeAndDecodeEngine } from '../KeyFinder'

describe('caesarCipherEncodeAndDecodeEngine', () => {
  let coverage = null
  beforeAll(() => {
    coverage = new Array(20).fill(false)
  })

  it('caesarCipherEncodeAndDecodeEngine should be normal when no shift', () => {
    expect(caesarCipherEncodeAndDecodeEngine('a', 0, coverage)).toBe('a')
  })

  afterAll(() => {
    console.log('caesarCipherEncodeAndDecodeEngine coverage:', coverage)
  })
})
