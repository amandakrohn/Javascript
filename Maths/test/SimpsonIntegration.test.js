import { integralEvaluation } from '../SimpsonIntegration'

test('Should return the integral of f(x) = sqrt(x) in [1, 3] to be equal 2.797434', () => {
  const result = integralEvaluation(16, 1, 3, (x) => { return Math.sqrt(x) })
  expect(Number(result.toPrecision(7))).toBe(2.797434)
})

test('Should return the integral of f(x) = sqrt(x) + x^2 in [1, 3] to be equal 11.46410161', () => {
  const result = integralEvaluation(64, 1, 3, (x) => { return Math.sqrt(x) + Math.pow(x, 2) })
  expect(Number(result.toPrecision(10))).toBe(11.46410161)
})

test('Should return the integral of f(x) = log(x) + Pi*x^3 in [5, 12] to be equal 15809.9141543', () => {
  const result = integralEvaluation(128, 5, 12, (x) => { return Math.log(x) + Math.PI * Math.pow(x, 3) })
  expect(Number(result.toPrecision(12))).toBe(15809.9141543)
})

test('Should throw Error because N is not even integer', () => {
  expect(() => integralEvaluation(5, 1, 3, (x) => { return Math.sqrt(x) })).toThrow('N is not an even number')
})

test('Should throw Error because N is not an integer', () => {
  expect(() => integralEvaluation(4.5, 1, 3, (x) => { return Math.sqrt(x) })).toThrow('Expected integer N and finite a, b')
})

test('Should throw Error because N should be positive', () => {
  expect(() => integralEvaluation(-2, 1, 3, (x) => { return Math.sqrt(x) })).toThrow('N has to be >= 2')
})

/*test('Should throw Error because a is bigger than b', () => {
  expect(() => integralEvaluation(64, 3, 1, (x) => { return Math.sqrt(x) })).toThrow('a must be less or equal than b')
})*/

test('Should return 0 directly because a is same as b', () => {
  const result = integralEvaluation(128, 5, 5, (x) => { return Math.log(x) + Math.PI * Math.pow(x, 3) })
  expect(Number(result)).toBe(0)
})

test('Should throw Error because a does not belong to the function domain, where it should be greater than 0 in sqrt', () => {
  expect(() => integralEvaluation(64, -1, 1, (x) => { return Math.sqrt(x) })).toThrow("Result is NaN. The input interval doesn't belong to the functions domain")
})

/*test('Should throw Error because N is not an integer', () => {
  expect(() => integralEvaluation(4.5, 1, 3, (x) => { return Math.sqrt(x) })).toThrow('Invalid input')
})*/
