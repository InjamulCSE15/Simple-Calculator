console.log("test my js")

const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

function insert(num) {
    calculation.textContent += num; // calculation screen onclick button
    console.log(num);
}