//get query string from URL
const queryString = window.location.search;

//parse query string for info
const params = new URLSearchParams(queryString);

//store info in an object(person)
const person = {
    firstName: params.get("firstName"),
    lastName: params.get("lastName"),
    email: params.get("email"),
    phoneNumber: params.get("phoneNumber")
};

//display the object data on the page
document.getElementById("first-name").textContent = person.firstName;
document.getElementById("last-name").textContent = person.lastName;
document.getElementById("email").textContent = person.email;
document.getElementById("phone-number").textContent = person.phoneNumber;