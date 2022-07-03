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
   
    
      let img= document.createElement('img')
      img.src=country.flag
      document.querySelector('#image').appendChild(img)
       console.log(country.flag)
    

     

  }