🚀 Match All Letters and Numbers
--------------------------------

Using character classes, you were able to search for all letters of the alphabet with `[a-z]`. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is `\w`. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (`_`).

let longHand = /\[A-Za-z0-9\_\]+/;
let shortHand = /\\w+/;
let numbers = "42";
let varNames = "important\_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

These shortcut character classes are also known as shorthand character classes.

* * *

Use the shorthand character class `\w` to count the number of alphanumeric characters in various quotes and strings.

* * *

*   🧪 Your regex should use the global flag.
*   🧪 Your regex should use the shorthand character `\w` to match all characters which are alphanumeric.
*   🧪 Your regex should find 31 alphanumeric characters in `"The five boxing wizards jump quickly."`
*   🧪 Your regex should find 32 alphanumeric characters in `"Pack my box with five dozen liquor jugs."`
*   🧪 Your regex should find 30 alphanumeric characters in `"How vexingly quick daft zebras jump!"`
*   🧪 Your regex should find 36 alphanumeric characters in `"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."`