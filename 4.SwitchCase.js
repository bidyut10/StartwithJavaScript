const Functionup="Student"
switch(Functionup){
    case "Admin":
        console.log("You get the full access")
        break;
    case "SubAdmin":
        console.log("Gets access to create/delete courses")
        break;
    case "Student":
        console.log("Gets access to attempt the tests and read the study materials")
        break;
    case "User":
        console.log("Gets access to consumes the content")
        break;

    default:
        console.log("Trial user")
        break;

}