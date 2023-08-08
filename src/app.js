/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#TextoExcusa").innerHTML = generarExcusa();
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function arrayAleatorio(array) {
  const NuevoArray = Math.floor(Math.random() * array.length);
  return array[NuevoArray];
}

function generarExcusa() {
  const aleatorioWho = arrayAleatorio(who);
  const aleatorioAction = arrayAleatorio(action);
  const aleatorioWhat = arrayAleatorio(what);
  const aleatorioWhen = arrayAleatorio(when);

  const excuse =
    aleatorioWho +
    " " +
    aleatorioAction +
    " " +
    aleatorioWhat +
    " " +
    aleatorioWhen;

  return excuse;
}
