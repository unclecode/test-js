describe(`Lesson 18 everything be true`, () =>{
	test(`<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Dipsy&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;}], &quot;sex&quot;)</code> should return true.`, () =>{
		//test goes here
	})
	test(`<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Dipsy&quot;}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;}], &quot;sex&quot;)</code> should return false.`, () =>{
		//test goes here
	})
	test(`<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;, &quot;age&quot;: 0}, {&quot;user&quot;: &quot;Dipsy&quot;, &quot;sex&quot;: &quot;male&quot;, &quot;age&quot;: 3}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;, &quot;age&quot;: 5}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;, &quot;age&quot;: 4}], &quot;age&quot;)</code> should return false.`, () =>{
		//test goes here
	})
	test(`<code>truthCheck([{&quot;name&quot;: &quot;Pete&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;Repeat&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;FastFoward&quot;, &quot;onBoat&quot;: null}], &quot;onBoat&quot;)</code> should return false`, () =>{
		//test goes here
	})
	test(`<code>truthCheck([{&quot;name&quot;: &quot;Pete&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;Repeat&quot;, &quot;onBoat&quot;: true, &quot;alias&quot;: &quot;Repete&quot;}, {&quot;name&quot;: &quot;FastFoward&quot;, &quot;onBoat&quot;: true}], &quot;onBoat&quot;)</code> should return true`, () =>{
		//test goes here
	})
	test(`<code>truthCheck([{&quot;single&quot;: &quot;yes&quot;}], &quot;single&quot;)</code> should return true`, () =>{
		//test goes here
	})
	test(`<code>truthCheck([{&quot;single&quot;: &quot;&quot;}, {&quot;single&quot;: &quot;double&quot;}], &quot;single&quot;)</code> should return false`, () =>{
		//test goes here
	})
	test(`<code>truthCheck([{&quot;single&quot;: &quot;double&quot;}, {&quot;single&quot;: undefined}], &quot;single&quot;)</code> should return false`, () =>{
		//test goes here
	})
	test(`<code>truthCheck([{&quot;single&quot;: &quot;double&quot;}, {&quot;single&quot;: NaN}], &quot;single&quot;)</code> should return false`, () =>{
		//test goes here
	})
})