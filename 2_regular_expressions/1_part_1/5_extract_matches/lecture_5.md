🚀 Extract Matches
------------------

So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the `.match()` method.

To use the `.match()` method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:

"Hello, World!".match(/Hello/);
// Returns \["Hello"\]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns \["expressions"\]

* * *

Apply the `.match()` method to extract the word `coding`.

* * *

*   🧪 The `result` should have the word `coding`
*   🧪 Your regex `codingRegex` should search for `coding`
*   🧪 You should use the `.match()` method.