import binaryToHex from '../BinaryToHex'

describe('BinaryToHex', () => {
  it('expects to return correct hexadecimal value', () => {
    expect(binaryToHex('1000')).toBe('8')
  })

  it('expects to return correct hexadecimal value for more than one hex digit', () => {
    expect(binaryToHex('11101010')).toBe('EA')
  })

  it('expects to return correct hexadecimal value for padding-required binary', () => {
    expect(binaryToHex('1001101')).toBe('4D')
  })

  it('expects to return correct hexadecimal value, matching (num).toString(16)', () => {
    expect(binaryToHex('1111')).toBe(parseInt('1111', 2).toString(16).toUpperCase())
  })

  it('expects to return correct hexadecimal value for all decimal numbers', () => {
    expect(binaryToHex('10101001100001110110010101000011001000010000')).toBe('A9876543210')
  })

  it('expect to return correct hexadecimal value for all non decimal numbers', () => {
    expect(binaryToHex('11111110110111001011')).toBe('FEDCB')
  })
})
