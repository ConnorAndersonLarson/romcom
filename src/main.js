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
homeButton.addEventListener('click', goHome);

// Create your event handlers and other functions here 👇
function changeToSavedCovers(){
  homeButton.style.display = 'block';
  savedCoversSection.style.display = 'block'
  formView.style.display = 'none';
  mainCover.style.display = 'none';
  saveCoverButton.style.display = 'none';
  randomCoverButton.style.display = 'none';
};

function changeToMakeNewCover(){
  formView.style.display = 'block';
  homeButton.style.display = 'block';
  mainCover.style.display = 'none';
  randomCoverButton.style.display = 'none';
  saveCoverButton.style.display = 'none';
};

function goHome() {
  mainCover.style.display = 'block'
  saveCoverButton.style.display = 'block'
  randomCoverButton.style.display = 'block'
  homeButton.style.display = 'none'
  formView.style.display = 'none'
  savedCoversSection.style.display = 'none'
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
