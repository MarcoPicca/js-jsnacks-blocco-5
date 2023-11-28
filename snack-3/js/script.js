// Un oggetto rappresenta una finestra di un browser e contiene due campi: 
// un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.



const openApp = {
    "tab": ["Facebook", "GitHub", "Gmail", "Flixbus", "Reddit", "Trenitalia", "instagram"],
    "activeTab": 0
}

const social = ["Facebook", "Reddit", "instagram"];

openApp.tab = openApp.tab.filter((element) => {
    if ( !social.includes(element.toLocaleLowerCase())){
        return true;
    }
});

console.log(openApp);







