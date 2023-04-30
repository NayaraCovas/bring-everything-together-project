//1-Checking

/* 1-checking if it is finding the element in html:

var myBtn = document.getElementById('btn')
console.log('myBtn') */

/* 2-Check if after I click the botton the event happens:
var myBtn = document.getElementById('btn')
myBtn.addEventListener('click', function() {
    console.log('clicked')
}); */

//////////////////
//2-(when type something in the input and  I click on the button I need to see the value of this  input in the console.log):

var myBtn = document.getElementById("btn");

var myInput = document.getElementById("input");
// console.log(myInput)

var yourAnwer = document.getElementById("answer");
//console.log(yourAnwer)

var err = document.getElementById("err");

var firstName = document.getElementById("userFirstName");
var lastName = document.getElementById("userLastName");
var email = document.getElementById("userEmail");
var age = document.getElementById("userAge");
var fingerType = document.getElementById("userFingerType");

/* myBtn.addEventListener('click', function() {
    console.log(myInput.value)
}) */ //it prints in the console.log to test

//3-Print the value in the in one element of the webpage

/* myBtn.addEventListener("click", function () {
  if (myInput.value !== "") {
    yourAnwer.style.visibility = "visible";
    err.innerText = "";
    // yourAnwer.innerText = myInput.value
  } else {
    err.innerText = "Filling the info is required";
  }
}); */

myBtn.addEventListener("click", function () {
 //converts nodelist to array mapping value (and for loop):
 var polishColors =  document.querySelectorAll("input[name=color]:checked");
 var list = [];
 //for(let i=0; i < polishColors.length;i++) {
//    var color = polishColors[i]
//    list.push(color.value)
//  }
 for(color of polishColors){
    list.push(color.value)
 }


//converts nodelist to array mapping id:
  var modernity = Array.from(
    document.querySelectorAll("input[name=button]:checked")
  ).map((radio) => radio.id);

  //get selected array item  Array.from(document.querySelectorAll('input[name=color]:checked')).map(a => a.value);
  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    email.value !== "" && 
    age.value !== "" &&
    fingerType.value !== "" &&
    polishColors.length > 0 &&
    modernity.length >0 &&
    myInput.value !== ""
    
  ) {
    const baseText = 'Your ideal nail style is: '
    if (fingerType.value === 'short'){
        yourAnwer.innerText = baseText + 'oval'
    }
    if (fingerType.value === 'long'){
        yourAnwer.innerText = baseText + 'coffin'
    }
    if (fingerType.value === 'thin'){
        yourAnwer.innerText = baseText + 'stiletto'
    }
    yourAnwer.style.visibility = "visible";
    yourAnwer.style.visibility = "visible";
    err.innerText = "";
    // yourAnwer.innerText = myInput.value
  } else {
    err.innerText = "Filling the info is required";
  }
});


