🚀 Create Strings using Template Literals
-----------------------------------------

A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = \`Hello, my name is ${person.name}!
I am ${person.age} years old.\`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

A lot of things happened there. Firstly, the example uses backticks (`` ` ``), not quotes (`'` or `"`), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting `\n` within strings. The `${variable}` syntax used above is a placeholder. Basically, you won't have to use concatenation with the `+` operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with `${` and `}`. Similarly, you can include other expressions in your string literal, for example `${a + b}`. This new way of creating strings gives you more flexibility to create robust strings.

* * *

Use template literal syntax with backticks to display each entry of the `result` object's `failure` array. Each entry should be wrapped inside an `li` element with the class attribute `text-warning`, and listed within the `resultDisplayArray`.

Use an iterator method (any kind of loop) to get the desired output.

* * *

*   🧪 `resultDisplayArray` should be an array containing `result failure` messages.
*   🧪 `resultDisplayArray` should be equal to the specified output.
*   🧪 Template strings and expression interpolation should be used.
*   🧪 An iterator should be used.