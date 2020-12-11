// Create variables targetting the relevant DOM elements here 👇
var selectedCover = document.querySelector('.cover-image')
var selectedTitle = document.querySelector('.cover-title')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')
var makeNewCover = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');
var mainCover = document.querySelector('.main-cover');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var savedCoversSection = document.querySelector('.saved-view');
var homeButton = document.querySelector('.home-button');
var makeMyBook = document.querySelector('.create-new-book-button');
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var firstDescriptorInput = document.querySelector('.user-desc1');
var secondDescriptorInput = document.querySelector('.user-desc2');



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover// = savedCovers[(savedCovers.length)]
// Add your event listeners here 👇
randomCoverButton.addEventListener('click', randomCover);
makeNewCover.addEventListener('click', changeToMakeNewCover);
viewSavedCoversButton.addEventListener('click', changeToSavedCovers);
homeButton.addEventListener('click', goHome)
makeMyBook.addEventListener('click', makeBookCover)


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function currentCover(array) {
  selectedTitle.innerText = array[0];
  selectedCover.src = array[1];
  taglineTwo.innerText = array[3];
    if (array[2] === array[2]) {
      randomDescOne = descriptors[getRandomIndex(descriptors)]
      taglineOne.innerText = array[2];
   } else {
      taglineOne.innerText = array[2];
   }
}

function randomCover(){
    var randomDescTwo = descriptors[getRandomIndex(descriptors)]
    var randomDescOne = descriptors[getRandomIndex(descriptors)]
    var randomCover = covers[getRandomIndex(covers)]
    var randomTitle = titles[getRandomIndex(titles)]
   currentCover([randomTitle, randomCover, randomDescOne, randomDescTwo])
   //savedCovers.push(randCover);
}
randomCover()

function changeToSavedCovers() {
  homeButton.style.display = 'block';
  saveCoverButton.style.display = 'none';
  randomCoverButton.style.display = 'none';
  mainCover.style.display = 'none';
  savedCoversSection.style.display = 'block'
  formView.style.display = 'none';
};

function changeToMakeNewCover() {
  homeButton.style.display = 'block';
  saveCoverButton.style.display = 'none';
  randomCoverButton.style.display = 'none';
  mainCover.style.display = 'none';
  savedCoversSection.style.display = 'none'
  formView.style.display = 'block';
};

function goHome() {
  saveCoverButton.style.display = 'block';
  homeButton.style.display = 'none';
  randomCoverButton.style.display = 'block';
  mainCover.style.display = 'block';
  savedCoversSection.style.display = 'none'
  formView.style.display = 'none';
};

function makeBookCover() {

  var cover = coverInput.value
  var title = titleInput.value
  var desc1 = firstDescriptorInput.value
  var desc2 = secondDescriptorInput.value
  //console.log(selectedTitle.innerText)
  customCover = [title, cover, desc1, desc2]
  currentCover(customCover)
  covers.push(cover)
  titles.push(title)
  descriptors.push(desc1)
  descriptors.push(desc2)
  goHome()
  event.preventDefault()
  //should save the data into respective arrays- cover, title, descriprtor
  //Use the values from the inputs to create a new instance of the Cover class
  //Change back to the main home view (hiding the form view again)
  //Display the newly created cover image, title, and descriptors in the main cover
  //selectedTitle.innerText = titleInput.value

};
