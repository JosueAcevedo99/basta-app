let letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let categorias = ["CIUDAD","OBJETO ESCOLAR","COLOR","SABOR","FLOR FRUTO VEGETAL", "ANIMAL", "MARCA", "COMIDA", "CELEBRIDAD", "PELICULA", 
                  "CANCION", "PRENDA", ];

const letraActual = document.getElementById('letra');

var letranueva = letras[Math.floor(Math.random()*letras.length)];


var intervalLetra = setInterval(ChangerLetras, 5000, letraActual);

function ChangerLetras() {
    letraActual.innerHTML = letras[Math.floor(Math.random()*letras.length)];
}

const categoriaActual = document.getElementById('categoria');

var categorianueva = categorias[Math.floor(Math.random()*categorias.length)];

var intervalcategoria = setInterval(ChangerCategoria, 5000, categoriaActual);

function ChangerCategoria() {
  categoriaActual.innerHTML = categorias[Math.floor(Math.random()*categorias.length)];
}

const tiempoActual = document.getElementById('time');

var limit = 4;

var intervalcategoria = setInterval(ChangerTiempo, 1000);

function ChangerTiempo() {
  
  tiempoActual.innerHTML = limit--;

  limit < 0 ? limit = 4 : limit = limit--;
}


