// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.


//----------
// forEach
//----------


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const numMin = parseInt(prompt('Inserisci un numero "numMin:"'));
const numMax = parseInt(prompt('Inserisci un numero "numMax:"'));

// let newArray = [];

// if (numMin < numMax){
//     myArray.forEach((element, index, array) => {
//         if ( index > numMin && index < numMax ){
//             newArray.push(element);
//         }
//     });

// }else{
//     alert('numMin non può essere più grande di numMax');
// }

// console.log(newArray);


//----------
// filter
//----------

const newFilterArray = myArray.filter((element, index, array) => {
    if( numMin < numMax ){
        if(index > numMin && index < numMax){
            return element;
        }
    }else{
        alert('numMin non può essere più grande di numMax');
    }
});
console.log(newFilterArray);

