document.getElementById("date").value = d.toDateString();

const hours = d.getHours();
const mins = d.getMinutes();
const seconds = d.getSeconds();

document.getElementById("time").value = hours + ":" + mins + ":" + seconds;