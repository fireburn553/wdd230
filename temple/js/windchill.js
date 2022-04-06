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
        let temp = document.createElement('h2');
        temp.textContent = `${currentTemp} \xB0F`;
        currentWeatherContainer.appendChild(temp);

        // Credits
        let weatherWebsite = "https://openweathermap.org/"
        let websiteCredit = document.createElement('p');
        websiteCredit.textContent = weatherWebsite;
        currentWeatherContainer.appendChild(websiteCredit);

        /////////THREE DAY FORECAST /////////////////////
        let day1 = getMonthDate(jsObject.daily[1].dt);
        let day2 = getMonthDate(jsObject.daily[2].dt);
        let day3 = getMonthDate(jsObject.daily[3].dt);

        document.querySelector(".day1").textContent = day1;
        document.querySelector(".day2").textContent = day2;
        document.querySelector(".day3").textContent = day3;

        addElementToForecast(jsObject, 1, ".icon-day1", ".description1", ".temp1");
        addElementToForecast(jsObject, 2, ".icon-day2", ".description2", ".temp2");
        addElementToForecast(jsObject, 3, ".icon-day3", ".description3", ".temp3");
    });


function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

function getMonthDate(unix){

    let date = new Date(unix* 1000);
    let month = date.toLocaleString('default', {month: 'short'})
    let d = date.getDate();

    return `${month} ${d}`;
}

function addElementToForecast(weather, day, image_icon, caption, temperature){
    const iconsrc = `https://openweathermap.org/img/wn/${weather.daily[day].weather[0].icon}@2x.png`;
    document.querySelector(image_icon).setAttribute('src', iconsrc);

    //Weather Description
    let desc = weather.daily[day].weather[0].description;
    desc = desc.split(' ').map(capitalize).join(' ');
    document.querySelector(image_icon).setAttribute('alt', desc);
    
    document.querySelector(caption).textContent = desc;
    
    let temp = weather.daily[day].temp.day;
    document.querySelector(temperature).textContent = `${temp} \xB0F`;

}