var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("bodyGradient");
var afisare = document.getElementById("afisare");
var randomBtn = document.querySelector(".random");

const randomColors = () => {
  return (
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")"
  );
};

const setGradient = () => {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    ", " +
    color2.value +
    ", " +
    color3.value +
    ")";

  afisare.textContent = body.style.background + ";";
};

const setRandomGradient = () => {
  var rgb1 = randomColors();
  var rgb2 = randomColors();

  var rgb3 = randomColors();
  console.log(1);
  body.style.background =
    "linear-gradient(to right, " + rgb1 + ", " + rgb2 + ", " + rgb3 + ")";

  afisare.textContent = body.style.background + ";";
  (afisare.style.fontFamily = "Amatic SC"), cursive;
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setRandomGradient);
