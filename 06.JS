var fahrenheit = prompt("Temperatura em Fahrenheit: ");
fahrenheit = parseFloat(fahrenheit);

function convertToCelsius(fahrenheit) {
    var tempCelsius = ((fahrenheit - 32) * 5) / 9;
    return tempCelsius.toFixed(2);
}

var celsius = convertToCelsius(fahrenheit);
console.log(fahrenheit, " Fahrenheit = ", celsius, " Celsius");