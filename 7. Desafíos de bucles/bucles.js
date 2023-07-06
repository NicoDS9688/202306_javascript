
// Primer ejercicio

for (num = 1; num <= 20; num++) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}


// Segundo ejercicio

for (imp = 100; imp >= 0; imp--) {
    if (imp % 3 == 0) {
        console.log(imp)
    }
}


// Tercer ejercicio

const seq = [4, 2.5, 1, -0.5, -2, -3.5];

for (let i = 0; i < seq.length; i++) {
    console.log(seq[i]);
}


// Cuarto ejercicio

var sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);


// Quinto ejercicio

let product = 1;

for (let i = 1; i <= 12; i++) {
    product *= i;
}

console.log(product);