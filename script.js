const maisa = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("main img");
const h1 = document.querySelector("h1");

function abrirMenu(){
    // if(lista.classList.contains("ativo")){
    //     lista.classList.remove("ativo");
    // }else{
    //     lista.classList.add("ativo");
    // }
    lista.classList.toggle("ativo");
}

maisa.onclick = abrirMenu;

function rodaRoda(){
    roleta.classList.toggle("rodaJequiti");
}

roleta.onclick = rodaRoda;
