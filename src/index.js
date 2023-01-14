let contador = 0;
let numeroUltimoMovimiento = -1;
let jugarMaquina = false;
let bandoMaquina = "";
let numeroSalidos = [4];
let repetir = true;
let ganar = false;
let ordenOrdenes = [1];
let ordenCasillas = ["Medio"];
let ordenTipo = ["Cruz"];
let ultimaPersona = null;

window.onload = () => {
    console.log('loaded')

    // let cells = <GET ALL cell ELEMENTS>
    let cell = document.getElementsByClassName('cell-x')[0]
    // for (const cell of cells) {
    cell.onclick = (event) => {
        const [, x, y] = event.target.id.split('-')
        console.log(`click on ${x}:${y}`)
        if (cell.className === 'cell')
            cell.className = 'cell-o'
        else {
            if (cell.className === 'cell-o')
                cell.className = 'cell-x'
            else
                cell.className = 'cell-o'
        }
    }
    // }
}

function marcarCelda(numero) {
    let aux = false;
    document.getElementById("botonJugarMaquina").disabled = true;
    let siguienteTurno = document.getElementById("siguienteTurno");
    let casilla = document.getElementById(numero);
    if (casilla.classList.value == "cell") {
        casilla.classList.remove("cell");
        casilla.classList.add(siguienteTurno.classList);
        if (siguienteTurno.className == "turn-cell-o") {
            siguienteTurno.classList.remove("turn-cell-o");
            siguienteTurno.classList.add("turn-cell-x");
        } else {
            siguienteTurno.classList.remove("turn-cell-x");
            siguienteTurno.classList.add("turn-cell-o");
            aux = true;
        }
        ultimaPersona = siguienteTurno;
        numeroUltimoMovimiento = casilla.id;
        marcarRegistro();
    }
    comprobarResultados();
    if (jugarMaquina == true && bandoMaquina == siguienteTurno.classList.value && ganar == false && aux) {
        numeroSalidos[numeroSalidos.length] = parseInt(casilla.id);
        seguirJugandoMaquina();
    }else{        
        numeroSalidos[numeroSalidos.length] = parseInt(casilla.id);
    }
    comprobarResultados();
    document.getElementById("deshacerMovimiento").disabled = false;
}
function nuevoJuego() {
    let celdas = document.getElementsByName("celda");
    celdas.forEach(celda => {
        celda.classList.remove("cell-o");
        celda.classList.remove("turn-cell-o");
        celda.classList.remove("turn-cell-x");
        celda.classList.remove("cell-x");
        celda.classList.add("cell");
    });
    document.getElementById("4").classList.add("turn-cell-x");
    document.getElementById("4").classList.remove("cell");
    celdas.forEach(celda => {
        celda.style.pointerEvents = "auto";
    });
    let siguienteTurno = document.getElementById("siguienteTurno");
    siguienteTurno.classList.remove("turn-cell-o");
    siguienteTurno.classList.remove("turn-cell-x");
    siguienteTurno.classList.add("turn-cell-o");
    document.getElementById("botonJugarMaquina").disabled = false;
    document.getElementById("deshacerMovimiento").disabled = false;
    numeroSalidos = [4];
    document.getElementById("tableRegistro2").innerHTML = "";

}

function comprobarResultados() {
    let celdas = document.getElementsByName("celda");
    ganar = false;
    let personaGanadora = "";
    if (celdas[0].classList.value != "cell" && celdas[0].classList.value == celdas[1].classList.value && celdas[0].classList.value == celdas[2].classList.value) {
        if (celdas[0].classList.value == "turn-cell-o") {
            personaGanadora = "Ha ganado el circulo"
        }
        if (celdas[0].classList.value == "turn-cell-x") {
            personaGanadora = "Ha ganado la cruz"
        }
        ganar = true;
    }
    if (celdas[3].classList.value != "cell" && celdas[3].classList.value == celdas[4].classList.value && celdas[3].classList.value == celdas[5].classList.value) {
        if (celdas[3].classList.value == "turn-cell-o") {
            personaGanadora = "Ha ganado el circulo"
        }
        if (celdas[3].classList.value == "turn-cell-x") {
            personaGanadora = "Ha ganado la cruz"
        }
        ganar = true;
    }
    if (celdas[6].classList.value != "cell" && celdas[6].classList.value == celdas[7].classList.value && celdas[6].classList.value == celdas[8].classList.value) {
        if (celdas[6].classList.value == "turn-cell-o") {
            personaGanadora = "Ha ganado el circulo"
        }
        if (celdas[6].classList.value == "turn-cell-x") {
            personaGanadora = "Ha ganado la cruz"
        }
        ganar = true;
    }
    if (celdas[0].classList.value != "cell" && celdas[0].classList.value == celdas[3].classList.value && celdas[0].classList.value == celdas[6].classList.value) {
        if (celdas[0].classList.value == "turn-cell-o") {
            personaGanadora = "Ha ganado el circulo"
        }
        if (celdas[0].classList.value == "turn-cell-x") {
            personaGanadora = "Ha ganado la cruz"
        }
        ganar = true;
    }
    if (celdas[1].classList.value != "cell" && celdas[1].classList.value == celdas[4].classList.value && celdas[1].classList.value == celdas[7].classList.value) {
        if (celdas[1].classList.value == "turn-cell-o") {
            personaGanadora = "Ha ganado el circulo"
        }
        if (celdas[1].classList.value == "turn-cell-x") {
            personaGanadora = "Ha ganado la cruz"
        }
        ganar = true;
    }
    if (celdas[2].classList.value != "cell" && celdas[2].classList.value == celdas[5].classList.value && celdas[2].classList.value == celdas[8].classList.value) {
        if (celdas[2].classList.value == "turn-cell-o") {
            personaGanadora = "Ha ganado el circulo"
        }
        if (celdas[2].classList.value == "turn-cell-x") {
            personaGanadora = "Ha ganado la cruz"
        }
        ganar = true;
    }
    if (celdas[0].classList.value != "cell" && celdas[0].classList.value == celdas[4].classList.value && celdas[0].classList.value == celdas[8].classList.value) {
        if (celdas[0].classList.value == "turn-cell-o") {
            personaGanadora = "Ha ganado el circulo"
        }
        if (celdas[0].classList.value == "turn-cell-x") {
            personaGanadora = "Ha ganado la cruz"
        }
        ganar = true;
    }
    if (celdas[2].classList.value != "cell" && celdas[2].classList.value == celdas[4].classList.value && celdas[2].classList.value == celdas[6].classList.value) {
        if (celdas[2].classList.value == "turn-cell-o") {
            personaGanadora = "Ha ganado el circulo"
        }
        if (celdas[2].classList.value == "turn-cell-x") {
            personaGanadora = "Ha ganado la cruz"
        }
        ganar = true;
    }
    if (ganar && contador == 0) {
        alert(personaGanadora);
        celdas.forEach(celda => {
            celda.style.pointerEvents = "none";
        });
        contador = 1;
        document.getElementById("deshacerMovimiento").disabled = true;
    }
}

