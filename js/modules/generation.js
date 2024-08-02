"use strict";

class Generation {
  // Propiedades privadas
  #generations;
  #defaultGeneration;
  #birthYear

  constructor(birthYear) {
    this.#birthYear = birthYear;

    this.#generations = [
      {
        generation: "Generación Z",
        trait: "Irreverencia",
        timeFrame: { from: 1994, to: 2010 },
      },
      {
        generation: "Generación Y (Millennials)",
        trait: "Frustración",
        timeFrame: { from: 1981, to: 1993 },
      },
      {
        generation: "Generación X",
        trait: "Obsesión por el éxito",
        timeFrame: { from: 1969, to: 1980 },
      },
      {
        generation: "Generación Baby Boom",
        trait: "Ambición",
        timeFrame: { from: 1949, to: 1968 },
      },
      {
        generation: "Generación Silent Generation (Los niños de la posguerra)",
        trait: "Austeridad",
        timeFrame: { from: 1930, to: 1948 },
      },
    ];

    this.#defaultGeneration = {
      generation: "Generación no encontrada",
      trait: "N/D",
      timeFrame: { from: 0, to: 0 },
    };
  }

  // Método para determinar la generación
  #determineGeneration() {
    for (const generation of this.#generations) {
      if (
        this.#birthYear >= generation.timeFrame.from &&
        this.#birthYear <= generation.timeFrame.to
      ) {
        return generation;
      }
    }
    return this.#defaultGeneration;
  }

  // Método get para obtener la generación
  get generation() {
    return this.#determineGeneration();
  }
  // Método get para obtener el año de nacimiento
  get birthYear(){
    return this.#birthYear
  }
}

export default Generation