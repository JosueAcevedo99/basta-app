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



let categoriasPartidaCorrectas = [];
let categoriasPartidaErrores = [];

btnCorrect.onclick = () =>{
  var categoriaNueva =  categorias[Math.floor(Math.random()*categorias.length)];
  categoriaActual.innerHTML = categoriaNueva;
  categoriasPartidaCorrectas.push(categoriaNueva);
  countCorrect = countCorrect + 1;
  correct.innerHTML = countCorrect;
  
}

btnWrong.onclick = () =>{
  var categoriaNueva =  categorias[Math.floor(Math.random()*categorias.length)];
  categoriaActual.innerHTML = categoriaNueva;
  categoriasPartidaErrores.push(categoriaNueva);
  countWrong = countWrong + 1;
  wrong.innerHTML = countWrong;
}


btnPlay.onclick = () =>{
  var timeWord = document.getElementById("minutos").value;
  var limit =  timeWord[0]+timeWord[1]+timeWord[2];
  limit = limit *1000 * 60;

  categoriaActual.innerHTML =  categorias[Math.floor(Math.random()*categorias.length)];

  var lista = "lista de palabras"
  var correctas = "\n";
  var errores = "\n";

  var intervaltiempo = setTimeout(ChangerTiempo, limit);
  function ChangerTiempo() {
    for(let i =0; i<categoriasPartidaCorrectas.length; i++){
      correctas += "\n" +categoriasPartidaCorrectas[i];
    }
    for(let i =0; i<categoriasPartidaErrores.length; i++){
      errores += "\n" + categoriasPartidaErrores[i];
    }
    
    alert("Tiempo Fuera!! \n" + "\npuntaje : \n \n CORRECTAS : " +countCorrect+ correctas + "\n \n ERRORES : " +countWrong+ errores);
    location.reload();
  }
}