function deshacerUltimoMovimiento() {
    if (numeroUltimoMovimiento == -1) {
        alert("Tienes que hacer primero un movimiento");
    } else {
        let casillaDeshacer = document.getElementById(numeroUltimoMovimiento);
        casillaDeshacer.classList.remove("cell-o");
        casillaDeshacer.classList.remove("turn-cell-o");
        casillaDeshacer.classList.remove("turn-cell-x");
        casillaDeshacer.classList.remove("cell-x");
        casillaDeshacer.classList.add("cell");
        let siguienteTurno = document.getElementById("siguienteTurno");
        if(siguienteTurno.classList.value == "turn-cell-o"){
            siguienteTurno.classList.value = "turn-cell-x";
        }else{
            siguienteTurno.classList.value = "turn-cell-o";
        }
    }
    document.getElementById("deshacerMovimiento").disabled = true;
}

function jugarContraMaquina() {
    document.getElementById("botonJugarMaquina").disabled = true;
    bandoMaquina = document.getElementById("siguienteTurno").classList.value;
    jugarMaquina = true;
    seguirJugandoMaquina();
}

function seguirJugandoMaquina() {
    let randomizador = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    let comprobador = false;
    let cambiarNumero = false;
    while (comprobador == false) {
        for (let i = 0; i < numeroSalidos.length; i++) {
            if (randomizador == numeroSalidos[i]) {
                cambiarNumero = true;
                break;
            }else{
                cambiarNumero = false;
            }
        }
        if (cambiarNumero) {
            randomizador = Math.floor(Math.random() * (8 - 1 + 1) + 1);
        } else {
            comprobador = true;
        }
    }
    let celdas = document.getElementsByName("celda");
        if (celdas[randomizador].classList.value == "cell"  && comprobador == true && bandoMaquina == document.getElementById("siguienteTurno").classList.value ) {
           
            marcarCelda(randomizador);
        }else{
            comprobador == false;
        }
}

function marcarRegistro(){
    var table = document.getElementById('tableRegistro');
    var table2 = document.getElementById('tableRegistro2');
    var tr  = document.createElement('tr'); 
    var tdOrden  = document.createElement('td'); 
    var tdCasilla = document.createElement('td'); 
    var tdTipo  = document.createElement('td'); 
    ordenOrdenes[ordenOrdenes.length] = ordenOrdenes.length;
    tdOrden.innerHTML = ordenOrdenes.length;
    switch(numeroUltimoMovimiento){
        case '0':
            ordenCasillas[ordenOrdenes.length+1] = "Arriba Izquierda";
            tdCasilla.innerHTML = "Arriba Izquierda";
        break;
        case '1':
            ordenCasillas[ordenOrdenes.length+1] = "Arriba";
            tdCasilla.innerHTML = "Arriba";
        break;
        case '2':
            ordenCasillas[ordenOrdenes.length+1] = "Arriba Derecha";
            tdCasilla.innerHTML = "Arriba Derecha";
        break;
        case '3':
            ordenCasillas[ordenOrdenes.length+1] = "Izquierda";
            tdCasilla.innerHTML = "Izquierda";
        break;
        case '5':
            ordenCasillas[ordenOrdenes.length+1] = "Derecha";
            tdCasilla.innerHTML = "Derecha";
        break;
        case '6':
            ordenCasillas[ordenOrdenes.length+1] = "Abajo Izquierda";
            tdCasilla.innerHTML = "Abajo Izquierda";
        break;
        case '7':
            ordenCasillas[ordenOrdenes.length+1] = "Abajo";
            tdCasilla.innerHTML = "Abajo";
        break;
        case '8':
            ordenCasillas[ordenOrdenes.length+1] = "Abajo Derecha";
            tdCasilla.innerHTML = "Abajo Derecha";
        break;

    }
    if(ultimaPersona.classList.value == "turn-cell-x"){
        ordenTipo[ordenOrdenes.length+1] = "Circulo";
        tdTipo.innerHTML = "Circulo";
    }if(ultimaPersona.classList.value == "turn-cell-o"){
        ordenTipo[ordenOrdenes.length+1] = "Cruz";
        tdTipo.innerHTML = "Cruz";
    }    
    
    tr.appendChild(tdOrden)
    tr.appendChild(tdCasilla)
    tr.appendChild(tdTipo)
    table2.appendChild(tr);
}