let categorias = ["PERRO","GATO","LUNA","SOL","RATON", "ELEFANTE",
                  "BOB ESPONJA", "ESTUFA", "MESA", "CUCHARA", "TENEDOR", "BUFANDA", "LENTES",
                   "FOGATA", "TALADRO", "ROJO", "PLATANO", "MANZANA", "COCHE", "MICROFONO",
                   "AUDIFONOS", "LAPTOP", "PLATO", "SILLA", "CARTERA", "MOCHILA", "VENTANA",
                   "PUERTA", "CEREAL", "TECHO", "SUPERMAN", "CHANCLAS", "CELULAR", "CHAMARRA",
                   "CABELLO", "JABON", "ESCOBA", "ENCHUFE", "LAPIZ", "LAPICERO", "TIJERAS",
                   "PEGAMENTO", "GOMA", "CUBREBOCAS", "FOCO", "ARBOL", "SEMILLA", "HAMACA",
                   "MAR", "PLAYA", "SELVA", "FELIZ", "ENOJADO", "SOLIDO", "LIQUIDO",
                   "AGUA", "FUEGO", "TIERRA", "AIRE", "PAJARO", "CONEJO", "VACA",
                   "POLLO", "CERDO", "BOTELLA", "PERFUME", "GANCHO", "BANCO", "CUBO",
                   "CIRCULO", "PELOTA", "RAQUETA", "CARTA", "DINERO", "HULK", "LIBRO",
                   "DIADEMA", "WI-FI", "LLUVIA", "CLIP", "GRAPA", "SERVILLETA", "MANTEL", "RUEDA",
                   "CAJA", "CIRCO", "PIZARRON", "NUBE", "MONTAÑA", "RIO", "OSO", "ARCO", "CUERDA",
                   "CARGADOR", "AÑO", "DIA", "NOCHE", "PRESIDENTE", "FUTBOL", "BASKETBOL", "MUNDO",
                   "TERREMOTO", "TORNADO", "TIBURON", "PULPO", "CANDADO","MICROONDAS","IGLESIA","COMPUTADORA",
                   "TELE","CONTROL","CUCHILLO","BOCINA","PULCERA","COLLAR","ARETES",
                   "DULCE","SALADO"
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

const tiempoActual = document.getElementById('time');

btnPlay.onclick = () =>{
  var timeWord = document.getElementById("minutos").value;
  var limit =  timeWord[0]+timeWord[1]+timeWord[2];
  var segundero = limit * 60;
  limit = limit *1000 * 60;
  categoriaActual.innerHTML =  categorias[Math.floor(Math.random()*categorias.length)];

  var correctas = "\n";
  var errores = "\n";

  var contador = segundero;

  var intervalSegundos = setInterval(ChangerSegundos, 1000);
  var intervalSegundos = setInterval(ChangerEnd, limit);

  function ChangerSegundos() {
    
    tiempoActual.innerHTML = contador-1;
    if(contador >= 0){
      contador = contador - 1;
    }else{
      location.reload();
    } 
  }


  function ChangerEnd() {
    for(let i =0; i<categoriasPartidaCorrectas.length; i++){
      correctas += "    " +categoriasPartidaCorrectas[i];
    }
    for(let i =0; i<categoriasPartidaErrores.length; i++){
      errores += "    " + categoriasPartidaErrores[i];
    }
    alert("Tiempo Fuera!! \n" + "\npuntaje : \n \n CORRECTAS : " +countCorrect+ correctas + "\n \n ERRORES : " +countWrong+ errores);
    location.reload();
  }
  
  

}
