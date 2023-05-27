import _ from "underscore";
//se puede realizar un export de una constante y este se pude llamar con la clausula import
// export const a = 'hola Mundo';
export const miNombre = 'Luis Bernedo';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipoCartas  Ejem: ['C', 'D', 'H', 'S']
 * @param {Array<String>} cartaEspeciales Ejem: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorno un nuevo deck
 */
export const crearDeck = (tipoCartas, cartaEspeciales) => {
    if (!tipoCartas || tipoCartas.length === 0)
        throw new Error('tipoCartas es obligatorio un arreglo de String.');
    if (!cartaEspeciales || cartaEspeciales.length === 0)
        throw new Error('cartaEspeciales bligatorio un arreglo de String.');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipoCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipoCartas) {
        for (let esp of cartaEspeciales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

//se puede definir que funcion o variable se exportará por defecto al momento de ser importado en otro script.
//export default crearDeck;