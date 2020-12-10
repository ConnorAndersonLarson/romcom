// Create variables targetting the relevant DOM elements here 👇
var makeNewCover = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');
var mainCover = document.querySelector('.main-cover');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button')
var savedCoversSection = document.querySelector('.saved-view')
var homeButton = document.querySelector('.home-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
makeNewCover.addEventListener('click', changeToMakeNewCover);
viewSavedCoversButton.addEventListener('click', changeToSavedCovers);

// Create your event handlers and other functions here 👇
function changeToSavedCovers(){
  homeButton.className = 'home.button'
  savedCoversSection.className = 'saved-view'
  formView.className = 'view form-view hidden'
  mainCover.className = 'view main-cover hidden';
  saveCoverButton.className = 'view save-cover-button hidden'
  randomCoverButton.className = 'view random-cover-button hidden';
}

function changeToMakeNewCover(){
  homeButton.className = 'home.button'
  formView.className = 'form-view';
  mainCover.className = 'view main-cover hidden';
  randomCoverButton.className = 'view random-cover-button hidden';
  saveCoverButton.className = "view save-cover-button hidden";
};

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
