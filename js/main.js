//! ESERCIZIO
//* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
//* generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
//* Bonus
//* Abbellire con CSS o Bootstrap
//* Inserire un bottone che al click faccia il fetch per altre 10 mail (sostituendo le altre)

//**************************************************************************************************** */

let emailsArray = [];

const EmailsListEL = document.getElementById("emails-list");
// console.log(EmailsListEL);

for (i = 0; i < 10; i++) {
  fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) => response.json())
    .then((data) => {
      const emailItems = data.response;
      emailsArray.push(emailItems);

      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = emailItems;
      EmailsListEL.appendChild(li);
    });
}

console.log(emailsArray);

// //# PROVA
// let arrayprova = [`abc`, `abc`, `abc`];
// console.log(arrayprova);

// arrayprova.forEach((prova) => {
//   const li = document.createElement("li");
//   li.textContent = prova;
//   EmailsListEL.appendChild(li);
//   console.log(prova);
// });
