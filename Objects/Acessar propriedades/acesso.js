const person = {
    firstName:"John",
    lastName:"Doe",
    id: 5566
};

person = alert("The first name is: " + person["firstName"])

// person = alert("The first name is: " + person.firstName)

/*
document.getElementById("demo").innerHTML =
"The name is: " + person.firstName + " " + person.lastName;

document.getElementById("demo").innerHTML =
"The name is: " + person["firstName"] + " " + person.lastName;
*/