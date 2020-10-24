//  Tools needed for the job:
// 1) `
// 2) $
// 3) {yourvariable}

const username = "kenn";
console.log(`${username} is the true JS Wizard`);

// This is called a template literals - which breaks things into more than one line, and it's handy with HTML.
console.log(`Hey students,
What bugs can
${username}
fix for you today?`)

const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
}
console.log(`${person.username}, ${person.profession},`, 'Extraordinare'); //Kenn, Secret Agent, extraordinare