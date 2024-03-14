/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} VALOR DE LA CARTA
 */


export const valorCarta = ( carta ) => {

    if(!carta || carta.length === 0  ) 
        throw new Error('TiposDeCarta es obligatorio');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}