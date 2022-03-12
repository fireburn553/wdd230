

const weatherAPIurl = `https://api.openweathermap.org/data/2.5/weather?q=Daet&units=imperial&appid=b8db4725cc0def9c2c61b3b8800603a3`;

fetch(weatherAPIurl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        
        //Current Temperature
        let currentTemp = jsObject.main.temp.toFixed(1)
        document.querySelector('#temp').textContent = `${currentTemp} \xB0F`;

        //Weather Icon
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        document.querySelector('#weather-icon').setAttribute('src', iconsrc);
        

        //Weather Description
        let desc = jsObject.weather[0].description;
        desc = desc.split(' ').map(capitalize).join(' ');
        
        //Figure Caption
        document.querySelector('figcaption').textContent = desc;
        document.querySelector('#weather-icon').setAttribute('alt', desc);

        //Wind Speed
        let windSpeed = jsObject.wind.speed;
        document.querySelector('#speed').textContent = windSpeed;

         // Credits
        const weatherWebsite = "https://openweathermap.org/"
        document.querySelector('#credit').textContent = weatherWebsite;

        computerWindChill(currentTemp, windSpeed);

    
    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
function computerWindChill(tempNumber, speedNumber){
    let windChill = Math.round(35.74 + (0.6215*tempNumber) - (35.75*Math.pow(speedNumber, 0.16)) + (0.4275*tempNumber*Math.pow(speedNumber, 0.16)));

if (tempNumber<=50 && speedNumber>3) {
    document.getElementById("chill").textContent = "Wind Chill is "+windChill+"\xB0F"+mph;
} else {
    document.getElementById("chill").textContent = "N/A";
}
}



//more than three
////speed>3
//50 degree fareinheit or colder
////temp <= 50