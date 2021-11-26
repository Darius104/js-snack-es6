// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

// Creare un array di oggetti:
let myArray = [];

myArray = 
[
    {
        nome: 'A321',
        peso: 16
    },
    {
        nome: 'B421',
        peso: 12
    },
    {
        nome: 'C521',
        peso: 14
    },
    {
        nome: 'D621',
        peso: 15
    }
];

let biciLeggera = myArray[0];

for( let i = 0; i < myArray.length; i++ ){
    thisObj = myArray[i];
    console.log(thisObj);
    if(thisObj.peso < biciLeggera.peso){
        biciLeggera = thisObj;
    }
}

const { nome, peso } = biciLeggera;
// console.log(nome);
// console.log(peso);


const container = document.getElementById('container');
const biciHTML = `
    <h2>Nome: ${nome}</h2>
    <h2>Peso: ${peso}</h2>
`;
container.innerHTML = biciHTML;



