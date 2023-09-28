var contenedor = document.getElementById("contenedor");
var marco = document.getElementById("marco");
var foto = document.getElementById("foto");
var origen = document.getElementById("origen");

function play(){    
    
    contenedor.style.animationDuration = "2000ms";
    contenedor.style.transform = "translateX(-760px)";
}

function stop(){
    contenedor.style.transform = "translateX(50%)";
    contenedor.style.animationDuration = "2000ms";
}

function update(data){
    var src = './img/PERSONAS/anonymous.png';    
    //de la data que viene tomo: en f0 la ruta mas el nombre del archivo y en f1 el texto correspondiente al origen del llamante
    data = JSON.parse(data);
    f0 = data.f0;
	f1 = data.f1;
    if(f0 == undefined){
        // foto.innerText = "FOTO INDEFINIDA";
    }
    else if(f0 == null){
        // foto.innerText = "FOTO is null.";
    }
    else{
        src = f0;
    }
    foto.innerHTML='<img src=./img/PERSONAS/' + src +'  width="205" height="220"style="background-size: cover" />';
    if(f1 == undefined){
        // origen.innerText = "Text is undefined.";
    }
    else if(f1 == null){
        // origen.innerText = "Text is null.";
    }
    else{
        origen.innerText = f1;
    }
}