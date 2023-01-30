let time = new Date().getHours();

console.log(time);
if (time >= 5 && time < 10) {
  console.log("Godmorgen");
}

if (time >= 10 && time < 18) {
  console.log("Goddag");
}

if (time >= 18 && time < 24) {
  console.log("Godaften");
}

if (time >= 24 && time < 5) {
  console.log("Godnat");
}
