🚀 Match Everything But Letters and Numbers
-------------------------------------------

You've learned that you can use a shortcut to match alphanumerics `[A-Za-z0-9_]` using `\w`. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the `\w` with `\W`. Note, the opposite pattern uses a capital letter. This shortcut is the same as `[^A-Za-z0-9_]`.

let shortHand = /\\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns \["%"\]
sentence.match(shortHand); // Returns \["!"\]

* * *

Use the shorthand character class `\W` to count the number of non-alphanumeric characters in various quotes and strings.

* * *

*   🧪 Your regex should use the global flag.
*   🧪 Your regex should find 6 non-alphanumeric characters in `"The five boxing wizards jump quickly."`.
*   🧪 Your regex should use the shorthand character to match characters which are non-alphanumeric.
*   🧪 Your regex should find 8 non-alphanumeric characters in `"Pack my box with five dozen liquor jugs."`
*   🧪 Your regex should find 6 non-alphanumeric characters in `"How vexingly quick daft zebras jump!"`
*   🧪 Your regex should find 12 non-alphanumeric characters in `"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."`