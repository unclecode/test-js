🚀 Check if an Object has a Property
------------------------------------

Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the `hasOwnProperty()` method and the other uses the `in` keyword. If we have an object `users` with a property of `Alan`, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

* * *

We've created an object, `users`, with some users in it and a function `isEveryoneHere`, which we pass the `users` object to as an argument. Finish writing this function so that it returns `true` only if the `users` object contains all four names, `Alan`, `Jeff`, `Sarah`, and `Ryan`, as keys, and `false` otherwise.

* * *

*   🧪 The `users` object should only contain the keys `Alan`, `Jeff`, `Sarah`, and `Ryan`
*   🧪 The function `isEveryoneHere` should return `true` if `Alan`, `Jeff`, `Sarah`, and `Ryan` are properties on the `users` object
*   🧪 The function `isEveryoneHere` should return `false` if `Alan` is not a property on the `users` object
*   🧪 The function `isEveryoneHere` should return `false` if `Jeff` is not a property on the `users` object
*   🧪 The function `isEveryoneHere` should return `false` if `Sarah` is not a property on the `users` object
*   🧪 The function `isEveryoneHere` should return `false` if `Ryan` is not a property on the `users` object