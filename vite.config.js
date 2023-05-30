/**
 * este es una archivo de configuration de vite  permite configurar cosas que cambiara
 * algunas cosas por defecto que realiza vite.
 *
 * se importa el objeto defineConfig que espera que hagas una exportancion de una funcion que recibe
 * como parametro un objeto en el cual se parametriza con muchas formas de manjear la aplicacion con vite.
 * 
 * el parametro base referencia a la base del directorio del proyecto agregar con / al inicio y al final.
 */
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/js-vite-black-jack/',
    plugins: []
});