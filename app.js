/*Chapter 41, 42 (while loops, do…while loops)
(All Questions must be done with both loops)
1.	Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0.
var i=0;
while(i<2){
i++;
}

do{ var i=0;
i++;
}while(i<2)*/

/*
2.	Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter.
 Break out of the loop when it's found.
 =======================
 do while
 ======================
var animals=["horse", "ox", "cow", "pig", "duck"];
var i=0;
do{
if(animals[i]=='pig'){
    alert("found it!");
    console.log(i);
    break;
}i++;

}while(i<=animals.length-1)

=======================
While loop
======================
var animals=["horse", "ox", "cow", "pig", "duck"];
var i=0;
while(i<animals.length){
if(animals[i]=='pig'){
    alert("found it!");
    console.log(i);
    break;}
i++;
}*/
/*3.	Code to use a while & do while loop to print the numbers from 1 to 10.
=======================
while loop
======================-
var i =0 ;
while(i<11){
document.write(i +'\n');

i++;

}*/

/*=======================
do while loop
======================-

var i =0 ;
do{
document.write(i +'\n');

i++;
}while(i<11)*/

/*
4.	To use a while loop to ask the user for a number and then print that number back to them.
var i=0;
var input;
while(true){

input = prompt("enter a number");
alert(input);
break;
i++;
}*/


/*5.	To use a while loop to check if a number is even or odd.

var i = 0;
var input;

while (true) {
  input = prompt("Enter a number");

  // Convert the input to a number
  var number = Number(input);

  if (!isNaN(number)) {
    if (number % 2 === 0) {
      alert("Even number");
    } else {
      alert("Odd number");
    }
    break; // Exit the loop when a valid number is entered
  } else {
    alert("Invalid input. Please enter a valid number.");
  }

  i++;
}*/

/*6.	Create a guessing game where the user has to guess a number between 1 and 100.

var min = 1;  
var max = 100; 
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//console.log(randomNumber);


while(true){

var user = prompt("enter a numer");
var num = Number(user);
if(num=== randomNumber){alert("you guessed it right");
break;}
else {alert("try again");}

}

/*
7.	 Use a while & do-while loop to create a countdown timer?

=================================
while
==================================

var timer = prompt("enter  the timer value");

var i = Number(timer);
while(i>0){
console.log(i);
document.write(i + "\n");
i--;


}*/

/*=================================================================
Chapter 46, 48 (Events)
===================================================================

1.	Create a simple event that prints a message when the user clicks on an element.
To be placed in Html file
<input type = "button" value = "click" onclick="alert('hi');"/>*/

/*2.	Create an event that hides an element when the user clicks on a different element
/var b = document.querySelector("button");
b.addEventListener("click",function(){
  b.style.display = "none"; */

/*3.	Create a link that changes color when the user hovers over it and then back to its original color when the user moves the mouse away.
var c= document.querySelector("a");
c.addEventListener("mouseover" , function(){
c.style.color = "yellow";
})*/

/*4.	Create an event that scrolls to the top of the page when the user clicks on a link.
var scr = document.querySelector(".Scroll");
scr.addEventListener("click", function(){
window.scrollTo({top:0, behavior:"smooth"});
});*/

/*5.	Create a link that plays a sound when the user clicks on it.
document.getElementById("sound").addEventListener("click",function(){
var clicksnd = document.getElementById("play");
clicksnd.play();
})*/

/*6.	Create a simple link that opens a new window when clicked.
var lnk = document.getElementById("urllink");
lnk.addEventListener("click", function(event){
lnk.setAttribute("target","_blank");
})*/

/*7.	Create a simple button that alert a message when clicked.
var bt =document.querySelector("button");
bt.addEventListener("click", function(){
alert("Cliked!");
})*/

/*8.	Create a button that changes color when the user hovers over it.
var bt = document.querySelector("button");
bt.addEventListener("mouseover",function(){
bt.style.color = "blue";
})*/

/*9.	Create a button that plays a sound when the user clicks on it.
 document.getElementById("sound").addEventListener("click", function(){
 var audio = document.getElementById("play");
audio.play();
});*/

/*10.	Create an event that alert a message when the user moves the mouse over an element 
var a = document.querySelector("button");
a.addEventListener("mouseover", function(){
alert("Login");
})*/

/*11.	Create an event that hides an element when the user moves the mouse out of it.
var a = document.querySelector("button");
a.addEventListener("mouseover" , function(){
a.style.display ="none";
})*/

