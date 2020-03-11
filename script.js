let appId = "6c8a2f669c714e3618c621690d46c050";

let units = "metric";

let searchMethod;

const searchWeather = searchTerm => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}`
  );
};
