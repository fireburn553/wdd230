document.getElementById("mybtn").addEventListener("click", function() {
    let mycup = document.getElementById("theitem").value;
    console.log(mycup)
    if (mycup !== "") {
        const newBTN = document.createElement("button");
        newBTN.innerHTML = "\u274C";

        const newLI = document.createElement("li");
        newLI.textContent = mycup;
        newLI.appendChild(newBTN);

        document.getElementById("favs").appendChild(newLI);


        document.getElementById("theitem").value = "";
    }// end of if   

});