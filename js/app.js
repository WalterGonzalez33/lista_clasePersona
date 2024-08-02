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
const windowModal = document.getElementById('createPerson')

// alerta de sweetAlert
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// fn que carga todas las filas en la tabla
const renderPersonList = () => {
  tbody.innerHTML = "";
  persons.forEach((person, index) => {
    const trPerson = createRowPersonForm(person.data, index + 1);
    tbody.innerHTML += trPerson;
  });
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

btnSubmitForm.addEventListener("click", () => {
  formCreatePerson.requestSubmit();
});

renderPersonList();
