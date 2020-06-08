"use strict";
// arrays of options that can user donate with and more details
var allItems = ["books", "food", "clothes"];
var qualityType = ["New", "Used"];
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
​
// constructor for sumbitted answers
var Donate = function (itemName, numberQuantity, qualityType, cityName) {
  this.itemName = itemName;
  this.numberQuantity = numberQuantity;
  this.qualityType = qualityType;
  this.cityName = cityName;
  Donate.allDonates.push(this);
};
Donate.allDonates = [];
​
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
  for (let e in qualityType) {
    var option2 = document.createElement("option");
    option2.textContent = qualityType[e];
    addingOptions2.appendChild(option2);
  }
  for (let e in cities) {
    var option3 = document.createElement("option");
    option3.textContent = cities[e];
    addingOptions3.appendChild(option3);
  }
}
allOptionsForm();

