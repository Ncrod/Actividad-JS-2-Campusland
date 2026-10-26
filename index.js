const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20 },
  { id: 2, nombre: 'Juan', edad: 22 },
  { id: 3, nombre: 'María', edad: 21 },
];

function buscarEstudiantePorId(id) {
  return new Promise(function (resolve, reject) {
    for (const estudiante of estudiantes) {
      if (estudiante.id === id) {
        resolve(estudiante);
        return;
      }
    }

    reject(`No existe un estudiante con el ID ${id}.`);
  });
}

function mostrarEstudiante(id) {
  buscarEstudiantePorId(id)
    .then(function (estudiante) {
      console.log(`Búsqueda del estudiante con ID ${id}`);
      console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(function (mensaje) {
      console.log(`Búsqueda del estudiante con ID ${id}`);
      console.log(`Error: ${mensaje}`);
    });
}

mostrarEstudiante(2);
mostrarEstudiante(1);
mostrarEstudiante(10);
