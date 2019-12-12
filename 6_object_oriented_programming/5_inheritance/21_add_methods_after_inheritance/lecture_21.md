🚀 Add Methods After Inheritance
--------------------------------

A constructor function that inherits its `prototype` object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, `Bird` is a constructor that inherits its `prototype` from `Animal`:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

In addition to what is inherited from `Animal`, you want to add behavior that is unique to `Bird` objects. Here, `Bird` will get a `fly()` function. Functions are added to `Bird's` `prototype` the same way as any constructor function:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

Now instances of `Bird` will have both `eat()` and `fly()` methods:

let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"

* * *

Add all necessary code so the `Dog` object inherits from `Animal` and the `Dog's` `prototype` constructor is set to Dog. Then add a `bark()` method to the `Dog` object so that `beagle` can both `eat()` and `bark()`. The `bark()` method should print "Woof!" to the console.

* * *

*   🧪 `Animal` should not respond to the `bark()` method.
*   🧪 `Dog` should inherit the `eat()` method from `Animal`.
*   🧪 `Dog` should have the `bark()` method as an `own` property.
*   🧪 `beagle` should be an `instanceof` `Animal`.
*   🧪 The constructor for `beagle` should be set to `Dog`.