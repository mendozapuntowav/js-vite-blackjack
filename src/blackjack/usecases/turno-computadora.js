import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora utiliza para ganar
 * @param {HTMLElement} puntosHTML elemento HTML param ostrar los puntos
 * @param {divCartasComputadora} divCartasComputadora elemento HTML para mostrar
 * @param {Array<String>} deck
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora , deck  ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        const imgCarta = crearCartaHTML(carta);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
       // TODO: crear carta
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}