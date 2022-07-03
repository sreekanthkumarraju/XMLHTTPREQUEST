# XMLHTTPREQUEST

1.How to compare two json objects have the same properties without order?
  
    a. var obj1={"name":"Person1",age:5}
    b. var obj2={age:5,"name":"Person1"}
    
    
    Solution:
     using lodash
    
    var obj1={"name":"Person1",age:5}
    var obj2={age:5,"name":"Person1"}
    _.isEqual(obj1,obj2)


    Output:  
    
      true


2. use rest countries URL  https://restcountries.com/v2/all  print all countries names ,Regions, Sub Regions and Populations


   index .html
  --------------------------
  
  
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>    
        <div id="countries" class="col-6">
            <table class="table">
               
               <thead>
                    <tr>
                           <th>CountryName</th>
                           <th>Capital</th> 
                           <th>Region</th>
                           <th>Sub Region</th>
                           <th>Population</th>
                    </tr>
                  
                </thead>
               
            </table>
          
        </div>      
     </div>
      
      <script src="countrylist.js"></script>
</body>
</html>



countrylist .js
----------------
// Global Variables

   const countriesList = document.getElementById("countries");
   let countries; // will contain "fetched" data

  // Event Listeners
   countriesList.addEventListener("change", event => displayCountryInfo(event.target.value));

   countriesList.addEventListener("change", newCountrySelection);

    function newCountrySelection(event) {
        displayCountryInfo(event.target.value);
     }

 
   // fetching data
    
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



  function initialize(countriesData)
     {
      
      console.log(countriesData)
      
      countries = countriesData;
      
      for(let i=0;i<countries.length;i++)
       
       {
            
            Display(countries[i])
      
       }

   }
   


//displaying data
  
  function Display(country)
    {
   
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


OUTPUT:

![opera_glfqDb1i2j](https://user-images.githubusercontent.com/95994543/177029759-32b8cf5e-f188-40c0-8878-26cf86a27640.png)
![opera_FkXO9qZVu4](https://user-images.githubusercontent.com/95994543/177029761-1463094a-9455-4a9f-b5c2-8bfb28015299.png)
![opera_P4fIvPtTv9](https://user-images.githubusercontent.com/95994543/177029764-9806f3ce-1856-4130-810f-54d3afd9771a.png)


--------------------------------------------------------------------------------------------------------------------------------------------

3. use rest countries URL  https://restcountries.com/v2/all  display all countries flags
--------------------------------------------------------------------------------------------



countryflag .html
 ----------------
 
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
       
        <div id="countries" class="col-6">
            
                <div id="images">
                
                    <div id="image" ></div>
                </div> 
               
        </div>
           
      </div>
      
      <script src="countryflag.js"></script>
</body>
</html>
 
 
 countryflag .js
 --------------
 
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
 
 .then(function(res)
 {
   console.log(res);
  return res.json();

})

 .then(function(data)
 {
        console.log(data);
       initialize(data);
 })
 
.catch(function(err)
{
  console.log("Error:", err);
 });



function initialize(countriesData) 
{

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
 

  Result :
  
  
  
![PJSVZbnQB3](https://user-images.githubusercontent.com/95994543/177030578-9049c3b3-b97f-47f1-98d9-43c76469b186.png)
![opera_syLrdJllyR](https://user-images.githubusercontent.com/95994543/177030582-e59cbadc-c180-432e-b277-35fae15001a4.png)
![opera_BmiHJr8qs3](https://user-images.githubusercontent.com/95994543/177030587-cb00ebc6-59bc-4ba8-9fdc-fd0ea81ab647.png)
![opera_kVAM6A6wpt](https://user-images.githubusercontent.com/95994543/177030595-0bda1a28-f1e7-4e08-b125-fadf85e4d6b3.png)
