/* eslint-disable no-unused-vars */
let checker = false;
function ordProb(e) {
  if (e.target.id === "ordProb" && e.target.checked) {
    checker = true;
    let createInput = document.createElement("input");
    let inputBox = document.getElementById('selectionAbout').appendChild(createInput);
    inputBox.id = "ordNumBox";
    inputBox.placeholder = "Order Number";
    inputBox.name = "orderNumber";
  }

  if ((e.target.id === "comm" || e.target.id === "quest") && checker) {
    checker = false;
    document.getElementById("ordProb").nextElementSibling.style.color = "black";
    document.getElementById("ordNumBox").remove();
  }
}

function validateName() {
  var eachChar = true;
  var nameBox = document.querySelector("#name");
  var inputValue = nameBox.value.trim();
  inputValue = inputValue.toUpperCase();
  let nameErrElem = document.getElementById('errName');

  for (var i = 0; i < inputValue.length; i++) {
    if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") {
      eachChar = false;
    }
  }
  if (!eachChar) {
    nameErrElem.innerHTML = "No digits in name field";
    nameErrElem.style.color = "red";
    nameBox.className = "error";
    nameBox.previousElementSibling.style.color = "red";
    nameBox.focus();
    return false;
  } else if (inputValue.length === 0) {
    nameErrElem.innerHTML = "Name Required";
    nameErrElem.style.color = "red";
    nameBox.className = "error";
    nameBox.previousElementSibling.style.color = "red";
    nameBox.focus();
    return false;
  }

  nameErrElem.innerHTML = "";
  nameErrElem.style.color = "black";
  nameBox.className = "";
  nameBox.previousElementSibling.style.color = "black";
  return true;
}

function validateMessage() {
  let messageBox = document.getElementById('message');
  let msgErrElem = document.getElementById('errMsg');
  if (messageBox.value.trim().length === 0) {
    msgErrElem.innerHTML = "Please Enter a Short Message";
    msgErrElem.style.color = "red";
    messageBox.className = "error";
    messageBox.previousElementSibling.previousElementSibling.previousElementSibling.style.color = "red";
    messageBox.value = "";
    messageBox.focus();
    return false;
  }
  msgErrElem.innerHTML = "";
  msgErrElem.style.color = "black";
  messageBox.className = "";
  messageBox.previousElementSibling.previousElementSibling.previousElementSibling.style.color = "black";
  return true;
}

function validateEmail() {
  let emailBox = document.getElementById('email');
  let msgErrElem = document.getElementById('errEmail');
  if (emailBox.value.trim().length === 0) {
    msgErrElem.innerHTML = "Email Required";
    msgErrElem.style.color = "red";
    emailBox.className = "error";
    emailBox.previousElementSibling.style.color = "red";
    emailBox.value = "";
    emailBox.focus();
    return false;
  }
  msgErrElem.innerHTML = "";
  msgErrElem.style.color = "black";
  emailBox.className = "";
  emailBox.previousElementSibling.style.color = "black";
  return true;
}

function validateCity() {
  let cityBox = document.getElementById('city');
  let msgErrElem = document.getElementById('errCity');
  if (cityBox.value === "") {
    msgErrElem.innerHTML = "City Required";
    msgErrElem.style.color = "red";
    cityBox.className = "error";
    cityBox.previousElementSibling.style.color = "red";
    cityBox.value = "";
    cityBox.focus();
    return false;
  }
  msgErrElem.innerHTML = "";
  msgErrElem.style.color = "black";
  cityBox.className = "";
  cityBox.previousElementSibling.style.color = "black";
  return true;
}

function validatePostal() {
  let postalBox = document.getElementById('postal');
  let msgErrElem = document.getElementById('errPostal');
  if (postalBox.value.trim().length === 0) {
    msgErrElem.innerHTML = "Postal Code Required";
    msgErrElem.style.color = "red";
    postalBox.className = "error";
    postalBox.previousElementSibling.style.color = "red";
    postalBox.value = "";
    postalBox.focus();
    return false;
  }
  msgErrElem.innerHTML = "";
  msgErrElem.style.color = "black";
  postalBox.className = "";
  postalBox.previousElementSibling.style.color = "black";
  return true;
}

function validateOrderNum() {
  let orderNumBox = document.getElementById('ordNumBox');
  if (orderNumBox !== null && orderNumBox.value.trim().length === 0) {
    orderNumBox.className = "error";
    orderNumBox.previousElementSibling.style.color = "red";
    orderNumBox.value = "";
    orderNumBox.focus();
    return false;
  }
  if (orderNumBox !== null) {
    orderNumBox.className = "";
    orderNumBox.previousElementSibling.style.color = "black";
  }
  return true;
}

function validForm() {
  let fullyValid = true;
  if (validateName() === false) {
    fullyValid = false;
  }
  if (validateMessage() === false) {
    fullyValid = false;
  }
  if (validateEmail() === false) {
    fullyValid = false;
  }
  if (validateCity() === false) {
    fullyValid = false;
  }
  if (validatePostal() === false) {
    fullyValid = false;
  }
  if (validateOrderNum() === false) {
    fullyValid = false;
  }

  return fullyValid;
}

window.onload = function () {
  document.getElementById('selectionAbout').addEventListener("change", ordProb);
};
