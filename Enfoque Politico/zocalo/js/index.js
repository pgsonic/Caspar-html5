var volanta = document.getElementById("volanta");
var zocalo = document.getElementById("zocalo");

function play(){    
    volanta.style.transform = "opacity = 1";
    volanta.innerText.style.transform = "skew(30deg)";
    zocalo.style.transform = "opacity = 1";
}

function stop(){
    volanta.style.transform = "opacity = 0";
    zocalo.style.transform = "opacity = 0";
}

function update(){
    volanta.innerText.style.transform = "skew(30deg)";
}