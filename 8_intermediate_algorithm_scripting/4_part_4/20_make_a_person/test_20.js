/**
<code>Object.keys(bob).length</code> should return 6.
<code>bob instanceof Person</code> should return true.
<code>bob.firstName</code> should return undefined.
<code>bob.lastName</code> should return undefined.
<code>bob.getFirstName()</code> should return &quot;Bob&quot;.
<code>bob.getLastName()</code> should return &quot;Ross&quot;.
<code>bob.getFullName()</code> should return &quot;Bob Ross&quot;.
<code>bob.getFullName()</code> should return &quot;Haskell Ross&quot; after <code>bob.setFirstName(&quot;Haskell&quot;)</code>.
<code>bob.getFullName()</code> should return &quot;Haskell Curry&quot; after <code>bob.setLastName(&quot;Curry&quot;)</code>.
<code>bob.getFullName()</code> should return &quot;Haskell Curry&quot; after <code>bob.setFullName(&quot;Haskell Curry&quot;)</code>.
<code>bob.getFirstName()</code> should return &quot;Haskell&quot; after <code>bob.setFullName(&quot;Haskell Curry&quot;)</code>.
<code>bob.getLastName()</code> should return &quot;Curry&quot; after <code>bob.setFullName(&quot;Haskell Curry&quot;)</code>.
*/