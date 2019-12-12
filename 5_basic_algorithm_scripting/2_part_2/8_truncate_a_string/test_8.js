/**
<code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, 8)</code> should return &quot;A-tisket...&quot;.
<code>truncateString(&quot;Peter Piper picked a peck of pickled peppers&quot;, 11)</code> should return &quot;Peter Piper...&quot;.
<code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, &quot;A-tisket a-tasket A green and yellow basket&quot;.length)</code> should return &quot;A-tisket a-tasket A green and yellow basket&quot;.
<code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, &quot;A-tisket a-tasket A green and yellow basket&quot;.length + 2)</code> should return &quot;A-tisket a-tasket A green and yellow basket&quot;.
<code>truncateString(&quot;A-&quot;, 1)</code> should return &quot;A...&quot;.
<code>truncateString(&quot;Absolutely Longer&quot;, 2)</code> should return &quot;Ab...&quot;.
*/