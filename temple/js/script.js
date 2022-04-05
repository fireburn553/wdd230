
//Hamburger Button Menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//Summary Temple
const requestURL = 'https://fireburn553.github.io/wdd230/temple/json/temple.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject){
        const directory = jsonObject['directory'];
        
        let randomNum = Math.floor(Math.random()*directory.length);
        let anotherNum = randomNum+1;
        insertTemple(directory[randomNum], "#temple-name", "#temple-image", "#address", "#telephone", "#email");
        if (anotherNum>3){
            insertTemple(directory[0], "#temple-name2", "#temple-image2", "#address2", "#telephone2", "#email2");
        }else{
            insertTemple(directory[anotherNum], "#temple-name2", "#temple-image2", "#address2", "#telephone2", "#email2");
        }
    })

function insertTemple(temple, temple_name, temple_image, temple_addresses, temple_telephone, temple_email){

    document.querySelector(temple_name).textContent = `${temple.name}`;
    document.querySelector(temple_image).setAttribute('src', temple.image);
    document.querySelector(temple_image).setAttribute('alt', `${temple.name} Image`);
    document.querySelector(temple_addresses).textContent = `Address: ${temple.addresses}`;
    document.querySelector(temple_telephone).textContent = `Telephone: ${temple.phone}`;
    document.querySelector(temple_email).textContent = `Email: ${temple.email}`;
}