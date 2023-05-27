
/**
 * funcion permite tomar una carta del deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {string} retorna un string con el nombre de la carta.
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}