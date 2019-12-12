🚀 Match Characters that Occur Zero or More Times
-------------------------------------------------

The last challenge used the plus `+` sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: `*`.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go\*/;
soccerWord.match(goRegex); // Returns \["goooooooo"\]
gPhrase.match(goRegex); // Returns \["g"\]
oPhrase.match(goRegex); // Returns null

* * *

For this challenge, `chewieQuote` has been initialized as "Aaaaaaaaaaaaaaaarrrgh!" behind the scenes. Create a regex `chewieRegex` that uses the `*` character to match an uppercase `"A"` character immediately followed by zero or more lowercase `"a"` characters in `chewieQuote`. Your regex does not need flags or character classes, and it should not match any of the other quotes.

* * *

*   🧪 Your regex `chewieRegex` should use the `*` character to match zero or more `a` characters.
*   🧪 Your regex should match `"A"` in `chewieQuote`.
*   🧪 Your regex should match `"Aaaaaaaaaaaaaaaa"` in `chewieQuote`.
*   🧪 Your regex `chewieRegex` should match 16 characters in `chewieQuote`.
*   🧪 Your regex should not match any characters in "He made a fair move. Screaming about it can't help you."
*   🧪 Your regex should not match any characters in "Let him have it. It's not wise to upset a Wookiee."