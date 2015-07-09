# Learning ECMAScript 6
This repo can be found at 

## REPL
[Babel](http://babeljs.io/), a [Node](https://nodejs.org/) [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) for ES6, has an online [REPL](http://babeljs.io/repl/).

## Reading
The [Babel](http://babeljs.io/) site has a section on [learning ES6](https://www.babeljs.io/docs/learn-es6). It's based on Luke Hoban's [es6-features GitHub repo](https://github.com/lukehoban/es6features#readme).

Confusingly, there is also a website [es-6-features.org](http://es6-features.org/), with an accompanying [GitHub repo](https://github.com/rse/es6-features).

Leanpub has two books that are free to read online.

- [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read/), by [Nicholas Zakas](http://www.nczonline.net/)
- [Exploring ES6](https://leanpub.com/exploring-es6/read), by [Axel Rauschmayer](http://rauschma.de/)

## Interesting Features
### Modules
Module `import` statements are similar to `require` in Ruby. They solve two problems: (1) dynamic loading of code and (2) not polluting the global namespace.

### Destructuring assignment
Ruby
```ruby
first_color, second_color = [ "red", "green" ]
```

JavaScript
```javascript
var first_color = "red",
  second_color = "green";
```

ES6
```javascript
let first_color, second_color = [ "red", "green" ];
```

### Functions
Ruby
```ruby
def divide(numerator, denominator)
  numerator / denominator
end
```

JavaScript
```javascript
var divide = function(numerator, denominator) {
  return numerator / denominator;
};
```

ES6
```javascript
var divide = (numerator, denominator) => {
  numerator / denominator;
}
```

### Classes
Ruby
```ruby
class Person
  attr_accessor :first_name, :last_name
  def initialize(first, last)
    @first_name = first
    @last_name = last
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
```

JavaScript
```javascript
function Person (first, last) {
  this.firstName = first;
  this.lastName = last;
};
 
Person.prototype.fullName = function fullName () {
  return this.firstName + " " + this.lastName;
};
```

ES6
```javascript
class Person {
  constructor (first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

