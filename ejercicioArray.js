let array = [5, 10, 2, 8, 3];

let maximo = Number.MIN_SAFE_INTEGER; // 5  10   10  10   10 
let minimo = Number.MAX_SAFE_INTEGER; // 5   5     2   2    2

for (let i = 0; i < array.length; i++) {
  if (array[i] > maximo) {
    maximo = array[i];
  }

  if (array[i] < minimo) {
    minimo = array[i];
  }
}


console.log("Minimo: "+minimo+ " Maximo : "+maximo);