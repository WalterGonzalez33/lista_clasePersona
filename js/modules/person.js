'use strict'

import Generation from "./generation.js"

class Person extends Generation {
    // Propiedades privadas
    #name
    #dni
    #sex
    #age
    #weight
    #height
  
    constructor(name, age, dni, sex, weight, height, birthYear) {
      super(birthYear);
  
      this.#name = name;
      this.#age = age;
      this.#dni = dni;
      this.#sex = sex;
      this.#weight = weight;
      this.#height = height;
    }
  
    // Método get para obtener los datos en un objeto
    get data(){
      return {
        name: this.#name,
        age: this.#age,
        dni: this.#dni,
        sex: this.#sex,
        weight: this.#weight,
        height: this.#height,
        birthYear: this.birthYear
      }
    }
    // Método para obtener los datos en un texto informativo
    showData(){
      return `nombre: ${this.#name}, edad: ${this.#age}, DNI: ${this.#dni}, sexo: ${this.#sex}, peso: ${this.#weight}, altura: ${this.#height}, año de nacimiento: ${this.birthYear}`
    }
    // Método para mostrar la generación
    showGeneration() {
      let generationInfo = this.generation;
      return `${this.#name} pertenece a la ${generationInfo.generation} y su rasgo característico es la ${generationInfo.trait}.`;
    }
    // Método para devuelve si es mayor de edad
    isOlder() {
      if (this.#age >= 18) {
        return { result: true, message: `${this.#name} es mayor de edad` };
      }
      return { result: false, message: `${this.#name} no es mayor de edad` };
    }
      // Método que genera un DNI aleatorio
    generateDni(){
      return Math.floor(Math.random() * 11111111)
    }
}

export default Person