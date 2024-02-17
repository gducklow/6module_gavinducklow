var searchInput = $("#search-city")
var searchBtn = $("#search-btn")

function getWeather(){
 fetch("https://api.openweathermap.org/data/2.5/weather?q="+ searchInput.val() +"&units=imperial&&appid=92b9ce2f29ad4ef45834acfb54dccfd0")
 .then(res => res.json())
 .then(data =>{
  console.log(data)

  $("#city-name").text(data.name);

  $("#current-temp").text("Temp: " + data.main.temp)

 })
}
searchBtn.on("click", getWeather)