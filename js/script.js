var dadosInput = document.querySelector("#texto-input");
var outInput = document.querySelector("#output");

function criptografar() {
    var dados = dadosInput.value;

    var resultCripto = dados.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="texto-input">' + resultCripto + 
    '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function descriptografar() {
    var dados = dadosInput.value;

    var resultDescripto = dados.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="texto-input">' + resultDescripto + 
    '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var dadosCopiar = document.getElementById('texto-input');

    dadosCopiar.select();
    document.execCommand('copy');
    alert("Texto Copiado!");
}