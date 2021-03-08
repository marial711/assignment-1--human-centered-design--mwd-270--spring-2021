document.getElementById("firstName").addEventListener("keyup", updateInput);
document.getElementById("lastName").addEventListener("keyup", updateInput);
document.getElementById("street").addEventListener("keyup", updateInput);
document.getElementById("city").addEventListener("keyup", updateInput);
document.getElementById("state").addEventListener("keyup", updateInput);
document.getElementById("zip").addEventListener("keyup", updateInput);
document.getElementById("salary").addEventListener("keyup", updateInput);
document.getElementById("number").addEventListener("keyup", updateInput);
document.getElementById("date").addEventListener("keyup", updateInput);
// document.getElementById("relocate").addEventListener("keyup", updateInput);


function updateInput(evt) {
let element = evt.target;
let value = element.value;
let outputId = element.getAttribute("data-output");
let output = document.getElementById(outputId);
output.value = value;
}

function radioInput(){
	var location = document.getElementsByName('relocate');
	var locationValue;
	for(var i = 0; i < location.length; i++){
    	if(location[i].checked){
       		locationValue = location[i].value;
    }
  }
  	let radioOutputId = getElementById("relocateAnswer");
  	let radioOutput = document.getElementById(radioOutputId);
  	radioOutput.value = locationValue;
}

