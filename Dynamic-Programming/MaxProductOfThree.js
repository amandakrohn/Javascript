/**
 *  Given an array of numbers, return the maximum product
 *  of 3 numbers from the array
 *  https://wsvincent.com/javascript-three-sum-highest-product-of-three-numbers/
 * @param {number[]} arrayItems
 * @returns number
 */
export function maxProductOfThree (arrayItems) {
  const n = arrayItems.length

  if (n < 3) throw new Error('Triplet cannot exist with the given array')

  const sorted = arrayItems.sort((a, b) => { return a - b })

  const prod1 = sorted[n - 3] * sorted[n - 2] * sorted[n - 1]
  const prod2 = sorted[n - 1] * sorted[0] * sorted[1]

  return Math.max(prod1, prod2)
}
