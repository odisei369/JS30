// ## Array Cardio Day 2
"use strict";
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const someHave19 = people.some(person => new Date().getFullYear() - person.year > 18);
console.log(someHave19);
// Array.prototype.every() // is everyone 19 or older?
const allHave19 = people.every(person => new Date().getFullYear() - person.year > 18);
console.log(allHave19);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comWithId = comments.find(comment => comment.id === 823423);
console.log(comWithId);
// Array.prototype.findIndex()
// Find the comment with this ID
const idOfCom = comments.findIndex(comment => comment.id === 823423);
console.log(idOfCom);
// delete the comment with the ID of 823423
const newArray = comments.slice(0, idOfCom).concat(comments.slice(idOfCom+1));
console.table(newArray);
const newArray2 = [...comments.slice(0, idOfCom), ...comments.slice(idOfCom+1)];
console.table(newArray2);