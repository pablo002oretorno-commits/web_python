//var box3 = 0;
//let box2 = 0;
//const box1 = 0;


//box1 = 10;

//console.log(box1);

const btnMensagem = document.querySelector('#btnMensagem');
const btnTitulo = document.querySelector("#btnTitulo")
const btnColor = document.querySelector("#btnCor")

let conteudoTituloobkp = document.querySelector("#titulo").textContent;


btnMensagem.addEventListener("click", exibirMensagem);
btnTitulo.addEventListener("click", alterartitulo);
btnTitulo.addEventListener("dblclick", restaurarTitulo);
btnCor.addEventListener("click", mudarCorFundo);

function exibirMensagem(){
    alert("olá, seja bem vindo ao JS!!");
}

function alterartitulo() {
    document.querySelector("#titulo").textContent = "Alguma coisa";
}

function restaurarTitulo() {
    document.querySelector("#titulo").textContent = conteudoTituloobkp;
}

function mudarCorFundo() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    document.body.style.background =`rgb(${r},${g},${b})`;
}

