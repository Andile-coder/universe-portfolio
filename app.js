let el = document
  .querySelector(".btn-btn-default-btn-lg")
  .addEventListener("click", submitForm);

document.getElementById("test").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let subject = document.querySelector("#subject").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  console.log(subject, email, message);

  sendEmail(subject, email, message);

  //document.querySelector(".btn btn-default btn-lg").reset();
}
function sendEmail(subject, email, message) {
  Email.send({
    Host: "smtp@gmail.com",
    Username: "maselaandile@gmail.com",
    Password: "prasvlccclaowfvn",
    To: "maselaandile@gmail.com",
    From: "maselaandile@gmail.com",
    Subject: `${subject}`,
    Body: `${email} <br/> ${message}`,
  })
    .then((message) => alert("mail has been succefully sent"))
    .catch((message) => alert("error sending message"));
}
