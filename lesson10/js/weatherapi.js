const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=b8db4725cc0def9c2c61b3b8800603a3`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);

        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        let desc = jsObject.weather[0].description;
        desc = desc.split(' ').map(capitalize).join(' ');
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}