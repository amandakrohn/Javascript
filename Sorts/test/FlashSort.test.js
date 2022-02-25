import { flashSort } from '../FlashSort'

describe('FlashSort', () => {
  it('should sort arrays correctly', () => {
    expect(flashSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    expect(flashSort([7, 9, 4, 3, 5])).toEqual([3, 4, 5, 7, 9])
  })

  it('should handle arrays where the greatest is the same as the smallest value', () => {
    expect(flashSort([1, 1, 1, 1])).toEqual([1, 1, 1, 1])
  })

  it('should handle arrays with only one element', () => {
    expect(flashSort([1])).toEqual([1])
  })
})
