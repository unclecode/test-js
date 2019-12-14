describe(`Lesson 11 convert html entities`, () =>{
	test(`<code>convertHTML(&quot;Dolce &amp; Gabbana&quot;)</code> should return <code>Dolce &amp;amp; Gabbana</code>.`, () =>{
		//test goes here
	})
	test(`<code>convertHTML(&quot;Hamburgers &lt; Pizza &lt; Tacos&quot;)</code> should return <code>Hamburgers &amp;lt; Pizza &amp;lt; Tacos</code>.`, () =>{
		//test goes here
	})
	test(`<code>convertHTML(&quot;Sixty &gt; twelve&quot;)</code> should return <code>Sixty &amp;gt; twelve</code>.`, () =>{
		//test goes here
	})
	test(`<code>convertHTML(&apos;Stuff in &quot;quotation marks&quot;&apos;)</code> should return <code>Stuff in &amp;quot;quotation marks&amp;quot;</code>.`, () =>{
		//test goes here
	})
	test(`<code>convertHTML(&quot;Schindler&apos;s List&quot;)</code> should return <code>Schindler&amp;apos;s List</code>.`, () =>{
		//test goes here
	})
	test(`<code>convertHTML(&quot;&lt;&gt;&quot;)</code> should return <code>&amp;lt;&amp;gt;</code>.`, () =>{
		//test goes here
	})
	test(`<code>convertHTML(&quot;abc&quot;)</code> should return <code>abc</code>.`, () =>{
		//test goes here
	})
})