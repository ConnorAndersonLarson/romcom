// Create variables targetting the relevant DOM elements here 👇
var selectedCover = document.querySelector('.cover-image')
var selectedTitle = document.querySelector('.cover-title')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;
// Add your event listeners here 👇
randomCoverButton.addEventListener('click', randomCover);


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function randomCover(){
    var randomDescTwo = descriptors[getRandomIndex(descriptors)]
    var randomDescOne = descriptors[getRandomIndex(descriptors)]
    var randomCover = covers[getRandomIndex(covers)]
    var randomTitle = titles[getRandomIndex(titles)]
  selectedTitle.innerText = randomTitle;
  selectedCover.src = randomCover;
  taglineTwo.innerText = randomDescTwo;
    if (randomDescOne === randomDescTwo) {
      randomDescOne = descriptors[getRandomIndex(descriptors)]
      taglineOne.innerText = randomDescOne;
   } else {
      taglineOne.innerText = randomDescOne;
   }
   currentCover = new Cover(randomCover,randomTitle, randomDescOne, randomDescTwo)
}
randomCover()
