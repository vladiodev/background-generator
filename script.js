var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("bodyGradient");
var afisare = document.getElementById("afisare");
var randomBtn = document.querySelector(".random");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    ", " +
    color2.value +
    ", " +
    color3.value +
    ")";

  afisare.textContent = body.style.background + ";";
}

function setRandomGradient() {
  var rgb1 =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

    var rgb2 =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

    var rgb3 =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  body.style.background =
    "linear-gradient(to right, " + rgb1 + ", " + rgb2 + ", " + rgb3 + ")";

  afisare.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setRandomGradient);
