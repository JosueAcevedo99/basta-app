let letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Z"];

let categorias = ["CIUDAD O PAIS","OBJETO ESCOLAR","COLOR","SABOR","FLOR FRUTO VEGETAL", "ANIMAL",
                  "MARCA", "COMIDA", "CELEBRIDAD", "PELICULA", "CANCION", "PRENDA", "PROGRAMA DE TV",
                   "OBJETO DE CAMPO", "OBJETO DE CIUDAD", "LIBRO", "PARTE DEL CUERPO",
                   "ANIMAL TERRESTRE" ];

const letraActual = document.getElementById('letra');

const btnPlay = document.getElementById('play');



btnPlay.onclick = () =>{
  var timePlay = document.getElementById("minutos").value;
  var limitPlay =  timePlay[0]+timePlay[1]+timePlay[2];
  limitPlay = limitPlay *1000 *60;
  var timeWord = document.getElementById("segundos").value;
  var limit =  timeWord[0];
  var intervaltiempo = setInterval(ChangerTiempo, 1000);
  var intervalPartida= setTimeout(ChangerEnd, limitPlay);

  function ChangerEnd() {
    alert("tiempo fuera!! " );
    location.reload();
  }
  
function ChangerTiempo() {
  
  tiempoActual.innerHTML = limit--;

  if(limit < 0){
    limit = timeWord[0] ;
    ChangerCategoria();
    ChangerLetras();
  }  limit = limit--;
}


}



function ChangerLetras() {
    letraActual.innerHTML = letras[Math.floor(Math.random()*letras.length)];
}

const categoriaActual = document.getElementById('categoria');

var categorianueva = categorias[Math.floor(Math.random()*categorias.length)];



function ChangerCategoria() {
  categoriaActual.innerHTML = categorias[Math.floor(Math.random()*categorias.length)];
}

const tiempoActual = document.getElementById('time');




