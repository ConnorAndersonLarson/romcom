# ROMCOM Partner Project #
---
---

### Contributors ###  
  * Steven Mancine  
  * Connor Anderson-Larson  

### Reviewers ###
  * Gabrielle Joyce
---

### Technology Used ###
  * Contributor work was relegated to JavaScript only

### Running and Viewing Project ###
  * [This Github Page][https://connorandersonlarson.github.io/romcom/] to view final webpage
  * Contributor work can be viewed in src/main.js
  
---
## Project Information ##
---

The Primary Function of the site is the creation and saving of custom romance novel covers. Primary features are random cover generation on the home page, a saved cover page that shows smaller versions of saved main covers, and a cover creation form page with a form for users to add their own titles, descriptors, and cover images.
Project Iterations have been grouped together as they tend to flow into the same systems.

---
### Iteration 0 and 1 ###
---
#### Main Page ####
When the page loads, we should see a cover with a randomly selected image, title, and tagline, which includes two random descriptors.
##### How it Works #####
  * Create an event listener that activates upon page load and activates the makeRandomCover function.
  * makeRandomCover draws the four necessary items (title, cover, and two descriptors) from our data.js arrays.
  * The randomized items are sent to the makeCurrentCover function in the form of an array.
  * makeCurrentCover uses .src and .innerText to change the what is displayed on the webpage.
  * makeCurrentCover checks that both descriptors are unique towards each other and randomizes one if not before pushing the descriptor to the main page.

#### Show Random Cover ####
  * Every time the user clicks the Show New Random Cover button, a new random cover is created
  * Every time the user clicks the Show New Random Cover button, the random cover is displayed
##### How it Works #####
  * Create an event listener that activates when the random cover button is pressed.
  * Use the same makeRandomCover and makeCurrentCover function as previously listed to create the random cover.
  * Effectively a manual override for the function being executed on page load.

---  
### Iteration 2 and 3 ###
---
#### Switching Views ####
  * Make buttons function so the proper items become hidden/unhidden depending on the button being pressed.
##### How it Works #####
  * Create event listeners for all buttons on page.
  * Identify the various elements necessary for a proper page transition.
  * Create three functions (goHome, changeToSavedCovers, changeToMakeNewCover) that alter elements specific to those pages.
  * Create a final function that is called by the three previous functions (changePage). This function changes elements whose changes are shared by other button presses. These element changes are placed in if statements with with logical OR operators to decide what actions to make based on what button is pressed.


#### Creating a Cover ####
In the Make New Cover section users can create unique covers. There are four categories that you can change: cover, title, and two descriptors.
##### How it Works #####
  * We created a function that reads user input assigns them to variables.
  * Those variables are then stored in an array which get passed to the makeCurrentCover function.
  * The variables are  also used to create a new cover object which overrides the current cover data.
  * When the user clicks the "Make My Book" button they are brought back to the home screen where the new cover appears.
  * An event handler was also added to prevent the page from reloading by default.

---
### Iteration 4 ###
---
#### Saving & Viewing Covers ####
If a user would like to save a random or custom cover they can utilize the "Save Cover" button.  
##### How it Works #####
  * The "Save Cover" button utilizes an event listener and handler.
  * When the button is clicked the saveCoverData function is invoked. This will evaluate if the data is already stored.  If the cover has at least one unique characteristic it will be saved.
#### Viewed Saved Covers Page ####
Once a photo is saved it can be viewed in the saved covers page.
##### How it Works #####
  * The showSavedCovers function was built to iterate through every element in the savedCovers array.
  * This function manipulate the inner html of the saved covers element stored in the html file.
  * When the function is invoked the inner html is assigned to an empty string, this prevents duplicate entries into the html structure.
  * A for loop iterates through every saved cover and creates and concats a new element.
  * The inner html is change via interpolation utilizing each objects id, cover, title, and two taglines.  
  * The showSavedCovers function is invoked when the button "View Saved Covers" is clicked.

---
### Iteration 5 ###

---
##### Deleting a saved cover #####
After saving covers you are able to view them in the View Saved Covers Section. Saved a cover by mistake? No problem, you can remove covers as you see fit.  Double click on any image and it will be removed from your collection.  
##### How it works #####
  * We created an event listener that will only activate with a double click.
  * The function itself utilizes an event object and is tied to a target element.
  * The target element gets assigned to what gets double clicked, in this case we asked for the parent element id.
  * Next we created a for loop.
    1. Loop will run for the duration of the savedCovers array.
    2. If the target id is loosely equal to the savedCover id our code will initiate.
    3. A splice method is utilized to remove only one element.
    4. Page will reload with updated collection of photos.
