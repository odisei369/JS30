const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("msg");

// Interpolated
console.log("Hello, I'm %s", "string!");    // doesn't make much sense 'cause we have ES6 backticks
// Styled
console.log("%c I am big text", "font-size: 30px; background-color: red;");
// warning!
console.warn("warning");

// Error :|
console.error("some error message, not actual error");

// Info
console.info("some information");

// Testing
console.assert(1 === 2, "1 not equal 2");
// clearing
console.clear();

// Viewing DOM Elements
const element = document.querySelector("p");
console.log(element);
console.dir(element);
// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(dog.name);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(dog.name)

});

// counting
console.count("tinki");
console.count("tinki");
console.count("tinki");

// timing
console.time("timer");
console.timeEnd("timer");