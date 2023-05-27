import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valorar-carta";

/**
 * Esta función realiza el turno de juego de la computadora.
 * @param {number} puntosMinimos puntos del jugador
 * @param {ElementHTML} puntosHTML objetoHtml para cambiar los puntos.
 * @param {ElementHTML} divCartasComputadora objet html de carta de computadora.
 * @param {Array<String>} deck arreglo de de String
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        //TODO:CAMBIAR FUNCIONALIDAD DE CREAR CARTA
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}