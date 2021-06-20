const submitButton = document.getElementById("submitButton");
const firstName = document.getElementById("first-name");
// const firstIcon = firstName.nextElementSibling;
const errorFirstName = document.getElementById("error-message-first-name");
const lastName = document.getElementById("last-name");
const errorLastName = document.getElementById("error-message-last-name");
const email = document.getElementById("email");
const errorEmail = document.getElementById("error-message-email");
const password = document.getElementById("password");
const errorPassword = document.getElementById("error-message-password");
// console.log(
//      submitButton,
//      firstName,
//      firstIcon,
//      errorFirstName,
//      lastName,
//      errorLastName,
//      "emai",
//      email,
//      errorEmail,
//      "email-ICON-SIBLING",
//      errorEmail.nextElementSibling,
//      "emailEND",
//      password,
//      errorPassword,
     
// );

console.log(email,email.nextElementSibling)

const submitHandler = (e) => {
     e.preventDefault();
     console.log(e, "submitClicked", firstName.value);
     if (!firstName.value) {
          errorFirstName.className = "error-message";
          firstName.nextElementSibling.className = "error-icon";
     } else {
          errorFirstName.className = "error-message hide";
          firstName.nextElementSibling.className = "error-icon hide";
     }
     //
     if (!lastName.value) {
          errorLastName.className = "error-message";
          lastName.nextElementSibling.className = "error-icon";
     } else {
          errorLastName.className = "error-message hide";
          lastName.nextElementSibling.className = "error-icon hide";
     }
     //
     if (!password.value) {
          errorPassword.className = "error-message";
          password.nextElementSibling.className = "error-icon";
     } else {
          errorPassword.className = "error-message hide";
          password.nextElementSibling.className = "error-icon hide";
     }
     //
     let validEmail = false;
     console.log(email.value, email.value.includes("@"));
     validEmail = email.value.includes("@");
     console.log(validEmail);
     validEmail = email.value.includes(".");
     console.log(validEmail);
     if (!validEmail) {
          errorEmail.className = "error-message";
          email.nextElementSibling.className="error-icon"
     } else {
        errorEmail.className = "error-message hide";
        email.nextElementSibling.className="error-icon hide"
     }
};
