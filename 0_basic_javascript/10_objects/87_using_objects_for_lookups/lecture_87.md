🚀 Using Objects for Lookups
----------------------------

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a `switch` statement or an `if/else` chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha\[2\]; // "Y"
alpha\[24\]; // "C"

var value = 2;
alpha\[value\]; // "Y"

* * *

Convert the switch statement into an object called `lookup`. Use it to look up `val` and assign the associated string to the `result` variable.

* * *

*   🧪 `phoneticLookup("alpha")` should equal `"Adams"`
*   🧪 `phoneticLookup("bravo")` should equal `"Boston"`
*   🧪 `phoneticLookup("charlie")` should equal `"Chicago"`
*   🧪 `phoneticLookup("delta")` should equal `"Denver"`
*   🧪 `phoneticLookup("echo")` should equal `"Easy"`
*   🧪 `phoneticLookup("foxtrot")` should equal `"Frank"`
*   🧪 `phoneticLookup("")` should equal `undefined`
*   🧪 You should not modify the `return` statement
*   🧪 You should not use `case`, `switch`, or `if` statements