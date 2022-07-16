//To create an array we use [ ]
const countryName = ["India", "USA", "Russia", "Japan", "africa"];
const myInfo = ["Bidyut", "emailId", "Indian", 22, ["array"], 18004444, true]; //we can store anything to an array(string,boolean,number also even an array)
const states = new Array("WestBengal", "Gujrat", "Mumbai", "Goa"); // This is the another way to create an array

console.log(states);
console.log(states.length); //using (.length) keyword we can find the array's length.

// To replace a new a value to an array
//syntax is (arrayname[give the element position]= Put the new element which you want to add)
states[2] = "Punjab";
console.log(states);

// To delete last element use pop
myInfo.pop();
console.log(myInfo);

//TO add element at the begining and use Shift to delete the first element
countryName.unshift("England");
console.log(countryName);
countryName.shift();
console.log(countryName);

// To find a particular elemnet of an array
console.log(myInfo.indexOf(22));
//If we try to find position of an element from an array which is not their
console.log(myInfo.indexOf("somnath"));
