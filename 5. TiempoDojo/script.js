function loadingAlert() {
    alert("Loading weather report...")
}

function removeWindow() {
    var cookies = document.querySelector(".cookiesContainer");
    cookies.remove();
}

var selectF = document.getElementById('units');

selectF.addEventListener('change', convertTemperature);

function convertTemperature() {
    var selectedUnit = selectF.value;
    var numbersC = document.getElementsByClassName('number');

    for (var i = 0; i < numbersC.length; i++) {
        var numberC = numbersC[i];
        var celsius = parseInt(numberC.getAttribute('dataCelsius'));
        var fahrenheit = celsius * 9 / 5 + 32;
        if (selectedUnit === 'fahrenheit') {
            numberC.innerText = Math.round(fahrenheit);
        } else {
            numberC.innerText = celsius;
        }
    }
}

