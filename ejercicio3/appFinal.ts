type Coche = {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number,
  disparar?:()=>void
};

// Objetos
let batimovil1:Coche = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee1: Coche = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar():void{ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type Villanos = {
  nombre:string,
  edad:number,
  mutante:boolean
};

// Villanos debe de ser un arreglo de objetos personalizados
let villanos1:Villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 22,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type CharlesType = {
  poder:string,
  estatura:number
};

type ApocalipsisType = {
  lider:boolean,
  miembros: string[]
};

let charles1 = {
  poder:"psiquico",
  estatura: 1.78
};

let apocalipsis1 = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique1: CharlesType | ApocalipsisType;

mystique = charles1;
mystique = apocalipsis1;
