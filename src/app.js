import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let numbers = [`8`, `3`, `K`, `9`, `A`, `1`, `5`, `Q`, `J`];
  let symbol = [`♦`, `♥`, `♠`, `♣`];

  let RandomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let RandomSymbol = symbol[Math.floor(Math.random() * symbol.length)];

  document.getElementById("number").innerHTML = RandomNumber;
  document.getElementById("symbol-1").innerHTML = RandomSymbol;
  document.getElementById("symbol-2").innerHTML = RandomSymbol;

  if (RandomSymbol === "♦" || RandomSymbol === "♥") {
    document.getElementById("symbol-1").style.color = "red";
  } 
  else {
    document.getElementById("symbol-1").style.color = "black";
  }

  if (RandomSymbol === "♦" || RandomSymbol === "♥") {
    document.getElementById("symbol-2").style.color = "red";
  } 
  else {
    document.getElementById("symbol-2").style.color = "black";
  }
};