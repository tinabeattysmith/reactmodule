// As of version 16.8.0 in React, it's been designed to use array destructuring (which is related to object destructing) all over the place.

const array = ['thing', 42, false, {key: "value"}, [1,2,3,4,undefined], NaN];
let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length - 1];
console.log(stringVar, numVar, objVar, nanVar);

// Without destructing, you have to manually make a new variable and target a value from the array (which is usually done in separate lines).

let [string, num,,obj,,nan] = array;
console.log(string, num, obj, nan);

// As you can see above, we can declare variables in what looks like our array square-bracket notation in our first line.  Using the square brackets following a let, const, or var, Javascript knows to interpret the brackets as variable assignment.  The values of these variables come from the specific ordered values in the 'array' array.  Notice the use of double commas in some places.  These double commas allow us to skip certain values of the array we don't care about.



// Ok, next up, let's examine the spread operator.  In a nutshell, it allows you to 'spread' out the values of an array (or object, as we'll see) into individual values that can be read in context.

let newArr = ['a', 1, undefined, ...array];
console.log(newArr);

// What's going on here?  You should see that newArr contains the values 'a', '1', and 'undefined', but it also contains all of the individual values of the 'array' array we defined in line 1.  That's cool.  We can break the array into its individual values within the definition of newArr.  We didn't have to loop through anything!

const testObj = {
    testSrting: 'stringy thingy',
    testNum: 23,
    testBool: true,
    testObject: {'key': 'waluigi'},
    testArr: [1,2,3,4,undefined],
    testNan: NaN
}

const objString = testObj.testSrting;
const objNum = testObj.testNum;
const objObj = testObj.testObject;
const objNan = testObj.NaN;
console.log(objString, objNum, objObj, objNan);