/******************************************************
 Find and retrieve the encryption key automatically
 Note: This is a draft version, please help to modify, Thanks!
 ******************************************************/
function keyFinder (str) { // str is used to get the input of encrypted string
  const wordBank = [
    'I ',
    'You ',
    'We ',
    'They ',
    'He ',
    'She ',
    'It ',
    ' the ',
    'The ',
    ' of ',
    ' is ',
    'Is ',
    ' am ',
    'Am ',
    ' are ',
    'Are ',
    ' have ',
    'Have ',
    ' has ',
    'Has ',
    ' may ',
    'May ',
    ' be ',
    'Be ']
  // let wordbankelementCounter = 0;
  // let key = 0; // return zero means the key can not be found
  const inStr = str.toString() // convert the input to String
  let outStr = '' // store the output value
  let outStrElement = '' // temporary store the word inside the outStr, it is used for comparison
  for (let k = 0; k < 26; k++) { // try the number of key shifted, the sum of character from a-z or A-Z is 26
    outStr = caesarCipherEncodeAndDecodeEngine(inStr, k) // use the encryption engine to decrypt the input string

    // loop through the whole input string
    for (let s = 0; s < outStr.length; s++) {
      for (let i = 0; i < wordBank.length; i++) {
        // initialize the outStrElement which is a temp output string for comparison,
        // use a loop to find the next digit of wordBank element and compare with outStr's digit
        for (let w = 0; w < wordBank[i].length; w++) {
          outStrElement += outStr[s + w]
        }
        // this part need to be optimize with the calculation of the number of occurrence of word's probabilities
        // linked list will be used in the next stage of development to calculate the number of occurrence of the key
        if (wordBank[i] === outStrElement) {
          return k // return the key number if founded
        }
        outStrElement = '' // reset the temp word
      } // end for ( let i=0; i < wordBank.length; i++)
    }
  }
  return 0 // return 0 if found nothing
}

/* this sub-function is used to assist the keyFinder to find the key */
function caesarCipherEncodeAndDecodeEngine (inStr, numShifted) {
  const shiftNum = numShifted
  let charCode = 0
  let outStr = ''
  let shiftedCharCode = 0
  let result = 0

  for (let i = 0; i < inStr.length; i++) {
    charCode = inStr[i].charCodeAt()
    shiftedCharCode = charCode + shiftNum
    result = charCode

    if ((charCode >= 48 && charCode <= 57)) {
      result = cycleCharacterInContext(shiftedCharCode, 48, 57)
    } else if ((charCode >= 65 && charCode <= 90)) {
      result = cycleCharacterInContext(shiftedCharCode, 65, 90)
    } else if ((charCode >= 97 && charCode <= 122)) {
      result = cycleCharacterInContext(shiftedCharCode, 97, 122)
    }
    outStr = outStr + String.fromCharCode(parseInt(result))
  }
  return outStr
}

function cycleCharacterInContext (character, lowerLimit, upperLimit) {
  let modVal = upperLimit - lowerLimit + 1
  let result = 0

  if (character < lowerLimit) {
    let diff = Math.abs(lowerLimit - 1 - character) % modVal

    while ((diff % modVal) >= modVal) {
      diff = diff % modVal
    }
    character = upperLimit - diff
    result = character
  } else if (character >= lowerLimit && character <= upperLimit) {
    result = character
  } else if (character > upperLimit) {
    let diff = Math.abs(character - 1 - upperLimit) % modVal

    while ((diff % modVal) >= modVal) {
      diff = diff % modVal
    }
    character = lowerLimit + diff
    result = character
  }

  return result
}

export { keyFinder, caesarCipherEncodeAndDecodeEngine }

// > keyFinder('test')
// 0
