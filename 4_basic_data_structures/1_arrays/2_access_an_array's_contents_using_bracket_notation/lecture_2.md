🚀 Access an Array's Contents Using Bracket Notation
----------------------------------------------------

The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.

When we define a simple array as seen below, there are 3 items in it:

let ourArray = \["a", "b", "c"\];

In an array, each array item has an index. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the _**zeroth**_ position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as bracket notation. For example, if we want to retrieve the `"a"` from `ourArray` and assign it to a variable, we can do so with the following code:

let ourVariable = ourArray\[0\];
// ourVariable equals "a"

In addition to accessing the value associated with an index, you can also _set_ an index to a value using the same notation:

ourArray\[1\] = "not b anymore";
// ourArray now equals \["a", "not b anymore", "c"\];

Using bracket notation, we have now reset the item at index 1 from `"b"`, to `"not b anymore"`.

* * *

In order to complete this challenge, set the 2nd position (index `1`) of `myArray` to anything you want, besides `"b"`.

* * *

*   🧪 `myArray[0]` should be equal to `"a"`
*   🧪 `myArray[1]` should not be equal to `"b"`
*   🧪 `myArray[2]` should be equal to `"c"`
*   🧪 `myArray[3]` should be equal to `"d"`