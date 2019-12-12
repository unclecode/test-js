/**
<code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code> should return an array.
<code>[&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> should return <code>[&quot;pink wool&quot;]</code>.
<code>[&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> should return an array with one item.
<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> should return <code>[&quot;diorite&quot;, &quot;pink wool&quot;]</code>.
<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> should return an array with two items.
<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;], [&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> should return <code>[]</code>.
<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;], [&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> should return an empty array.
<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return <code>[4]</code>.
<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return an array with one item.
<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [1, &quot;calf&quot;, 3, 4]</code> should return <code>[&quot;piglet&quot;, 4]</code>.
<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [1, &quot;calf&quot;, 3, 4]</code> should return an array with two items.
<code>[], [&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> should return <code>[&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code>.
<code>[], [&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> should return an array with three items.
<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code> should return <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;, 7, &quot;filly&quot;]</code>.
<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code> should return an array with six items.
*/