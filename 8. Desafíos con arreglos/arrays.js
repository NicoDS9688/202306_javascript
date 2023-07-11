
// Pirmer ejercicio

function alwaysHungry(arr) {
    var delicious = false;

    for (i = 0; i < arr.length; i++) {

        if (arr[i] == "comida") {
            console.log("delicioso");
            delicious = true;
        }
    }

    if (!delicious) {
        console.log("Tengo hambre")
    }
}


alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


// Segundo ejercicio

function highPass(arr, cutoff) {
    var filteredArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


//  Tercer ejercicio 
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var average = sum / arr.length;

    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }

    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


//  Cuarto Ejercicio 
function reverse(arr) {
    var reversedArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 

// Quinto Ejercicio

function fibonacciArray(n) {
    var fibArr = [0, 1];
    
    for (var i = 2; i < n; i++) {
        var nextFib = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(nextFib);
    }
    
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); 

