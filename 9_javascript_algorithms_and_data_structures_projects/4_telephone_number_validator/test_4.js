/**
<code>telephoneCheck(&quot;555-555-5555&quot;)</code> should return a boolean.
<code>telephoneCheck(&quot;1 555-555-5555&quot;)</code> should return true.
<code>telephoneCheck(&quot;1 (555) 555-5555&quot;)</code> should return true.
<code>telephoneCheck(&quot;5555555555&quot;)</code> should return true.
<code>telephoneCheck(&quot;555-555-5555&quot;)</code> should return true.
<code>telephoneCheck(&quot;(555)555-5555&quot;)</code> should return true.
<code>telephoneCheck(&quot;1(555)555-5555&quot;)</code> should return true.
<code>telephoneCheck(&quot;555-5555&quot;)</code> should return false.
<code>telephoneCheck(&quot;5555555&quot;)</code> should return false.
<code>telephoneCheck(&quot;1 555)555-5555&quot;)</code> should return false.
<code>telephoneCheck(&quot;1 555 555 5555&quot;)</code> should return true.
<code>telephoneCheck(&quot;1 456 789 4444&quot;)</code> should return true.
<code>telephoneCheck(&quot;123**&amp;!!asdf#&quot;)</code> should return false.
<code>telephoneCheck(&quot;55555555&quot;)</code> should return false.
<code>telephoneCheck(&quot;(6054756961)&quot;)</code> should return false
<code>telephoneCheck(&quot;2 (757) 622-7382&quot;)</code> should return false.
<code>telephoneCheck(&quot;0 (757) 622-7382&quot;)</code> should return false.
<code>telephoneCheck(&quot;-1 (757) 622-7382&quot;)</code> should return false
<code>telephoneCheck(&quot;2 757 622-7382&quot;)</code> should return false.
<code>telephoneCheck(&quot;10 (757) 622-7382&quot;)</code> should return false.
<code>telephoneCheck(&quot;27576227382&quot;)</code> should return false.
<code>telephoneCheck(&quot;(275)76227382&quot;)</code> should return false.
<code>telephoneCheck(&quot;2(757)6227382&quot;)</code> should return false.
<code>telephoneCheck(&quot;2(757)622-7382&quot;)</code> should return false.
<code>telephoneCheck(&quot;555)-555-5555&quot;)</code> should return false.
<code>telephoneCheck(&quot;(555-555-5555&quot;)</code> should return false.
<code>telephoneCheck(&quot;(555)5(55?)-5555&quot;)</code> should return false.
*/