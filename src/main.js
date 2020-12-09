// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = document.getElementsByClassName('cover-image');
// currentCover[0].src = './assets/redrenaissance.jpg';
//document.getElementsbyClassName("will grab this element")
//go to the first index of cover-image then key of src to replace what you need
currentCover[0].src = covers[getRandomIndex(covers)];
//since getRandomIndex function return a number we can utilize it to store inside brackets for the covers variable

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇
// function randomCover() {
//   var frontCover = new Cover (getRandomIndex(covers),
//   getRandomIndex(titles),
//   getRandomIndex(descriptors),
//   getRandomIndex(descriptors))
//   frontCover

  // var title = document.querySelector('.cover-title');
  // title.innerText = 'TESTTESTTEST'
  // title;

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
