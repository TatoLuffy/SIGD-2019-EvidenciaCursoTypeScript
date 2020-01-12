// Funciones Básicas
function sumar1( a:number, b:number ){
  return a + b;
}

let contar1 = function( heroes:string[] ):number{
  return heroes.length;
}

let superHeroes1:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar1(superHeroes1);

//Parametros por defecto
function llamarBatman1( llamar:boolean = true ): void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman1(true);

// Rest?
function unirheroes1( ...personas:string[] ):string{
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada1( numero: number, texto:string, booleano:boolean, arreglo:any[] ){
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco1 : (n:number, t:string, b:boolean, a:any[])=>void;

noHaceNadaTampoco1 = noHaceNada1;
