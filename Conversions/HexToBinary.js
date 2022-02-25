const binLookup = (c, coverage) => {
  switch (c.toLowerCase()) {
    case '0':
      coverage[0] = true
      return '0000'
    case '1':
      coverage[1] = true
      return '0001'
    case '2':
      coverage[2] = true
      return '0010'
    case '3':
      coverage[3] = true
      return '0011'
    case '4':
      coverage[4] = true
      return '0100'
    case '5':
      coverage[5] = true
      return '0101'
    case '6':
      coverage[6] = true
      return '0110'
    case '7':
      coverage[7] = true
      return '0111'
    case '8':
      coverage[8] = true
      return '1000'
    case '9':
      coverage[9] = true
      return '1001'
    case 'a':
      coverage[10] = true
      return '1010'
    case 'b':
      coverage[11] = true
      return '1011'
    case 'c':
      coverage[12] = true
      return '1100'
    case 'd':
      coverage[13] = true
      return '1101'
    case 'e':
      coverage[14] = true
      return '1110'
    case 'f':
      coverage[15] = true
      return '1111'
    default:
      coverage[16] = true
      return ''
  }
}
const hexToBinary = (hexString, coverage = new Array(17).fill(false)) => {
  /*
    Function for converting Hex to Binary

    1. We convert every hexadecimal bit to 4 binary bits
    2. Conversion goes by searching in the lookup table

    */
  const hexLexemes = hexString.split('')
  return hexLexemes.map(lexeme => binLookup(lexeme, coverage)).join('')
}

export default hexToBinary
