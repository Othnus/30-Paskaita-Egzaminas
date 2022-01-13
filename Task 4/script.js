/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.
Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const outputDiv = document.getElementById("output")


fetch(ENDPOINT)
.then((resp) => resp.json())
.then((data)=>{
    console.log(data)
    data.forEach(element => {
        outputDiv.innerHTML += `<br><h2 style= "background-color: tan">${element.brand}</h2>`
        +`<p style= "background-color: wheat">${element.models.join(" , ")}</p><br>`
        console.log(element.models)
    });
})