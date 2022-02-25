/**
 * Flashsort is a distribution sorting algorithm showing linear
 * computational complexity O(n) for uniformly distributed
 * data sets and relatively little additional memory requirement.
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Flashsort
 */

export function flashSort (arr) {
  const n = arr.length
  const m = ~~(0.45 * n)
  const l = new Array(m)
  const max = getMax(arr, n)
  const min = getMin(arr, n)

  if (min === arr[max]) {
    return arr
  }

  const c1 = (m - 1) / (arr[max] - min)

  for (let k = 0; k < m; k++) {
    l[k] = 0
  }

  for (let j = 0; j < n; ++j) {
    const k = ~~(c1 * (arr[j] - min))
    ++l[k]
  }

  for (let p = 1; p < m; ++p) {
    l[p] = l[p] + l[p - 1]
  }

  let hold = arr[max]
  arr[max] = arr[0]
  arr[0] = hold

  // permutation
  let move = 0; let t; let flash
  let j = 0
  let k = m - 1

  while (move < (n - 1)) {
    while (j > (l[k] - 1)) {
      ++j
      k = ~~(c1 * (arr[j] - min))
    }
    if (k < 0) break
    flash = arr[j]
    while (j !== l[k]) {
      k = ~~(c1 * (flash - min))
      hold = arr[t = --l[k]]
      arr[t] = flash
      flash = hold
      ++move
    }
  }

  // insertion
  const sortedArray = insertion(arr, n, hold)
  return sortedArray
}

// Insertion to the array
function insertion (arr, length, hold) {
  for (let j = 1; j < length; j++) {
    hold = arr[j]
    let i = j - 1
    while (i >= 0 && arr[i] > hold) {
      arr[i + 1] = arr[i--]
    }
    arr[i + 1] = hold
  }
  return arr
}

// Max function finds and returns the index with the maximum value in an array
function getMax (arr, length) {
  let max = 0
  for (let i = 1; i < length; i++) {
    if (arr[i] > arr[max]) {
      max = i
    }
  }
  return max
}

// Min function finds and returns the minimum value in an array
function getMin (arr, length) {
  let min = arr[0]
  for (let i = 1; i < length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

/**
* Implementation of Flash Sort
*/
// const array = [3, 0, 2, 5, -1, 4, 1, -2]
// flashSort(array)
