// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona,
//  una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.



const people = [
    { nome: 'Paolo', cognome: 'Guascone', età: '25' },
    { nome: 'Giorgio', cognome: 'Novizio', età: '34' },
    { nome: 'Cralo', cognome: 'Luodardi', età: '16' },
    { nome: 'Mirco', cognome: 'Finozzi', età: '28' },
    { nome: 'Franca', cognome: 'Guarnesi', età: '48' },
    { nome: 'Ludovica', cognome: 'Gioggi', età: '15' },
    { nome: 'Sergio', cognome: 'Livornesi', età: '23' },
    { nome: 'Cristian', cognome: 'Univazzi', età: '37' },
    { nome: 'Piero', cognome: 'Sangriolo', età: '12' },
    { nome: 'Maurizio', cognome: 'Cortolino', età: '32' }
];

const puoGuidare = people.map((persona) => {
    if ( persona.età < 18) {
        console.log('Non puoi guidare');
    } else {
        console.log('guida piano')
    }
})


