const fs = require('fs')
const path = require('path')
// Cтворення папок

// fs.mkdir(path.join(__dirname,'main'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// } )
//
// fs.mkdir(path.join(__dirname,'main','online'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// } )
//
// fs.mkdir(path.join(__dirname,'main','inPerson'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// } )

let people = [
    {
        name:'Andriy',
        age:22,
        city:'Lviv'
    },
]

let people1 = [
    {
        name:'Anton',
        age:23,
        city:'Lviv'
    }
]

for (person of people) {
    fs.writeFile(path.join(__dirname,'main/inPerson','inPerson.txt'), `${person.name}\n${person.age}\n${person.city}\n` , (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    } )
}



for (person1 of people1) {
    fs.writeFile(path.join(__dirname, 'main/online', `${person1.name}.txt`), `${person1.name}\n${person1.age}\n${person1.city}`, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })
}