window.onload = function() {
  document.querySelector("#TextoExcusa").innerHTML=excusa();
};


let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];


function excusa () {

  for (let i = 0; i < who.length; i++) {
      const aleatorioWho = Math.floor(Math.random() * who.length);
      for (let j = 0; j < action.length; j++) {
          const aleatorioAction = Math.floor(Math.random() * action.length);
        for (let k = 0; k < what.length; k++) {
          const aleatorioWhat = Math.floor(Math.random() * what.length);
          for (let l = 0; l < when.length; l++) {
              const aleatorioWhen = Math.floor(Math.random() * when.length);

              const generarExcusa = `${who[aleatorioWho]} ${action[aleatorioAction]} ${what[aleatorioWhat]} ${when[aleatorioWhen]}`;
          return generarExcusa;
        }
      }
    }
  }

}

