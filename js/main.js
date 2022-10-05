let letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z"];

let categorias = ["CIUDAD O PAIS","OBJETO ESCOLAR","COLOR","SABOR","FLOR FRUTO VEGETAL", "ANIMAL",
                  "MARCA", "COMIDA", "CELEBRIDAD", "PELICULA", "CANCION", "PRENDA", "PROGRAMA DE TV",
                   "OBJETO DE CAMPO", "OBJETO DE CIUDAD", "LIBRO", "PARTE DEL CUERPO", "PALABRA DE 4 LETRAS",
                  "PALABRA DE 7 LETRAS", "ANIMAL DE 7 LETRAS", "ANIMAL DE 4 LETRAS" ];

const letraActual = document.getElementById('letra');

var letranueva = letras[Math.floor(Math.random()*letras.length)];


var intervalLetra = setInterval(ChangerLetras, 7000, letraActual);

function ChangerLetras() {
    letraActual.innerHTML = letras[Math.floor(Math.random()*letras.length)];
}

const categoriaActual = document.getElementById('categoria');

var categorianueva = categorias[Math.floor(Math.random()*categorias.length)];

var intervalcategoria = setInterval(ChangerCategoria, 7000, categoriaActual);

function ChangerCategoria() {
  categoriaActual.innerHTML = categorias[Math.floor(Math.random()*categorias.length)];
}

const tiempoActual = document.getElementById('time');

var limit = 6;

var intervalcategoria = setInterval(ChangerTiempo, 1000);

function ChangerTiempo() {
  
  tiempoActual.innerHTML = limit--;

  limit < 0 ? limit = 6 : limit = limit--;
}


