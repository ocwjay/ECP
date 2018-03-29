window.onload = createPortfolio(); //Calls the portfolio creation on window load. You could change this to suit your needs though.

function createPortfolio(){
  var inputString = document.getElementById("portfolioItems").innerHTML; //Grabs the element you wrote all of your fun protfolio stuff in
  var inputArray = inputString.split(', '); //splits each of the things you wrote by comma and space and then puts them in an array
  var titleArray = []; //This is where we'll store the titles
  var linkArray = []; //Where we'll store the links
  var srcArray = []; //Where we'll store the image sources
  
  for(var i = 0; i < inputArray.length; i += 3){ //In a range of 11, this would grab index 0, 3, 6, 9 (the titles)
    titleArray.push(inputArray[i]); //Puts the titles in the array made to hold the titles
  }
  for(var j = 1; j < inputArray.length; j += 3){ //In a range of 11, this would grab index 1, 4, 7, 10 (the links)
    linkArray.push(inputArray[j]); //Puts the Links in the array made to hold the links
  }
  for(var k = 2; k < inputArray.length; k += 3){ //In a range of 11, this would grab index 2, 5, 8, 11 (the image sources)
    srcArray.push(inputArray[k]); //Puts the image sources in the array made to hold the sources
  }
  
  //Now we get to the fun stuff
  for(var l = 0; l < titleArray.length; l++){ //We only want to go off of the titles, so nothing gets confused
    var portfolioWrapperElement = document.getElementById("portfolioWrapper"); //Grabs the wrapper
    var newCardElement = document.createElement('a'); //Creates a link element (the card element is a link, by the way. That's so the whole card is clickable)
    var newCardTitle = document.createElement('div'); //Creates a div element that will hold the title text in it
    var newCardTitleText = document.createTextNode(titleArray[l]); //Creates a text node based off of the title that's at the index of whatever our for loop is currently on
    var newCardImage = document.createElement('div'); //Creates a div that will be the image for the card. It was easier to keep a consistent style by making this a div and not an img
    newCardImage.style.backgroundImage = "url('" + srcArray[l] + "')"; //Gives the image div its image. Selects the source that's at the index the for loop is currently on
    newCardElement.href = linkArray[l]; //This adds the link to the card that is at the index of what the for loop is currently on
    newCardElement.classList.add("portfolioCard"); //For styling purposes, we add the portfolioCard class to the card div
    if(portfolioWrapperElement.classList.contains("shadows")){ //This adds a shadow to the cards if, and only if, you added the shadows class to the wrapper
      newCardElement.classList.add("cardShadow"); //Adds the optional class to each card.
    }
    newCardTitle.classList.add("cardTitle"); //This adds the cardTitle class to the title of the card, for styling purposes
    newCardImage.classList.add("cardImage"); //This adds the cardImage class to the image div for styling purposes
    newCardTitle.appendChild(newCardTitleText); //This adds the title text to the title div
    newCardElement.appendChild(newCardTitle); //This adds the title to the card
    newCardElement.appendChild(newCardImage); //This adds the image div to the card
    portfolioWrapperElement.appendChild(newCardElement); //This adds the card to the wrapper
  }
}