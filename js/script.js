const origem = document.getElementById('origem');
const destino = document.getElementById('destino');
const valorOrigem = document.getElementById('valorOrigem');
const valorDestino = document.getElementById('valorDestino');
const btnTrocar = document.getElementById('trocar');
const btnConverter = document.getElementById('converte');

function Trocar(){
    const temp = origem.value;
    origem.value = destino.value;
    destino.value = temp;
}

btnTrocar.addEventListener('click', Trocar);

function Converter(){
    const valor = valorOrigem.value;
    const baseOrigem = parseInt(origem.value);
    const baseDestino = parseInt(destino.value);

    const decimal = parseInt(valor, baseOrigem);
    const resultado = decimal.toString(baseDestino);

    valorDestino.value = resultado.toUpperCase();
}

btnConverter.addEventListener('click', Converter);