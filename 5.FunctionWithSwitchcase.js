function getUserRole(name, role) {
  switch (role) {
    case "Admin":
      return `${name} is a Admin with have all access`;
      break; //Whenever we use retun keyword we dont need to write a break keyword. If the function statement finds the right input it automatically gives the output and ends there.
    case "Sub-Admin":
      return `${name} is a Sub-Admin and Gets access to create/delete courses`;
    //break; (just runs the code)
    case "Testprep":
      return `${name} is a Testpref and Gets access to attempt the tests and read the study materials`;
      break;
    case "User":
      return `${name} is a User and Gets access to consumes the content`;
      break;
    default:
    case "name":
      return `${name} Trial User`;
      break;
  }
}
console.log(getUserRole("Bidyut", "Admin"));
console.log(getUserRole("Somnath", "Sub-Admin"));
console.log(getUserRole("suraj"));
console.log(getUserRole("sonu", "User"));

//By creating a varriable we can put all the function in that varriable. now we access easily anything from the function.

// const getUserRole = function (name,role){
//     switch (role){
//         case "Admin":
//             return `${name} is a Admin with have all access`
//             break;
//         case "Sub-Admin":
//         return `${name} is a Sub-Admin and Gets access to create/delete courses`
//             break;
//         case "Testprep":
//             return `${name} is a Testpref and Gets access to attempt the tests and read the study materials`
//             break;
//         case "User":
//             return `${name} is a User and Gets access to consumes the content`
//             break;
//         default:
//             case "name":
//                 return `${name} Trial User`
//                 break;

//     }

// }
// console.log(getUserRole("Bidyut","Admin"));
// console.log(getUserRole("Somnath","Sub-Admin"));
