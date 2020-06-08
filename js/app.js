/* eslint-disable quotes */
"use strict";
// arrays of options that can user donate with and more details
var allItems = ["books", "change me", "clothes"];
var qualityArray = ["New", "Used"];
var cities = [
  "Amman",
  "Irbid",
  "Al-mafraq",
  "Zarqa",
  "Aqaba",
  "Jerash",
  "Madaba",
  "Kerak",
  "Ma'an",
];
/*this array contain all object after get it from local storage */
var itemFromLocalStorage=[];

// constructor for sumbitted answers
var Donate = function (itemName, numberQuantity, qualityType, cityName) {
  this.itemName = itemName;
  this.numberQuantity = numberQuantity;
  this.qualityType = qualityType;
  this.cityName = cityName;
  Donate.allDonates.push(this);
};
Donate.allDonates = [];

// this function for adding options to the form
var addingOptions1 = document.querySelector("#item-2");
var addingOptions2 = document.querySelector("#quality-2");
var addingOptions3 = document.querySelector("#branch-2");
var renderDonateDetails = document.querySelector("#donatedDetails");
// function to add options to the form
function allOptionsForm() {
  for (let e in allItems) {
    var option1 = document.createElement("option");
    option1.textContent = allItems[e];
    addingOptions1.appendChild(option1);
  }
  for (let e in qualityArray) {
    var option2 = document.createElement("option");
    option2.textContent = qualityArray[e];
    addingOptions2.appendChild(option2);
  }
  for (let e in cities) {
    var option3 = document.createElement("option");
    option3.textContent = cities[e];
    addingOptions3.appendChild(option3);
  }
}
allOptionsForm();

// adding eventlistner
var onSubmit = document.querySelector("#formOptions");
onSubmit.addEventListener("submit", handlesubmit);
// handle submit function to save values
var itemName, numberQuantity, qualityType, cityName;
function handlesubmit(event) {
  // prevent the page from update
  event.preventDefault();
  // getting the values
  itemName = document.getElementById("item-2").value;
  numberQuantity = document.getElementById("quantity-2").value;
  qualityType = document.getElementById("quality-2").value;
  cityName = document.getElementById("branch-2").value;
  // console.log(itemName,numberQuantity,qualityType,cityName);

  // this will create object of donated details
  new Donate(itemName, numberQuantity, qualityType, cityName);
  // console.log(Donate.allDonates);

  // render the donate details
  var ulEl = document.createElement("ul");
  renderDonateDetails.appendChild(ulEl);
  var liEl = document.createElement("li");
  ulEl.appendChild(liEl);
  liEl.textContent = `donate details: ${itemName}, Quantity is ${numberQuantity}, Quality is ${qualityType}, From ${cityName}.`;
  // call to save details into local storage
  sendToLocalStorage();
  getFromLocalStorage();
  onSubmit.reset();
}

// send objects of donation details to the local storage
function sendToLocalStorage() {
  var sendArray = JSON.stringify(Donate.allDonates);
  // console.log(sendArray);
  localStorage.setItem("donatesInLocalStorage", sendArray);
}
var getArray,
getJSON;
function getFromLocalStorage() {
  getJSON = localStorage.getItem("donatesInLocalStorage");
  // console.log(getJSON);
  getArray = JSON.parse(getJSON);
  itemFromLocalStorage=[];
  itemFromLocalStorage.push(getArray);
  console.table(itemFromLocalStorage);
  // console.log(getArray);
  // console.table(getArray);
}
