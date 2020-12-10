// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
new Cover (randomCover())

function randomCover(){
  var coverData = {
    taglineOne: descriptors[getRandomIndex(descriptors)],
    taglineTwo: descriptors[getRandomIndex(descriptors)]
  }
  if (/*INSERT EVENT LISTENER HERE*/ 0 === 2) {
    return new Cover(cover, title, taglineOne, taglineTwo);
  } else {
  (document.querySelector('.cover-title')).innerText = titles[getRandomIndex(titles)];
  (document.querySelector('.cover-image')).src = covers[getRandomIndex(covers)];
    if (coverData.taglineOne === coverData.taglineTwo) {
      coverData.taglineOne = descriptors[getRandomIndex(descriptors)]
   } else {
      (document.querySelector('.tagline-1')).innerText = coverData.taglineOne;
      (document.querySelector('.tagline-2')).innerText = coverData.taglineTwo;
    }
  }
}

var randomCoverButton = document.querySelector('.random-cover-button')
randomCoverButton.addEventListener('click', function changeCover() {
 currentCover.src = covers[getRandomIndex(covers)];
})

randomCover()
