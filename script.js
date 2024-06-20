// selectors:=--------------------------------------------------------------------------
const APIkey = "31e44f8b8cc8042123d4733da8181981";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const temp= document.querySelector(".temp");
const humidity= document.querySelector(".humidity");
const wind= document.querySelector(".wind");
const info= document.querySelector(".info");
const WeatherIcon = document.querySelector(".weather-icon");
const SearchInput = document.querySelector(".search input");
const Searchbtn = document.querySelector(".search button");
const card = document.querySelector(".weather");
const onload = document.querySelector(".onload");

// event listner:---------------------------------------------------------------------
Searchbtn.addEventListener("click",()=>{
    checkWeather(SearchInput.value);
})
   // Event listener for the Enter key press
SearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent form submission if inside a form
        checkWeather(SearchInput.value);
    }
});


//function------------------------------------------------------------------------------------------------------------------------------------------
async function checkWeather(cityN){
    const response = await fetch(APIurl + cityN+ `&appid=${APIkey}`);
    var data= await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display ="flex";
        document.querySelector(".onload").style.display ="none";
        document.querySelector(".weather").style.display ="none";
    }
    else{
            //updatin the texts:
    // info.innerHTML= data.name; //updating the city name in the display
    temp.innerHTML= data.main.temp +"°C" ; // if want roundoff value ->MAth.round(data.main.temp)+..
    humidity.innerHTML= data.main.humidity + "%";
    wind.innerHTML= data.wind.speed + "km/h";

    //update the img
    if(data.weather[0].main === "Clouds"){
        WeatherIcon.src= "images/clouds.png";
        info.innerHTML="Cloudy";
    }
    else if(data.weather[0].main === "Rain"){
        WeatherIcon.src= "images/rain.png";
        info.innerHTML="Rainy";
    }
    else if(data.weather[0].main === "Clear"){
        WeatherIcon.src= "images/clear.png";
        info.innerHTML= "Clear Sky";
    }
    else if(data.weather[0].main === "Drizzle"){
        WeatherIcon.src= "images/drizzle.png";
        info.innerHTML="Drizzling";
    }
    else if(data.weather[0].main === "Mist"){
        WeatherIcon.src= "images/mist.png";
        info.innerHTML="Mist";
    }
    else if(data.weather[0].main === "Snow"){
        WeatherIcon.src= "images/snow.png";
        info.innerHTML="Mist";
    }
    else if(data.weather[0].main === "Haze"){
        WeatherIcon.src= "images/haze.png";
        info.innerHTML="Haze";
    }
    else if(data.weather[0].main === "Fog"){
        WeatherIcon.src= "images/fog.png";
        info.innerHTML="Foggy";
    }
    else if(data.weather[0].main === "Strom" || data.weather[0].main === "Thunder"){
        WeatherIcon.src= "images/strom.png";
        info.innerHTML="Thunder";
    }
    else {
        WeatherIcon.src = "images/onload.png";
        info.innerHTML = "Unknown Weather";  
    }

    // displaying the content:
    card.style.display= "block";
    onload.style.display="none";
    document.querySelector(".error").style.display ="none";

    }
// console.log(data)



}