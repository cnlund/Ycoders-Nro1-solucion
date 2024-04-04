let randcolor = document.getElementById("randcolor");
let rojo = document.getElementById("rojo");
let verde = document.getElementById("verde");
let azul = document.getElementById("azul");
let recibir = document.getElementById("enviar");
let elegcolor = document.getElementById("coloreleg")
let resultado = document.getElementById("result")
let cambiar = document.getElementById("change")

function random() {
    randnum = Math.floor(Math.random() * 256)
    return randnum
}

function randomizar_color() {

    red = random()
    green = random()
    blue = random()

    randcolor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

const recibiendo_color = function () {
    elegcolor.style.backgroundColor = `rgb(${rojo.value}, ${verde.value}, ${azul.value})`
    let crojo = rojo.value
    let cverde = verde.value
    let cazul = azul.value
    let euclid_dist = Math.sqrt(Math.pow(red - crojo, 2) + Math.pow(green - cverde, 2) + Math.pow(blue - cazul, 2))
    let porcentaje = ((1 / (1 + (euclid_dist))) * 100)
    resultado.innerHTML = `${porcentaje} %`
}

randomizar_color()

const cambiando = function () {
    randomizar_color()
    if (rojo.value != 0 || verde.value != 0 ||  azul.value != 0){
        recibiendo_color()
    }
}



recibir.addEventListener("click", recibiendo_color)
cambiar.addEventListener("click", cambiando)