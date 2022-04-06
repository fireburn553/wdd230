const requestURL = 'https://fireburn553.github.io/wdd230/temple/json/temple.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject){
        const directory = jsonObject['directory'];

        directory.forEach(displayGrid);
        

    })

    function displayGrid(directory) {  // Create elements to add to the document
        let card = document.createElement('div');
        card.className = "card-temple";
        let templeName = document.createElement('h3');
        let templeAddress = document.createElement('p');
        let templeTelephone = document.createElement('p');
        let templeEmail = document.createElement('p');
        let templeWebsite = document.createElement('a');
        let templeImage = document.createElement('img');
        // let services = document.createElement('ul');
        // let history = document.createElement('ul');
        // let closure = document.createElement('ul');
        // Change the textContent property of the h2 element to contain the business name
        templeName.textContent = `${directory.name}`;
        templeAddress.innerHTML = `<b>Address:</b>${directory.addresses}`;
        templeTelephone.innerHTML = `<b>Telephone:</b> ${directory.phone}`;
        templeEmail.innerHTML = `<b>Email:</b>${directory.email}`;
        templeWebsite.innerHTML = `<b>Website:</b> ${directory.name}`;
        templeWebsite.setAttribute('href', directory.website);
        templeImage.setAttribute('src', directory.image);
        templeImage.setAttribute('alt',  `${directory.name} picture`);
        // Add/append the section(card) with the h2 element
        card.appendChild(templeName);
        card.appendChild(templeImage);
        card.appendChild(templeAddress);
        card.appendChild(templeTelephone);
        card.appendChild(templeEmail);
        card.appendChild(templeWebsite);
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector(`#temple-section`).appendChild(card);
    }