## Complexity
For this complexity analysis the 10 most complex functions in terms of cyclomatic complexity has been selected. The tool lizard has been used to determine the complexity for these functions.

The selected ones are:
| NLOC | CCN | LENGTH | location                                                        |
|------|-----|--------|-----------------------------------------------------------------|
| 71   | 26  | 83     | caesarCipherEncodeAndDecodeEngine@60-142@./Ciphers/KeyFinder.js |
| 25   | 20  | 28     | newGeneration@14-41@./Cellular-Automata/ConwaysGameOfLife.js    |
| 24   | 18  | 24     | hexLookup@6-29@./Conversions/BinaryToHex.js                     |
| 21   | 17  | 21     | binLookup@1-21@./Conversions/HexToBinary.js                     |
| 26   | 15  | 42     | integralEvaluation@24-65@./Maths/SimpsonIntegration.js          |
| 58   | 15  | 70     | flashSort@9-78@./Sorts/FlashSort.js                             |
| 30   | 13  | 35     | helper@14-48@./String/ScrambleStrings.js                        |
| 37   | 13  | 44     | convexHull@28-71@./Geometry/ConvexHullGraham.js                 |
| 23   | 12  | 34     | Trie.prototype.remove@60-93@./Data-Structures/Tree/Trie.js      |
| 39   | 12  | 42     | _shiftDown@95-136@./Graphs/PrimMST.js                           |

By looking at these functions we can see that functions with high cyclomatic complexity (CCN) also tend to have a high number of lines of code (NLOC). However it's not a linear pattern where a high CCN results in a greater NLOC for the function. By looking at `flashSort()` in `FlashSort.js` which has a CCN of 15 and a NLOC of 58 and then compare these values to `newGeneration()` in `ConwaysGameOfLife.js` which has a CCN of 20 and a NLOC of 25 we see that this is not a implicit implication. 

Having that said, it is still a fact that more complex functions tend to have more lines of codes. The average number of lines in this repo is 8.5 and the average cyclomatic complexity is 2.7.

### The tools and Manual count
The first five functions in the table above has also been calculated manually. All manual computations turned out to be the same as with the Lizard tool.

### Purpose of the functions
Most of these functions are clear in their purpose and has a well motivated high complexity. Two of the functions convert numbers between hex and binary. These kinds of operations require a check for each of the new introduced digits. In this case this is done by a switch with 16 cases. 

The `newGeneration()` function is generating new tiles for the game which require a lot of checks for near tiles as well as positions on the board which most of the if statements are used to.

The function `integralEvaluation()` is used to calculate the numerical integral using Simpsons rules. This method has some special cases which requires some if statements to decide what operation should be done. Since it is a numerical method, it also has some constrains on the input data type. Since JS is not a typed language, a few operations has to bee used to verify that the data has the correct type. 

The `keyFinder()` function....

### Exceptions
Our language JavaScript is using exceptions and exceptions are present in one of the analysed functions to verify that the input data is as expected. Lizard as a tool counts exceptions as unique branches which then results in a slightly higher cyclomatic complexity on a few functions. This was clearly visible in the `integralEvaluation()` function discussed above were input data is verified.

### Documentation 
The documentation for the analysed functions leaves a bit of thought to an external reader to understand what each branch is responsible for. Some functions like the converters are easy to understand even without a specific documentation since the switch structure and general knowledge of what the function does is stronger. 

The understanding of the different branches of the `integralEvaluation()` function is also good. Some of the if statements are documented with a dedicated while others uses easy naming of the variables to make it easy to understand the purpose. Some comments above a bloc of if statement is not super declarative by itself but with knowledge of how the numerical method of interest works combined with a well written comment for the whole algorithm in the main function the understanding of the branch is good.