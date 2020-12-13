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

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover
randomCoverButton.addEventListener('click', randomCover);
makeNewCover.addEventListener('click', changeToMakeNewCover);
viewSavedCoversButton.addEventListener('click', changeToSavedCovers);
homeButton.addEventListener('click', goHome)
makeMyBook.addEventListener('click', makeBookCover)
saveCoverButton.addEventListener('click', saveCoverData)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeCurrentCover(array) {
  selectedCover.src = array[0];
  selectedTitle.innerText = array[1];
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
   makeCurrentCover([randomCover, randomTitle, randomDescOne, randomDescTwo])
   currentCover = new Cover(randomCover, randomTitle, randomDescOne, randomDescTwo)
}
randomCover()

function goHome() {
  changePage(1)
  saveCoverButton.classList.remove('hidden')
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden')
  mainCover.classList.remove('hidden')
};

function changeToSavedCovers() {
  changePage(2)
  savedCoversSection.classList.remove('hidden')
};

function changeToMakeNewCover() {
  changePage(3)
  formView.classList.remove('hidden')
};

function changePage(num){
  var buttons = [homeButton, saveCoverButton,randomCoverButton, mainCover, savedCoversSection, formView]
  if (num === 1 || num === 2) {
    buttons[5].classList.add('hidden')
  }
  if (num === 2 || num === 3) {
    buttons[0].classList.remove('hidden')
    buttons[1].classList.add('hidden')
    buttons[2].classList.add('hidden')
    buttons[3].classList.add('hidden')
  }
  if (num === 3 || num === 1) {
    buttons[4].classList.add('hidden')
  }
}

function makeBookCover() {
  var cover = coverInput.value
  var title = titleInput.value
  var desc1 = firstDescriptorInput.value
  var desc2 = secondDescriptorInput.value
  customCover = [cover, title, desc1, desc2]
  makeCurrentCover(customCover)
   covers.push(cover)
   titles.push(title)
   descriptors.push(desc1)
   descriptors.push(desc2)
  goHome()
  event.preventDefault()
};

function saveCoverData() {
  for (var i = 0; i < savedCovers.length; i++) {
    var coverCompare = savedCovers[i].cover === currentCover.cover
    var titleCompare = savedCovers[i].title === currentCover.title
    var descriptorOneCompare = savedCovers[i].taglineOne === currentCover.taglineOne
    var descriptorTwoCompare = savedCovers[i].taglineTwo === currentCover.tagLineTwo
    var save;
    if (coverCompare != false && titleCompare != false && descriptorOneCompare != false && descriptorTwoCompare != false) {
    } else if (i === (savedCovers.length - 1)){
      savedCovers.push(currentCover)
    }
  }


}















    /////
