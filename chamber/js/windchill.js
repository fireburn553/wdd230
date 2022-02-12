const tempNumber = parseFloat(document.getElementById('temp').textContent);

const speedNumber = parseFloat(document.getElementById('speed').textContent);

let windChill = Math.round(35.74 + (0.6215*tempNumber) - (35.75*Math.pow(speedNumber, 0.16)) + (0.4275*tempNumber*Math.pow(speedNumber, 0.16)));

if (tempNumber<=50 && speedNumber>3) {
    document.getElementById("chill").textContent = "Wind Chill is "+windChill+"\xB0F";
} else {
    document.getElementById("chill").textContent = "N/A";
}

//more than three
////speed>3
//50 degree fareinheit or colder
////temp <= 50