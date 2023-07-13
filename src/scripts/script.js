// Obtendo os elementos do HTML e armazenando em suas respectivas variáveis

var valorEntrada = document.getElementById("valor")
var categoria = document.getElementById("categoria")
var unidadeOrigem = document.getElementById("unidadeOrigem")
var unidadeDestino = document.getElementById("unidadeDestino")
var botaoConverter = document.getElementById("botaoConverter")
var resultado = document.getElementById("resultado")

// Evento para quando mudar a opção de categoria, popular as origens

categoria.addEventListener("change", opcoesOrigem)

// Funções para criação dos elementos de seleção
function opcoesOrigem() {
    if (categoria.value === "comprimento") {
        unidadeOrigem.innerHTML = `
        <option value="none" selected disabled>Selecione uma unidade</option>
        <option value="metro">Metro</option>
        <option value="centimetro">Centímetro</option>
        <option value="polegada">Polegada</option>
        `
    }
    if (categoria.value === "peso") {
        unidadeOrigem.innerHTML = `
        <option value="none" selected disabled>Selecione uma unidade</option>
        <option value="quilograma">Quilograma</option>
        <option value="grama">Grama</option>
        <option value="libra">Libra</option>
        `
    }
    if (categoria.value === "temperatura") {
        unidadeOrigem.innerHTML = `
        <option value="none" selected disabled>Selecione uma unidade</option>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
        `
    }
}

// Evento para popular as unidades Destino

unidadeOrigem.addEventListener("change", opcoesDestino)

// Funções para criação dos elementos de seleção
function opcoesDestino() {

    // unidades de destino para comprimento
    if (unidadeOrigem.value === "metro") {
        unidadeDestino.innerHTML = `
        <option value="none" selected disabled>Selecione uma unidade</option>
        <option value="centimetro">Centímetro</option>
        <option value="polegada">Polegada</option>
        `
    }
    if (unidadeOrigem.value === "centimetro") {
        unidadeDestino.innerHTML = `
        <option value="none" selected disabled>Selecione uma unidade</option>
        <option value="polegada">Polegada</option>
        <option value="metro">Metro</option>
        `
    }
    if (unidadeOrigem.value === "polegada") {
        unidadeDestino.innerHTML = `
        <option value="none" selected disabled>Selecione uma unidade</option>
        <option value="centimetro">Centimetro</option>
        <option value="metro">Metro</option>
        `
    }

    // unidades de destino para peso
    if (unidadeOrigem.value === "quilograma") {
        unidadeDestino.innerHTML = `
            <option value="none" selected disabled>Selecione uma unidade</option>
            <option value="grama">Grama</option>
            <option value="libra">Libra</option>
            `
    }
    if (unidadeOrigem.value === "grama") {
        unidadeDestino.innerHTML = `
            <option value="none" selected disabled>Selecione uma unidade</option>
            <option value="quilograma">Quilograma</option>
            <option value="libra">Libra</option>
            `
    }
    if (unidadeOrigem.value === "libra") {
        unidadeDestino.innerHTML = `
            <option value="none" selected disabled>Selecione uma unidade</option>
            <option value="quilograma">Quilograma</option>
            <option value="grama">Grama</option>
            `
    }

    // unidades de destino para temperatura
    if (unidadeOrigem.value === "celsius") {
        unidadeDestino.innerHTML = `
            <option value="none" selected disabled>Selecione uma unidade</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
            `
    }
    if (unidadeOrigem.value === "fahrenheit") {
        unidadeDestino.innerHTML = `
            <option value="none" selected disabled>Selecione uma unidade</option>
            <option value="celsius">Celsius</option>
            <option value="kelvin">Kelvin</option>
            `
    }
    if (unidadeOrigem.value === "kelvin") {
        unidadeDestino.innerHTML = `
            <option value="none" selected disabled>Selecione uma unidade</option>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            `
    }
}

// Funções para executar a conversão ao clicar no botão "converter"

botaoConverter.addEventListener("click", validar)

function validar(){
    if(valorEntrada.value === '' || categoria.value === 'none' || unidadeOrigem.value === 'none' || unidadeDestino.value === 'none'){
    alert("Por favor, preencha todos os campos.")
    }else{
        conversao()
    }
}

