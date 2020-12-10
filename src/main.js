// Create variables targetting the relevant DOM elements here 👇
var makeNewCover = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');
var mainCover = document.querySelector('.main-cover');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
makeNewCover.addEventListener('click', changeToMakeNewCover);

// Create your event handlers and other functions here 👇
function changeToMakeNewCover(){
formView.className = 'form-view';
mainCover.className = 'view main-cover hidden';
randomCoverButton.className = 'view random-cover-button hidden';
saveCoverButton.className = "view save-cover-button hidden";

}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
