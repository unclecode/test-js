/**
<code>bouncer([7, &quot;ate&quot;, &quot;&quot;, false, 9])</code> should return <code>[7, &quot;ate&quot;, 9]</code>.
<code>bouncer([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;])</code> should return <code>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code>.
<code>bouncer([false, null, 0, NaN, undefined, &quot;&quot;])</code> should return <code>[]</code>.
<code>bouncer([1, null, NaN, 2, undefined])</code> should return <code>[1, 2]</code>.
*/