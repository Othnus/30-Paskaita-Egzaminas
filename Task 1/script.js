/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274
Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const inputKilograms = document.getElementById("search")
const calculateButton = document.getElementById("submit-btn")
const outputDiv = document.getElementById("output")

let answerLb = 0;
let answerG = 0;
let answerOz = 0;

calculateButton.addEventListener("click",function(event){
    let kg = inputKilograms.value
    event.preventDefault();
    answerLb = kg * 2.2046;
    answerG = kg / 0.0010000;
    answerOz = kg * 35.274;
    outputDiv.innerText = `LB: ${answerLb} g: ${answerG} Oz: ${answerOz}`
    outputDiv.style.fontWeight = "bold";
    outputDiv.style.marginLeft = "3em"
})