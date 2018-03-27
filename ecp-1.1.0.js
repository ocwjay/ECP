window.onload = createPortfolio();

function createPortfolio(){
  var inputString = document.getElementById("portfolioItems").innerHTML;
  var inputArray = inputString.split(', ');
  var titleArray = [];
  var linkArray = [];
  var srcArray = [];
  
  for(var i = 0; i < inputArray.length; i += 3){
    titleArray.push(inputArray[i]);
  }
  for(var j = 1; j < inputArray.length; j += 3){
    linkArray.push(inputArray[j]);
  }
  for(var k = 2; k < inputArray.length; k += 3){
    srcArray.push(inputArray[k]);
  }
  
  for(var l = 0; l < titleArray.length; l++){
    var portfolioWrapperElement = document.getElementById("portfolioWrapper");
    var newCardElement = document.createElement('a');
    var newCardTitle = document.createElement('div');
    var newCardTitleText = document.createTextNode(titleArray[l]);
    var newCardImage = document.createElement('div');
    newCardImage.style.backgroundImage = "url('" + srcArray[l] + "')";
    newCardElement.href = linkArray[l];
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