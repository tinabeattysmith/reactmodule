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

//  Extends
// when we use the extends keyword, we are doing something that we, again, call subclassing. This means that the TrialUser class becomes a child of User, and therefore inherits all of its functions and properties.
// You should also note that TrialUser has a trialEnding method, something that User won't have. This means that a child class can have its own separate methods.
class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' + this.name +'.' + ' Would you like to join our program?');
    }
}

class BannedUser extends User {
    bannedReason(){
        console.log('You have been banned for using our service as an excuse to not exercise.')
    }
}

// Instance of the User class
var anonDude = new User("Anonymous dude");
anonDude.greet();
anonDude.status();

// Instance of the TrialUser class
var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

// This is called inheritance. We use extends to indicate that we are creating a new class that will inherit the properties and functions of another class and take on properties of its own. 

var bannedUser = new BannedUser("Homer");
bannedUser.greet();
bannedUser.bannedReason();
