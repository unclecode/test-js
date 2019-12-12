/**
<code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code> should return <code>[1, 1]</code>.
<code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code> should return <code>[1, 5, 1]</code>.
<code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code> should return <code>[1]</code>.
<code>destroyer([2, 3, 2, 3], 2, 3)</code> should return <code>[]</code>.
<code>destroyer([&quot;tree&quot;, &quot;hamburger&quot;, 53], &quot;tree&quot;, 53)</code> should return <code>[&quot;hamburger&quot;]</code>.
<code>destroyer([&quot;possum&quot;, &quot;trollo&quot;, 12, &quot;safari&quot;, &quot;hotdog&quot;, 92, 65, &quot;grandma&quot;, &quot;bugati&quot;, &quot;trojan&quot;, &quot;yacht&quot;], &quot;yacht&quot;, &quot;possum&quot;, &quot;trollo&quot;, &quot;safari&quot;, &quot;hotdog&quot;, &quot;grandma&quot;, &quot;bugati&quot;, &quot;trojan&quot;)</code> should return <code>[12,92,65]</code>.
*/