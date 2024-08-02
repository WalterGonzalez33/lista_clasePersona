"use strict";

import Person from "./person.js";
import { persons } from "./personData.js";


const inputName = document.getElementById("name");
const inputDni = document.getElementById("dni");
const btnDni = document.getElementById('btnDni')
const inputAge = document.getElementById("age");
const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");
const inputSex = document.getElementById("sex");
const inputBirthday = document.getElementById("birthday");
const formWarnings = document.getElementById("formWarnings");

const inputDanger = (input) => {
  input.classList.remove("border-success");
  input.classList.remove("focus-ring");
  input.classList.remove("focus-ring-success");
  input.classList.add("border-danger");
  input.classList.add("focus-ring");
  input.classList.add("focus-ring-danger");
};
const inputSuccess = (input) => {
  input.classList.remove("border-danger");
  input.classList.remove("focus-ring");
  input.classList.remove("focus-ring-danger");
  input.classList.add("border-success");
  input.classList.add("focus-ring");
  input.classList.add("focus-ring-success");
};
const resetStyleInput = (input) => {
  input.classList.remove("border-danger");
  input.classList.remove("focus-ring");
  input.classList.remove("focus-ring-danger");
  input.classList.remove("border-success");
  input.classList.remove("focus-ring");
  input.classList.remove("focus-ring-success");
};

const validateWeight = () => {
  const numberPattern = /^\d+(\.\d{1,2})?$/;

  if (inputWeight.value.length === 0) {
    formWarnings.innerHTML = "El peso es un campo obligatorio";
    inputDanger(inputWeight);
    inputWeight.focus();
    return false;
  }

  if (inputWeight.value.length > 7) {
    formWarnings.innerHTML = "El peso no puede superar los 7 caracteres";
    inputDanger(inputWeight);
    inputWeight.focus();
    return false;
  }
  if (!numberPattern.test(inputWeight.value)) {
    formWarnings.innerHTML = "A ingresado mal el peso (ej: 60.30)";
    inputDanger(inputWeight);
    inputWeight.focus();
    return false;
  }

  inputSuccess(inputWeight);
  formWarnings.innerHTML = "";
  return true;
};

const validateHeight = () => {
  const numberPattern = /^\d+(\.\d{1,2})?$/;

  if (inputHeight.value.length === 0) {
    formWarnings.innerHTML = "La altura es un campo obligatorio";
    inputDanger(inputHeight);
    inputHeight.focus();
    return false;
  }

  if (inputHeight.value.length > 5) {
    formWarnings.innerHTML = "La altura no puede superar los 5 caracteres";
    inputDanger(inputHeight);
    inputHeight.focus();
    return false;
  }

  if (!numberPattern.test(inputHeight.value)) {
    formWarnings.innerHTML = "A ingresado mal la altura (ej: 1.70)";
    inputDanger(inputHeight);
    inputHeight.focus();
    return false;
  }

  inputSuccess(inputHeight);
  formWarnings.innerHTML = "";
  return true;
};
const validateAge = () => {
  if (inputAge.value.length === 0) {
    formWarnings.innerHTML = "La edad es un campo obligatorio";
    inputDanger(inputAge);
    inputAge.focus();
    return false;
  }
  if (inputAge.value.length > 3) {
    formWarnings.innerHTML = "La edad no puede superar los 3 caracteres";
    inputDanger(inputAge);
    inputAge.focus();
    return false;
  }

  inputSuccess(inputAge);
  formWarnings.innerHTML = "";
  return true;
};

const validateDni = () => {
  const dniFind = findDni(inputDni.value)

  if(dniFind){
    formWarnings.innerHTML = "El DNI ingresado ya esta registrado";
    inputDanger(inputDni);
    inputDni.focus();
    return false;
  }
  if (inputDni.value.length === 0) {
    formWarnings.innerHTML = "El DNI es un campo obligatorio";
    inputDanger(inputDni);
    inputDni.focus();
    return false;
  }
  if (inputDni.value.length > 9) {
    formWarnings.innerHTML = "El DNI no puede superar los 9 caracteres";
    inputDanger(inputDni);
    inputDni.focus();
    return false;
  }
  if (inputDni.value.length < 7) {
    formWarnings.innerHTML = "El DNI no puede tener menos de 7 caracteres";
    inputDanger(inputDni);
    inputDni.focus();
    return false;
  }

  inputSuccess(inputDni);
  formWarnings.innerHTML = "";
  return true;
}
const validateBirthday = () => {
  if (inputBirthday.value.length === 0) {
    formWarnings.innerHTML = "El año de nacimiento es un campo obligatorio";
    inputDanger(inputBirthday);
    inputBirthday.focus();
    return false;
  }
  if (inputBirthday.value.length > 4) {
    formWarnings.innerHTML =
      "El año de nacimiento no puede superar los 4 caracteres";
    inputDanger(inputBirthday);
    inputBirthday.focus();
    return false;
  }

  inputSuccess(inputBirthday);
  formWarnings.innerHTML = "";
  return true;
};

const validateName = () => {
  if (inputName.value.length === 0) {
    formWarnings.innerHTML = "El nombre es un campo obligatorio";
    inputDanger(inputName);
    inputName.focus();
    return false;
  }
  if (inputName.value.length > 20) {
    formWarnings.innerHTML = "El nombre no puede superar los 20 caracteres";
    inputDanger(inputName);
    inputName.focus();
    return false;
  }
  if (inputName.value.length < 2) {
    formWarnings.innerHTML = "El nombre no puede tener menos de dos caracteres";
    inputDanger(inputName);
    inputName.focus();
    return false;
  }

  inputSuccess(inputName);
  formWarnings.innerHTML = "";
  return true;
};

const findDni = (dni) => {
  const dniFind = persons.find(person => person.data.dni == dni)

  return dniFind
}

const dniGeneration = () => {
  const personStay = new Person()
  const randomDni = personStay.generateDni()
  const checkDni = findDni(randomDni)
  if(checkDni){
    dniGeneration()
  }
  inputDni.value = randomDni
}

export const validateForm = () => {
  if (
    validateName() &&
    validateAge() &&
    validateWeight() &&
    validateHeight() &&
    validateBirthday() &&
    validateDni()
  ) {
    return true;
  }

  return false;
};

export const resetForm = () => {
  resetStyleInput(inputName);
  resetStyleInput(inputAge);
  resetStyleInput(inputWeight);
  resetStyleInput(inputHeight);
  resetStyleInput(inputBirthday);
  resetStyleInput(inputDni)

  inputName.value = "";
  inputAge.value = "";
  inputWeight.value = "";
  inputHeight.value = "";
  inputBirthday.value = "";
  inputDni.value = "";
};

export const dataPersonForm = () => {

  const sex = inputSex.value === '1' ? "X" : inputSex.value === '2' ? "H" : "M";

  return [
    inputName.value,
    inputAge.value,
    inputDni.value,
    sex,
    inputWeight.value,
    inputHeight.value,
    inputBirthday.value,
  ];
};

inputName.addEventListener("change", validateName);
inputAge.addEventListener("change", validateAge);
inputWeight.addEventListener("change", validateWeight);
inputHeight.addEventListener("change", validateHeight);
inputBirthday.addEventListener("change", validateBirthday);
inputDni.addEventListener('change', validateDni)
btnDni.addEventListener('click', dniGeneration)
