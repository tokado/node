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
    {
        name:'Anton',
        age:23,
        city:'Lviv'
    }
]

fs.writeFile(path.join(__dirname,'main/inPerson','inPerson.txt'), `${people.name}\n${people.age}\n${people.city}\n` , (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
} )

fs.writeFile(path.join(__dirname,'main/online','online.txt'), `${people.name}\n${people.age}\n${people.city}\n`, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
} )