/*12.	 Create a link that opens a new window when the user clicks on it and then closes the window when the user clicks
 on a close button in the new window. The size of the new window should be determined by the user's mouse position.
 document.getElementById("openWindowLink").addEventListener("click", function(e) {
      e.preventDefault();
      const width = e.clientX + 50; 
      const height = e.clientY + 50; 
      const newWindow = window.open("", "_blank", `width=${width},height=${height}`);
       newWindow.document.write('<button id="closeWindowButton">Close Window</button>');
       newWindow.document.getElementById("closeWindowButton").addEventListener("click", function() {
        newWindow.close(); // Close the new window
      });
    });*/
 
/*==================================================
Chapter 49, 50 (Reading and Setting field values)
====================================================

 /*1 Get the input element with the id "text"
var inp = document.getElementById("text");

// Get the value of the input
var inputtxt = inp.value;

// Print the value to the console
console.log(inputtxt);



/*2.	Read the value of a checkbox and print it to the console

var inp = document.getElementById("chk");

// Get the value of the input
var inputtxt = inp.value;

// Print the value to the console
console.log(inputtxt);

*/



/*3.	Read the value of a select box and print it to the console.

var selectElement = document.getElementById("selectBox");
var selectedValue = selectElement.value;
console.log(selectedValue);
*/



/* 4.	Place some text in a field. Make up an id for the field.



<input type="text" id="myCustomField" value="This is some text in the field">





5.	Ask the user about Martial Status. If the variable married is false, place the value "available" in the field with the id "status"

<label for="maritalStatus">Are you married?</label>
<select id="maritalStatus">
  <option value="married">Yes</option>
  <option value="single">No</option>
</select>

<input type="text" id="status">

<script>
document.getElementById("maritalStatus").addEventListener("change", function() {
  var selectedValue = this.value;
  var statusField = document.getElementById("status");

  if (selectedValue === "single") {
    statusField.value = "available";
  } else {
    statusField.value = ""; // Clear the field if married
  }
});
</script>

6.	If a input is empty, fill it with a string.

<label for="maritalStatus">Are you married?</label>
<select id="maritalStatus">
  <option value="married">Yes</option>
  <option value="single">No</option>
</select>

<input type="text" id="status">

<script>
document.getElementById("maritalStatus").addEventListener("change", function() {
  var selectedValue = this.value;
  var statusField = document.getElementById("status");

  if (selectedValue === "single") {
    statusField.value = "available";
  } else {
    statusField.value = ""; // Clear the field if married
  }
});
</script>




7.	Create a Registeration Form with Validation.


<!DOCTYPE html>
<html>
<head>
  <title>Registration Form</title>
</head>
<body>
  <h2>Registration Form</h2>
  <form id="registrationForm" onsubmit="return validateForm()">
    <label for="username">Username:</label>
    <input type="text" id="username" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" required><br>

    <label for="password">Password:</label>
    <input type="password" id="password" required><br>

    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" required><br>

    <input type="submit" value="Register">
  </form>

  <p id="errorText" style="color: red;"></p>

  <script>
    function validateForm() {
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
      var errorText = document.getElementById("errorText");

      if (password !== confirmPassword) {
        errorText.textContent = "Passwords do not match!";
        return false;
      }

      
      return true;
    }
  </script>
</body>
</html>*/

