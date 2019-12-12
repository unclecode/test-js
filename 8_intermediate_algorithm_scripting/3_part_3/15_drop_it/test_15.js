/**
<code>dropElements([1, 2, 3, 4], function(n) {return n &gt;= 3;})</code> should return <code>[3, 4]</code>.
<code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> should return <code>[1, 0, 1]</code>.
<code>dropElements([1, 2, 3], function(n) {return n &gt; 0;})</code> should return <code>[1, 2, 3]</code>.
<code>dropElements([1, 2, 3, 4], function(n) {return n &gt; 5;})</code> should return <code>[]</code>.
<code>dropElements([1, 2, 3, 7, 4], function(n) {return n &gt; 3;})</code> should return <code>[7, 4]</code>.
<code>dropElements([1, 2, 3, 9, 2], function(n) {return n &gt; 2;})</code> should return <code>[3, 9, 2]</code>.
*/