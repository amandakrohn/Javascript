/**
 *  Given an array of numbers, return the maximum product
 *  of 3 numbers from the array
 *  https://wsvincent.com/javascript-three-sum-highest-product-of-three-numbers/
 * @param {number[]} arrayItems
 * @returns number
 */
export function maxProductOfThree (arrayItems, coverage) {
  // if size is less than 3, no triplet exists
  const n = arrayItems.length
  if (n < 3) {
    coverage[0] = true
    throw new Error('Triplet cannot exist with the given array')
  }

  let max1 = arrayItems[0]
  let max2 = -1
  let max3 = -1
  let min1 = arrayItems[0]
  let min2 = -1
  for (let i = 1; i < n; i++) {
    if (arrayItems[i] > max1) {
      coverage[1] = true
      max3 = max2
      max2 = max1
      max1 = arrayItems[i]
    } else if (max2 === -1 || arrayItems[i] > max2) {
      coverage[2] = true
      max3 = max2
      max2 = arrayItems[i]
    } else if (max3 === -1 || arrayItems[i] > max3) {
      coverage[3] = true
      max3 = arrayItems[i]
    }
    if (arrayItems[i] < min1) {
      coverage[4] = true
      min2 = min1
      min1 = arrayItems[i]
    } else if (min2 === -1 || arrayItems[i] < min2) {
      coverage[5] = true
      min2 = arrayItems[i]
    }
  }
  const prod1 = max1 * max2 * max3
  const prod2 = max1 * min1 * min2
  return Math.max(prod1, prod2)
}
