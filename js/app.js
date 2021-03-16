window.onload = () => {
    let submit = document.getElementById("submit");

    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let street = document.getElementById("street");
    let apt = document.getElementById("apt");
    let city = document.getElementById("city");
    let zip = document.getElementById("zip");
    let salary = document.getElementById("salary");
    let number = document.getElementById("number");
    
    let noRelocation = document.getElementById("noRelocation");
    let national = document.getElementById("national");
    let international = document.getElementById("international");

    let fullNameOutput = document.getElementById("full-name-output");
    let addressOutput = document.getElementById("address-output");
    let salaryOutput = document.getElementById("salary-output");
    let phoneOutput = document.getElementById("phone-output");
    let availabilityOutput = document.getElementById("availability-output");
    let relocationOutput = document.getElementById("relocation-output");

    submit.addEventListener('click', () => {
        if (firstName.value == null || lastName.value == null) {
            fullNameOutput.textContent = `Name:`;
        } else {
            fullNameOutput.textContent = `Name: ${firstName.value} ${lastName.value}`;
        };

        if (street == null || city == null || state == null || zip == null) {
            addressOutput.textContent = null;
        } else {
            addressOutput.textContent = `Address: ${street.value} ${apt.value}, ${city.value}, ${state.value} ${zip.value}`;
        };

        if (salary.value == '$') {
            salaryOutput.textContent = `Desired Yearly Salary:`;
        } else {
            salaryOutput.textContent = `Desired Yearly Salary: ${salary.value}`;
        };

        phoneOutput.textContent = `Phone Number: ${number.value}`;
        availabilityOutput.textContent = `Available Start Date: ${availability.value}`;

        if (national.checked == false && international.checked == false) {
            relocationOutput.textContent = `Relocation: Not willing to relocate.`;
        } else if (national.checked == true && international.checked == false) {
            relocationOutput.textContent = `Relocation: Nationally`;
        } else if (national.checked == false && international.checked == true) {
            relocationOutput.textContent = `Relocation: Internationally`;
        } else {
            relocationOutput.textContent = `Relocation: Nationally or Internationally`;
        };
    });
};