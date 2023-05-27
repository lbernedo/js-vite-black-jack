
/**
 * funcion que sirve para valorar una carta del deck
 * @param {<String>} carta  ejem = '3C'
 * @returns {number} retorna el numero que vale la carta.
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}