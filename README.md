# ROMCOM Partner Project #
—
## Contributors ##  
	* Steven Mancine  
	* Connor Anderson-Larson  
—-
## Reviewers ##
	* Gabrielle Joyce
## Technology Used ##
	* Contributor work was relegated to JavaScript only
—
## Running and Viewing Project ##
	* Github pages to view main branch webpage
	* Contributor work can be viewed in src/main.js
—
## Project Information ##
—
Project Iterations have been grouped together as they tend to flow into the same systems.
—
### Iteration 0 and 1 ###
—
### Iteration 2 and 3 ###
—
### Iteration 4 ###
—
### Iteration 5 ###

# Delete Saved Cover Function
### Deleting a saved cover
After saving covers you are able to view them in the View Saved Covers Section. Saved a cover by mistake? No problem, you can remove covers as you see fit.  Double click on any image and it will be removed from your collection.  
### How it works
* We created an event listener that will only activate with a double click.
* The function itself utilizes an event object and is tied to a target element.
* The target element gets assigned to what gets double clicked, in this case we asked for the parent element id.
* Next we created a for loop.
1. Loop will run for the duration of the savedCovers array.
2. If the target id is loosely equal to the savedCover id our code will initiate
3. A splice method is utilized to remove only one element.
4. Page will reload with updated collection of photos 
—
### Future Additions ###
—
