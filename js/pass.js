let categorias = ["CIUDAD O PAIS","OBJETO ESCOLAR","COLOR","SABOR","FLOR FRUTO VEGETAL", "ANIMAL",
                  "MARCA", "COMIDA", "CELEBRIDAD", "PELICULA", "CANCION", "PRENDA", "PROGRAMA DE TV",
                   "OBJETO DE CAMPO", "OBJETO DE CIUDAD", "LIBRO", "PARTE DEL CUERPO",
                   "ANIMAL TERRESTRE" ];


const categoriaActual = document.getElementById('pass');

const btnCorrect = document.getElementById('correct');
const btnWrong = document.getElementById('wrong');

btnCorrect.onclick = () =>{
  categoriaActual.innerHTML = categorias[Math.floor(Math.random()*categorias.length)];

}

btnWrong.onclick = () =>{
  categoriaActual.innerHTML = categorias[Math.floor(Math.random()*categorias.length)];
}
