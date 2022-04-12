var formEl = document.querySelector("#bill-form");
var tasksToDoEl = document.querySelector("#bill-to-calc");
var billIdCounter = 0;
var pageContentEl = document.querySelector("#page-content");
var APIkeyWeather = "0ed751aee02b60e3e3109adbed6b18e3"
var city;

function getWeather(city) {
  //  Using saved city name, execute a current condition get request from open weather map api
          let queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=0ed751aee02b60e3e3109adbed6b18e3"
          axios.get(queryURL)
          .then(function(response){
              console.log(response);


var billFormHandler = function(event) {
  event.preventDefault();
  var billNameInput = document.querySelector("input[name='bill-name'").value;
  var peopleAmountInput = document.querySelector("input[name='peopleamount']").value;

//   i know we cant use alerts, this is a temporary placeholder
  if (billNameInput === "" || peopleAmountInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }
  formEl.reset();

  document.querySelector("input[name='bill-name']").value = "";
  document.querySelector("input[name='bill-type']").selectedIndex = 0;

  var billDataObj = {
    name: billNameInput,
    type: peopleAmountInput
  };
