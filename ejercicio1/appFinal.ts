// Tipos
let batman1:string = "Bruce";
let superman1:string = "Clark";

let existe1:boolean = false;

// Tuplas
let parejaHeroes1:[string,string] = [batman1,superman1];
let villano1:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados1:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
let fuerzaFlash1:number = 5;
let fuerzaSuperman1:number = 100;
let fuerzaBatman1:number = 1;
let fuerzaAcuaman1:number = 0;

// Retorno de funciones
function actilet_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder1:string = "100";
let largoDelPoder1:number = poder.length;
console.log( largoDelPoder1 );
