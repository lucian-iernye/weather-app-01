let appId = "6c8a2f669c714e3618c621690d46c050";

let units = "metric";

let searchMethod;

const getSearchMethod = searchTerm => {
  if (
    searchTerm.length === 5 &&
    Number.parseInt(searchTerm) + "" === searchTerm
  ) {
    searchMethod = "zip";
  } else {
    searchMethod = "q";
  }
};

const searchWeather = searchTerm => {
  getSearchMethod(searchTerm);
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`
  )
    .then(result => {
      return result.json();
    })
    .then(result => {
      init(result);
    });
};

const init = resultFromServer => {
  console.log(resultFromServer);

  switch (resultFromServer.weather[0].main) {
    case "Clear":
      document.body.style.backgroundImage = 'url("img/clear.jpg")';
      break;

    case "Clouds":
      document.body.style.backgroundImage = 'url("img/cloud.jpg")';
      break;

    case "Rain":
    case "Drizzle":
    case "Mist":
      document.body.style.backgroundImage = 'url("img/rain.jpg")';
      break;

    case "Thunderstorm":
      document.body.style.backgroundImage = 'url("img/storm.jpg")';
      break;

    case "Snow":
      document.body.style.backgroundImage = 'url("img/snow.jpg")';
      break;

    default:
      break;
  }
};

document.getElementById("searchBtn").addEventListener("click", () => {
  let searchTerm = document.getElementById("searchInput").value;
  if (searchTerm) {
    searchWeather(searchTerm);
  }
});
