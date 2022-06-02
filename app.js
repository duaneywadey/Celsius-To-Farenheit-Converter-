const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

function celToFar() {
	let output = ( parseFloat(celsius.value) * 9/5) + 32;
	fahrenheit.value = parseFloat(output.toFixed(2));
	console.log(output + "°F");

}

function farToCel() {
	let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
	celsius.value = parseFloat(output.toFixed(2));
	console.log(output + "°C");
}


// New vals

function KelToCel() {
	let output = ( parseFloat(kelvin.value) - 273.15);
	celsius.value = parseFloat(output.toFixed(2));
	console.log(output + "°C");

}

function CelToKel() {
	let output = ( parseFloat(celsius.value) + 273.15);
	kelvin.value = parseFloat(output.toFixed(2));
	console.log(output + " K");
}

// (0K − 273.15) × 9/5 + 32

function KelToFar() {
	let output = ( parseFloat(kelvin.value) - 273.15) * 9/5 + 32;
	fahrenheit.value = parseFloat(output.toFixed(2));
	console.log(output + "°F");

}

function FarToKel() {
	let output = ( parseFloat(fahrenheit.value) - 32) * 5/9 + 273.15;
	kelvin.value = parseFloat(output.toFixed(2));
	console.log(output + "K");
}