let categorias = ["NOP", "SIP", "IZQUIERDA DECIDE", "DERECHA DECIDE", "ULTIMO GANADOR DECIDE", "ULTIMO LUGAR ACTUAL DECIDE"
];


const btnCorrect = document.getElementById('correct');
const btnWrong = document.getElementById('wrong');
const btnCorrect2 = document.getElementById('correct2');
const btnWrong2 = document.getElementById('wrong2');



btnCorrect.onclick = () =>{
  alert(categorias[Math.floor(Math.random()*categorias.length)]);
  window.location.href = "index.html";
}

btnWrong.onclick = () =>{
  alert(categorias[Math.floor(Math.random()*categorias.length)]);
  window.location.href = "index.html";
}
btnCorrect2.onclick = () =>{
  alert(categorias[Math.floor(Math.random()*categorias.length)]);
  window.location.href = "index.html";  
}
btnWrong2.onclick = () =>{
  alert(categorias[Math.floor(Math.random()*categorias.length)]);
  window.location.href = "index.html";
}


