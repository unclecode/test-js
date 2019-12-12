🚀 Pig Latin
------------

Translate the provided string to pig latin.

[Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin) takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use [Read-Search-Ask](https://www.freecodecamp.org/forum/t/how-to-get-help-when-you-are-stuck-coding/19514) if you get stuck. Try to pair program. Write your own code.

* * *

*   🧪 `translatePigLatin("california")` should return "aliforniacay".
*   🧪 `translatePigLatin("paragraphs")` should return "aragraphspay".
*   🧪 `translatePigLatin("glove")` should return "oveglay".
*   🧪 `translatePigLatin("algorithm")` should return "algorithmway".
*   🧪 `translatePigLatin("eight")` should return "eightway".
*   🧪 Should handle words where the first vowel comes in the middle of the word. `translatePigLatin("schwartz")` should return "artzschway".
*   🧪 Should handle words without vowels. `translatePigLatin("rhythm")` should return "rhythmay".