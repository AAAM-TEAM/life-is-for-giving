getFromLocalStorage();
console.log(itemFromLocalStorage);
var getMain = document.getElementById("contributes-main3");
function renderDataFromLocalStorage() {
  for (x = 0; x < itemFromLocalStorage[0].length; x++) {
    var div1 = document.createElement("div");
    getMain.appendChild(div1);
    var imageContainer = document.createElement("img");
    imageContainer.src = `img/${itemFromLocalStorage[0][x].itemName}.png`;
    getMain.appendChild(imageContainer);
    console.log(imageContainer.src);
    var paragraph1 = document.createElement("p");
    paragraph1.textContent = `Quantity: ${itemFromLocalStorage[0][x].numberQuantity}`;
    getMain.appendChild(paragraph1);
    var paragraph2 = document.createElement("p");
    paragraph2.textContent = `quality: ${itemFromLocalStorage[0][x].qualityType}`;
    getMain.appendChild(paragraph2);
    var paragraph3 = document.createElement("p");
    paragraph3.textContent = `city Name: ${itemFromLocalStorage[0][x].cityName}`;
    getMain.appendChild(paragraph3);
    if (localStorage) {
        document.getElementById("contributes_befor-submit3").remove();
    }
  }
}
console.log("leng", itemFromLocalStorage[0].length);
renderDataFromLocalStorage();
