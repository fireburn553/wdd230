const requestURL = 'https://fireburn553.github.io/wdd230/chamber/json/business.json';

const spot1name = document.querySelector("#spot1Name");
const spot1img = document.querySelector("#spot1Img");
const spot1email = document.querySelector("#spot1Email");
const spot1phone = document.querySelector("#spot1Num");

const spot2name = document.querySelector("#spot2Name");
const spot2img = document.querySelector("#spot2Img");
const spot2email = document.querySelector("#spot2Email");
const spot2phone = document.querySelector("#spot2Num");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    const goldBusinesses = directory.filter((directory) => {
        return directory.category == "Gold";
    })

    const silverBusinesses = directory.filter((directory) => {
        return directory.category =="Silver";
    })
    const g = Math.floor(Math.random()*goldBusinesses.length);
    const s = Math.floor(Math.random()*silverBusinesses.length);


    spotlightOne(goldBusinesses[g]);
    spotlightTwo(silverBusinesses[s]);

    });

function spotlightOne(business){
    spot1name.textContent = business.name;
    spot1img.setAttribute("src", business.image);
    spot1img.setAttribute("alt", `${business.name} Company Logo`);
    spot1email.setAttribute("href", business.website);
    spot1email.textContent = business.name;
    spot1phone.textContent = business.phone;
}

function spotlightTwo(business){
    spot2name.textContent = business.name;
    spot2img.setAttribute("src", business.image);
    spot2img.setAttribute("alt", `${business.name} Company Logo`);
    spot2email.setAttribute("href", business.website);
    spot2email.textContent = business.name;
    spot2phone.textContent = business.phone;
}
