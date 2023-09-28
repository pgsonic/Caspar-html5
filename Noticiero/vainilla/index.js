var nombre = document.getElementById("nombre");
var cargo = document.getElementById("cargo");

function play(){
    nombre.style.transform = "translateX(0)";
	cargo.style.transform = "translateX(0)";	
}

function stop(){
    nombre.style.transform = "translateX(-550%)";
	cargo.style.transform = "translateX(-550%)";
}

function update(data){
    data = JSON.parse(data);
    f0 = data.f0;
	f1 = data.f1;
    if(f0 == undefined){
        nombre.innerText = "Text is undefined.";
    }
    else if(f0 == null){
        nombre.innerText = "Text is null.";
    }
    else{
        nombre.innerText = f0;
    }
	
	if(f1 == undefined){
        cargo.innerText = "Text is undefined.";
    }
    else if(f1 == null){
        cargo.innerText = "Text is null.";
    }
    else{
        cargo.innerText = f1;
    }
	
}