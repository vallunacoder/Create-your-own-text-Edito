// step one make sure that you script is link to your html with an alert``
alert("no comas cocada!");

// why do we use querySelectorAll because we want to grab all the btns
//remember to double check your html to make sure the classes and IDs are ok

// don't forget to add the dot . when using querySelectorAll
let optionsButtons = document.querySelectorAll(".option-button");
let advanceOptionButton = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");

// again we have querySelector so we add the dot . to the class name
let alignButtons =  document.querySelectorAll(".align");
let spacingButtons =  document.querySelectorAll(".spacing");
let formatButtons =  document.querySelectorAll(".format");
let scriptButtons =  document.querySelectorAll(".script");


// so once we have grabbed all of our html element we can start playing


//first Like in most  of the projects we need to create variables and const

// test1 : how do you call the  data structure down here ⬇?

let fontList = [
   "Arial",
   "Verdana",
   "Times New Roman",
   "Garamond",
   "Georgia",
   "Courier New",
   "Cursive",
];



// Answer1: an array is a collection of elements, where each element can be accessed by an index or a key

// 📝Using an array make it easy to store and manage a list of font names.
 // Instead of writing separate lines for each font, we can use  a loop to 
 // go through each font in the 'fonList' and create option dynamically

//let's keep it up
// let's start by creating our first function
//let's name it 'initialize'
// always double check your spelling


const initializer = () => {

  // These are function calls to highlight certain buttons
  // The buttons are related to text formatting
  highlighter(alignButtons, true);
  highlighter( spacingButtons, true);
  highlighter( formatButtons, false);
  highlighter( scriptButtons, true);

 // The next part deals with  creating a dropdown list of font options
 // The 'fontList' is an array containing different font names
 // The code create an 'option' for each font and adds it to the 'fontName' dropdown


 // 💡 The .map function is a convenient way to apply the same operation
  // to each element in an array. Here, it helps create 'option' elements
  // for each font in the 'fontList' without needing a separate loop.

 // 📝Using an array make it easy to store and manage a list of font names.
 // Instead of writing separate lines for each font, we can use  a loop to
 // go through each font in the 'fonList' and create option dynamically.

  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  }) ;


  // here we have another dropdown list created for font sizes
  // It goes from 1 to 7, and each size is added as an 'option' to 'fontSizeRef'.

  // A for loop is used to generate a series of numbers from 1 to 7.
  //This way, we can easily create  options for each font size without
  // writing repetitive code.

  for(let i = 1; i <= 7 ; i++){
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  //finally, the default font size is set to  3.

  fontSizeRef.value = 3;
};


// fThis is function named 'modifyText'
const modifyText = (command, defaultUi, value) =>{

  //This function uses the document.execCommand method to perform various
  //text modification commands on the current document.
  //'command' is the type of  command to execute(e.g "bold", "italic").
  // 'defaultUi' is a boolean indicating whether the default user interface
  // of the browser should be used for the command.
  // 'value' is an optional value associated whit the command(e.g., a URL)
   document.execCommand(command, defaultUi, value);
};

//This code iterates through each button in the 'optionsButtons' array
optionsButtons.forEach((button) => {
  // It adds a click event listener to each button
  button.addEventListener("click", ()=> {

    //When a button is clicked, the ' modifyText' function is called
    //With the button's id as the 'command', 'false' as the 'defaultUi .
    //and 'null' as the 'value'.
    modifyText(button.id, false, null);
   });
});



//This code iterates through each button in the 'advanceOptionButton' array.
advanceOptionButton.forEach((button) =>{
  // It adds a change event listener to each button
  button.addEventListener("change", ( ) =>{
  // When the value of an ' advanceOptionButton' changes, the ' modifyText'
  //function is called with the button's id .
  // And all of them.
    modifyText(button.id, false,  button.value);
  });
});


//This code adds a click event listener to the ' linkButton'
linkButton.addEventListener("click", () =>{
  // when the 'linkButton' is clicked, a prompt asks the user to enter a URL
  let userLink = prompt("Enter a URL?");
  if(/http/i.test(userLink)){
    //If the user-entered URL starts with "http", it is used as is
    modifyText(linkButton.id, false, userLink);
  } else {
    // If not,"http://" is prepended to the user-entered URL
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }

});

const highlighter = ( className, needsRemoval) =>{
  className.forEach((button) => {
    button.addEventListener("click",  () => {
      if (needsRemoval) {
        let alreadyActive = false;
        if(button.classList.contains("active")) {
          alreadyActive = true;
        }
        highlighterRemover(className);
        if(!alreadyActive){
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  }) ;
};


const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};


window.onload = initializer();
