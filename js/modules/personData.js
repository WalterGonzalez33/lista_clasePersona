"use strict";

import Person from "./person.js";

export const persons = [];

persons.push(new Person("Susana", 20, "45426789", "M", 60.5, 1.7, 2003));
persons.push(new Person("María", 35, "87654321", "M", 60.7, 1.65, 1985));
persons.push(new Person("Juan", 77, "12345678", "H", 70.6, 1.75, 1947));
persons.push(new Person("Pedro", 17, "1234567", "H", 70.9, 1.65, 2007));

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
  return `<tr id="${person.dni}" class="align-middle">
                <th scope="row">${index}</th>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.dni}</td>
                <td>${person.sex}</td>
                <td>${person.weight}kg</td>
                <td>${person.height}m</td>
                <td>${person.birthYear}</td>
                <td class="p-2">
                  <button class="m-2 btn btn-warning fw-bold actionGeneration" data-bs-toggle="modal" data-bs-target="#modalGeneration">Generación</button>
                  <button class="m-2 btn btn-info fw-bold actionCheckAge" data-bs-toggle="modal" data-bs-target="#modalGeneration">Check edad</button>
                  <button class="m-2 fs-4 btn text-danger actionDelatePerson"><i class="bi bi-x-lg"></i></button>
                </td>
              </tr>`;
};
