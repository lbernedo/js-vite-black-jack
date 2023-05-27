
/**
 * funcion permite crear y mostar carta en html.
 * @param {String} carta  cadena de nobre de la carta.
 * @returns {HTMLImageElement}imagen de retorno.
 */
export const crearCartaHTML = (carta) => {
    if (!carta) throw new Error('la carta es un parametro necesio.');
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}