/*Chapter 51 (Reading and Setting paragraph text)
1.	How can I create a paragraph that expands when the user clicks on a Show More?
<div id="expandable-paragraph">
  <p>
    This is the initial content of the paragraph. It can be as long as you like.
    <span id="additional-text" style="display: none;">
      This is the additional content that is hidden by default. It will be shown when you click "Show More."
    </span>
  </p>
  <button onclick="toggleText()">Show More</button>
</div>
function toggleText() {
  var additionalText = document.getElementById("additional-text");
  var showMoreButton = document.querySelector("button");

  if (additionalText.style.display === "none" || additionalText.style.display === "") {
    additionalText.style.display = "inline"; // Show the additional text
    showMoreButton.textContent = "Show Less"; // Change button text
  } else {
    additionalText.style.display = "none"; // Hide the additional text
    showMoreButton.textContent = "Show More"; // Change button text
  }
}

2.	Read the text of a paragraph and use it to search for a specific word or phrase.
<p id="myParagraph">
  This is a sample paragraph containing some text. We will search for a specific word or phrase in this paragraph.
</p>

<input type="text" id="searchInput" placeholder="Enter word or phrase">
<button onclick="searchText()">Search</button>

<p id="searchResult"></p>

function searchText() {
  var paragraph = document.getElementById("myParagraph");
  var searchInput = document.getElementById("searchInput");
  var searchResult = document.getElementById("searchResult");

  var text = paragraph.textContent; // Get the text content of the paragraph
  var searchTerm = searchInput.value.toLowerCase(); // Get the search term from the input

  if (text.toLowerCase().includes(searchTerm)) {
    searchResult.textContent = 'The word or phrase was found in the paragraph.';
  } else {
    searchResult.textContent = 'The word or phrase was not found in the paragraph.';
  }
}

3.	Read the text of a paragraph and use it to find the longest word.
<p id="myParagraph">
  This is a sample paragraph containing some text. We will find the longest word in this paragraph.
</p>

<button onclick="findLongestWord()">Find Longest Word</button>

<p id="longestWordResult"></p>

function findLongestWord() {
  var paragraph = document.getElementById("myParagraph");
  var longestWordResult = document.getElementById("longestWordResult");

  var text = paragraph.textContent; // Get the text content of the paragraph
  var words = text.match(/\w+/g); // Extract words using a regular expression

  if (words) {
    var longestWord = words.reduce(function (longest, current) {
      return current.length > longest.length ? current : longest;
    }, "");

    longestWordResult.textContent = 'The longest word in the paragraph is: ' + longestWord;
  } else {
    longestWordResult.textContent = 'No words found in the paragraph.';
  }
}

4.	Set the text of a paragraph to the value of a text field, but only if the value is not empty.
<input type="text" id="textField" placeholder="Enter text">
<button onclick="updateParagraph()">Set Paragraph Text</button>
<p id="outputParagraph">This is the target paragraph.</p>

function updateParagraph() {
  var textField = document.getElementById("textField");
  var outputParagraph = document.getElementById("outputParagraph");
  var inputValue = textField.value;

  if (inputValue.trim() !== "") {
    outputParagraph.textContent = inputValue;
  }
}

5.	Set the text of a paragraph to the value of a text field, but only if the value is equal to a specific word or phrase.
<input type="text" id="textField" placeholder="Enter text">
<button onclick="updateParagraph()">Set Paragraph Text</button>
<p id="outputParagraph">This is the target paragraph.</p>
function updateParagraph() {
  var textField = document.getElementById("textField");
  var outputParagraph = document.getElementById("outputParagraph");
  var inputValue = textField.value;

  if (inputValue.trim() !== "") {
    outputParagraph.textContent = inputValue;
  }
}

6.	Set the text of a paragraph to the value of a text field, but only if the value is less than a certain length.

<input type="text" id="textField" placeholder="Enter text">
<input type="number" id="maxLength" placeholder="Max Length">
<button onclick="updateParagraph()">Set Paragraph Text</button>
<p id="outputParagraph">This is the target paragraph.</p>
function updateParagraph() {
  var textField = document.getElementById("textField");
  var outputParagraph = document.getElementById("outputParagraph");
  var inputValue = textField.value;
  var maxLength = parseInt(document.getElementById("maxLength").value);

  if (inputValue.trim() !== "" && inputValue.length <= maxLength) {
    outputParagraph.textContent = inputValue;
  }
}

*/


/*================================================
Chapter 52 (Manipulating Images and Text)
=================================================
1.	When the user clicks on the sentence, it turns bold.
<p id="mySentence" onclick="makeBold()">Click on this sentence to make it bold.</p>

function makeBold() {
  var sentence = document.getElementById("mySentence");

  // Check if the sentence is currently bold
  if (sentence.style.fontWeight === "bold") {
    // If it's bold, make it normal (non-bold)
    sentence.style.fontWeight = "normal";
  } else {
    // If it's not bold, make it bold
    sentence.style.fontWeight = "bold";
  }
}

2.	How can I make an image disappear when the user hovers over it and show text instead? When the user hovers off the image, the original image should reappear.
<div class="image-container" onmouseover="showText()" onmouseout="showImage()">
  <img id="myImage" src="your-image.jpg" alt="Your Image">
  <div id="myText" class="text">Hover over me</div>
</div>

.text {
  display: none;
}

.image-container:hover .text {
  display: block;
}

.image-container:hover #myImage {
  display: none;
}

3.	When the user mouses over the heading, its background turns black, but it retains its original light gray color
<h1 class="hover-heading">Hover over me</h1>
.hover-heading {
  background-color: lightgray;
  transition: background-color 0.3s; /* Add a smooth transition effect 
}

.hover-heading:hover {
  background-color: black;
}

4.	When user hover to a paragraph, Add a underline style to text.
*/
/*Chapter 52 (Swapping Images)
1.	Swap the images when the user clicks on a button.
<img id="image" src="image1.jpg" alt="Image 1">
<button onclick="swapImage()">Swap Image</button>

function swapImage() {
  var imageElement = document.getElementById("image");

  // Check the current image source
  if (imageElement.src.endsWith("image1.jpg")) {
    // If the current image is image1, change it to image2
    imageElement.src = "image2.jpg";
    imageElement.alt = "Image 2";
  } else {
    // Otherwise, change it back to image1
    imageElement.src = "image1.jpg";
    imageElement.alt = "Image 1";
  }
}

*/