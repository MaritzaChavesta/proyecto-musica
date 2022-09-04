


let main = document.getElementById("main");
console.log(main);

subtitulo.innerHTML = "Mybookshop";

let playlist = ["Pop","Radio"];
let ul = document.querySelector("ul");
playlist.forEach((play)=>{
    let listaplay =document.createElement("li");
    listaplay.innerHTML = play;
    ul.appendChild(listaplay);
})

//////////// EVENTOS///////////////////////
function clickSubtitulo(){
  console.log("El usuario hizo click en el subtitulo")
}
const subtitulo2 = document.getElementById("subtitulo");
subtitulo2.addEventListener("click",clickSubtitulo) 


//////////////////////////////////////////////////////

const text = document.querySelector("#texto");

text.addEventListener("input",()=>{
    console.log(`la cancion que estas buscando es:${text.value}`);
})