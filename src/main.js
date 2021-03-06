var selectedCover = document.querySelector('.cover-image');
var selectedTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
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
var savedCoverViewer = document.querySelector('.saved-covers-section');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

randomCoverButton.addEventListener('click', makeRandomCover);
makeNewCover.addEventListener('click', changeToMakeNewCover);
viewSavedCoversButton.addEventListener('click', changeToSavedCovers);
homeButton.addEventListener('click', goHome);
makeMyBook.addEventListener('click', makeBookCover);
saveCoverButton.addEventListener('click', saveCoverData);
savedCoverViewer.addEventListener('dblclick', deleteCover);
window.addEventListener('load', makeRandomCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function makeCurrentCover(array) {
  selectedCover.src = array[0];
  selectedTitle.innerText = array[1];
  taglineTwo.innerText = array[3];
    if (array[2] === array[3]) {
      randomDescOne = descriptors[getRandomIndex(descriptors)];
      taglineOne.innerText = array[2];
   } else {
      taglineOne.innerText = array[2];
   };
};

function makeRandomCover(){
    var randomDescTwo = descriptors[getRandomIndex(descriptors)];
    var randomDescOne = descriptors[getRandomIndex(descriptors)];
    var randomCover = covers[getRandomIndex(covers)];
    var randomTitle = titles[getRandomIndex(titles)];
   makeCurrentCover([randomCover, randomTitle, randomDescOne, randomDescTwo]);
   currentCover = new Cover(randomCover, randomTitle, randomDescOne, randomDescTwo);
}

function goHome() {
  changePage(1);
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  mainCover.classList.remove('hidden');
};

function changeToSavedCovers() {
  changePage(2);
  savedCoversSection.classList.remove('hidden');
  showSavedCovers(savedCovers);
};

function changeToMakeNewCover() {
  changePage(3);
  formView.classList.remove('hidden');
};

function changePage(num){
  var buttons = [homeButton, saveCoverButton,randomCoverButton, mainCover, savedCoversSection, formView];
  if (num === 1 || num === 2) {
    buttons[5].classList.add('hidden');
  }
  if (num === 2 || num === 3) {
    buttons[0].classList.remove('hidden');
    buttons[1].classList.add('hidden');
    buttons[2].classList.add('hidden');
    buttons[3].classList.add('hidden');
  }
  if (num === 3 || num === 1) {
    buttons[4].classList.add('hidden');
  }
};

function makeBookCover() {
  var cover = coverInput.value;
  var title = titleInput.value;
  var desc1 = firstDescriptorInput.value;
  var desc2 = secondDescriptorInput.value;
  currentCover = [cover, title, desc1, desc2];
  makeCurrentCover(currentCover);
  currentCover = new Cover(cover, title, desc1, desc2);
   covers.push(cover);
   titles.push(title);
   descriptors.push(desc1);
   descriptors.push(desc2);
  goHome();
  event.preventDefault();
};

function saveCoverData() {
  savedCovers.includes(currentCover) || savedCovers.push(currentCover);
}

function showSavedCovers(savedCovers) {
      savedCoverViewer.innerHTML = '';
      for (i = 0; i < savedCovers.length; i++) {
      savedCoverViewer.innerHTML += `
        <section class="mini-cover" id="${savedCovers[i].id}">
          <img class="cover-image" src="${savedCovers[i].cover}" alt="${savedCovers[i].title}, a tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}">
          <h2 class="cover-title">${savedCovers[i].title}</h2>
          <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
          <img class="price-tag" src="./assets/price.png">
          <img class="overlay" src="./assets/overlay.png">
        </section>
      </section>`
      };
};

function deleteCover() {
  var coverToBeRemoved = event.target.parentElement.id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (coverToBeRemoved == savedCovers[i].id) {
      savedCovers.splice(i, 1);
      changeToSavedCovers();
    };
  };
};
