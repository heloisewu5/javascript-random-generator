let heading = document.getElementById("drink");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText"); /* NOTE: There was nothing with the ID outputText */
let inputElement = document.getElementById("userInput");

let drinks =['iced oat latte', 'iced vanilla latte', 'hot cocoa', 'iced matcha latte', 'hot tea', 'iced tea', 'iced vanilla latte', 'iced americano', 'iced cold brew'];


executeButton.addEventListener("click", function(){
  var currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(incUserInput) {
  var drinkRecIndex = Math.floor(Math.random() * drinks.length);
  console.log(incUserInput);
  var selectedRandomDrinkText = drinks[drinkRecIndex];
  outputParagraph.innerText = incUserInput + ", you should get " + selectedRandomDrinkText + " today!";
}

function restyle() {
  //changing color
  var outputColorString = 'rgb(' + Math.floor(Math.random() * 101 + 155) + ', ' + Math.floor(Math.random() * 101 + 155) + ', ' + Math.floor(Math.random() * 101 + 155) + ')';

  //changing fonts
  var fonts = ["Binggrae", "BinggraeBold", "Bebas", "DM", "Roboto", "NewYork", "Squareo"];
  var outputFontString = fonts[Math.floor(Math.random() * fonts.length)];

  //chaning size
  var sizes = ["x-small", "small", "medium", "large", "x-large"];
  var outputSizeString = sizes[Math.floor(Math.random() * sizes.length)];
  console.log(outputSizeString);

  outputParagraph.style.color = outputColorString;
  outputParagraph.style.fontFamily = outputFontString;
  outputParagraph.style.fontSize = outputSizeString;
}