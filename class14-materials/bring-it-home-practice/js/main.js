// *Variables*
// Create a variable and console log the value
let thing = "quelque chose"

console.log(thing);
// Create a variable, add 10 to it, and alert the value
let num = 20;
alert(num + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
document.querySelector("#pressIt").addEventListener("click", run);

function run(){
    let numOne = 7;
    let numTwo = 190;
    let numThree = 34009;
    let numFour = 15;

    alert(numOne + numFour + numThree + numTwo);
}
// Create a function that divides one number by another and returns the remainder
document.querySelector("#remain").addEventListener("click", whatsLeft);

function whatsLeft(){
    let oneNum = 130;
    let twoNum = 8;

    alert(oneNum % twoNum);
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
document.querySelector("#jumanji").addEventListener('click', great);

function great(){
    let apple = 17;
    let orange = 567;

    if(apple + orange > 50) {
        alert("Jumanji")
    } else {
        alert("not!")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
document.querySelector("#multi").addEventListener('click', long);

function long(){
    let gym = 7;
    let house = 12;
    let chair = 157;

    if(gym * house * chair % 3){
        alert("zebra")
    } else{
        alert("hell naw")
    }
}
