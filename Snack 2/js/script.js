// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const mySquadre =
[
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    }
];

let newMySquadre = [];

for( let i = 0; i < mySquadre.length; i++ ){
    thisSquadra = mySquadre[i];
    thisSquadra.punti = getRndInteger(1, 10);
    thisSquadra.falli = getRndInteger(1,10);
       
    console.log(thisSquadra);

    const { nome, falli } = thisSquadra;
    const copySquadra = {
        nome,
        falli
    };

    newMySquadre.push(copySquadra);
}
console.log(newMySquadre);

//----------------------------
// FUNZIONI
//----------------------------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }