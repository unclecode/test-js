🚀 Arguments Optional
---------------------

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function.

Calling this returned function with a single argument will then return the sum:

`var sumTwoAnd = addTogether(2);`

`sumTwoAnd(3)` returns `5`.

If either argument isn't a valid number, return undefined.

Remember to use [Read-Search-Ask](https://www.freecodecamp.org/forum/t/how-to-get-help-when-you-are-stuck-coding/19514) if you get stuck. Try to pair program. Write your own code.

* * *

*   🧪 `addTogether(2, 3)` should return 5.
*   🧪 `addTogether(2)(3)` should return 5.
*   🧪 `addTogether("http://bit.ly/IqT6zt")` should return undefined.
*   🧪 `addTogether(2, "3")` should return undefined.
*   🧪 `addTogether(2)([3])` should return undefined.