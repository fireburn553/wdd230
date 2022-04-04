const weatherAPIurl = `https://api.openweathermap.org/data/2.5/onecall?lat=14.1122&lon=122.9553&exclude=minutely,hourly&units=imperial&appid=b8db4725cc0def9c2c61b3b8800603a3`;

const currentWeatherContainer = document.querySelector(".current-weather");

fetch(weatherAPIurl)
    .then((response) => response.json())
    .then((jsObject) => {

        let cityName = "Daet";
        let name = document.createElement('h2');
        name.textContent = cityName;
        currentWeatherContainer.appendChild(name);

         //Weather Icon
        const iconsrc = `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`;
        let iconWeather = document.createElement('img')
        iconWeather.setAttribute('src', iconsrc);
        currentWeatherContainer.appendChild(iconWeather);

        //Weather Description
        let desc = jsObject.current.weather[0].description;
        desc = desc.split(' ').map(capitalize).join(' ');

        //Figure Caption
        let figCaption = document.createElement('p');
        figCaption.textContent = desc;
        currentWeatherContainer.appendChild(figCaption);
        iconWeather.setAttribute('alt', desc);

        //Current Temperature
        let currentTemp = jsObject.current.temp.toFixed(1);
        let temp = document.createElement('h4');
        temp.textContent = `${currentTemp} \xB0F`;
        currentWeatherContainer.appendChild(temp);

        // Credits
        let weatherWebsite = "https://openweathermap.org/"
        let websiteCredit = document.createElement('p');
        websiteCredit.textContent = weatherWebsite;
        currentWeatherContainer.appendChild(websiteCredit);


        

    
    });
