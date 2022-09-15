
class Dado1 {  
  lanzar (){
  
  var min = 1;
  var max = 6;
  var x = Math.floor(Math.random()*(max-min+1)+min);
  
  return x;
    }
  }
  
  class Dado2 {  
    lanzar (){
    
    var min = 1;
    var max = 6;
    var x = Math.floor(Math.random()*(max-min+1)+min);
    
    return x;
      }
    }
  
  
  let dado = new Dado1();
  let vec = [];
  
  let cara1 = 0;
  let cara2 = 0;
  let cara3 = 0;
  let cara4 = 0;
  let cara5 = 0;
  let cara6 = 0;
      
  for(let i = 0; i < 100; i++){
    vec.push(dado.lanzar());
    if(vec[i] == 1){
      cara1 += 1;
    } else if(vec[i] == 2){
      cara2 += 1;
    } else if(vec[i] == 3){
      cara3 += 1;
    } else if(vec[i] == 4){
      cara4 += 1;
    } else if(vec[i] == 5){
      cara5 += 1;
    } else if(vec[i] == 6){
      cara6 += 1;
    }
  }
  
  
  console.log(vec)
  
  console.log("cara 1: ", cara1)
  console.log("cara 2: ",cara2)
  console.log("cara 3: ",cara3)
  console.log("cara 4: ",cara4)
  console.log("cara 5: ",cara5)
  console.log("cara 6: ",cara6)
  
  
  
  