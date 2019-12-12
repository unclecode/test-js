🚀 Replacing If Else Chains with Switch
---------------------------------------

If you have many options to choose from, a `switch` statement can be easier to write than many chained `if`/`else if` statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

can be replaced with:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

* * *

Change the chained `if`/`else if` statements into a `switch` statement.

* * *

*   🧪 You should not use any `else` statements anywhere in the editor
*   🧪 You should not use any `if` statements anywhere in the editor
*   🧪 You should have at least four `break` statements
*   🧪 `chainToSwitch("bob")` should be "Marley"
*   🧪 `chainToSwitch(42)` should be "The Answer"
*   🧪 `chainToSwitch(1)` should be "There is no #1"
*   🧪 `chainToSwitch(99)` should be "Missed me by this much!"
*   🧪 `chainToSwitch(7)` should be "Ate Nine"
*   🧪 `chainToSwitch("John")` should be "" (empty string)
*   🧪 `chainToSwitch(156)` should be "" (empty string)