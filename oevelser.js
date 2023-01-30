const alkoKnap1 = document.querySelector(".alkoKnap1");
const alkoKnap2 = document.querySelector(".alkoKnap2");
const sodaKnap1 = document.querySelector(".sodaKnap1");
const sodaKnap2 = document.querySelector(".sodaKnap2");

window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
}

alkoKnap1.addEventListener("click", funktionclick1);
function funktionclick1() {
  console.log("du har klikket på øl");
  if (funktionclick1) {
    console.log("Indeholder alkohol");
  }
}

alkoKnap2.addEventListener("click", funktionclick2);
function funktionclick2() {
  console.log("du har klikket på snaps");
  if (funktionclick2) {
    console.log("Indeholder alkohol");
  }
}

sodaKnap1.addEventListener("click", funktionclick3);
function funktionclick3() {
  console.log("du har klikket på cola");
}

sodaKnap2.addEventListener("click", funktionclick4);
function funktionclick4() {
  console.log("du har klikket på fanta");
}
