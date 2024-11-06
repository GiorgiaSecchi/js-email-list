// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch per altre 10 mail (sostituendo le altre)

let emailsArray = [];

for (i = 0; i < 10; i++) {
  fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) => response.json())
    .then((data) => {
      const emailItems = data.response;
      emailsArray.push(emailItems);
      //   console.log(emailItems);
    });
}

console.log(emailsArray);
