const apiKey = "217f1d6801b5ce6fb2df2a90144542e2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherResult = document.querySelector(".weather-result");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

    if (response.status == 404 ){
        weatherResult.style.display = "none";
        document.querySelector(".weather-error").style.display = "block";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".weather-name").innerHTML = data.weather[0].main;
        document.querySelector(".hum-per").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = 'images/clouds.png';
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = 'images/clear.png';
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = 'images/rain.png';
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = 'images/drizzle.png';
        }
        else if(data.weather[0].main == "Mist" || "Haze"){
            weatherIcon.src = 'images/mist.png';
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = 'images/snow.png';
        }

        document.querySelector(".weather-error").style.display = "none";
        weatherResult.style.display = "flex";
    }
}

searchButton.addEventListener("click", ()=> {
    checkWeather(searchInput.value)
});