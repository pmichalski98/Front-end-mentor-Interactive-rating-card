const numbers = document.querySelectorAll("span");

const submit = document.querySelector("button");

const backgroundClass = "numberafterclick";

let id;


function changeRating () {
    return document.getElementById("jsheader").innerHTML = "You selected " + id + " out of 5";
}

function checkIfClicked(clicked) {
     return clicked.contains(backgroundClass);
}

const numbersPressed = e => {
    if (document.getElementsByClassName(backgroundClass).length === 0){
        e.target.classList.add(backgroundClass);
        id = e.target.id;
        console.log(id);
        submit.addEventListener("click", changeRating);
    }
}

for (let number of numbers) {
    number.addEventListener("click", numbersPressed);
}