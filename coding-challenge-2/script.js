// Coding Challenge #2

/* 
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1.Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2.Use a template literal string to include the BMI values is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/


const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;


const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight * johnHeight);

const markBMIFixed = markBMI.toFixed(1);
const johnBMIfixed = johnBMI.toFixed(1);
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMIFixed}) is higher than John's (${johnBMIfixed})!`);
} else if (johnBMI > markBMI) {
  console.log(`John's BMI (${johnBMIfixed}) is higher than Mark's (${markBMIFixed})!`);
}

