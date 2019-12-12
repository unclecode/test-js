🚀 Understanding Undefined Value returned from a Function
---------------------------------------------------------

A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.

**Example**

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined

`addSum` is a function without a `return` statement. The function will change the global `sum` variable but the returned value of the function is `undefined`.

* * *

Create a function `addFive` without any arguments. This function adds 5 to the `sum` variable, but its returned value is `undefined`.

* * *

*   🧪 `addFive` should be a function.
*   🧪 Once both functions have ran, the `sum` should be equal to 8.
*   🧪 Returned value from `addFive` should be `undefined`.
*   🧪 Inside the `addFive` function, you should add `5` to the `sum` variable.