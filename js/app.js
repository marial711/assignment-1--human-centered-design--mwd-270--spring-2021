// Inputs
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let street = document.getElementById('street');
let apartment = document.getElementById('apartment');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zipcode = document.getElementById('zip');
let salary = document.getElementById('salary');
let phone = document.getElementById('phone');
let date = document.getElementById('date');
let relocate = document.getElementsByName(`relocate`);


// Outputs
let firstNameResponse = document.getElementById(`first-name--response`);
let lastNameResponse = document.getElementById(`last-name--response`);
let streetResponse = document.getElementById(`st-address--response`);
let apartmentResponse = document.getElementById(`apartment--response`);
let cityResponse = document.getElementById(`city--response`);
let stateResponse = document.getElementById(`state--response`);
let zipResponse = document.getElementById(`zip--response`);
let salaryResponse = document.getElementById(`salary--response`);
let phoneResponse = document.getElementById(`phone--response`);
let dateResponse = document.getElementById(`date--response`);
let relocateResponse = document.getElementById(`relocation--response`);


firstName.addEventListener('keyup', (e) => {
        firstNameResponse.textContent = `First Name: ${e.target.value}`;
    }, false);
lastName.addEventListener('keyup', (e) => {
        lastNameResponse.textContent = `Last Name: ${e.target.value}`;
    }, false);
street.addEventListener('keyup', (e) => {
        streetResponse.textContent = `Street Address: ${e.target.value}`;
    }, false);
apartment.addEventListener('keyup', (e) => {
        apartmentResponse.textContent = `Apartment: ${e.target.value}`;
    }, false);
city.addEventListener('keyup', (e) => {
        cityResponse.textContent = `City: ${e.target.value}`;
    }, false);
state.addEventListener('keyup', (e) => {
        stateResponse.textContent = `State: ${e.target.value}`;
    }, false);
zipcode.addEventListener('keyup', (e) => {
        zipResponse.textContent = `Zipcode: ${e.target.value}`;
    }, false);
salary.addEventListener('keyup', (e) => {
        salaryResponse.textContent = `Salary: ${e.target.value}`;
    }, false);
phone.addEventListener('keyup', (e) => {
        phoneResponse.textContent = `Phone Number: ${e.target.value}`;
    }, false);
date.addEventListener('change', (e) => {
        dateResponse.textContent = `Date: ${e.target.value}`;
    }, false);

for( let i = 0; i < relocate.length; i++ ) {
    relocate[i].addEventListener(`click`, (e) => {
        // console.log(e.target.value);
        relocateResponse.textContent = `Relocate? ${e.target.value}`;
    }, false);
}



