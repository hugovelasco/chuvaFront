function showMe() {

    let beforeDots = document.getElementById("before-dots");
    let afterDots = document.getElementById("after-dots");

    if (afterDots.style.display === "" || afterDots.style.display === "none") {

        beforeDots.style.display = "none";
        afterDots.style.display = "inline";

        // beforeDots.innerHTML = '<span id="before-dots" onclick="showMe()">... ver menos</span>';
        afterDots.innerHTML += beforeDots.innerHTML;
        console.log("if")
    } else {

        afterDots.style.display = "none";
        beforeDots.style.display = "inline";

        beforeDots.innerHTML = '<span id="before-dots" onclick="showMe()">... ver mais</span>';
        // afterDots.innerHTML += beforeDots.innerHTML;
        console.log("else");
    }
}