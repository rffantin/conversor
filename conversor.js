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

// Funções de conversão de temperatura

function celsiusFahrenheit(celsius){
    return (celsius * 9/5) + 32
}
function celsiusKelvin(celsius){
    return celsius + 273.15
}
function fahrenheitCelsius(fahrenheit){
    return (fahrenheit -32) * 5/9
}
function fahrenheitKelvin(fahrenheit){
    return (fahrenheit -32) * 5/9 + 273.15 
}
function kelvinCelsius(kelvin){
    return kelvin - 273.15
}
function kelvinFahrenheit(kelvin){
    return (kelvin - 273.15) * 9/5 + 32
}

// Funções de conversão de comprimento

function metroCentimetro(metro){
    return metro * 100
}
function metroPolegada(metro){
    return metro * 39.37
}
function centimetroMetro(centimetro){
    return centimetro/100
}
function centimetroPolegada(centimetro){
    return centimetro/2.54
}
function polegadaMetro(polegada){
    return polegada/39.37
}
function polegadaCentimetro(polegada){
    return polegada*2.54
}

// Funções de conversão de peso

function quilogramaGrama(quilograma){
    return quilograma*1000
}
function quilogramaLibra(quilograma){
    return quilograma*2.205
}
function gramaQuilograma(grama){
    return grama/1000
}
function gramaLibra(grama){
    return grama/453.6
}
function libraQuilograma(libra){
    return libra/2.205
}
function libraGrama(libra){
    return libra*453.6
}