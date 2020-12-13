# ROMCOM Partner Project #
---
---

## Contributors ##  
	* Steven Mancine  
	* Connor Anderson-Larson  
---

## Reviewers ##
	* Gabrielle Joyce
---

## Technology Used ##
	* Contributor work was relegated to JavaScript only
---

## Running and Viewing Project ##
	* Github pages to view main branch webpage
	* Contributor work can be viewed in src/main.js
---

## Project Information ##
---
Project Iterations have been grouped together as they tend to flow into the same systems.
---
### Iteration 0 and 1 ###
---
#### Main Page ####
When the page loads, we should see a cover with a randomly selected image, title, and tagline, which includes two random descriptors.
##### How it Works #####
  * Create an event listener that activates upon page load and activates the randomCover function.
  * randomCover draws the four necessary items (title, cover, and two descriptors) from our data.js arrays.
  * The randomized items are sent to the makeCurrentCover function in the form of an array.
  * makeCurrentCover uses .src and .innerText to change the what is displayed on the webpage.
  * makeCurrentCover checks that both descriptors are unique towards each other and randomizes one if not before pushing the descriptor to the main page.

#### Show Random Cover ####
  * Every time the user clicks the Show New Random Cover button, a new random cover is created
  * Every time the user clicks the Show New Random Cover button, the random cover is displayed
##### How it Works #####
  * Create an event listener that activates when the random cover button is pressed.
  * Use the same randomCover and makeCurrentCover function as previously listed to create the random cover.
  * Effectively a manual override for the function being executed on page load.

---  
### Iteration 2 and 3 ###
---
#### Switching Views ####
  * Make buttons function so the proper items become hidden/unhidden depending on the button being pressed.
##### How it Works #####


#### Creating a Cover ####
In the Make New Cover section user can create unique covers. There are four categories that you can change- cover, title, and two descriptors.
##### How it Works #####
* We created a function that reads users input and creates them into a cover.
* First we created an event that prevents the page from reloading automatically.
* Four variables are assigned to to the value of user coverInput.
* The variables are used in a function that creates a new cover object.
* The new cover object overrides the current cover data.
* Finally when the user clicks the "Make My Book" button they are brought back to the home screen where the new cover appears.

---
### Iteration 4 ###
---
#### Saving & Viewing Covers ####

##### How it Works #####


---
### Iteration 5 ###
---
#### Delete Saved Cover Function ####
---
##### Deleting a saved cover #####
After saving covers you are able to view them in the View Saved Covers Section. Saved a cover by mistake? No problem, you can remove covers as you see fit.  Double click on any image and it will be removed from your collection.  
##### How it works #####
  * We created an event listener that will only activate with a double click.
  * The function itself utilizes an event object and is tied to a target element.
  * The target element gets assigned to what gets double clicked, in this case we asked for the parent element id.
  * Next we created a for loop.
    1. Loop will run for the duration of the savedCovers array.
    2. If the target id is loosely equal to the savedCover id our code will initiate
    3. A splice method is utilized to remove only one element.
    4. Page will reload with updated collection of photos

---
### Future Additions ###
---
