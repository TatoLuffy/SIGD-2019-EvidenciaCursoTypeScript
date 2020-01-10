type Coche = {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number,
  disparar?:()=>void
};

// Objetos
let batimovil:Coche = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee: Coche = {
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
let villanos:Villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
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

let charles = {
  poder:"psiquico",
  estatura: 1.78
};

let apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: CharlesType | ApocalipsisType;

mystique = charles;
mystique = apocalipsis;
