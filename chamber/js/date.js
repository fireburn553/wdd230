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

const dayNumber =  d.getDay();

const element = document.getElementById("message");
if (dayNumber == 1 || dayNumber == 2){
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}


const visitDisplay = document.querySelector("#lastVisit");
console.log(visitDisplay)
const lv = Number(localStorage.getItem("visits-ls"));
console.log(`last visit: ${lv}`);
const today = Date.now();
console.log(`today is: ${today}`);

const msInDay = 1000 * 60 * 60 * 24;
console.log(`milliseconds in a day is ${msInDay}`);

let difference = Math.round((today - lv)/msInDay);

localStorage.setItem("visits-ls", today);

if (lv !== 0){
    console.log(`Hey it's been ${difference} day since your last visit`);
    visitDisplay.textContent = `Hey it's been ${difference} day since your last visit.`;
} else {
    console.log(`this is your first visit`);
    visitDisplay.textContent = `Welcome to the page! We hope that you enjoy visiting the page.`;
}


document.getElementById("date").value = d.toDateString();

const hours = d.getHours();
const mins = d.getMinutes();
const seconds = d.getSeconds();

document.getElementById("time").value = hours + ":" + mins + ":" + seconds;