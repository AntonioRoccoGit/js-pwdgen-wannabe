// avviso per utente
alert ('Qeusta pagina è in fase sperimentale, si prega di rispettare l\' inserimento dei dati così come richiesti')

// recupero dati
const userName = prompt("Inserire Nome");
console.log(userName);

const userSurname = prompt("Inserire Cognome");
console.log(userSurname);

const userColor = prompt("Inserire colore preferito");
console.log(userColor);


let randomNumbr = Math.floor(Math.random() * 100);
//concateniamo i dati
let randmPswrd = (`${userName}${userSurname}${userColor}${randomNumbr}`)
console.log(randmPswrd);

//visualizziamo il risultato
document.getElementById("randmPswrd").innerHTML = randmPswrd;




