function gerarVolume(){
    const num1 = document.querySelector("#num1");

    const num2 = document.querySelector("#num2");


    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);
    
    let resultSoma = 0;
    let resultProduto = 0;
    let resultDif = 0;
    let resultQuo = 0
    let resultRestDiv = 0

    resultSoma = numero1 + numero2;
    resultProduto = numero1 * numero2;
    resultDif = numero1 - numero2;
    resultQuo = numero1 / numero2;
    resultRestDiv = numero1 % numero2;


    const vol = document.querySelector("#vol");
    vol.innerHTML = "Os resultados são:   Soma(" + resultSoma.toFixed(2) +"), Produto("+ resultProduto.toFixed(2) + "), Diferença(" + resultDif.toFixed(2) + "), Quociente(" + resultQuo.toFixed(2) + "), Resto da Divisão(" + resultRestDiv.toFixed(2) + ").";

}

