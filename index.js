// Coded by Oscar Rodriguez
let alert = document.getElementById("alert");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let answer = document.getElementById("answer");
btn.addEventListener("click", palindrome);
input.addEventListener("input", checking);

function checking() {
    palindrome();
    check();
}
// Check if the word is palindrome or not
function palindrome() {
    let word = input.value;
    if (word === "")  empty(); else {
        let arr = [];
        let reverseWord = "";
        for (let i = 0; i < word.length; i++) arr.unshift(word[i]);
        for (let i = 0; i < arr.length; i++)   reverseWord += arr[i];
        if (word === reverseWord) {
            answer.innerHTML = "It's a palindrome!";
            answer.style.border = "2px solid green";
            innerWidth < 720 ? answer.style.background = "white" : answer.style.background = "rgb(202, 248, 109, .5)";
            answer.style.opacity = ".9";
        } else {
            answer.innerHTML = "It's not a palindrome!";
            answer.style.border = "2px solid red";
            innerWidth < 720 ? answer.style.background = "white" : answer.style.background = "rgb(245, 133, 133, .3)"; 
            answer.style.opacity = ".9";
        }
    } 
    
}
// This function is activated each time the user input something to check if the syntax is the correct
function check() {
    let inputs = input.value;
    let regex = /(\d|\s|[#%="'$&/?!¡¿])/g;
    let result = regex.test(inputs);
    if (result) {
        alert.innerHTML = "Write just letters, don't use numbers,<br>spaces nor special characters!" 
        alert.style.zIndex = "0";
        input.style.borderColor = "red";
        answer.style.opacity = "0";
    } else {
        alert.style.zIndex = "-1";
        input.style.borderColor = "gray";
    } ;
}
// This function is activated when the user click to check and the input is empty
function empty() {
    alert.innerHTML = "Please, enter a word to check<br>if is palindrome.";
    alert.style.background = "white";
    alert.style.color = "red";
    alert.style.zIndex = "0";

    answer.style.opacity = "0";
}