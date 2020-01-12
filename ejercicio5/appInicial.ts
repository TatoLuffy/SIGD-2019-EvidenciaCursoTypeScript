// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil3 = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

let guason3 = {
  reir: true,
  comer:true,
  llorar:false
}

function reir2( guason3 ):void{
  if( guason3.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

function ciudadGotica( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
