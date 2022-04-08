var formEl = document.querySelector("#bill-form");
var tasksToDoEl = document.querySelector("#bill-to-calc");
var billIdCounter = 0;
var pageContentEl = document.querySelector("#page-content");

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
  }