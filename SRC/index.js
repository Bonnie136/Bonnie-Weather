function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  let nowDate = date.getDate();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${nowDate}, ${hours}:${minutes}`;
}

function updateDate() {
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let nowDate = date.getDate();

  if (hours < 10) {
    hours = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let actualDay = days[day];
  let dayTime = document.querySelector("#current-date");
  dayTime.innerHTML = `${actualDay} ${nowDate}, ${hours}:${minutes}`;
}

function searchCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city-search");
  cityElement.innerHTML = cityInputElement.value;
}

function todaysTemperature(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-form-input");
  let city = cityInput.value;
  let apiKey = "3dac3be53b3oa402t7c1d0bf431fad39";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  function displayTodaysTemp(response) {
    console.log(response.data.temperature.current);
    let insertTodaysTemp = document.querySelector("#todays-temp");
    let todaysTemperature = Math.round(response.data.temperature.current);
    insertTodaysTemp.innerHTML = `${todaysTemperature}`;
  }
  axios.get(apiUrl).then(displayTodaysTemp);
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let dateUpdate = document.querySelector("#search-form");
dateUpdate.addEventListener("submit", updateDate);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let todaysTempUpdate = document.querySelector("#search-form");
todaysTempUpdate.addEventListener("submit", todaysTemperature);
