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

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let dateUpdate = document.querySelector("#search-form");
dateUpdate.addEventListener("submit", updateDate);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
