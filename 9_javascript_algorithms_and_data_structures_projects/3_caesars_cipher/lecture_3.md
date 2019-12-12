🚀 Caesars Cipher
-----------------

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use [Read-Search-Ask](https://www.freecodecamp.org/forum/t/how-to-get-help-when-you-are-stuck-coding/19514) if you get stuck. Try to pair program. Write your own code.

* * *

*   🧪 `rot13("SERR PBQR PNZC")` should decode to `FREE CODE CAMP`
*   🧪 `rot13("SERR CVMMN!")` should decode to `FREE PIZZA!`
*   🧪 `rot13("SERR YBIR?")` should decode to `FREE LOVE?`
*   🧪 `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` should decode to `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`