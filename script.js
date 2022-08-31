"use strict";
const htpguessButton = document.querySelector("#htpguess");
const htpdiceButton = document.querySelector("#htpdice");
const hiddenGuess = document.querySelector("#added-1");
const hiddendice = document.querySelector("#added-2");
const downArrrow = document.querySelector("#arrow");
const close1 = document.querySelector("#closed");
const close2 = document.querySelector("#close2");

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
