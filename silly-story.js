// VARIABLE DECLARATIONS

/* STEP 1: Declare and initialize variables
- customName for the name field
- randomize for the button
- story for the paragraph that outputs the final story
*/
let customName = document.querySelector("#customname");
let randomize = document.querySelector(".randomize");
let story = document.querySelector(".story");

/* STEP 3: Create the variable that contains the story string that will be modified - use let storyText to contain the following:
'It was 94 degrees farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
*/
let storyText = 'It was 94 degrees farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

/* STEP 4: Create three different arrays called, insertX (for the subject of the story), insertY (for the location/setting), and insertZ (for the action phrase). Assign them the following array values respectively:
Moe, Larry, Curley
Area 51, Death Valley, Aruba
spontaneously combusted, rapidly sublimated, evaporated instantly
*/
insertX = ["Moe","Larry","Curley"];
insertY = ["Area 51", "Death Valley", "Aruba"];
insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// FUNCTIONS

/* STEP 2: have a look at the following function - if you call this function and pass it an array, it will return one of the elements of that array randomly */
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

/* STEP 6: Review the partially complete result() function below */
function result() {
	// STEP 7: Create a new variable called newStory and set it to the value of storyText - we don't want to overwrite the original story!
		let newStory = storyText;

	/* STEP 8: Use the randomValueFromArray() function to pick a value for each of three new variables - xItem, yItem, and zItem
	Call up the function and for each variable, pass it the array from which to grab a random string - for example if insertW was an array of strings, I would type:
	var wItem = randomValueFromArray(insertW);
	*/
	let xItem = randomValueFromArray(insertX);
	let yItem = randomValueFromArray(insertY);
	let zItem = randomValueFromArray(insertZ);

	/* STEP 9: Replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — with the strings stored in xItem, yItem, and zItem. You might have to use the replace() method twice, because there are 2 instances of :insertx: in the story */
	newStory = newStory.replace(/:insertx:/g, xItem);
	newStory = newStory.replace(":inserty:", yItem);
	newStory = newStory.replace(":insertz:", zItem);
	 
	/* STEP 10: If the user has typed a name in the customName field in the HTML, replace the name 'Bob' in the story with whatever they typed */
	if(customname.value != 'Bob') {
		newStory = newStory.replace("Bob", customname.value);

	}
	/* All done! See below how we then set the textContent property of the story variable (which references the HTML paragraph element with the class="story") to be equal to the newStory string we just built */
	story.textContent = newStory;
};

// EVENT LISTENERS

/* STEP 5: Add a click event listener to the "Generate random story" button (represented by the const randomize in STEP 1). When the button it represents is clicked, make sure that the result() function is invoked. */

randomize.addEventListener("click", result);

// This lab based on the excellent assessment challenge at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator


