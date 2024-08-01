'use strict'

import {validateForm, resetForm } from "./modules/validateForm.js"

const formCreatePerson = document.getElementById('formCreatePerson')
const btnSubmitForm = document.getElementById('btnSubmitForm')

const handleSubmitForm = (e) => {
    e.preventDefault()
    const formValidate = validateForm()
    if(formValidate){
        resetForm()
    }
}

formCreatePerson.addEventListener('submit', handleSubmitForm)

btnSubmitForm.addEventListener('click', () => {
  formCreatePerson.requestSubmit();
})
