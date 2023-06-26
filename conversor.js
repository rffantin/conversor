var valorEntrada = document.getElementById("valor")
var categoria = document.getElementById("categoria")
var unidadeOrigem = document.getElementById("unidadeOrigem")
var unidadeDestino = document.getElementById("unidadeDestino")
var botaoConverter = document.getElementById("botaoConverter")


categoria.addEventListener("change", opcoesOrigem)


function opcoesOrigem() {
    if (categoria.value === "comprimento") {
        unidadeOrigem.innerHTML = `
        <option selected disabled>Selecione uma unidade</option>
        <option value="metros">Metros</option>
        <option value="centimetros">Centímetros</option>
        <option value="polegadas">Polegadas</option>
        `
    }
    if (categoria.value === "peso") {
        unidadeOrigem.innerHTML = `
        <option selected disabled>Selecione uma unidade</option>
        <option value="quilograma">Quilograma</option>
        <option value="grama">Grama</option>
        <option value="libra">Libra</option>
        `
    }
    if (categoria.value === "temperatura") {
        unidadeOrigem.innerHTML = `
        <option selected disabled>Selecione uma unidade</option>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
        `
    }
}

unidadeOrigem.addEventListener("change", opcoesDestino)

function opcoesDestino() {

    // unidades de destino para comprimento
    if (unidadeOrigem.value === "metros") {
        unidadeDestino.innerHTML = `
        <option selected disabled>Selecione uma unidade</option>
        <option value="centimetros">Centímetros</option>
        <option value="polegadas">Polegadas</option>
        `
    }
    if (unidadeOrigem.value === "centimetros") {
        unidadeDestino.innerHTML = `
        <option selected disabled>Selecione uma unidade</option>
        <option value="polegadas">Polegadas</option>
        <option value="metros">Metros</option>
        `
    }
    if (unidadeOrigem.value === "polegadas") {
        unidadeDestino.innerHTML = `
        <option selected disabled>Selecione uma unidade</option>
        <option value="centimetros">Centimetros</option>
        <option value="metros">Metros</option>
        `
    }

    // unidades de destino para peso
    if (unidadeOrigem.value === "quilograma") {
        unidadeDestino.innerHTML = `
            <option selected disabled>Selecione uma unidade</option>
            <option value="grama">Grama</option>
            <option value="libra">Libra</option>
            `
    }
    if (unidadeOrigem.value === "grama") {
        unidadeDestino.innerHTML = `
            <option selected disabled>Selecione uma unidade</option>
            <option value="quilograma">Quilograma</option>
            <option value="libra">Libra</option>
            `
    }
    if (unidadeOrigem.value === "libra") {
        unidadeDestino.innerHTML = `
            <option selected disabled>Selecione uma unidade</option>
            <option value="quilograma">Quilograma</option>
            <option value="grama">Grama</option>
            `
    }

    // unidades de destino para temperatura
    if (unidadeOrigem.value === "celsius") {
        unidadeDestino.innerHTML = `
            <option selected disabled>Selecione uma unidade</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
            `
    }
    if (unidadeOrigem.value === "fahrenheit") {
        unidadeDestino.innerHTML = `
            <option selected disabled>Selecione uma unidade</option>
            <option value="celsius">Celsius</option>
            <option value="kelvin">Kelvin</option>
            `
    }
    if (unidadeOrigem.value === "kelvin") {
        unidadeDestino.innerHTML = `
            <option selected disabled>Selecione uma unidade</option>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            `
    }
}

botaoConverter.addEventListener("click", conversao)

function conversao(){
    // var = 
}

// Funções de conversão

function celsiusFahrenheit(celsius){
    return (celsius * 9/5) + 32
}