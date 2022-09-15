var primos = new Array;
var elementos = new Array;
for (var i = 0 ; i < 1000; i++) {
    elementos.push(true);
}


for (var i = 2; i <= 1000; i++) {
    if (elementos[i] == true) {
      for (var x = i * i; x < 1000; x += i) {
        elementos[x] = false;
    }
}
}


for (var i = 2; i < 1000; i++) {
if (elementos[i]) {
    primos.push(i);
    console.log(i);
}
}