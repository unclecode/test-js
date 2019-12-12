🚀 Use the some Method to Check that Any Elements in an Array Meet a Criteria
-----------------------------------------------------------------------------

The `some` method works with arrays to check if _any_ element passes a particular test. It returns a Boolean value - `true` if any of the values meet the criteria, `false` if not.

For example, the following code would check if any element in the `numbers` array is less than 10:

var numbers = \[10, 50, 8, 220, 110, 11\];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true

* * *

Use the `some` method inside the `checkPositive` function to check if any element in `arr` is positive. The function should return a Boolean value.

* * *

*   🧪 Your code should use the `some` method.
*   🧪 `checkPositive([1, 2, 3, -4, 5])` should return `true`.
*   🧪 `checkPositive([1, 2, 3, 4, 5])` should return `true`.
*   🧪 `checkPositive([-1, -2, -3, -4, -5])` should return `false`.