import "./styles.css";

document.getElementById("app").innerHTML = `
<input type="text" class="firstInput">
<input type="text" class="secondInput">
<button>click me</button
`;

const myName = "Julia";
var number = 27;
// alert(myName);
// alert(27);

console.log(number);

// popup mit Eingabefeld
//prompt("Enter Name!!")

const apples = 7;
const raspberries = 10;

// add apples and raspberries
const fruits = apples + raspberries;
console.log("fruits: " + fruits);

var sentence =
  "Hallihallo, my name is " +
  myName +
  " and my favorite number is " +
  number +
  " :)";

console.log(sentence);

const button = document.querySelector("button");

console.log(button);

// addEventListener hat 2 Argumente
//
button.addEventListener("contextmenu", function() {
  console.log("meep!");
});

button.addEventListener("mouseover", function() {
  console.log("huuui!");
});

button.addEventListener("wheel", function() {
  console.log("buhuu!");
});

const htmlBody = document.querySelector("body");

// LOGIK

var a = "20";
var b = 20;

// Werte von a und b ODER Datentyp von a und b
// sind gleich > true
console.log(a == b);

// Wert UND Datentyp von a und b
// sind nicht gleich > false
console.log(a === b);

console.log(a != b);

if (a !== b) {
  console.log("yeeay");
} else {
  console.log("bääh");
}

const c = 15;

if (a !== b && b < c) {
  console.log("yeeay");
} else {
  console.log("bääh");
}

const firstInput = document.querySelector(".firstInput");
var secondInput = document.querySelector(".secondInput");

// überprüfen ob ich richtiges Element hab
//console.log(inputField);

// 2 EventListener auf das gleiche Event z.B. click > NOOT GOOD
button.addEventListener("click", function() {
  // emoji kopiert
  console.log("😜");

  // toggle schaltet um, wenn das Event shcon passiert ist
  // macht es ncihts ansonsten löst es aus
  // in dem Fall Hintergrundfarbe wird geändert
  htmlBody.classList.toggle("fontChange");
  button.classList.toggle("colorChange");

  const input1 = firstInput.value;
  secondInput.value = input1 * 10;

  console.log("Value of input field: " + input1);
});

var notNumber = "LoL";

const temp = parseInt(notNumber);

// parameter bei parseInt > radix
const temp2 = parseInt(notNumber, 10);

// NaN
console.log(temp);
