const instructors = [
    {name: 'Quincy' , speciality: 'Quantum Mechanics'},
    {name: 'kenn',  speciality: 'Norse Mythology'},
    {name: 'Paul',  speciality: 'Tuvan throat singing'},
    {name: 'Aaron',  speciality: 'Entomolgy'},
    {name: 'Carolyn',  speciality: 'Ku Fung'},
]

let instructor_names = [];

for(let i = 0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}
console.log("First One",instructor_names);
// What do we have to do here: 1. Manage the index. 2. Check the length. 3. Increment. 4. Create an empty array. 5. Etc.
// We have to create an empty array to push the names into as we iterate through. 

// with ES5, the .map() function came along to make things more sleek for common tasks like iterating through a collection.

const instructorNames = instructors.map(instructor => instructor.name);
console.log("Second One",instructorNames);

// Notice a few things here: 1. We create a variable called instructorNames that store the result as an array of objects. 2. We are calling .map on the instructors array: instructors.map. 3. The instructor parameter in .map can be named anything, usually something related to the array. 

// Exact same thing, different parament names
const instructorNamesTwo= instructors.map(i => i.name);
console.log("Third One", instructorNames);

// The .map() function requires a return value. This is a key rule of using .map(), so the fat arrow is taking care of that requirement.

// Fix the following code
// const instructorInfo = `${instructor.map(instructor => ${instructor.name}: ${instructor.speciality}')}';
const instructorInfo = instructors.map(instructors => instructors);
console.log("Fourth One", instructorInfo);

// Notice that the below starts with an array of awkward objects, with keys and values separated. The returned 'rObj' is a correctly formatted {key: value} style object for each object in the original array. Console.log both the kvArray and the returned rObj objects to see what's going on. This can teach you a lot.


var kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];
console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})