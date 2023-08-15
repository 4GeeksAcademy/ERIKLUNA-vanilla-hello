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
  "while I was praying",
];

function generarNumeroAleatorio(maxLength) {
  return Math.floor(Math.random() * maxLength);
}

const whoAleatorio = generarNumeroAleatorio(who.length);
const actionAleatorio = generarNumeroAleatorio(action.length);
const whatAleatorio = generarNumeroAleatorio(what.length);
const whenAleatorio = generarNumeroAleatorio(when.length);

const generarExcusa = `${who[whoAleatorio]} ${action[actionAleatorio]} ${what[whatAleatorio]} ${when[whenAleatorio]}`;

return generarExcusa;
