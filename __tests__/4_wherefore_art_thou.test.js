describe(`Lesson 4 wherefore art thou`, () =>{
	test(`<code>whatIsInAName([{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }], { last: &quot;Capulet&quot; })</code> should return <code>[{ first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code>.`, () =>{
		//test goes here
	})
	test(`<code>whatIsInAName([{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }], { &quot;apple&quot;: 1 })</code> should return <code>[{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }]</code>.`, () =>{
		//test goes here
	})
	test(`<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code> should return <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code>.`, () =>{
		//test goes here
	})
	test(`<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;cookie&quot;: 2 })</code> should return <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code>.`, () =>{
		//test goes here
	})
	test(`<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }, { &quot;bat&quot;:2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code> should return <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;:2 }]</code>.`, () =>{
		//test goes here
	})
	test(`<code>whatIsInAName([{&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3}], {&quot;a&quot;: 1, &quot;b&quot;: 9999, &quot;c&quot;: 3})</code> should return <code>[]</code>`, () =>{
		//test goes here
	})
})