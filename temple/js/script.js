
//Hamburger Button Menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


//Summary Temple
const requestURL = 'https://fireburn553.github.io/wdd230/temple/json/temple.json';

const Name = document.querySelector(".temple-card-header");
const templeImg = document.querySelector(".temple-card-image");
const templeDetails = document.querySelector(".temple-card-body");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject){
        const directory = jsonObject['directory'];
        
        let randomNum = Math.floor(Math.random()*directory.length);
        insertTemple(directory[randomNum]);
    })

function insertTemple(temple){
    let templeName = document.createElement('h3');
    let templeImage = document.createElement('img');
    let address = document.createElement('p');
    let telephone = document.createElement('p');
    let email = document.createElement('p');

    //Change the Content property of the h2 Element
    templeName.textContent = `${temple.name}`;
    templeImage.setAttribute('src', temple.image);
    templeImage.setAttribute('alt', `${temple.name} Image`);
    address.textContent = `Address: ${temple.addresses}`;
    telephone.textContent = `Telephone: ${temple.phone}`;
    email.textContent = `Email: ${temple.email}`;
    //Add/append the div to the contents
    Name.appendChild(templeName);
    templeImg.appendChild(templeImage);
    templeDetails.appendChild(address);
    templeDetails.appendChild(telephone);
    templeDetails.appendChild(email);
    
}