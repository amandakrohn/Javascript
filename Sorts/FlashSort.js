/**
 * Flashsort is a distribution sorting algorithm showing linear
 * computational complexity O(n) for uniformly distributed
 * data sets and relatively little additional memory requirement.
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Flashsort
 */

export function flashSort (arr, coverage) {
  let max = 0; let min = arr[0]
  const n = arr.length
  const m = ~~(0.45 * n)
  const l = new Array(m)

  for (let i = 1; i < n; ++i) {
    coverage[0] = true
    if (arr[i] < min) {
      min = arr[i]
      coverage[1] = true
    }
    if (arr[i] > arr[max]) {
      max = i
      coverage[2] = true
    }
  }

  if (min === arr[max]) {
    coverage[3] = true
    return arr
  }

  const c1 = (m - 1) / (arr[max] - min)

  for (let k = 0; k < m; k++) {
    l[k] = 0
    coverage[4] = true
  }

  for (let j = 0; j < n; ++j) {
    const k = ~~(c1 * (arr[j] - min))
    ++l[k]
    coverage[5] = true
  }

  for (let p = 1; p < m; ++p) {
    l[p] = l[p] + l[p - 1]
    coverage[6] = true
  }

  let hold = arr[max]
  arr[max] = arr[0]
  arr[0] = hold

  // permutation
  let move = 0; let t; let flash
  let j = 0
  let k = m - 1

  while (move < (n - 1)) {
    coverage[7] = true
    while (j > (l[k] - 1)) {
      ++j
      k = ~~(c1 * (arr[j] - min))
      coverage[8] = true
    }
    if (k < 0) {
      coverage[9] = true
      break
    }
    flash = arr[j]
    while (j !== l[k]) {
      k = ~~(c1 * (flash - min))
      hold = arr[t = --l[k]]
      arr[t] = flash
      flash = hold
      ++move
      coverage[10] = true
    }
  }

  // insertion
  for (j = 1; j < n; j++) {
    coverage[11] = true
    hold = arr[j]
    let i = j - 1
    while (i >= 0 && arr[i] > hold) {
      arr[i + 1] = arr[i--]
      coverage[12] = true
    }
    arr[i + 1] = hold
  }
  return arr
}

/**
* Implementation of Flash Sort
*/
// const array = [3, 0, 2, 5, -1, 4, 1, -2]
// flashSort(array)
