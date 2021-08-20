const pedra = document.getElementById("pedra")
const papel = document.getElementById("papel")
const tesoura = document.getElementById("tesoura")
const resultadoPc = document.getElementById("resultado-pc")
const resultado = document.getElementById("resultado")

//cria um numero aletorio que representa a escolha do pc
const escolhaPC = () => {
    let escolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    return escolha
}


 // cria na tela um paragrafo com a esolha do pc
const mostraEscolhaPC = (aleatorio) => {
    if (aleatorio === 1){
        let novoParagrafo = document.createElement("p");
        let textEscolha = document.createTextNode("pedra")
        novoParagrafo.appendChild(textEscolha)
        resultadoPc.appendChild(novoParagrafo)
    }
    if (aleatorio === 2){
        let novoParagrafo = document.createElement("p");
        let textEscolha = document.createTextNode("papel")
        novoParagrafo.appendChild(textEscolha)
        resultadoPc.appendChild(novoParagrafo)
    }
    if (aleatorio === 3){
        let novoParagrafo = document.createElement("p");
        let textEscolha = document.createTextNode("tesoura")
        novoParagrafo.appendChild(textEscolha)
        resultadoPc.appendChild(novoParagrafo)
    }
    
}
let escolhaPc = escolhaPC()
mostraEscolhaPC(escolhaPc)



//criar um evento que quando clicado desabilita os demais botoes
let escolhaUsuario = 0
pedra.addEventListener("click",  function(){
    papel.style.display = "none"
    tesoura.style.display = "none"
    resultadoPc.style.display = "block"
    escolhaUsuario = 1
    compara()
})
papel.addEventListener("click",  function(){
    pedra.style.display = "none"
    tesoura.style.display = "none"
    escolhaUsuario = 2
    resultadoPc.style.display = "block"
    compara()
})
tesoura.addEventListener("click",  function(){
    papel.style.display = "none"
    pedra.style.display = "none"
    escolhaUsuario = 3
    resultadoPc.style.display = "block"
    compara()
})

// criar função que compara a escolha do usuario com a do pc


const compara = () => {
        
    if (escolhaUsuario === escolhaPc){
        let textResut = document.createTextNode("empatou")
        let novoParagrafo = document.createElement("p")
        novoParagrafo.appendChild(textResut)
        resultado.appendChild(novoParagrafo)
    }
    else if (escolhaUsuario === 1 && escolhaPc === 2){
        let textResut = document.createTextNode("perdeu")
        let novoParagrafo = document.createElement("p")
        novoParagrafo.appendChild(textResut)
        resultado.appendChild(novoParagrafo)
    }
    else if (escolhaUsuario === 1 && escolhaPc === 3){
        let textResut = document.createTextNode("ganhou")
        let novoParagrafo = document.createElement("p")
        novoParagrafo.appendChild(textResut)
        resultado.appendChild(novoParagrafo)
    }
    else if (escolhaUsuario === 2 && escolhaPc === 1){
        let textResut = document.createTextNode("ganhou")
        let novoParagrafo = document.createElement("p")
        novoParagrafo.appendChild(textResut)
        resultado.appendChild(novoParagrafo)
    }
    else if (escolhaUsuario === 2 && escolhaPc === 3){
        let textResut = document.createTextNode("perdeu")
        let novoParagrafo = document.createElement("p")
        novoParagrafo.appendChild(textResut)
        resultado.appendChild(novoParagrafo)
    }
    else if (escolhaUsuario === 3 && escolhaPc === 1){
        let textResut = document.createTextNode("perdeu")
        let novoParagrafo = document.createElement("p")
        novoParagrafo.appendChild(textResut)
        resultado.appendChild(novoParagrafo)
    }
    else if (escolhaUsuario === 3 && escolhaPc === 2){
        let textResut = document.createTextNode("ganhou")
        let novoParagrafo = document.createElement("p")
        novoParagrafo.appendChild(textResut)
        resultado.appendChild(novoParagrafo)
    }




    
}