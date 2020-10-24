const instructors = [
    {name: 'Aaron',  speciality: 'Entomolgy', medals: 7},
    {name: 'Carolyn',  speciality: 'Ku Fung', medals: 5},
    {name: 'kenn',  speciality: 'Norse Mythology', medals: 8},
    {name: 'Paul',  speciality: 'Tuvan throat singing', medals: 4},
    {name: 'Quincy' , speciality: 'Quantum Mechanics', medals: 2},
    {name: 'Tom' , speciality: 'Quantum Mechanics', medals: 3},
]

// Let's say that we want to iterate over this array and filter it based on the number of medals each instructor had. We only want to get instructors that have 5 or more medals.
// before ES6
let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals>=5){
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

// with ES6, the .filter function came along to make things more sleek for common tasks like iterating through a collection, and filtered based on a specific property.

const instructorNames = instructors.filter(instructor => instructor.medals>=5);
console.log("Second example" ,instructorNames);

// 1. We create a variable called instructorNames that store the result as an array of objects. Note: filter() returns a new array, and does NOT modify the original array. This is a huge thing, because you can safely use filter without having to worry about your original, and you can capture the value like we did above easily. 2. We are calling .filter on the instructors array: instructors.map. 3. The instructor parameter in .filter can be named anything, usually something related to the array. 

// Exact same thing, different parament names
const instructorNamesTwo= instructors.filter(i => i.medals >5);
console.log("Third example", instructorNames);

// Try the following. Fix the code:
// if done correctly,in your terminal you shoould see after consoling logging instructorInfo -> { name: 'Aaron', speciality: 'Entomolgy', medals: 7 }

const instructorInfo= instructors.filter(i => i.name == "Aaron");
console.log("Fourth example", instructorInfo);