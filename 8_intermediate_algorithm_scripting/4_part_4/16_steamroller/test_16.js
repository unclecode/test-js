/**
<code>steamrollArray([[[&quot;a&quot;]], [[&quot;b&quot;]]])</code> should return <code>[&quot;a&quot;, &quot;b&quot;]</code>.
<code>steamrollArray([1, [2], [3, [[4]]]])</code> should return <code>[1, 2, 3, 4]</code>.
<code>steamrollArray([1, [], [3, [[4]]]])</code> should return <code>[1, 3, 4]</code>.
<code>steamrollArray([1, {}, [3, [[4]]]])</code> should return <code>[1, {}, 3, 4]</code>.
*/