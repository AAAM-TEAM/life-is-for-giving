/* eslint-disable no-undef */
/* eslint-disable quotes */
'use strict';

console.log(Donate.allDonates);
var getMain = document.getElementById("contributes-main3");
function renderDataFromLocalStorage() {
  getFromLocalStorage();
  removedonate();
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

    // var contributesTitle = document.getElementById('contributeTitle3');
    // if (conter.length == 1) {
    //   document.getElementById("contributes_befor-submit3").remove();
    //   contributesTitle.innerHTML = "This Is Your Contributes:";
    // }
  }
}
console.log("leng", Donate.allDonates.length);
renderDataFromLocalStorage();


function removedonate() {
  getMain.innerHTML = `<section id="contributes_befor-submit3">
  <!-- section for adding -->
  <h2>There is no any Contributes !!</h2>
  <div>
      <p>
          If you want Spread Happiness and make some donations just
      </p>
  </div>
  <div><a href="donation.html"><button>Donate</button></a></div>
</section>
<section id="theDonateItems3">
  
</section>`;

}
