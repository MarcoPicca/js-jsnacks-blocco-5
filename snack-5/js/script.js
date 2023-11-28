// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti

let teams = [
     { nome: "modinaTeam", punti: getRandomNumber(200, 300), falli: getRandomNumber(0, 30)},
     { nome: "modinoTeam", punti: getRandomNumber(200, 300), falli: getRandomNumber(0, 30) },
     { nome: "modiniTeam", punti: getRandomNumber(200, 300), falli: getRandomNumber(0, 30) },
     { nome: "modineTeam", punti: getRandomNumber(200, 300), falli: getRandomNumber(0, 30) },
     { nome: "modinanoTeam", punti: getRandomNumber(200, 300), falli: getRandomNumber(0, 30) },
     { nome: "modinanaTeam", punti: getRandomNumber(200, 300), falli: getRandomNumber(0, 30) },
     { nome: "modinaniTeam", punti: getRandomNumber(200, 300), falli: getRandomNumber(0, 30) }
];

// teams.forEach(element => {
//     teams.punti = Math.floor(Math.random() * 40);
//     teams.falli = Math.floor(Math.random() * 20);

//     console.log(teams);
// });


function getRandomNumber(min, max){
    return Math.floor(Math.random() * max - min ) + min;
}
