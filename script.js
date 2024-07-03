const apiKey = "02d4a005cc4465eacd8a8fba7b11e5a2";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city.trim() === "") {
    alert("Please enter a city name");
    return;
  }

  const weatherInfoDiv = document.getElementById("weatherInfo");
  weatherInfoDiv.innerHTML = "Loading...";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      displayWeather(data);
    } else {
      weatherInfoDiv.innerHTML = `Error: ${data.message}`;
    }
  } catch (error) {
    weatherInfoDiv.innerHTML = `Error: ${error.message}`;
  }
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById("weatherInfo");
  weatherInfoDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
