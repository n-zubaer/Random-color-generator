const generator = document.querySelector(".generator");
const input = document.querySelector(".outPut input");
const copybtn = document.querySelector(".outPut span");
const toast = document.querySelector(".toast");
const cancelBtn = document.querySelector(".cancelBtn");

const body = document.body;
let rgbcolorCodeVar = "";

generator.addEventListener("click", (e) => {
  rgbcolorCodeVar = colorGenerator();
  input.value = rgbcolorCodeVar;
  body.style.backgroundColor = rgbcolorCodeVar;
});

// generator function
const colorGenerator = () => {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `rgb(${red} , ${green} , ${blue})`;
};

copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbcolorCodeVar);
  copybtn.innerHTML = "&#9745;";
  toast.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  toast.classList.remove("active");
});
