// Inputs
let relocate = document.getElementsByName(`relocate`);


// Outputs
let firstNameResponse = document.getElementById(`first-name--response`);



for( let i = 0; i < relocate.length; i++ ) {
    relocate[i].addEventListener(`click`, (e) => {
        console.log(e.target.value);
        firstNameResponse.textContent = `The response was ${e.target.value}`;
    }, false);
}



// function updateInput(evt) {
//     let element = evt.target;
//     let value = element.value;
//     let outputId = element.getAttribute("data-output");
//     let output = document.getElementById(outputId);
//     output.value = value;
// }
//
// function radioInput() {
//     for (let i = 0; i < location.length; i++) {
//         if (location[i].checked) {
//             locationAnswer = location[i].value;
//             let radioOutputId = getElementById("relocateAnswer");
//             let radioOutput = document.getElementById(radioOutputId);
//             radioOutput.value = locationValue;
//         }
//     }
//     let radioOutputId = getElementById("relocateAnswer");
//     let radioOutput = document.getElementById(radioOutputId);
//     radioOutput.value = locationValue;
// }

// document.getElementById("firstName").addEventListener("keyup", updateInput);
// document.getElementById("lastName").addEventListener("keyup", updateInput);
// document.getElementById("street").addEventListener("keyup", updateInput);
// document.getElementById("apartment").addEventListener("keyup", updateInput);
// document.getElementById("city").addEventListener("keyup", updateInput);
// document.getElementById("state").addEventListener("keyup", updateInput);
// document.getElementById("zip").addEventListener("keyup", updateInput);
// document.getElementById("salary").addEventListener("keyup", updateInput);
// document.getElementById("number").addEventListener("keyup", updateInput);
// document.getElementById("date").addEventListener("keyup", updateInput);

//relocate.addEventListener(`click`, radioInput(), false);

// relocate[0].addEventListener("click", radioInput);
// relocate[1].addEventListener("click", radioInput);
// relocate[2].addEventListener("click", radioInput);
// relocate[3].addEventListener("click", radioInput);
