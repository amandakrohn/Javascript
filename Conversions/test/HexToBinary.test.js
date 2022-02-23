import hexToBinary from '../HexToBinary'

describe('hexToBinary', () => {
  it('expects to return correct hexadecimal value', () => {
    expect(hexToBinary('8')).toBe('1000')
  })

  it('expects to return correct binary value for more than one hex digit', () => {
    expect(hexToBinary('EA')).toBe('11101010')
  })

  it('expects to test its robustness as it should be case-insensitive', () => {
    expect(hexToBinary('4d')).toBe('01001101')
  })

  it('expects to return correct hexadecimal value, matching (num).toString(2)', () => {
    expect(hexToBinary('F')).toBe(parseInt('F', 16).toString(2))
  })

  // We expect each hexadecimal digit to transform into its binary 4-digit part.
  it('expects to return correct binary representation for all branches', () => {
    expect(hexToBinary('0123456789ABCDEFabcdef')).toBe('0000000100100011010001010110011110001001101010111100110111101111101010111100110111101111')
  })

  // We expect an invalid hexadecimal digit to return empty string
  it('expect to return empty string for invalid hexadecimal digit', () => {
    expect(hexToBinary('H')).toBe('')
  })
})
