/**
<code>mutation([&quot;hello&quot;, &quot;hey&quot;])</code> should return false.
<code>mutation([&quot;hello&quot;, &quot;Hello&quot;])</code> should return true.
<code>mutation([&quot;zyxwvutsrqponmlkjihgfedcba&quot;, &quot;qrstu&quot;])</code> should return true.
<code>mutation([&quot;Mary&quot;, &quot;Army&quot;])</code> should return true.
<code>mutation([&quot;Mary&quot;, &quot;Aarmy&quot;])</code> should return true.
<code>mutation([&quot;Alien&quot;, &quot;line&quot;])</code> should return true.
<code>mutation([&quot;floor&quot;, &quot;for&quot;])</code> should return true.
<code>mutation([&quot;hello&quot;, &quot;neo&quot;])</code> should return false.
<code>mutation([&quot;voodoo&quot;, &quot;no&quot;])</code> should return false.
<code>mutation([&quot;ate&quot;, &quot;date&quot;] should return false</code> should return false.
<code>mutation([&quot;Tiger&quot;, &quot;Zebra&quot;])</code> should return false.
<code>mutation([&quot;Noel&quot;, &quot;Ole&quot;])</code> should return true.
*/