window.onload = () => {
  let input = document.querySelectorAll(`input`);
  let radio = document.getElementsByName(`location`);
  let select = document.getElementById(`states`);

  input[0].addEventListener(`change`, function(event){
      let firstName = document.getElementById(`fname`).value;
      document.getElementById(`final-fname`).innerHTML = firstName;
  });
  input[1].addEventListener(`change`, function(e){
      let lastName = document.getElementById(`lname`).value;
      document.getElementById(`final-lname`).innerHTML = lastName ;
      });
  input[2].addEventListener(`change`, function(address){
      let finalAddress = document.getElementById(`address`).value;
      document.getElementById(`street`).innerHTML = finalAddress;
  });
  input[3].addEventListener(`change`, function(apt){
    let unit = document.getElementById(`apt`).value;
    document.getElementById(`unit`).innerHTML = unit;
  });
  input[4].addEventListener(`change`, function(city){
    let town = document.getElementById(`town`).value;
    document.getElementById(`city`).innerHTML = town;
  });

  select.addEventListener(`change`, (st) => {
    document.getElementById(`state`).innerHTML = st.target.value;
});

  input[5].addEventListener(`change`, function(zip){
    let zipcode = document.getElementById(`zip`).value;
    document.getElementById(`code`).innerHTML = zipcode;
  });
  input[6].addEventListener(`change`, function(money){
    let salary = document.getElementById(`des-salary`).value;
    document.getElementById(`final-salary`).innerHTML =  `$ ${salary}`;
  });
  input[7].addEventListener(`change`, function(phone){
    let phonenumber = document.getElementById(`phone-number`).value;
    document.getElementById(`contactnumber`).innerHTML = phonenumber;
  });
  input[8].addEventListener(`change`, function(date){
    let startingdate = document.getElementById('starting-date').value;
    document.getElementById(`date`).innerHTML =  startingdate;
  });
    function displayValue(){
      for(let i=0; i< radio.length; i++){
        if(radio[i].checked){
          let ans = radio[i].value;
          document.getElementById(`relocation-status`).innerHTML = ans;
   }};
  }
  input[9].addEventListener(`change`, function(i){
    displayValue();
  });
  input[10].addEventListener(`change`, function(i){
    displayValue();
  });
  input[11].addEventListener(`change`, function(i){
    displayValue();
  });
  input[12].addEventListener(`change`, function(i){
    displayValue();
  });
}
