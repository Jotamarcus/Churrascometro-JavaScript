// - carne 400g por pessoa + de 6h - 650
// - cerveja 1200ml por pessoa = de 6h 2000ml
// - refrigerante/agua 1000ml por pesoa + de 6h 1500ml 
// - criança valo por 0,5
 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...")
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qdtCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtCerveja = cervejaPP(duracao) * adultos;
    let qdtBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdtCarne/1000}Kg de carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtCerveja/355)} Latas de cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtBebidas/2000)} Garrafas de 2l de bebidas</p>`;

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else{
        return 1200;
    }
}


function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else{
        return 1000;
    }
}
