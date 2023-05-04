let students = [];

function addStudent() {
  let name = prompt("Digite el nombre del estudiante");

  let student = {
    name
  };
  students.push(student);
  console.log("Estudiante agregado exitosamente");
}

function viewStudent() {
  if (students.length === 0) {
    console.log("No hay estudiantes registrados");
  } else {
    console.log("Lista de estudiantes:");
    for (let i = 0; i < students.length; i++) {
      console.log(
        `Nombre: ${students[i].name}`
      );
    }
  }
}

function searchStudent() {
  let searchDocument = prompt("Digite el número de documento del estudiante que desea buscar");
  let found = false;
  for (let i = 0; i < students.length; i++) {
    if (students[i].numberDocument === searchDocument) {
      console.log(`Estudiante encontrado: ${students[i].name} `);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log(`Estudiante con número de documento ${searchDocument} no encontrado`);
  }
}

function modifyStudent() {
  let searchDocument = prompt("Digite el número de documento del estudiante que desea modificar");
  let found = false;
  for (let i = 0; i < students.length; i++) {
    if (students[i].numberDocument === searchDocument) {
      let option = prompt("¿desea modificar el 1-Nombre");
      switch (option) {
        case "1":
          let newName = prompt("Digite el nuevo nombre");
          students[i].name = newName;
          break;
        default:
          console.log("Opción inválida");
      }
      console.log("Estudiante modificado exitosamente");
      found = true;
      break;
    }
  }
  if (!found) {
    console.log(`Estudiante con nombre ${searchDocument} no encontrado`);
  }
}

function deleteStudent() {
  let searchDocument = prompt("Digite el número de documento del estudiante que desea borrar");
  let found = false;
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === searchDocument) {
      students.splice(i, 1);
      console.log("Estudiante borrado exitosamente");
      found = true;
      break;
    }
  }
  if (!found) {
    console.log(`Estudiante con número de documento ${searchDocument} no encontrado`);
  }
}
function orderAlphabetically(students) {
  students.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // convertir el nombre a mayúsculas para ignorar diferencias de mayúsculas y minúsculas
    var nameB = b.name.toUpperCase(); // convertir el nombre a mayúsculas para ignorar diferencias de mayúsculas y minúsculas
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // los nombres son iguales
    return 0;
  });
}


let opcion = 0;
while (opcion != 6) {
  opcion = parseInt(prompt("Digite la opción que desee: \n1. Agregar aprendiz \n2. Ver aprendiz \n3. Buscar aprendiz \n4. Modificar aprendiz \n5. Borrar aprendiz \n6. Ordenar \n7. Salir"));

  switch (opcion) {
    case 1:
      addStudent();
      break;
    case 2:
      viewStudent();
      break;
    case 3:
      searchStudent();
      break;
    case 4:
      modifyStudent();
      break;
    case 5:
      deleteStudent();
      break;
    case 6:
        orderAlphabetically();
      break;
    case 7:
      alert("Gracias por usar nuestro programa.");
      break;
    default:
      alert("La opción ingresada no es válida.");
      break;
  }
}