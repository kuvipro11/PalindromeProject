const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

let resultIsShowing = false;

function modifyString(str) {
    let modifiedString = str.toLowerCase();
    return modifiedString.replace(/[^\d\w\s]/g, "");    
}

function palindromChecker(str) {
    return str === str.split("").reverse().join("");
}