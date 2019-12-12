🚀 Escape Sequences in Strings
------------------------------

Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

1.  To allow you to use characters you may not otherwise be able to type out, such as a carriage returns.
2.  To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

We learned this in the previous challenge.

Code

Output

`\'`

single quote

`\"`

double quote

`\\`

backslash

`\n`

newline

`\r`

carriage return

`\t`

tab

`\b`

word boundary

`\f`

form feed

_Note that the backslash itself must be escaped in order to display as a backslash._

* * *

Assign the following three lines of text into the single variable `myStr` using escape sequences.

> FirstLine  
>     \\SecondLine  
> ThirdLine

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Here is the text with the escape sequences written out.

FirstLine`newline``tab``backslash`SecondLine`newline`ThirdLine

* * *

*   🧪 `myStr` should not contain any spaces
*   🧪 `myStr` should contain the strings `FirstLine`, `SecondLine` and `ThirdLine` (remember case sensitivity)
*   🧪 `FirstLine` should be followed by the newline character `\n`
*   🧪 `myStr` should contain a tab character `\t` which follows a newline character
*   🧪 `SecondLine` should be preceded by the backslash character `\`
*   🧪 There should be a newline character between `SecondLine` and `ThirdLine`
*   🧪 `myStr` should only contain characters shown in the instructions