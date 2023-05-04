let students = [];

function addStudent() {
  let name = prompt("Digite el nombre del estudiante");
  students.push(name);
  alert(`Se ha ingresado correctamente ${students}`);
}
function viewStudent() {
  if (students.length === 0) {
    alert("No hay estudiantes registrados");
  } else {
    alert("Lista de estudiantes:"+students);
  }
}



let opcion = 1;
while (opcion===1) {
  decision=parseInt(prompt("Digite la opción que desee: \n1. Agregar aprendiz \n2. Ver aprendiz \n3. Buscar aprendiz \n4. Modificar aprendiz \n5. Borrar aprendiz \n6. Ordenar"));

  switch (decision) {
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
      ordenarAlfabeticamente(students);
      break;
    default:
      alert("La opción ingresada no es válida.");
      break;
  }
  opcion=parseInt(prompt("Elija 1 si y 2 no"))
}