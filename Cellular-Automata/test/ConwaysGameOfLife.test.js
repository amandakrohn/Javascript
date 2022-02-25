import { newGeneration } from '../ConwaysGameOfLife'

describe('newGeneration', () => {
  let coverage = null
  beforeEach(() => {
    coverage = new Array(17).fill(false)
  })
  afterEach(() => {
    for (let i = 0; i < coverage.length; i++) {
      console.log('Branch ' + i + ' taken: ' + coverage[i])
    }
  })

  it('should produce the next generation according to the rules', () => {
    expect(newGeneration([[0, 1, 0], [0, 1, 0], [0, 1, 0]], coverage))
      .toEqual([[0, 0, 0], [1, 1, 1], [0, 0, 0]])
  })
})
