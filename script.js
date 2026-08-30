 const apikey ="5a0edbc4b679f287d23eae25f8f58745"
 const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchbox =document.querySelector(".input")
   const searchbutton =document.querySelector(".searchBtn")
   const weathericon= document.querySelector(".weathericon")
  
   async function checkweather (city) {
      const response = await fetch(apiurl + city + `&appid=${apikey}`)
      if (response.status == 404){
        document.querySelector(".error").style.display= "block"
        document.querySelector(".weather").style.display= "none"
      }
      else{
var data = await response.json();
      console.log(data);
   
   document.querySelector(".cityname").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";


   if (data.weather[0].main == "Clouds") {
    weathericon.src="images/cloud.png"
   }
   else if 
    (data.weather[0].main == "Clear") {
    weathericon.src="images/sun.png"
   }
   else if 
    (data.weather[0].main == "Rain") {
    weathericon.src=".\images\rain.png"
   }
   else if 
    (data.weather[0].main == "Drizzle") {
    weathericon.src="images/drizzle.png"
   }
   else if 
    (data.weather[0].main == "Snow") {
    weathericon.src="images/snow.png"
   }
   else if 
    (data.weather[0].main == "Mist") {
    weathericon.src="images/mist.png"
   }
   document.querySelector(".weather").style.display= "block"
 }
      }
      
searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkweather(searchbox.value);
    }
});

 searchbutton.addEventListener("click" , ()=>{
 checkweather (searchbox.value)
 })
 
 