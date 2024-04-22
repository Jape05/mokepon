//VARIABLES DE FUNCIONES:
const sectionSeleccionarAtaque = document.getElementById('select_ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton_mascota');
const botonReiniciar = document.getElementById('boton_reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('select_mascota');
const spanMascotaJugador = document.getElementById('mascota_jugador');
const imagenMascota = document.getElementById('img_mascota_jugador');

const spanMascotaEnemigo = document.getElementById('mascota_enemigo');
const imagenMascotaEnemigo = document.getElementById('img_mascota_enemigo');

const spanVidasJugador = document.getElementById('vidas_jugador');
const spanVidasEnemigo = document.getElementById('vidas_enemigo');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques_del_jugador');
const ataquesDelEnemigo = document.getElementById('ataques_del_enemigo');

const contenedorTarjetas = document.getElementById('contenedorTarjetas');

const contenedorAtaques = document.getElementById('contenedorAtaques');

//VARIABLES GLOBALES:
let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputLangostelvis;
let inputTucapalma;
let inputPydos;
let mascotaJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 5;
let vidasEnemigo = 5;

//CLASES:
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './img/hipodoge.png', 5);
let capipepo = new Mokepon('Capipepo', './img/capipepo.png', 5);
let ratigueya = new Mokepon('Ratigueya', './img/ratigueya.png', 5);
let langostelvis = new Mokepon('Langostelvis', './img/langostelvis.png', 5);
let tucapalma = new Mokepon('Tucapalma', './img/tucapalma.png', 5);
let pydos = new Mokepon('Pydos', './img/pydos.png', 5);

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '🔥', id: 'boton_fuego' },
    { nombre: '🌱', id: 'boton_tierra' },
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton_agua' },
    { nombre: '🌱', id: 'boton_agua' },
    { nombre: '🌱', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_fuego' },
    { nombre: '🔥', id: 'boton_tierra' },
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton_agua' },
    { nombre: '🔥', id: 'boton_agua' },
    { nombre: '🔥', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_fuego' },
    { nombre: '🌱', id: 'boton_tierra' },
)

langostelvis.ataques.push(
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '🔥', id: 'boton_fuego' },
    { nombre: '🌱', id: 'boton_tierra' },
)

tucapalma.ataques.push(
    { nombre: '🌱', id: 'boton_agua' },
    { nombre: '🌱', id: 'boton_agua' },
    { nombre: '🌱', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_fuego' },
    { nombre: '🔥', id: 'boton_tierra' },
)

pydos.ataques.push(
    { nombre: '🔥', id: 'boton_agua' },
    { nombre: '🔥', id: 'boton_agua' },
    { nombre: '🔥', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_fuego' },
    { nombre: '🌱', id: 'boton_tierra' },
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

//FUNCIONES:
function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta_de_mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt="${mokepon.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge');
        inputCapipepo = document.getElementById('Capipepo');
        inputRatigueya = document.getElementById('Ratigueya');
        inputLangostelvis = document.getElementById('Langostelvis');
        inputTucapalma = document.getElementById('Tucapalma');
        inputPydos = document.getElementById('Pydos');
    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
        imagenMascota.src = './img/hipodoge.png'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        imagenMascota.src = './img/capipepo.png'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        imagenMascota.src = './img/ratigueya.png'
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
        imagenMascota.src = './img/langostelvis.png'
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
        imagenMascota.src = './img/tucapalma.png'
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
        imagenMascota.src = './img/pydos.png'
    } else {
        alert('ATENCIÓN: Debes eleccionar una Mascosta')
        window.location.reload();
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="btnAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton_fuego');
    botonAgua = document.getElementById('boton_agua');
    botonTierra = document.getElementById('boton_tierra');
    botones = document.querySelectorAll('.btnAtaque');

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#00e6ff4d'
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#00e6ff4d'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#00e6ff4d'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}


function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    imagenMascotaEnemigo.src = mokepones[mascotaAleatoria].foto
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}



function ataqueAleatorioEnemigo() {
    let ataqueAletorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

    if (ataqueAletorio == 0 || ataqueAletorio == 1){
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAletorio == 3 || ataqueAletorio == 4){
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5){
        combate()
    }

}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i, i)
            crearMensaje("ATAQUE EMPATADO ❗❗")
        } else if (ataqueJugador[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA') {
            indexAmbosOponentes(i, i)
            crearMensaje("ATAQUE EXITOSO 🎉")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO') {
            indexAmbosOponentes(i, i)
            crearMensaje("ATAQUE EXITOSO 🎉")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA') {
            indexAmbosOponentes(i, i)
            crearMensaje("ATAQUE EXITOSO 🎉")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(i, i)
            crearMensaje("ATAQUE FALLIDO ❌")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVictorias()
}

function revisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('ESTO FUE UN EMPATE ❗❗')
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('¡¡ FELICITACIONES, GANASTE !! 🏆😀')
    } else {
        crearMensajeFinal('LO SIENTO, PERDISTE 😢❌')
    }

}

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);

}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'flex'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

window.addEventListener('load', iniciarJuego)