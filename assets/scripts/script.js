function showMe() {

    let beforeDots = document.getElementById("before-dots");
    let afterDots = document.getElementById("after-dots");

    if (afterDots.style.display === "" || afterDots.style.display === "none") {

        beforeDots.style.display = "none";
        afterDots.style.display = "inline";

        beforeDots.innerHTML = '<span id="before-dots" onclick="showMe()">... ver menos</span>';
        afterDots.innerHTML += beforeDots.innerHTML;
        console.log("if")
    } else {

        beforeDots.style.display = "inline";
        afterDots.style.display = "none";

        beforeDots.innerHTML = '<span id="before-dots" onclick="showMe()">... ver mais</span>';
        afterDots.innerHTML += beforeDots.innerHTML;
        console.log("else");
    }
}

let qsContainer = document.getElementById("qs-container");
let standardSquareContainer = document.getElementById("idSquareContainer");
let backgroudMessage = document.getElementById("sub-standard-square-background-msg");

document.getElementById("addTopicBtn").addEventListener("click", () => {

    qsContainer.style.display = "block";
    standardSquareContainer.style.display = "none";
    backgroudMessage.style.display = "none";

});

document.getElementById("qsEnviarBtn").addEventListener("click", () => {

    qsContainer.style.display = "none";
    standardSquareContainer.style.display = "block";
    backgroudMessage.style.display = "block";

});

document.getElementById("idSubStandardSquare").addEventListener("click", () => { 

    let authorsContainer = document.getElementById("authors-container");

    if(authorsContainer.style.display === "" || authorsContainer.style.display === "none"){
        authorsContainer.style.display = "block"
    } else {
        authorsContainer.style.display = "none"
    }

});