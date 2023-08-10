
const apiKey = "ab3b95adf307b5d880b55ba1eb4ff2bc";
const submitButton = document.getElementById('search-btn')
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

function displayWeatherData(data) { }