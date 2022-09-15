export default class Inventraio {
  constructor(){
    this.productos = [];
  }

  agreagar(producto){
    this.productos.push(producto);
  }
  buscar(codigo){
    for(let i = 0;i < this.productos.length; i++){
      if(this.productos[i].codigo === codigo) return this.productos[i];
    } 
  }


  eliminar(codigo){
    for(let i =0; i < this.productos.length; i++){
      if(this.productos[i].codigo === codigo){
        this.productos = this._eliminarElemento(this.productos, i);
      }
    }

  }

  _eliminarElemento(vec = [], index = 0){
    let modificar = [];

    vec[index] = 0;
    for(let i = 0; i< vec.length; i++){
      if(vec[i] != 0){
        modificar.push(vec[i])
      }
    }
    return modificar;
  }

  listado(){
    return this.productos;
  }

  odatsil(){
    let listadoInv = [];
    for(let i = this.productos.length-1; i >=0; i--)

  }


  insertar(){
  }

}