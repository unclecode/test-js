🚀 Add Elements to the End of an Array Using concat Instead of push
-------------------------------------------------------------------

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the `concat` method as a way to combine arrays into a new one without mutating the original arrays. Compare `concat` to the `push` method. `Push` adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

var arr = \[1, 2, 3\];
arr.push(\[4, 5, 6\]);
// arr is changed to \[1, 2, 3, \[4, 5, 6\]\]
// Not the functional programming way

`Concat` offers a way to add new items to the end of an array without any mutating side effects.

* * *

Change the `nonMutatingPush` function so it uses `concat` to add `newItem` to the end of `original` instead of `push`. The function should return an array.

* * *

*   🧪 Your code should use the `concat` method.
*   🧪 Your code should not use the `push` method.
*   🧪 The `first` array should not change.
*   🧪 The `second` array should not change.
*   🧪 `nonMutatingPush([1, 2, 3], [4, 5])` should return `[1, 2, 3, 4, 5]`.