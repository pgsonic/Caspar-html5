var contenedor = document.getElementById("contenedor");
var logo = document.getElementById("logo");

function play(){    
    
    /*contenedor.style.animationDuration = "2000ms";
    contenedor.style.transform = "translateX(-760px)";*/
    logo.style.animation = "fadeInAnimation ease 2s";
    logo.style.animationIterationCount = "1";
    logo.style.animationFillMode = "forwards";
}

function stop(){
    /*contenedor.style.transform = "translateX(50%)";
    contenedor.style.animationDuration = "2000ms";*/
    logo.style.animation = "fadeOutAnimation ease 2s";
    logo.style.animationIterationCount = "1";
    logo.style.animationFillMode = "forwards";
}

function update(){
    /*var src = 'ENFOQUE.gif';        
    logo.innerHTML='<img src=./img/' + src +'  width="205" height="220" style="background-size: cover" />';
    */
}