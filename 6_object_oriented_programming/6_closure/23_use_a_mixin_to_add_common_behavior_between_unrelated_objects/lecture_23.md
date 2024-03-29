🚀 Use a Mixin to Add Common Behavior Between Unrelated Objects
---------------------------------------------------------------

As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like `Bird` and `Airplane`. They can both fly, but a `Bird` is not a type of `Airplane` and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

The `flyMixin` takes any object and gives it the `fly` method.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

Here `bird` and `plane` are passed into `flyMixin`, which then assigns the `fly` function to each object. Now `bird` and `plane` can both fly:

bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"

Note how the mixin allows for the same `fly` method to be reused by unrelated objects `bird` and `plane`.

* * *

Create a mixin named `glideMixin` that defines a method named `glide`. Then use the `glideMixin` to give both `bird` and `boat` the ability to glide.

* * *

*   🧪 Your code should declare a `glideMixin` variable that is a function.
*   🧪 Your code should use the `glideMixin` on the `bird` object to give it the `glide` method.
*   🧪 Your code should use the `glideMixin` on the `boat` object to give it the `glide` method.