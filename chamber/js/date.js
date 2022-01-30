const d = new Date();
const year = d.getFullYear();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(d);

document.querySelector("#currentYear").textContent = year;
document.querySelector("#pageLastUpdated").innerHTML = `Last update: ${document.lastModified}`;
document.querySelector("#currentDate").textContent = fulldate;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;