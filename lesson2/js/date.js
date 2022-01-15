const d = new Date();
const year = d.getFullYear();

document.querySelector("#currentYear").textContent = year;
document.querySelector("#pageLastUpdated").innerHTML = `Last update: ${document.lastModified}`;