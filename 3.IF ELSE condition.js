//With help the of 'if else' statement we just try to write a code which shows us the temperature outside.

let temperature = 40;
temperature = 55;
if (temperature < 40) {
  console.log("Temperature id very cold outside");
} else {
  console.log("Temperature is very much hot outside");
}

const email = true;
const facebook = false;
const google = false;
//
if (email || facebook || google) {
  console.log("Login success");
}

if (facebook || google) {
  console.log("Login success");
} else {
  console.log("you dont have a account");
}

if (google) {
  console.log("Login success");
} else {
  console.log("you dont have a account");
}

const authentication = true;
if (authentication) {
  console.log("sign in button");
} else {
  console.log("sign out button");
}
const authentication1 = false;
if (authentication1) {
  console.log("sign in button");
} else {
  console.log("sign out button");
}

//  similar thing

const data = [1, 3, 23, 4, 56, 76, 9];
for (i = 0; i < 7; i++) {
  if (data[i] > 10) {
    console.log("welcome");
  } else if (data[i] < 10) {
    console.log("try again");
  }
}
for (i = 0; i < 7; i++) {
  console.log(data[i]);
}
