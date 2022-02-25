const pad = (num, padlen) => {
  const pad = new Array(1 + padlen).join(0)
  return (pad + num).slice(-pad.length)
}

const hexLookup = (bin, coverage) => {
  let binary = bin
  if (binary.length < 4) {
    binary = pad(binary, 4)
    coverage[0] = true
  }
  switch (binary) {
    case '0000':
      coverage[1] = true
      return '0'
    case '0001':
      coverage[2] = true
      return '1'
    case '0010':
      coverage[3] = true
      return '2'
    case '0011':
      coverage[4] = true
      return '3'
    case '0100':
      coverage[5] = true
      return '4'
    case '0101':
      coverage[6] = true
      return '5'
    case '0110':
      coverage[7] = true
      return '6'
    case '0111':
      coverage[8] = true
      return '7'
    case '1000':
      coverage[9] = true
      return '8'
    case '1001':
      coverage[10] = true
      return '9'
    case '1010':
      coverage[11] = true
      return 'A'
    case '1011':
      coverage[12] = true
      return 'B'
    case '1100':
      coverage[13] = true
      return 'C'
    case '1101':
      coverage[14] = true
      return 'D'
    case '1110':
      coverage[15] = true
      return 'E'
    case '1111':
      coverage[16] = true
      return 'F'
  }
}
const binaryToHex = (binaryString, coverage) => {
  /*
  Function for convertung Binary to Hex

  1. The conversion will start from Least Significant Digit (LSB) to the Most Significant Bit (MSB).
  2. We divide the bits into sections of 4-bits starting from LSB to MSB.
  3. If the MSB get less than 4 bits, then we pad 0s to the front of it.

  For Example:
  Binary String = '1001101'

  1. Divide it to 2 parts => ['100', '1101']
  2. Pad 0s the MSB so it'll be => ['0100', '1101']
  3. Use the lookup table and merge them, therefore the result is 4D.

  */

  let result = ''
  binaryString = binaryString.split('')
  for (let i = binaryString.length - 1; i >= 0; i = i - 4) {
    if (i >= 3) {
      result += hexLookup(binaryString.slice(i - 3, i + 1).join(''), coverage)
    } else {
      result += hexLookup(binaryString.slice(0, i + 1).join(''), coverage)
    }
  }
  return result.split('').reverse().join('')
}

export default binaryToHex
