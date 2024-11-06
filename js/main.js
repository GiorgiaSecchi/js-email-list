// console.log("JS OK");

let emailsArray = [];

for (i = 0; i < 10; i++) {
  fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) => response.json())
    .then((data) => {
      const emailsItems = data.response;
      emailsArray.push(emailsItems);
      console.log(emailsArray);
      //   console.log(data.response);
    });
}