function conversao() {
    var valor = +valorEntrada.value
    if (unidadeOrigem.value === "celsius" && unidadeDestino.value === "fahrenheit") {
        exibeResultado(celsiusFahrenheit(valor))
    }
    if (unidadeOrigem.value === "celsius" && unidadeDestino.value === "kelvin") {
        exibeResultado(celsiusKelvin(valor).toFixed(2))
    }
    if (unidadeOrigem.value === "fahrenheit" && unidadeDestino.value === "celsius") {
        exibeResultado(fahrenheitCelsius(valor).toFixed(4))
    }
    if (unidadeOrigem.value === "fahrenheit" && unidadeDestino.value === "kelvin") {
        exibeResultado(fahrenheitKelvin(valor).toFixed(4))
    }
    if (unidadeOrigem.value === "kelvin" && unidadeDestino.value === "celsius") {
        exibeResultado(kelvinCelsius(valor).toFixed(2))
    }
    if (unidadeOrigem.value === "kelvin" && unidadeDestino.value === "fahrenheit") {
        exibeResultado(kelvinFahrenheit(valor).toFixed(2))
    }
    if (unidadeOrigem.value === "metro" && unidadeDestino.value === "centimetro") {
        exibeResultado(metroCentimetro(valor))
    }
    if (unidadeOrigem.value === "metro" && unidadeDestino.value === "polegada") {
        exibeResultado(metroPolegada(valor).toFixed(4))
    }
    if (unidadeOrigem.value === "centimetro" && unidadeDestino.value === "metro") {
        exibeResultado(centimetroMetro(valor).toFixed(2))
    }
    if (unidadeOrigem.value === "centimetro" && unidadeDestino.value === "polegada") {
        exibeResultado(centimetroPolegada(valor).toFixed(6))
    }
    if (unidadeOrigem.value === "polegada" && unidadeDestino.value === "metro") {
        exibeResultado(polegadaMetro(valor).toFixed(4))
    }
    if (unidadeOrigem.value === "polegada" && unidadeDestino.value === "centimetro") {
        exibeResultado(polegadaCentimetro(valor).toFixed(2))
    }
    if (unidadeOrigem.value === "quilograma" && unidadeDestino.value === "grama") {
        exibeResultado(quilogramaGrama(valor))
    }
    if (unidadeOrigem.value === "quilograma" && unidadeDestino.value === "libra") {
        exibeResultado(quilogramaLibra(valor).toFixed(5))
    }
    if (unidadeOrigem.value === "grama" && unidadeDestino.value === "quilograma") {
        exibeResultado(gramaQuilograma(valor).toFixed(4))
    }
    if (unidadeOrigem.value === "grama" && unidadeDestino.value === "libra") {
        exibeResultado(gramaLibra(valor).toFixed(7))
    }
    if (unidadeOrigem.value === "libra" && unidadeDestino.value === "quilograma") {
        exibeResultado(libraQuilograma(valor).toFixed(5))
    }
    if (unidadeOrigem.value === "libra" && unidadeDestino.value === "grama") {
        exibeResultado(libraGrama(valor).toFixed(2))
    }
}
    
// Funções de conversão de temperatura

function celsiusFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}
function celsiusKelvin(celsius) {
    return celsius + 273.15
}
function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
function fahrenheitKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15
}
function kelvinCelsius(kelvin) {
    return kelvin - 273.15
}
function kelvinFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32
}

// Funções de conversão de comprimento

function metroCentimetro(metro) {
    return metro * 100
}
function metroPolegada(metro) {
    return metro * 39.37
}
function centimetroMetro(centimetro) {
    return centimetro / 100
}
function centimetroPolegada(centimetro) {
    return centimetro / 2.54
}
function polegadaMetro(polegada) {
    return polegada / 39.37
}
function polegadaCentimetro(polegada) {
    return polegada * 2.54
}

// Funções de conversão de peso

function quilogramaGrama(quilograma) {
    return quilograma * 1000
}
function quilogramaLibra(quilograma) {
    return quilograma * 2.205
}
function gramaQuilograma(grama) {
    return grama / 1000
}
function gramaLibra(grama) {
    return grama / 453.6
}
function libraQuilograma(libra) {
    return libra / 2.205
}
function libraGrama(libra) {
    return libra * 453.6
}

// Função para exibir o resultado

function exibeResultado(res) {
    resultado.innerText = `${res}`
}

