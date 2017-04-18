var espacioImagen = document.getElementById("modal");
var imagenes = document.getElementsByClassName("box-work");
var nuevis = document.getElementById("imagenNueva");

for(var i=0;i<imagenes.length;i++){
imagenes[i].addEventListener("click",mostrar);
}

function mostrar(){
  espacioImagen.style.display="block";
  nuevis.src=this.src;
}