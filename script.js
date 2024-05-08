const API_KEY = 'a90debd18d761880331d2f32aa51c99d';
const locationInput = document.getElementById("locationInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");

getWeatherButton.onclick = () => {
  const cityName = locationInput.value.trim();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((weather) => displayWeather(weather));

  locationInput.value = "";
};


function displayWeather({
  name,
  main: { temp },
  weather: [{ description, icon }],
  wind: { speed: speedOfWind },
  sys: { sunrise, sunset }
}) {
  const sunriseTime = new Date(sunrise * 1000);
  const sunsetTime = new Date(sunset * 1000);
  // console.log(sunriseTime);
  //new commit
  weatherContainer.innerHTML = `
        <h2>${name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}.png" />
        <p>Temperature: ${temp}°C</p>
        <p>Description: ${description}</p>
        <p>Speed of wind: ${speedOfWind} m/s</p>
        <p>Sunrise: ${sunriseTime.getHours()}:${sunriseTime.getMinutes()}:${sunriseTime.getSeconds()}</p>
        <p>Sunset: ${sunsetTime.getHours()}:${sunsetTime.getMinutes()}:${sunsetTime.getSeconds()}</p>
    `;
}
