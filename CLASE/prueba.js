let num = [];
for(let i = 0; i < 1000; i++){
  num.push(1)
}

for(let i = 2; i <= 1000; i++){
  if(num[i] ==1){
    for(let j = i * i; j <1000; j += i){
      num[j] = 0;
    }
  }
}

let resul = [];
for(let i = 2; i < 1000; i++){
  if(num[i]){
    resul.push(i);
  }
}

console.table(resul)