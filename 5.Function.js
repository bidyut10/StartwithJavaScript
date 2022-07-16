//syntax of function
function fuctionName(parameters) {}

function sayHi(name) {
  console.log("Hello world,eat code sleep");
}
sayHi(); //To call a function we use that syntax
sayHi; // To prefer a function we use that. Both gives us the the but thats the main difference between two of this.

function sayHi(fullName) {
  console.log("Hello world,eat code sleep");
  console.log("Hello there", fullName, "how are you?");
}
sayHi("Bidyut");
sayHi("Somnath");

function coding() {
  return "Eat Code Sleep Repeat";
}
coding(); // at this point if we call nthus program we dont get any output. To get output from this function we need to create a varriable which contains the function than we can use print this code by using console.log().for a example-
const A = coding();
console.log(A);
