function paybills(TV_bills) {
  let bill = TV_bills;
  console.log(TV_bills + 5);
}
paybills(20); //now if i put a string instead of number
paybills("24");

// So instead of writing the function in this way, write this with the help of "parseInt(name of the parameter)" keyword (it is basically use for to converting string to a number)
function paybill(TV_bills) {
  let bill = parseInt(TV_bills);
  console.log(parseInt(TV_bills) + 5);
}
paybill(30);
paybill("210");
//scope chain
