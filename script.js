const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const message = document.getElementById('message');

class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName; 
        this.lastName = lastName;
        this.age = age; 
    }
}

let button = document.querySelector('button'); 


function submitButton(){
    document.body.style.backgroundColor = 'bisque';
    const newUser = new Person (firstName.value,lastName.value, age.value);
    console.log(newUser);
    console.log( `Hello, ${newUser.firstName} ${newUser.lastName}! You are ${newUser.age} `);
    message.innerHTML = `Hello, ${newUser.firstName} ${newUser.lastName}! You are ${newUser.age} `;
}

button.addEventListener('click', submitButton);


