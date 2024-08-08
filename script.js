
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

let resultIsShowing = false;

function modifyString(str) {
    let modifiedString = str.toLowerCase();
    return modifiedString.replace(/[^\d\w\s]/g, "");    
}

function palindromChecker(str) {
    return str === str.split("").reverse().join("") ? "is a palindrom." : "is not a palindrom.";
}

function displayResult(str, statement) {
    if (str) {
        if (resultIsShowing) {
            document.getElementById("result-statement").innerText = `${str} ${statement}`;
        }else {
            result.style.display = "block";
            result.innerHTML = `<p id="result-statement">${str} ${statement}</p>`;
            resultIsShowing = true;
        } 
    }else {
        alert("You need to enter a world before proceed...");
        result.style.display = "none";
        resultIsShowing = false;
    }   
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const userInput = document.getElementById("user-input");
    displayResult(userInput.value, palindromChecker(modifyString(userInput.value)));
});