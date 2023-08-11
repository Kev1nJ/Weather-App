

const apiKey = "ab3b95adf307b5d880b55ba1eb4ff2bc";
const submitButton = document.getElementById('search-btn')


// fetch API key
function getWeather(city) {
  const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  fetch(cityURL)
    .then(function (data) {
      console.log(data);
      return data.json()
    })
    .then(function (jsonData) {
      console.log(jsonData);
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${jsonData.coord.lat}&lon=${jsonData.coord.lon}&appid=${apiKey}&units=imperial`;

      currentWeather.city = jsonData.name;
      

      currentWeather.temp = jsonData.main.temp;
      currentWeather.wind = jsonData.wind.speed;
      currentWeather.humidity = jsonData.main.humidity;
      console.log(currentWeather.humidity)
      displayWeatherData(currentWeather);
      

      fetch(apiUrl)
        .then(function (cityData) {
          console.log(cityData);
          return cityData.json()
        })
        .then(function (jsonCityData) {
          console.log(jsonCityData)
        })

    })



}
submitButton.addEventListener('click', getDisplayWeather)
function getDisplayWeather(event) {
  console.log(event)
  var cityName = event.target.previousElementSibling.value
  console.log(cityName)
  getWeather(cityName);
}




// Display weather in Content
let currentWeather = {
  city:"",
  temp:"",
  wind:"",
  humidity:"",
}




function displayWeatherData(curWeather) {
  const cityEl = document.getElementById('current-city');
  const tempEl = document.getElementById('current-temp');
  const windEl = document.getElementById('current-wind');
  const humidEl = document.getElementById('current-humidity');
  console.log(curWeather.humidity)

  cityEl.innerHTML = curWeather.city;
  tempEl.innerHTML = curWeather.temp;
  windEl.innerHTML = curWeather.wind;
  humidEl.innerHTML = curWeather.humidity;
  
 }

 
 
 