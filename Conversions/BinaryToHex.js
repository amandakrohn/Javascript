const pad = (num, padlen) => {
  const pad = new Array(1 + padlen).join(0)
  return (pad + num).slice(-pad.length)
}

const hexLookup = (bin) => {
  let binary = bin
  if (binary.length < 4) {
    binary = pad(binary, 4)
  }

  //Map to do a lookup and return the hexadecimal equivalent
  const lookup = new Map()
  lookup.set('0000', '0')
  lookup.set('0001', '1')
  lookup.set('0010', '2')
  lookup.set('0011', '3')
  lookup.set('0100', '4')
  lookup.set('0101', '5')
  lookup.set('0110', '6')
  lookup.set('0111', '7')
  lookup.set('1000', '8')
  lookup.set('1001', '9')
  lookup.set('1010', 'A')
  lookup.set('1011', 'B')
  lookup.set('1100', 'C')
  lookup.set('1101', 'D')
  lookup.set('1110', 'E')
  lookup.set('1111', 'F')

  return lookup.get(binary)
}
const binaryToHex = (binaryString) => {
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
      result += hexLookup(binaryString.slice(i - 3, i + 1).join(''))
    } else {
      result += hexLookup(binaryString.slice(0, i + 1).join(''))
    }
  }
  return result.split('').reverse().join('')
}

export default binaryToHex
