// The constructor method is a special method that helps create and initialize an object created from a class. It works in tandem with the new keyword.

// We name the class
class User {
    // We call the constructor function and create parameters.
    // These will be values that we want to be passed in and stored in the object.
    constructor(first, last, e) {
                // On the right side of these expressions, the word 'first', 'last, and 'e'below,
                // we have the value that is getting passed into the parens when the object is created.
                // vvv
        this.f = first;
        this.l = last;
        this.email= e;
        // ^^^^^^^
        // On the right side we have the actual properties of the object.
        // The left side stores the incoming value from the right side as
        // the property for 'this' specific object being created
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined  
// In JavaScript, undefined means a variable has been declared but has not yet been assigned a value. 
// When we log userOne.first, it's undefined because that property doesn't exist.  
// While it is the parameter name in the constructor, it's not a property on the object.
// Currently, our properties are on that left side with f, l, & email.
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User{f: 'Paul', l: "O'Connor", email: 'poconnor@elevenfifty.org'}


// Practice constructors
class Child {
    constructor(gender, age, eyeColor){
        this.gender = gender;
        this.age = age;
        this.eyeColor = eyeColor
    }
}

var childOne = new Child("Male", 15, "brown");
console.log(childOne.gender);
console.log(childOne.age);
console.log(childOne.eyeColor);
console.log(childOne);


var childTwo = new Child("Female", 13, "brown");
console.log(childTwo.gender);
console.log(childTwo.age);
console.log(childTwo.eyeColor);
console.log(childTwo);