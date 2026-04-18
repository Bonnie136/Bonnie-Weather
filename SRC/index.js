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

  todaysDetails(cityInputElement.value);
}

function todaysDetails(city) {
  let apiKey = "3dac3be53b3oa402t7c1d0bf431fad39";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTodaysDetails);
}

function displayTodaysDetails(response) {
  let cityElement = document.querySelector("#city-search");
  let city = response.data.city;
  cityElement.innerHTML = `${city}`;
  let insertTodaysTemp = document.querySelector("#todays-temp");
  let todaysTemperature = Math.round(response.data.temperature.current);
  insertTodaysTemp.innerHTML = `${todaysTemperature}`;
  let insertCondition = document.querySelector("#condition-description");
  let conditionDescription = response.data.condition.description;
  insertCondition.innerHTML = `${conditionDescription}`;
  let insertTodaysIcon = document.querySelector("#todays-icon");
  let addTodaysIcon = response.data.condition.icon_url;
  insertTodaysIcon.innerHTML = `<img src="${addTodaysIcon}" class="icon-img"></img>`;
  let insertHumidity = document.querySelector("#todays-humidity");
  let todaysHumidity = response.data.temperature.humidity;
  insertHumidity.innerHTML = `${todaysHumidity}`;
  let insertWindSpeed = document.querySelector("#todays-wind-speed");
  let todaysWindSpeed = response.data.wind.speed;
  insertWindSpeed.innerHTML = `${todaysWindSpeed}`;

  searchCityForecast(response.data.city);
}

function searchCityForecast(city) {
  let apiKey = "3dac3be53b3oa402t7c1d0bf431fad39";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(cityForecast);
}

function cityForecast(response) {
  console.log(response.data);

  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
          <ul>
            <li>
              <span class="forecast-text">Tue</span> <span><img src="${day.condition.icon_url}" class="forecast-icon-image"></span>
              <strong class="forecast-text">${Math.round(day.temperature.maximum)}°C</strong>
              <span class="forecast-text">|</span> <span class="forecast-text">${Math.round(day.temperature.minimum)}°C</span>
            </li>
          </ul>
`;
    }
  });
  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);

let dateUpdate = document.querySelector("#search-form");
dateUpdate.addEventListener("submit", updateDate);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

todaysDetails("Norwich");
