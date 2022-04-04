

const weatherAPIurl = `https://api.openweathermap.org/data/2.5/weather?q=Daet&units=imperial&appid=b8db4725cc0def9c2c61b3b8800603a3`;

const currentWeatherContainer = document.querySelector(".current-weather");

fetch(weatherAPIurl)
    .then((response) => response.json())
    .then((jsObject) => {

        let cityName = jsObject.name;
        let name = document.createElement('h2');
        name.textContent = cityName;
        currentWeatherContainer.appendChild(name);

         //Weather Icon
        const iconsrc = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@2x.png`;
        let iconWeather = document.createElement('img')
        iconWeather.setAttribute('src', iconsrc);
        currentWeatherContainer.appendChild(iconWeather);

        //Weather Description
        let desc = jsObject.weather[0].description;
        desc = desc.split(' ').map(capitalize).join(' ');

        //Figure Caption
        let figCaption = document.createElement('p');
        figCaption.textContent = desc;
        currentWeatherContainer.appendChild(figCaption);
        iconWeather.setAttribute('alt', desc);

        //Current Temperature
        let currentTemp = jsObject.main.temp.toFixed(1);
        let temp = document.createElement('h4');
        temp.textContent = `${currentTemp} \xB0F`;
        currentWeatherContainer.appendChild(temp);

        // //Wind Speed
        // let windSpeed = jsObject.wind.speed;
        // document.querySelector('#speed').textContent = windSpeed;

        // Credits
        let weatherWebsite = "https://openweathermap.org/"
        let websiteCredit = document.createElement('p');
        websiteCredit.textContent = weatherWebsite;
        currentWeatherContainer.appendChild(websiteCredit);
        

        // computerWindChill(currentTemp, windSpeed);

    
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