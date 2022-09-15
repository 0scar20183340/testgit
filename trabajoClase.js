// let vec = [1,2,3,4,5]

// let aux = vec[vec.length-1];

// for(let i = vec.length-1; i > 0; i--){
//   vec[i] = vec[i-1]
// }
// vec[0] = aux;
// console.log(vec)



let vec = [2,3,4,5,6,7,8,9,10,11];

let aux = vec[vec.length-1]

for(let i = vec.length-1; i > 0; --i) {
  vec[i] = vec[i-1];
}

vec[0] = aux;
console.log(vec)
