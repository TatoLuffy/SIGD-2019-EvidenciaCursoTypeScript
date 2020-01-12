// Crear interfaces
interface Auto {
  encender:boolean;
  velocidadMaxima:number;
  acelear():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil2( auto:Auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil2:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir:boolean;
  comer:boolean;
  llorar?:boolean;
}

let guason2:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Guason ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface Ciudad{
  ( todosciudadanos:string[]):number
}

let ciudad : Ciudad;

ciudad = 
  function ciudadGotica( ciudadanos:string[] ):number{
    return ciudadanos.length;
  };

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Persona {
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio():void;
};

class Jose implements Persona {
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio(){
    console.log("Imprimiendo los datos de " + this.nombre);
  }

  constructor(nombre:string, edad:number, sexo:string, estadoCivil:string){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
