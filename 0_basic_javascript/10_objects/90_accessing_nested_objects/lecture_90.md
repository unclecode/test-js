🚀 Accessing Nested Objects
---------------------------

The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet\["top drawer"\].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"

* * *

Access the `myStorage` object and assign the contents of the `glove box` property to the `gloveBoxContents` variable. Use dot notation for all properties where possible, otherwise use bracket notation.

* * *

*   🧪 `gloveBoxContents` should equal "maps".
*   🧪 Your code should use dot and bracket notation to access `myStorage`.