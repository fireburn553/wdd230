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
        let seeMore = document.createElement('div');
        let details = document.createElement('div');
        card.className = "card-temple";
        let templeName = document.createElement('h3');
        let templeAddress = document.createElement('p');
        let templeTelephone = document.createElement('p');
        let templeEmail = document.createElement('p');
        let templeWebsite = document.createElement('a');
        let templeImage = document.createElement('img');
        let list1 = document.createElement('ul');
        let list2 = document.createElement('ul');
        let list3 = document.createElement('ul');
        let services = document.createElement('p');
        let history = document.createElement('p');
        let closure = document.createElement('p');
        // Change the textContent property of the h2 element to contain the business name
        templeName.textContent = `${directory.name}`;
        templeAddress.innerHTML = `<b>Address:</b> ${directory.addresses}`;
        templeTelephone.innerHTML = `<b>Telephone:</b> ${directory.phone}`;
        templeEmail.innerHTML = `<b>Email:</b> ${directory.email}`;
        templeWebsite.innerHTML = `${directory.name} <span class="gotoLink">External Link!</span>`;
        templeWebsite.setAttribute('href', directory.website);
        templeWebsite.setAttribute('target', '_blank');
        templeImage.setAttribute('src', directory.image);
        templeImage.setAttribute('alt',  `${directory.name} picture`);

        let templeServices = Object.values(directory.services[0]);
        let templeHistory = Object.values(directory.history[0]);
        let templeClosure = Object.values(directory.templeClosure[0]);

        services.innerHTML = `<b>Services:</b>`;
        history.innerHTML = `<b>History:</b>`;
        closure.innerHTML = `<b>Temple Closure:</b>`
        
        details.appendChild(services);
        createList(templeServices, list1);
        
        details.appendChild(history);
        createList(templeHistory, list2);

        details.appendChild(closure);
        createList(templeClosure, list3);
        
        function createList(items, list){
            for (let x in items){
                list.innerHTML += `<li> ${items[x]} </li>`;
                details.appendChild(list);
            }
        }
        let dropDownAngle = document.createElement('div');
        dropDownAngle.innerHTML= `<button id="dropDown"><span>See more</span><span>Show less</span></button>`;


        let nameOfClass = templeName.textContent;
        let arrayofNameClass = nameOfClass.split(" ");
        let classNameForShow = arrayofNameClass[0].toLocaleLowerCase();
        details.id = classNameForShow;
        dropDownAngle.id = `${classNameForShow}-btn`
        console.log(details);
        
        console.log(classNameForShow)
        dropDownAngle.addEventListener("click", () =>{
            console.log("I CLICK");
            document.getElementById(`${classNameForShow}-btn`).classList.toggle("more");
            document.getElementById(classNameForShow).classList.toggle("show");
        })



        let btnContainer = document.createElement("div");
        let likeBtn = document.createElement("button");
        
        likeBtn.textContent = "👍 Like";
        likeBtn.addEventListener("click", () => {
            btnContainer.classList.toggle("like");
            localStorage.setItem(templeName.textContent, btnContainer.getAttribute('class'));
        });
        btnContainer.setAttribute('class', localStorage.getItem(templeName.textContent));
        


        btnContainer.appendChild(likeBtn)

        // Add/append the section(card) with the h2 element
        card.appendChild(templeName);
        card.appendChild(templeImage);
        card.appendChild(templeAddress);
        card.appendChild(templeTelephone);
        card.appendChild(templeEmail);
        card.appendChild(templeWebsite);
        card.appendChild(btnContainer);
        card.appendChild(dropDownAngle);
        card.appendChild(details);
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector(`#temple-section`).appendChild(card);
    }
