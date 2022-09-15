class Dado1 {  
  lanzar (){
  var min = 1;
  var max = 6;
  var x = Math.floor(Math.random()*(max-min+1)+min);
  return x;
    }
  }



  class Tablero {
    constructor (jugador1, jugador2) {
      this.jugador1 = jugador1;
      this.jugador2 = jugador2;
    }

    iniciar(){
      do{
        this.jugador1.correr();
        console.log("jugador1: "+ this.jugador1.posicion);
        this.jugador2.correr();
        console.log("jugador1: "+ this.jugador2.posicion);
      } while(this.jugador1.posicion == 100 || this.jugador2.posicion == 100)
      if(this.jugador1.posicion == 100 && this.jugador2.posicion != 100){
        console.log("JUGADOR 1 GANO")
      }else if(this.jugador2.posicion == 100 && this.jugador1.posicion != 100){
        console.log("JUGADOR 2 GANO")
      }

    }
  }




  class Jugador1 {
    constructor (){
      this.posicion = 0;
      this.avanzar = new Dado1();
    }
    avanzo1 (){
      this.posicion += 1;
    } 
    avanzo2(){
      this.posicion += 2;
    }
     avanzo3(){
      this.posicion += 3;
    }
    avanzo4(){
      this.posicion += 4;
    }
    avanzo5(){
      this.posicion += 5;
    }
    avanzo6(){
      this.posicion +=6
    }

    correr(){
      if(this.avanzar.lanzar() ==1){
        this.avanzo1();      
      } else if(this.avanzar.lanzar() == 2){
        this.avanzo2();
      } else if(this.avanzar.lanzar() == 3){
        this.avanzo3();
      } else if(this.avanzar.lanzar() == 4){
        this.avanzo4();
      } else if(this.avanzar.lanzar() == 5){
        this.avanzo5();
      } else if(this.avanzar.lanzar() == 6){
        this.avanzo6();
      }
       
    }
    }

  



  class Jugador2 {
    constructor (){
      this.posicion = 0;
      this.avanzar = new Dado1();
    }
    avanzo1 (){
      this.posicion += 1;
    } 
    avanzo2(){
      this.posicion += 2;
    }
     avanzo3(){
      this.posicion += 3;
    }
    avanzo4(){
      this.posicion += 4;
    }
    avanzo5(){
      this.posicion += 5;
    }
    avanzo6(){
      this.posicion +=6
    }

    correr(){
      if(this.avanzar.lanzar() ==1){
        this.avanzo1();      
      } else if(this.avanzar.lanzar() == 2){
        this.avanzo2();
      } else if(this.avanzar.lanzar() == 3){
        this.avanzo3();
      } else if(this.avanzar.lanzar() == 4){
        this.avanzo4();
      } else if(this.avanzar.lanzar() == 5){
        this.avanzo5();
      } else if(this.avanzar.lanzar() == 6){
        this.avanzo6();
      }
       
    }

  }

 
  let juego = new Tablero(new Jugador1(), new Jugador2());
 juego.iniciar();