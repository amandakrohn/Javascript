import hexToBinary from '../HexToBinary'

describe('hexToBinary', () => {
  let coverage = null
  beforeAll(() => {
    coverage = new Array(17).fill(false)
  })
  it('expects to return correct hexadecimal value', () => {
    expect(hexToBinary('8', coverage)).toBe('1000')
  })

  it('expects to return correct binary value for more than one hex digit', () => {
    expect(hexToBinary('EA', coverage)).toBe('11101010')
  })

  it('expects to test its robustness as it should be case-insensitive', () => {
    expect(hexToBinary('4d', coverage)).toBe('01001101')
  })

  it('expects to return correct hexadecimal value, matching (num).toString(2)', () => {
    expect(hexToBinary('F', coverage)).toBe(parseInt('F', 16).toString(2))
  })
  afterAll(() => {
    for (let i = 0; i < coverage.length; i++) { console.log('Branch ' + i + ' taken: ' + coverage[i]) }
    console.log(coverage)
  })
})
