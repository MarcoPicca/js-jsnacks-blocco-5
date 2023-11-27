// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.




let arrayAutomobili = [
    { marca: 'fiat', modello: 'corolla', alimentazione: 'benzina' },
    { marca: 'wolksvagen', modello: 'modello2', alimentazione: 'diesel' },
    { marca: 'fiat', modello: 'modello3', alimentazione: 'gpl' },
    { marca: 'fiat', modello: 'modello4', alimentazione: 'metano' },
    { marca: 'fiat', modello: 'modello5', alimentazione: 'elettrico' },
    { marca: 'fiat', modello: 'modello6', alimentazione: 'benzina' },
    { marca: 'fiat', modello: 'modello7', alimentazione: 'metano' },
    { marca: 'fiat', modello: 'modello8', alimentazione: 'diesel' },
    { marca: 'fiat', modello: 'modello9', alimentazione: 'gpl' },
    { marca: 'fiat', modello: 'modello10', alimentazione: 'benzina' }
];


const automobiliBenzina = [];
const automobiliDiesel = [];
const altreAlimentazioni = [];


// arrayAutomobili.forEach(auto => {
//     if (auto.alimentazione === 'benzina') {
//         automobiliBenzina.push(auto);
//     } else if (auto.alimentazione === 'diesel') {
//         automobiliDiesel.push(auto);
//     } else {
//         altreAlimentazioni.push(auto);
//     }
// });


const autoBenzina = arrayAutomobili.filter((auto) => {
    if ( auto.alimentazione.includes('benzina')) {
        return true;
    }
})

const autoDiesel = arrayAutomobili.filter((auto) => {
    if ( auto.alimentazione.includes('diesel')) {
        return true;
    }
})

const altreAlimentazioni = arrayAutomobili.filter((auto) => {
    if ( !auto.alimentazione.includes('diesel') && !auto.alimentazione.includes('benzina') )
    return true;
})


console.log(automobiliBenzina);
console.log(automobiliDiesel);
console.log(altreAlimentazioni);


