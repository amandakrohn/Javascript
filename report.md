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

