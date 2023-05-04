/*
const instructor={
    nombre:"",
    apellido:"",
    materia:"",
    
showTeacher(){
    this.nombre=prompt("ingrese el nombre del instructor")
    this.apellido=prompt("ingrese el apellido del instructor")
    this.materia=prompt("ingrese la materia que enseña el instructor")
    alert(`el nombre del instructor es ${this.nombre}, su apellido es ${this.apellido} y su materia es ${this.materia}`)
}


}
*/
let instructores = [];

//agregar instructores
const instructor = {
  nombre: "",
  apellido: "",
  materia: "",
  showTeacher() {
    this.nombre = prompt("Ingrese el nombre del instructor");
    this.apellido = prompt("Ingrese el apellido del instructor");
    this.materia = prompt("Ingrese la materia que enseña el instructor");
    instructores.push({
      nombre: this.nombre,
      apellido: this.apellido,
      materia: this.materia,
    });
  },
  showInstructors() {
    let message = "Instructores agregados:\n";
    for (let i = 0; i < instructores.length; i++) {
      message += `Nombre: ${instructores[i].nombre}, Apellido: ${instructores[i].apellido}, Materia: ${instructores[i].materia}\n`;
    }
    alert(message);
  },
  searchInstruc() {
    let searchInstructor = prompt("Busque el nombre del instructor")
    let found = false;

    for (let i = 0; i < instructores.length; i++) {
     if (instructores[i].nombre === searchInstructor)
    }
   
  },
};


let opcion = 1;
while (opcion === 1) {
  decision = parseInt(
    prompt("Digite la opción que desee: \n1. Agregar instructor \n2. Ver instructores")
  );
  switch (decision) {
    case 1:
      instructor.showTeacher();
      alert("Se agregó el instructor correctamente");
      break;
    case 2:
      instructor.showInstructors();
      break;
    case 3:
        
        break;
    default:
      break;
  }
  opcion = parseInt(prompt("Elija 1 si desea continuar o 2 si desea salir"));
}
