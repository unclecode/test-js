🚀 Use Conditional Logic with If Statements
-------------------------------------------

`If` statements are used to make decisions in code. The keyword `if` tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as `Boolean` conditions and they may only be `true` or `false`.

When the condition evaluates to `true`, the program executes the statement inside the curly braces. When the Boolean condition evaluates to `false`, the statement inside the curly braces will not execute.

**Pseudocode**

> if (_condition is true_) {  
>   _statement is executed_  
> }

**Example**

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"

When `test` is called with a value of `true`, the `if` statement evaluates `myCondition` to see if it is `true` or not. Since it is `true`, the function returns `"It was true"`. When we call `test` with a value of `false`, `myCondition` is _not_ `true` and the statement in the curly braces is not executed and the function returns `"It was false"`.

* * *

Create an `if` statement inside the function to return `"Yes, that was true"` if the parameter `wasThatTrue` is `true` and return `"No, that was false"` otherwise.

* * *

*   🧪 `trueOrFalse` should be a function
*   🧪 `trueOrFalse(true)` should return a string
*   🧪 `trueOrFalse(false)` should return a string
*   🧪 `trueOrFalse(true)` should return "Yes, that was true"
*   🧪 `trueOrFalse(false)` should return "No, that was false"