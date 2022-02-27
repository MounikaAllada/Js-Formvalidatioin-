document.querySelector("#names").addEventListener("keydown", function () {
  let name = document.querySelector("#names").value;
  let valid1 = /^[a-zA-Z ]{2,30}$/;
  if (name.match(valid1)) {
    document.querySelector("#names").style.backgroundColor = "green";
  } else {
    document.querySelector("#names").style.backgroundColor = "red";
  }
});

document.querySelector("#mails").addEventListener("keydown", function () {
  let email = document.querySelector("#mails").value;

  let valid2 = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";

  if (email.match(valid2)) {
    document.querySelector("#mails").style.backgroundColor = "green";
  } else {
    document.querySelector("#mails").style.backgroundColor = "red";
  }
});

document.querySelector("#numbers").addEventListener("keydown", function () {
  let number = document.querySelector("#numbers").value;

  let valid3 = /^[0-9]*\d$/;

  if (number.match(valid3)) {
    document.querySelector("#numbers").style.backgroundColor = "green";
  } else {
    document.querySelector("#numbers").style.backgroundColor = "red";
  }
});

document.querySelector("#passwords").addEventListener("keydown", function () {
  let password = document.querySelector("#passwords").value;

  let valid4 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (password.match(valid4)) {
    document.querySelector("#passwords").style.backgroundColor = "green";
  } else {
    document.querySelector("#passwords").style.backgroundColor = "red";
  }
});

document.querySelector("#submit").addEventListener("click", formvalidation);

let c = document.querySelectorAll(".data");

function formvalidation() {
  for (let i of c) {
    if (
      name.match(valid1) &&
      password.match(valid4) &&
      number.match(valid3) &&
      email.match(valid2)
    ) {
      alert("ur form has been submitted successfully");
    } else {
      alert("enter valid details");
    }
  }
}
