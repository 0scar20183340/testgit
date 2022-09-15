let entHora = 13;
let entMIn = 20;
let entSeg = 50;

let salHora = 14;
let salMIn = 20;
let salSeg = 55;



function caca (){

let restHora = salHora - entHora;
let restMin = entMIn - salMIn;
let restSeg = entSeg - salSeg;

if(entMIn > salMIn){
  restMin = (60 - entMIn) + salMIn;
  restHora -= 1;
}


"AQUI HAY PEDOS"
if(entSeg > salSeg && entMIn < salMIn){
  restSeg = (60 - entSeg) + salSeg;
  restMin += 1;
} else if(entSeg > salSeg && entMIn > salMIn){
  restSeg = (60 - entSeg) + salSeg;
  restMin -= 1;
}
 "AQUI HAY PEDOS"

if(restHora  < 0 ){
  restHora *=-1;
} 
if(restMin < 0){
  restMin *= -1;
} 
if (restSeg < 0){
  restSeg *= -1;
}

  let respuuesta = `${restHora}:${restMin}:${restSeg}`;
return respuuesta;

}

console.log(`ENTRO ${entHora} : ${entMIn} : ${entSeg}`);
console.log(`SALIO ${salHora} : ${salMIn} : ${salSeg}`);
console.log(`HORAS TRABAJADAS: ${caca()}`);