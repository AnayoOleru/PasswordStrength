this.button = document.getElementById("button");
this.strengthPercent = document.getElementById("strengthpercent");
this.strengthText = document.getElementById("strengthtext");
// this.passBox = document.getElementById("passbox");
// password field
// const passwordBox = (password) =>{
// this.button.addEventListener("click", ()=>{
let passBox =(password) =>{
//password box  if whitespace or nothing 
  if (password.length === 0) {
            this.strengthPercent.innerHTML = " ";
            return;
        }
  
//Regular Expression   
  let ruleStore = Array();
  ruleStore.push("[A-Z]");  //upperCase 
  ruleStore.push("[a-z]");  //lowerCase
  ruleStore.push("[0-9]");  //numbers
  ruleStore.push("[$@$!%*#?&]");  //symbols
  
  let forSwitch = 0;
  //loop into rulestore and identify password that matches
  for (let i = 0; i < ruleStore.length; i++){
    if(new RegExp(ruleStore[i]).test(password)){
      forSwitch++;
    }
  }
  let color = "";
  this.strength = "";
  //display results after identifying, depending on user inputs match. Strength of password in percentage.
  switch (forSwitch){
    case 1:
      this.strength = "25%"
      color = "#ff070d"
      break;
    case 2:
      this.strength = "50%"
      color = "#f22800"
      break;
    case 3:
      this.strength = "75%"
      color = "#08f700"
      break;
    case 4:
      this.strength = "100%"
      color = "#ffffff"
      break;
  }

   //error message and button disable
  if(password.length < 6) {
 this.strengthPercent.innerHTML = "Minimum password length is 6";
  this.strengthPercent.style.color = "#b26567"
     this.button.disabled = true
    this.button.style.background = "#8ef292"
   
  }else if(password.length > 12){   
    this.strengthPercent.innerHTML = "Maximum password length is 12";
  this.strengthPercent.style.color = "#f90006";
    this.button.disabled = true;
    this.button.style.background = "#8ef292"
    
    }else{
      this.button.disabled = false;
  this.strengthPercent.innerHTML = this.strength;
  this.strengthPercent.style.color = color;
      this.button.style.background = "#04f40e"
  }
}

//   when check button is clicked. StrengthText
  // const runStrength = () =>{
this.button.addEventListener("click", ()=>{
  if (this.strengthText.style.display === 'none') {
        this.strengthText.style.display = 'block';   
    }else{
   this.strengthText.style.display = 'none';
    }
//strength of password in words   
 if(this.strength === "25%"){
   this.strengthText.innerHTML = "Weak"
   this.strengthText.style.color = "red";
 }
  if(this.strength === "50%"){
     this.strengthText.innerHTML = "Medium"
     this.strengthText.style.color = "#a02c09";
  }
  if(this.strength === "75%"){
     this.strengthText.innerHTML = "Okay"
     this.strengthText.style.color = "#595703";
  }
  if(this.strength === "100%"){
     this.strengthText.innerHTML = "Strong password"
     this.strengthText.style.color = "#027a0c";
     this.button.style.background = "#027a0c";
  }
  })
