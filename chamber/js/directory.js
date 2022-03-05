const requestURL = 'https://fireburn553.github.io/wdd230/chamber/json/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(displayGrid);
    directory.forEach(displayList);
  });

function toggleDisplay(){
  console.log('I clicked the button!!!!')
  document.getElementById("grid").classList.toggle("grid");
  document.getElementById("list").classList.toggle("list");
  document.getElementById("displayGridList").classList.toggle("open");
}

const displayBtn= document.getElementById('displayGridList');
displayBtn.onclick = toggleDisplay;

function displayList(directory) {
  console.log("Draw List")
  let table = document.createElement('table');
  let tableBody = document.createElement('tbody');
  let tableRow = document.createElement('tr');
  let businessName = document.createElement('td');
  let address = document.createElement('td');
  let phone = document.createElement('td');
  let website = document.createElement('td');

  businessName.textContent = `${directory.name}`;
  address.textContent = `${directory.addresses}`;
  phone.textContent = `${directory.phone}`;
  website.textContent = `${directory.website}`;
  website.setAttribute('href', directory.website);

  tableRow.appendChild(businessName);
  tableRow.appendChild(address);
  tableRow.appendChild(phone);
  tableRow.appendChild(website);

  tableBody.appendChild(tableRow);
  table.appendChild(tableBody);

  document.querySelector('div#list').appendChild(table);
}


function displayGrid(directory) {  // Create elements to add to the document
    console.log("Draw Grid")
    let card = document.createElement('section');
    let businessName = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let image = document.createElement('img');
    // Change the textContent property of the h2 element to contain the business name
    businessName.textContent = `${directory.name}`;
    address.textContent = `${directory.addresses}`;
    phone.textContent = `${directory.phone}`;
    website.textContent = `${directory.website}`;
    website.setAttribute('href', directory.website);
    image.setAttribute('src', directory.image);
    image.setAttribute('alt',  `Sample Icon placeholder`)
    // Add/append the section(card) with the h2 element
    card.appendChild(image);
    card.appendChild(businessName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div#grid').appendChild(card);
}
