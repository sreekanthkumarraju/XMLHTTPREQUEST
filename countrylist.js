// Global Variables
const countriesList = document.getElementById("countries");
let countries; // will contain "fetched" data

// Event Listeners
 countriesList.addEventListener("change", event => displayCountryInfo(event.target.value));

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}

 fetch("https://restcountries.com/v2/all")
 .then(function(res){
   console.log(res);
  return res.json();
})
 .then(function(data){
        console.log(data);
  initialize(data);
 })
.catch(function(err){
  console.log("Error:", err);
 });



function initialize(countriesData) {
  console.log(countriesData)
  countries = countriesData;


 
  for(let i=0;i<countries.length;i++)
    {
        Display(countries[i])
      
    }

}




function Display(country)
  {
    //  let img= document.createElement('img')
    //  img.src=country.flag
    //  document.querySelector('#image').appendChild(img)
    //   console.log(country.flag)
    let table1=document.querySelector(".table");
    
     let row=table1.insertRow()
     let name=row.insertCell()
     name.innerHTML=country.name

     let capital=row.insertCell()
      capital.innerHTML=country.capital

      let region=row.insertCell()
      region.innerHTML=country.region

      let subregion=row.insertCell()
      subregion.innerHTML=country.subregion

      let polulation=row.insertCell()
      polulation.innerHTML=country.population

  }