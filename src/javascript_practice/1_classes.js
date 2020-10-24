//ES6 JS CLasses
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    // Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}

// Instance of the class/new object
var anonDude = new User("Anonymous dude");

// we can now use the instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status();

// Another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

// Another instance of the class
var Jeff = new User("Jeff");
Jeff.greet();
Jeff.status();

// Another instance of the class
var Fred = new User("Fred");
Fred.greet();
Fred.status();

// Another instance
var Martha = new User("Martha");
Martha.greet();
Martha.status();