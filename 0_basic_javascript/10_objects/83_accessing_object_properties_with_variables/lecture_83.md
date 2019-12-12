🚀 Accessing Object Properties with Variables
---------------------------------------------

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs\[myDog\];
console.log(myBreed); // "Doberman"

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj\[someProp\]); // "John"

Note that we do _not_ use quotes around the variable name when using it to access the property because we are using the _value_ of the variable, not the _name_.

* * *

Use the `playerNumber` variable to look up player `16` in `testObj` using bracket notation. Then assign that name to the `player` variable.

* * *

*   🧪 `playerNumber` should be a number
*   🧪 The variable `player` should be a string
*   🧪 The value of `player` should be "Montana"
*   🧪 You should use bracket notation to access `testObj`
*   🧪 You should not assign the value `Montana` to the variable `player` directly.
*   🧪 You should be using the variable `playerNumber` in your bracket notation