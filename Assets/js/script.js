

const inputUno = document.querySelector("#tareaUno");
const inputDos = document.querySelector("#tareaDos");
const inputTres = document.querySelector("#tareaTres");
const inputCuatro = document.querySelector("#tareaCuatro");
const inputCinco = document.querySelector("#tareaCinco");
const inputSeis = document.querySelector("#tareaSeis");
const inputSiete = document.querySelector("#tareaSiete");
const inputOcho = document.querySelector("#tareaOcho");
const inputNueve = document.querySelector("#tareaNueve");
const inputDiez = document.querySelector("#tareaDiez");
const chxUno = document.getElementById("1");
const chxDos = document.getElementById("2");
const chxTres = document.getElementById("3");
const chxCuatro = document.getElementById("4");
const chxCinco = document.getElementById("5");
const chxSeis = document.getElementById("6");
const chxSiete = document.getElementById("7");
const chxOcho = document.getElementById("8");
const chxNueve = document.getElementById("9");
const chxDiez = document.getElementById("10");

let casillas = new Set();
let datosMap = new Map();

function mostrarMapa() {
  console.log(`Map(1)`);
  console.log(`[[Entries]]`);
  datosMap.forEach((value, key) => {
    console.log(`0: {"${key}" => "${value}"}`);
  });
  console.log(`size: ${datosMap.size}`);
}

function cambioCheckbox(checkboxId, inputElement) {
  if (document.getElementById(checkboxId).checked) {
    casillas.add(checkboxId);
    inputElement.classList.add("tachado");
    datosMap.set(checkboxId, inputElement.value);
  } else {
    casillas.delete(checkboxId);
    inputElement.classList.remove("tachado");
    datosMap.delete(checkboxId);
  }

  mostrarMapa();
}

// Event listeners para las casillas de verificación
chxUno.addEventListener("change", () => {
  cambioCheckbox("1", inputUno);
});
chxDos.addEventListener("change", () => {
  cambioCheckbox("2", inputDos);
});
chxTres.addEventListener("change", () => {
  cambioCheckbox("3", inputTres);
});
chxCuatro.addEventListener("change", () => {
  cambioCheckbox("4", inputCuatro);
});
chxCinco.addEventListener("change", () => {
  cambioCheckbox("5", inputCinco);
});
chxSeis.addEventListener("change", () => {
  cambioCheckbox("1", inputSeis);
});
chxSiete.addEventListener("change", () => {
  cambioCheckbox("2", inputSiete);
});
chxOcho.addEventListener("change", () => {
  cambioCheckbox("3", inputOcho);
});
chxNueve.addEventListener("change", () => {
  cambioCheckbox("4", inputNueve);
});
chxDiez.addEventListener("change", () => {
  cambioCheckbox("5", inputDiez);
});

