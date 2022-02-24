## Coverage Improvement

before all:

`CCN`

![image-20220223161203435](https://raw.githubusercontent.com/darkway-s/image1/master/typora/image-20220223161203435.png)

`test coverage`(use jest in-built tool)

![image-20220223161345468](https://raw.githubusercontent.com/darkway-s/image1/master/typora/image-20220223161345468.png)

23branches in total. 16 covered.7 uncoverd.

All the codes are in our [DIY branch](https://github.com/amandakrohn/Javascript/tree/DIY). I wrote 6 new unit tests to cover all the branches.

I use `expect` in JavaScript to assert in unit tests.

Most tests are expanded from the original tests. With most parameters same, we could better detect the part generates "ERROR"s. Some tests are new, such as edge tests.

for the original one, my branch test tell me 

| Branch ID | Taken |
| --------- | ----- |
| 0         | false |
| 1         | false |
| 2         | false |
| 3         | false |
| 4         | false |
| 5         | false |
| 6         | true  |
| 7         | true  |
| 8         | true  |
| 9         | true  |
| 10        | true  |
| 11        | false |
| 12        | true  |

finally all the test done
![image-20220223220049844](https://raw.githubusercontent.com/darkway-s/image1/master/typora/image-20220223220049844.png)

Code on coverage test:

```javascript
/*
*
* @file
* @title Composite Simpson's rule for definite integral evaluation
* @author: [ggkogkou](https://github.com/ggkogkou)
* @brief Calculate definite integrals using composite Simpson's numerical method
*
* @details The idea is to split the interval in an EVEN number N of intervals and use as interpolation points the xi
* for which it applies that xi = x0 + i*h, where h is a step defined as h = (b-a)/N where a and b are the
* first and last points of the interval of the integration [a, b].
*
* We create a table of the xi and their corresponding f(xi) values and we evaluate the integral by the formula:
* I = h/3 * {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
*
* That means that the first and last indexed i f(xi) are multiplied by 1,
* the odd indexed f(xi) by 4 and the even by 2.
*
* N must be even number and a<b. By increasing N, we also increase precision
*
* More info: [Wikipedia link](https://en.wikipedia.org/wiki/Simpson%27s_rule#Composite_Simpson's_rule)
*
*/

function integralEvaluation (N, a, b, func, coverage = new Array(14).fill(false)) {
  // Check if N is an even integer
  let isNEven = true
  if (N % 2 !== 0) isNEven = false                                                                                              //+1

  if (!Number.isInteger(N) || Number.isNaN(a) || Number.isNaN(b)) { throw new TypeError('Expected integer N and finite a, b') } //+3
  if (!isNEven) { throw Error('N is not an even number') }                                                                      //+1
  if (N <= 0) { throw Error('N has to be >= 2') }                                                                               //+1

  // Check if a < b
  if (a > b) { throw Error('a must be less or equal than b') }                                                                  //+1
  if (a === b) return 0                                                                                                         //+1

  // Calculate the step h
  const h = (b - a) / N

  // Find interpolation points
  let xi = a // initialize xi = x0
  const pointsArray = []

  // Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
  let temp
  for (let i = 0; i < N + 1; i++) {                                                                                             //+1
    if (i === 0 || i === N) temp = func(xi)                                                                                     //+2
    else if (i % 2 === 0) temp = 2 * func(xi)                                                                                   //+1
    else temp = 4 * func(xi)

    pointsArray.push(temp)
    xi += h
  }

  // Calculate the integral
  let result = h / 3
  temp = 0
  for (let i = 0; i < pointsArray.length; i++) temp += pointsArray[i]                                                           //+1

  result *= temp

  if (Number.isNaN(result)) { throw Error("Result is NaN. The input interval doesn't belong to the functions domain") }         //+1

  return result                                                                                                                 
}

export { integralEvaluation }

```









## Refactoring

The original file, `lizard` measures the CCN is 15.

![image-20220223230123230](https://raw.githubusercontent.com/darkway-s/image1/master/typora/image-20220223230123230.png)



### Function integralEvaluation()

#### unnecessary "if"

##### in loop

The first part that the high CC comes from  is the use of "if" in the loop.

```javascript
// Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
  let temp
  for (let i = 0; i < N + 1; i++) {
    if (i === 0 || i === N) temp = func(xi)
    else if (i % 2 === 0) temp = 2 * func(xi)
    else temp = 4 * func(xi)

    pointsArray.push(temp)
    xi += h
  }
```

The edge decision can be set out of the loop.

```javascript
// Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
let temp
// i === 0
temp = func(xi)
pointsArray.push(temp)
xi += h
for (let i = 1; i < N; i++) {
	if (i % 2 === 0) temp = 2 * func(xi)
    else temp = 4 * func(xi)

    pointsArray.push(temp)
    xi += h
}
temp = func(xi)
pointsArray.push(temp)

```

now the CCN comes down to 13

![image-20220223235905499](https://raw.githubusercontent.com/darkway-s/image1/master/typora/image-20220223235905499.png)



And we can integrate the even and odd iterators.

```javascript
// Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
let temp
// i === 0
temp = func(xi)
pointsArray.push(temp)
xi += h
for (let i = 1; i < N; i += 2) {
    // odd
    temp = 4 * func(xi)
    pointsArray.push(temp)
    xi += h
    // even
	temp = 2 * func(xi)
    pointsArray.push(temp)
    xi += h
}
// drop the last i === N, rewrite with the correct one
pointsArray.pop()
xi -= h
temp = func(xi)
pointsArray.push(temp)

```

Now the CCN reduces to 12 with all the tests passed.

![image-20220224000823872](https://raw.githubusercontent.com/darkway-s/image1/master/typora/image-20220224000823872.png)

With the improvement, the function would run faster and with lower CC.

However, it's also **harder to understand and maintain.** 

##### replace comparation with assignment

there is also a small part I can improve. The following codes can convert to one without "if" sentences.

```javascript
let isNEven = true
if (N % 2 !== 0) isNEven = false
```

We use assignment instead of comparation.

```javascript
let isNEven = (!(N % 2))
```

And CCN -1

![image-20220224001809649](https://raw.githubusercontent.com/darkway-s/image1/master/typora/image-20220224001809649.png)

With the improvement, the function is with lower CC.

However, it could contain **hazards in the inexplicit type casting**.

##### quick routes for specific input

The function directly returns 0 for the situation `a === b`. 

Comment out the line it also works well(The final result of calculation is surely 0.), but at the expense of **time for specific input**.

```javascript
// if (a === b) return 0
```

![image-20220224003508763](https://raw.githubusercontent.com/darkway-s/image1/master/typora/image-20220224003508763.png)

Now CC downs 33%.

#### edge case specify

This method has some special cases which require some if-statements to decide what operation should be done. Since it is a numerical method, it also has some constraints on the input data type. Since JS is not a typed language, a few operations have to be used to verify that the data has the correct type.

 That’s the second part where the high CC comes from.



The requirements `a <= b` is actually not necessary for the program. It can also work with the input `a > b`, and outputs a negative number as a result. It won't be worse because there is still a detection of NaN result at the end of the program.

So we can also comment out it. (and also corresponding unit test)

```javascript
//if (a > b) { throw Error('a must be less or equal than b') }
```

But the drawbacks is we **change the functionality**, enlarging the domain of input the program can receive. 



Now the CC reduces to 9 from 15. (**40% improvement**)

![image-20220224005357947](https://raw.githubusercontent.com/darkway-s/image1/master/typora/image-20220224005357947.png)

Here is the git diff output:

```
$ git diff
diff --git a/Maths/SimpsonIntegration.js b/Maths/SimpsonIntegration.js
index 33e9772..010e2c1 100644
--- a/Maths/SimpsonIntegration.js
+++ b/Maths/SimpsonIntegration.js
@@ -23,16 +23,16 @@

 function integralEvaluation (N, a, b, func) {
   // Check if N is an even integer
-  let isNEven = true
-  if (N % 2 !== 0) isNEven = false
+  let isNEven = (!(N % 2))

+  
   if (!Number.isInteger(N) || Number.isNaN(a) || Number.isNaN(b)) { throw new TypeError('Expected integer N and finite a, b') }
   if (!isNEven) { throw Error('N is not an even number') }
   if (N <= 0) { throw Error('N has to be >= 2') }

   // Check if a < b
-  if (a > b) { throw Error('a must be less or equal than b') }
-  if (a === b) return 0
+  //if (a > b) { throw Error('a must be less or equal than b') }
+  //if (a === b) return 0

   // Calculate the step h
   const h = (b - a) / N
diff --git a/Maths/test/SimpsonIntegration.test.js b/Maths/test/SimpsonIntegration.test.js
index 870fac6..ff778e1 100644
--- a/Maths/test/SimpsonIntegration.test.js
+++ b/Maths/test/SimpsonIntegration.test.js
@@ -27,9 +27,9 @@ test('Should throw Error because N should be positive', () => {
   expect(() => integralEvaluation(-2, 1, 3, (x) => { return Math.sqrt(x) })).toThrow('N has to be >= 2')
 })

-test('Should throw Error because a is bigger than b', () => {
+/*test('Should throw Error because a is bigger than b', () => {
   expect(() => integralEvaluation(64, 3, 1, (x) => { return Math.sqrt(x) })).toThrow('a must be less or equal than b')
-})
+})*/


 test('Should return 0 directly because a is same as b', () => {
   const result = integralEvaluation(128, 5, 5, (x) => { return Math.log(x) + Math.PI * Math.pow(x, 3) })
@@ -39,3 +39,7 @@ test('Should return 0 directly because a is same as b', () => {
 test('Should throw Error because a does not belong to the function domain, where it should be greater than 0 in sqrt', () => {
   expect(() => integralEvaluation(64, -1, 1, (x) => { return Math.sqrt(x) })).toThrow("Result is NaN. The input interval doesn't belong to the functions domain")
 })
+
+/*test('Should throw Error because N is not an integer', () => {
+  expect(() => integralEvaluation(4.5, 1, 3, (x) => { return Math.sqrt(x) })).toThrow('Invalid input')
+})*/
```


