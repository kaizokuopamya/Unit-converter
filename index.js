let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  lengthConversion();
  volumeConversion();
  massConversion();
});

function lengthConversion() {
  let unit = inputEl.value;
  let meterToFeet = unit * 3.2808;
  let feetToMeter = unit / 3.2808;
  lengthEl.innerHTML = 
    `${unit} meters = ${meterToFeet.toFixed(3)} feet | ${unit} feet = ${feetToMeter.toFixed(3)} meters`;
}

function volumeConversion() {
  let unit = inputEl.value;
  let literToGallon = unit * 0.264;
  let gallonToLiter = unit / 0.264;
  volumeEl.innerHTML = 
    `${unit} liters = ${literToGallon.toFixed(3)} gallons | ${unit} gallons = ${gallonToLiter.toFixed(3)} liters`;
}

function massConversion() {
  let unit = inputEl.value;
  let kiloToPound = unit * 2.204;
  let poundToKilo = unit / 2.204;
  massEl.innerHTML = 
    `${unit} kilos = ${kiloToPound.toFixed(3)} pounds | ${unit} pounds = ${poundToKilo.toFixed(3)} kilos`;
}
