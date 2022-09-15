class OpcionesAvanzar {
  lanzar (){

    var min = 1;
    var max = 20;
    var x = Math.floor(Math.random()*(max-min+1)+min);
    
    return x;
      }
    }



class Liebre {
  constructor (){
    this.posicion = 0;
    this.avanzar = new OpcionesAvanzar();
  }
  dormir (){//20
    this.posicion += 0;
  } 
  saltoGrande(){ //20
    this.posicion += 9;
  }
  resbalonGrande(){ //10
    this.posicion -= 12;
  }
  saltoPequeño(){ //35
    this.posicion += 1;
  }
  resbalonPequeño(){ //15
    this.posicion -= 2;
  }
  correr(){
    if(this.avanzar.lanzar() <= 4){
      this.dormir();      
    }else if(this.avanzar.lanzar() >= 5 && this.avanzar.lanzar() <=8 ){
      this.saltoGrande();
    }else if(this.avanzar.lanzar() >= 9 && this.avanzar.lanzar() <=11 ){
      this.resbalonPequeño();
    }else if(this.avanzar.lanzar() >= 12 && this.avanzar.lanzar() <=18){
      this.saltoPequeño();
    } else if(this.avanzar.lanzar() >=19){
      this.resbalonGrande();
    } else if(this.posicion < 0){
      this.posicion = 0;
    }  else if(this.posicion > 100){
      this.posicion = 100;
    } 
  }
  }



class Tortuga {
  constructor (){
    this.posicion = 0;
    this.avanzar = new OpcionesAvanzar();
  }
  pasoRapido (){
    this.posicion += 3;
  }
  resbalon(){
    this.posicion -= 6;;
  }
  pasoLento(){
    this.posicion += 1;;
  }
  correr(){
    if(this.avanzar.lanzar() <= 10){
      this.pasoRapido();      
    }else if(this.avanzar.lanzar() >= 11 && this.avanzar.lanzar() <= 14 ){
      this.resbalon();
    }else if (this.avanzar.lanzar() >= 15 && this.avanzar.lanzar() <=20){
      this.pasoLento();
    } else if(this.posicion <= -1){
      this.posicion = 0;
    }  else if(this.posicion > 100){
      this.posicion = 100;
    } 

  }
}

class Carrera {
constructor (liebre, tortuga) {
  this.tortuga = tortuga;
  this.liebre = liebre;
}
iniciar(){
  do{
    this.liebre.correr();
    console.log('liebre: ' + this.liebre.posicion);
    this.tortuga.correr();
    console.log('tortuga: ' + this.tortuga.posicion);
  }while(this.liebre.posicion <= 100 && this.tortuga.posicion <= 100)
if(this.liebre.posicion >= 100 && this.tortuga.posicion < 100){
  console.log("La liebre gano")
}else if(this.liebre.posicion < 100 && this.tortuga.posicion >= 100 ){
  console.log("La tortuga gano")
} else if(this.liebre.posicion >=100 && this.tortuga.posicion >= 100){
  console.log("EMPATE !!!")
}


}
}


let myCarrera = new Carrera(new Liebre(), new Tortuga());
console.clear();
myCarrera.iniciar();
