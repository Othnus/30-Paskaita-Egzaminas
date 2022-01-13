/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).
Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const output = document.getElementById("output");
const btn = document.getElementById("btn");
btn.addEventListener("click", myfun);
let li = "";
const message = document.getElementById("message");

function myfun(e) {
    e.preventDefault();
    message.parentNode.removeChild(message);
    fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(data => {
            data.forEach((item, index) => {
                li += `<li>${item.login} ${item.avatar_url}</li>`
            });
            document.querySelector("#output").innerHTML = li;
        })
        output.style.borderRadius = "15px";
        output.style.backgroundColor = "aquamarine";
        output.style.textAlign = "center";
    
};