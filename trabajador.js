
let entHora = 13;
let entMIn = 26;
let entSeg = 30;

let salHora = 19;
let salMIn = 50;
let salSeg = 0;


function trabajo(){
 if(salMIn > entMIn){
  entHora -= 1;
  entMIn += 60;
} else{
  entHora -= 1;
  salMIn += 60;
}

if(salSeg > entSeg){
  entMIn -=1;
  entSeg +=60;
}


let restHora = (entHora - salHora) * -1;
let restMin = entMIn - salMIn;
let restSeg = entSeg - salSeg;

if(salHora > entHora) {
  restHora *= -1;
  restHora -= 1;
} 

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

console.log(`HORAS TRABAJADAS: ${trabajo()}`);

