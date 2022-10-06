let categorias = ["PERRO","GATO","LUNA","SOL","RATON", "ELEFANTE",
                  "BOB ESPONJA", "ESTUFA", "MESA", "CUCHARA", "TENEDOR", "BUFANDA", "LENTES",
                   "FOGATA", "TALADRO", "ROJO", "PLATANO", "MANZANA", "COCHE", "MICROFONO",
                   "AUDIFONOS" 
];

var countWrong = 0;

var countCorrect = 0;

const categoriaActual = document.getElementById('pass');

const btnCorrect = document.getElementById('correct');
const btnWrong = document.getElementById('wrong');
const btnPlay = document.getElementById('play');

const correct = document.getElementById('countCorrect');

const wrong = document.getElementById('countWrong');


btnCorrect.onclick = () =>{
  categoriaActual.innerHTML = categorias[Math.floor(Math.random()*categorias.length)];
  correct.innerHTML = countCorrect++;
  countCorrect = countCorrect++;
}

btnWrong.onclick = () =>{
  categoriaActual.innerHTML = categorias[Math.floor(Math.random()*categorias.length)];
  wrong.innerHTML = countWrong++;
  countWrong = countWrong++;
}


btnPlay.onclick = () =>{
  var timeWord = document.getElementById("minutos").value;
  var limit =  timeWord[0]+timeWord[1]+timeWord[2];
  limit = limit *1000 * 60;
  var intervaltiempo = setTimeout(ChangerTiempo, limit);
  function ChangerTiempo() {
    alert("tiempo fuera!! " + "\n puntaje : " + (countCorrect - countWrong));
    location.reload();
  }
}
