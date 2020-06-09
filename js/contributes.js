/* eslint-disable no-undef */
/* eslint-disable quotes */
'use strict';
console.log(Donate.allDonates);
var getMain = document.getElementById("contributes-main3");
function renderDataFromLocalStorage() {
  getFromLocalStorage();
  for (var x = 0; x < Donate.allDonates.length; x++) {
    var div1 = document.createElement("div");
    getMain.appendChild(div1);
    var imageContainer = document.createElement("img");
    imageContainer.src = `img/${Donate.allDonates[x].itemName}.png`;
    getMain.appendChild(imageContainer);
    console.log(imageContainer.src);
    var paragraph1 = document.createElement("p");
    paragraph1.textContent = `Quantity: ${Donate.allDonates[x].numberQuantity}`;
    getMain.appendChild(paragraph1);
    var paragraph2 = document.createElement("p");
    paragraph2.textContent = `quality: ${Donate.allDonates[x].qualityType}`;
    getMain.appendChild(paragraph2);
    var paragraph3 = document.createElement("p");
    paragraph3.textContent = `city Name: ${Donate.allDonates[x].cityName}`;
    getMain.appendChild(paragraph3);
    var contributesTitle = document.getElementById('contributeTitle3');
    if (localStorage) {
      document.getElementById("removemessage").innerHTML = `<section id="contributes_befor-submit3">
      <!-- section if there weren't any contributes -->
      <h2>Thanks you for giving</h2>
      <div>
          <p>
             If you want to donate more just click on the button
          </p>
      </div>
      <div><a href="donation.html"><button>Donate</button></a></div>
  </section>`;
      contributesTitle.innerHTML = "This Is Your Contributes:";
    }
  }
}
console.log("leng", Donate.allDonates.length);
renderDataFromLocalStorage();
