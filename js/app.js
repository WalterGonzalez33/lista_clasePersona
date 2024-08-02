"use strict";

import {
  validateForm,
  resetForm,
  dataPersonForm,
} from "./modules/validateForm.js";
import { createPerson } from "./modules/personData.js";
import { persons, createRowPersonForm } from "./modules/personData.js";

const formCreatePerson = document.getElementById("formCreatePerson");
const btnSubmitForm = document.getElementById("btnSubmitForm");
const tbody = document.getElementById("tbodyPersons");
const windowModal = document.getElementById("createPerson");
const dniNotFound = document.getElementById("dniNotFound");

const formSearchDni = document.getElementById("formSearchDni");
const inputSearchDni = document.getElementById("inputSearchDni");

const contentModalAction = document.getElementById("contentModalAction");
const titleModalAction = document.getElementById("modalGenerationLabel");

// alerta de sweetAlert
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// fn para buscar por DNI
const searchDni = () => {
  const inputDni = inputSearchDni.value;
  const resultSearch = persons.filter((person) =>
    person.data.dni.includes(inputDni)
  );

  if (resultSearch.length === 0) {
    dniNotFound.style.display = "block";
  }
  if (resultSearch.length > 0) {
    dniNotFound.style.display = "none";
  }
  renderPersonList(resultSearch);
};
// fn para eliminar una persona del registro
const delatePerson = (person) => {
  const indexPersonDelate = persons.indexOf(person);
  persons.splice(indexPersonDelate, 1);
  renderPersonList();
  Toast.fire({
    icon: "success",
    title: "Persona eliminada exitosamente",
  });
};
// fn que carga todas las filas en la tabla
const renderPersonList = (listPersons = persons) => {
  tbody.innerHTML = "";
  listPersons.forEach((person, index) => {
    const trPerson = createRowPersonForm(person.data, index + 1);
    tbody.innerHTML += trPerson;
  });

  personActions(listPersons);
};

// fn que llama a los eventos para las acciones
const personActions = (listPersons = persons) => {
  const btnGeneration = document.querySelectorAll(".actionGeneration");
  const btnCheckAge = document.querySelectorAll(".actionCheckAge");
  const btnDelate = document.querySelectorAll(".actionDelatePerson");

  const handleGeneration = (person) => {
    const dataGeneration = person.showGeneration();
    contentModalAction.innerHTML = `<p>${dataGeneration}</p>`;
    titleModalAction.innerText = `Generación`;
  };
  const handleCheckAge = (person) => {
    const checkAge = person.isOlder();
    contentModalAction.innerHTML = `<p>${checkAge.message}</p>`;
    titleModalAction.innerText = `chequeo de edad`;
  };

  for (let i = 0; i < listPersons.length; i++) {
    btnGeneration[i].addEventListener("click", () => {
      handleGeneration(listPersons[i]);
    });
    btnCheckAge[i].addEventListener("click", () => {
      handleCheckAge(listPersons[i]);
    });
    btnDelate[i].addEventListener("click", () => {
      delatePerson(listPersons[i]);
    });
  }
};

// fn del evento submit del formulario
const handleSubmitForm = (e) => {
  e.preventDefault();
  const formValidate = validateForm();
  const dataPerson = dataPersonForm();
  if (formValidate) {
    const modal = bootstrap.Modal.getInstance(windowModal);
    modal.hide();
    resetForm();
    createPerson(...dataPerson);
    renderPersonList();
    Toast.fire({
      icon: "success",
      title: "Persona registra exitosamente",
    });
  }
};

formCreatePerson.addEventListener("submit", handleSubmitForm);
inputSearchDni.addEventListener("change", searchDni);
formSearchDni.addEventListener("submit", (e) => {
  e.preventDefault();
  searchDni();
});
btnSubmitForm.addEventListener("click", () => {
  formCreatePerson.requestSubmit();
});

renderPersonList();
