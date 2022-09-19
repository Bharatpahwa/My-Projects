"use strict";
const htpguessButton = document.querySelector("#htpguess");
const htpdiceButton = document.querySelector("#htpdice");
const hiddenGuess = document.querySelector("#added-1");
const htcexpensesbutton = document.querySelector("#htcexpenses");
const hiddendice = document.querySelector("#added-2");
const hiddenexpenses = document.querySelector("#added-3");
const downArrrow = document.querySelector("#arrow");
const close1 = document.querySelector("#closed");
const close2 = document.querySelector("#close2");
const close3 = document.querySelector("#close3");

htpguessButton.addEventListener("click", function () {
  hiddenGuess.style.display = "flex";
  htpguessButton.textContent = "Scroll Down";
});

htpdiceButton.addEventListener("click", function () {
  hiddendice.style.display = "flex";
  htpdiceButton.textContent = "Scroll Down";
});

close1.addEventListener("click", function () {
  hiddenGuess.style.display = "none";
  htpguessButton.textContent = "How to Play";
});

close2.addEventListener("click", function () {
  hiddendice.style.display = "none";
  htpdiceButton.textContent = "How to Play";
});

htcexpensesbutton.addEventListener("click", function () {
  hiddenexpenses.style.display = "flex";
  htcexpensesbutton.textContent = "Scroll Down";
});

close3.addEventListener("click", function () {
  hiddenexpenses.style.display = "none";
  htcexpensesbutton.textContent = "How to calc.";
});
