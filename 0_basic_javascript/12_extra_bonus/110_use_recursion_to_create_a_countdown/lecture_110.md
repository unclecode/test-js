🚀 Use Recursion to Create a Countdown
--------------------------------------

In a [previous challenge](/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion), you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with `1` through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers `1` through `n`. This function will need to accept an argument, `n`, representing the final number. Then it will need to call itself with progressively smaller values of `n` until it reaches `1`. You could write the function as follows:

    function countup(n) {
      if (n < 1) {
        return [];
      } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
      }
    }
    console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
    

At first, this seems counterintuitive since the value of `n` _decreases_, but the values in the final array are _increasing_. This happens because the push happens last, after the recursive call has returned. At the point where `n` is pushed into the array, `count(n - 1)` has already been evaluated and returned `[1, 2, ..., n - 1]`.

* * *

We have defined a function called `countdown` with one parameter (`n`). The function should use recursion to return an array containing the integers `n` through `1` based on the `n` parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with `n = 5` should return the array `[5, 4, 3, 2, 1]`. Your function must use recursion by calling itself and must not use loops of any kind.

* * *

*   🧪 `countdown(-1)` should return an empty array.
*   🧪 `countdown(10)` should return `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`
*   🧪 `countdown(5)` should return `[5, 4, 3, 2, 1]`
*   🧪 Your code should not rely on any kind of loops (`for`, `while` or higher order functions such as `forEach`, `map`, `filter`, and `reduce`).
*   🧪 You should use recursion to solve this problem.