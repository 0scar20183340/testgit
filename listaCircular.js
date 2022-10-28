class Nodo{
  constructor(dato){
    this.dato=dato;
    this.sig=null;
    this.ant=null;
  }
}
class ListaCirc{
  constructor(){
    this.primero=null;
  }
  agregar(nuevo){
    if(!this.primero){
      this.primero = nuevo;
      nuevo.sig = this.primero;
      nuevo.ant = this.primero;
    } else{
      nuevo.sig = this.primero;
      nuevo.ant = this.primero.ant;
      this.primero.ant = nuevo;
      nuevo.ant.sig=nuevo;
    }
  }

  extraerInicio(){
   if(this.primero == this.primero.sig){
    this.primero = null;
   }else{
    let aux = this.primero
    this.primero = this.primero.sig;
    this.primero.ant = aux.ant;
    aux.ant.sig=this.primero
    return aux.dato;
   }
  }



listar(){
  let temp = this.primero;
  let str='';
  while (temp) {
    str+= temp.dato + " ";
    temp = temp.sig;
    if (temp == this.primero)
      break;
   }
  
  return str;
}

}

let lista = new ListaCirc();
let n1 = new Nodo(3);
lista.agregar(n1);
n1 = new Nodo(4);
lista.agregar(n1);
n1 = new Nodo(5);
lista.agregar(n1);
console.table(lista);
console.log(lista.listar());
console.log(lista.extraerInicio());
console.log(lista.listar());