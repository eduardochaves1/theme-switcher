const btnToggle = document.querySelector("#btn-toggle");
const btnToggleSwitch = document.querySelector("#btn-toggle--switch");
const switchThemeElements = document.querySelectorAll(".theme-switcher");
let lightMode = localStorage.getItem("lightMode");

function enableLightMode () {
  switchThemeElements.forEach((e) => {
    e.classList.add("light-mode");
    localStorage.setItem("lightMode", "true");
  })
}

function disableLightMode () {
  switchThemeElements.forEach((e) => {
    e.classList.remove("light-mode");
    localStorage.setItem("lightMode", "false");
  })
}

if (lightMode === "true") {
  enableLightMode();
  btnToggleSwitch.classList.toggle("move-switch");
}

btnToggle.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  btnToggleSwitch.classList.toggle("move-switch");
  if (lightMode === "true") {
    disableLightMode();
  } else {
    enableLightMode();
  }
})