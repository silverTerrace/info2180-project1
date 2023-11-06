document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  form.setAttribute("novalidate", true);
  const message = document.querySelector(".message");

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (
      form["email"].value == "" ||
      validateEmail(form["email"].value) == false
    ) {
      message.innerHTML = "Please enter a valid email address";
    } else {
      message.innerHTML =
        "Thank you! Your email address has been added to our mailing list!";
    }
  });
});
