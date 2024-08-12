//VARIABLES DE FUNCIONES:
const sectionSeleccionarAtaque = document.getElementById('select_ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton_mascota');
const botonReiniciar = document.getElementById('boton_reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('select_mascota');
const spanMascotaJugador = document.getElementById('mascota_jugador');
const imagenMascota = document.getElementById('img_mascota_jugador');

const sectionContainerSubtitle = document.getElementById('container_subtitle');

const spanMascotaEnemigo = document.getElementById('mascota_enemigo');
const imagenMascotaEnemigo = document.getElementById('img_mascota_enemigo');

const spanVidasJugador = document.getElementById('vidas_jugador');
const spanVidasEnemigo = document.getElementById('vidas_enemigo');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques_del_jugador');
const ataquesDelEnemigo = document.getElementById('ataques_del_enemigo');

const contenedorTarjetas = document.getElementById('contenedorTarjetas');

const contenedorAtaques = document.getElementById('contenedorAtaques');

const sectionVerMapa = document.getElementById('ver_mapa');
const mapa = document.getElementById('mapa');

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
let mascotaJugadorObjeto;
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

let lienzo = mapa.getContext('2d');
let intervalo;
let mapaBackground = new Image()
mapaBackground.src = './img/mapa.png'

//MAPA:
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaimoDelMapa = 400

if (anchoDelMapa > anchoMaimoDelMapa){
    anchoDelMapa = anchoMaimoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


//CLASES:
class Mokepon {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40;
        this.alto = 40;
        this.x = aleatorio(0, mapa.width - this.ancho);
        this.y = aleatorio(0, mapa.height - this.alto);
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0;
        this.velocidadY = 0;
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon('Hipodoge', './img/hipodoge.png', 5, './img/fotoMapaHipodoge.png');
let capipepo = new Mokepon('Capipepo', './img/capipepo.png', 5, './img/fotoMapaCapipepo.png');
let ratigueya = new Mokepon('Ratigueya', './img/ratigueya.png', 5, './img/fotoMapaRatigueya.png');
let langostelvis = new Mokepon('Langostelvis', './img/langostelvis.png', 5, './img/fotoMapaLangostelvis.png');
let tucapalma = new Mokepon('Tucapalma', './img/tucapalma.png', 5, './img/fotoMapaTucapalma.png');
let pydos = new Mokepon('Pydos', './img/pydos.png', 5, './img/fotoMapaPydos.png');

let hipodogeEnemigo = new Mokepon('Hipodoge', './img/hipodoge.png', 5, './img/fotoMapaHipodoge.png');
let capipepoEnemigo = new Mokepon('Capipepo', './img/capipepo.png', 5, './img/fotoMapaCapipepo.png');
let ratigueyaEnemigo = new Mokepon('Ratigueya', './img/ratigueya.png', 5, './img/fotoMapaRatigueya.png');
let langostelvisEnemigo = new Mokepon('Langostelvis', './img/langostelvis.png', 5, './img/fotoMapaLangostelvis.png');
let tucapalmaEnemigo = new Mokepon('Tucapalma', './img/tucapalma.png', 5, './img/fotoMapaTucapalma.png');
let pydosEnemigo = new Mokepon('Pydos', './img/pydos.png', 5, './img/fotoMapaPydos.png');

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '🔥', id: 'boton_fuego' },
    { nombre: '🌱', id: 'boton_tierra' },
)

hipodogeEnemigo.ataques.push(
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

capipepoEnemigo.ataques.push(
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

ratigueyaEnemigo.ataques.push(
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

langostelvisEnemigo.ataques.push(
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

tucapalmaEnemigo.ataques.push(
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

pydosEnemigo.ataques.push(
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
    sectionVerMapa.style.display = 'none'

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
    sectionContainerSubtitle.style.display = 'none'

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
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
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


//function seleccionarMascotaEnemigo() {
    //let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

   // spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    //imagenMascotaEnemigo.src = mokepones[mascotaAleatoria].foto
   // ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
   // secuenciaAtaque()
//}

function seleccionarMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    imagenMascotaEnemigo.src = enemigo.foto
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAletorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

    if (ataqueAletorio == 0 || ataqueAletorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAletorio == 3 || ataqueAletorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
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

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(pydosEnemigo)
    }
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {


    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador);

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if (abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)
