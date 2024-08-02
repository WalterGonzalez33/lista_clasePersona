"use strict";

import Person from "./person.js";

export const persons = [];

persons.push(new Person("Susana", 20, '45426789', "M", 60.50, 1.7, 2003))
persons.push(new Person("María", 35, '87654321', "M", 60.70, 1.65, 1985))
persons.push(new Person("Juan", 77, '12345678', "H", 70.60, 1.75, 1947))
persons.push(new Person("Pedro", 17, '12345678', "H", 70.90, 1.65, 2007))


export const createPerson = (
  name,
  age,
  dni,
  sex,
  weight,
  height,
  birthYear
) => {
  const newPerson = new Person(name, age, dni, sex, weight, height, birthYear);
  persons.push(newPerson);
};

export const createRowPersonForm = (person, index) => {
  return `<tr class="align-middle">
                <th scope="row">${index}</th>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.dni}</td>
                <td>${person.sex}</td>
                <td>${person.weight}kg</td>
                <td>${person.height}m</td>
                <td>${person.birthYear}</td>
                <td class="p-2">
                  <button id="${person.dni}" class="m-2 btn btn-warning">Generación</button>
                  <button id="${person.dni}" class="m-2 btn btn-info">Check edad</button>
                </td>
              </tr>`;
};

