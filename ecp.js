window.onload = createPortfolio();

function createPortfolio(){
  var testStringForArray = document.getElementById("portfolioItems").innerHTML;
  var testArray = testStringForArray.split(', ');
  var testNewArray = [];
  
  for(var i = 0; i < testArray.length; i += 2){
    testNewArray.push(testArray[i]);
  }
  for(var j = 0; j < testArray.length; j++){
    testArray.splice(j, 1);
  }
  for(var k = 0; k < testArray.length; k++){
    var portfolioWrapperElement = document.getElementById("portfolioWrapper");
    var newCardElement = document.createElement('div');
    var newCardTitle = document.createElement('div');
    var newCardTitleText = document.createTextNode(testNewArray[k]);
    var newCardImage = document.createElement('div');
    newCardImage.style.backgroundImage = "url('" + testArray[k] + "')";
    newCardElement.classList.add("portfolioCard");
    if(portfolioWrapperElement.classList.contains("shadows")){
      newCardElement.classList.add("cardShadow");
    }
    newCardTitle.classList.add("cardTitle");
    newCardImage.classList.add("cardImage");
    newCardTitle.appendChild(newCardTitleText);
    newCardElement.appendChild(newCardTitle);
    newCardElement.appendChild(newCardImage);
    portfolioWrapperElement.appendChild(newCardElement);
  }
}