import binaryToHex from '../BinaryToHex'


describe('BinaryToHex', () => {
  let coverage = null
  beforeAll(() => {
    coverage = new Array(17).fill(false)
  })

  it('expects to return correct hexadecimal value', () => {
    expect(binaryToHex('1000', coverage)).toBe('8')
  })

  it('expects to return correct hexadecimal value for more than one hex digit', () => {
    expect(binaryToHex('11101010', coverage)).toBe('EA')
  })

  it('expects to return correct hexadecimal value for padding-required binary', () => {
    expect(binaryToHex('1001101', coverage)).toBe('4D')
  })

  it('expects to return correct hexadecimal value, matching (num).toString(16)', () => {
    expect(binaryToHex('1111', coverage)).toBe(parseInt('1111', 2).toString(16).toUpperCase())
  })

  it('expect to return correct hexadecimal value for all non decimal numbers', () => {
    expect(binaryToHex('11111110110111001011', coverage)).toBe('FEDCB')
  })

  it('expects to return correct hexadecimal value for all decimal numbers', () => {
    expect(binaryToHex('10101001100001110110010101000011001000010000', coverage)).toBe('A9876543210')
  })

  afterAll(() => {
    console.log('BinaryToHex coverage:', coverage)
  })

})
