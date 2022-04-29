console.log("test my js")

const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

// Calculation text screen : use onclick javascript method to achieve this
function insert(num) {
    calculation.textContent += num; // calculation screen onclick button
    // console.log(num);
}

// Clear calculation on click clear button
document.getElementById("clear").addEventListener("click", function() {
    calculation.textContent = "";
    result.textContent = 0;
    // console.log("Clear button clicked!");
});

// Remove last character from number on click ( < ) back button
document.getElementById("back").addEventListener("click", function () {
    var dltNum = calculation.textContent;
    calculation.textContent = dltNum.substring(0, dltNum.length - 1); 
    // back key button by id and assign value of calculation to dltNum variable then assign calculation by substring dltNum variable from 0 to (length of dltNum -1 )
    //console.log(dltNum);    
})

// Return output of calculation on click ( = ) equal button

document.getElementById("equal").addEventListener("click", function() {
    //console.log("Equal button clicked.")
    var calculate = calculation.textContent;
    result.textContent = eval(calculate);
    //console.log(result.textContent);
    calculation.textContent = result.textContent;
})