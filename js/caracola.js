let categorias = ["NOP", "SIP", "IZQUIERDA DECIDE", "DERECHA DECIDE", 
                  "ULTIMO GANADOR DECIDE", "ULTIMO LUGAR ACTUAL DECIDE",
                  "ULTIMO PERDEDPR DECIDE", "PROXIMO CUMPLEAÑERO",
                  "MAS JOVEN", "MAS VIEJO", "EDADES PARES", "EDADES NONES",
                  "HOMBRES", "MUJERES", "PLAYERA CLARA", "PLAYERA OSCURA",
                  "ABRIGO CLARO", "ABRIGO OSCURO", 
];


const btnCorrect = document.getElementById('correct');
const btnWrong = document.getElementById('wrong');
const btnCorrect2 = document.getElementById('correct2');
const btnWrong2 = document.getElementById('wrong2');
const btnCorrect3 = document.getElementById('correct3');
const btnWrong3 = document.getElementById('wrong3');
const btnCorrect4 = document.getElementById('correct4');
const btnWrong4 = document.getElementById('wrong4');



btnCorrect.onclick = () =>{
  alert("1.- " +  categorias[Math.floor(Math.random()*categorias.length)] + "\n 2.- " + categorias[Math.floor(Math.random()*categorias.length)]);
  location.reload();
}

btnWrong.onclick = () =>{
  alert("1.- " +  categorias[Math.floor(Math.random()*categorias.length)] + "\n 2.- " + categorias[Math.floor(Math.random()*categorias.length)]);
  location.reload();
}
btnCorrect2.onclick = () =>{
  alert("1.- " +  categorias[Math.floor(Math.random()*categorias.length)] + "\n 2.- " + categorias[Math.floor(Math.random()*categorias.length)]);
  location.reload();  
}
btnWrong2.onclick = () =>{
  alert("1.- " +  categorias[Math.floor(Math.random()*categorias.length)] + "\n 2.- " + categorias[Math.floor(Math.random()*categorias.length)]);
  location.reload();
}
btnCorrect3.onclick = () =>{
  alert("1.- " +  categorias[Math.floor(Math.random()*categorias.length)] + "\n 2.- " + categorias[Math.floor(Math.random()*categorias.length)]);
  location.reload();  
}
btnWrong3.onclick = () =>{
  alert("1.- " +  categorias[Math.floor(Math.random()*categorias.length)] + "\n 2.- " + categorias[Math.floor(Math.random()*categorias.length)]);
  location.reload();
}
btnCorrect4.onclick = () =>{
  alert("1.- " +  categorias[Math.floor(Math.random()*categorias.length)] + "\n 2.- " + categorias[Math.floor(Math.random()*categorias.length)]);
  location.reload();  
}
btnWrong4.onclick = () =>{
  alert("1.- " +  categorias[Math.floor(Math.random()*categorias.length)] + "\n 2.- " + categorias[Math.floor(Math.random()*categorias.length)]);
  location.reload();
}


