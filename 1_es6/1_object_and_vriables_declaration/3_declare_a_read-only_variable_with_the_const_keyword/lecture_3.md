🚀 Declare a Read-Only Variable with the const Keyword
------------------------------------------------------

The keyword `let` is not the only new way to declare variables. In ES6, you can also declare variables using the `const` keyword.

`const` has all the awesome features that `let` has, with the added bonus that variables declared using `const` are read-only. They are a constant value, which means that once a variable is assigned with `const`, it cannot be reassigned.

"use strict";
const FAV\_PET = "Cats";
FAV\_PET = "Dogs"; // returns error

As you can see, trying to reassign a variable declared with `const` will throw an error. You should always name variables you don't want to reassign using the `const` keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

**Note:** It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.

* * *

Change the code so that all variables are declared using `let` or `const`. Use `let` when you want the variable to change, and `const` when you want the variable to remain constant. Also, rename variables declared with `const` to conform to common practices, meaning constants should be in all caps.

* * *

*   🧪 `var` should not exist in your code.
*   🧪 `SENTENCE` should be a constant variable declared with `const`.
*   🧪 `i` should be declared with `let`.
*   🧪 `console.log` should be changed to print the `SENTENCE` variable.