/*Istruzioni:
Chiedi all’utente il suo nome, cognome, colore preferito
Infine scrivi sulla pagina il risultato nomecognomecolorepreferito21*/


// tramite il prompt chiediamo il nome e immagazziniamo il dato nella nostra variabile 
var firstName = prompt("Qual'è il tuo nome?");

// tramite il prompt chiediamo il cognome e immagazziniamo il dato nella nostra variabile 
var surname = prompt("Qual'è il tuo cognome?");
// tramite il prompt chiediamo il colore preferito e immagazziniamo il dato nella nostra variabile 
var favoriteColor = prompt("Qual'è il tuo colore preferito?");

// concateniamo in una variabile i dati per l'output nella pagina html 
var safety = firstName + surname + favoriteColor + 21;
document.getElementById('safety').innerHTML = safety;

