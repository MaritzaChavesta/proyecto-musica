
let btnSesion = document.querySelector('#btnsesion');
let formulario = document.querySelector('.cart-modal-overlay')
let cerrarFormulario = document.querySelector('#close-btn')



function abritCerrarFormulario(){
    if (formulario.classList.contains("open")){
       formulario.classList.remove("open");
    }else{
        formulario.classList.add("open");
    }
}
btnSesion.addEventListener("click", abritCerrarFormulario);
cerrarFormulario.addEventListener("click",abritCerrarFormulario);

////////////////////////////////////////////////////////////////////////////
const entrar = document.querySelector('#entrar');

function ingresarUsuario(){
    const usuario = document.querySelector('#usuario').value;
    const pass = document.querySelector('#pass').value;
   
    console.log(usuario, pass);

    if (usuario == "Elizabeth" && pass =="asd123"){
        window.location.href = 'index.html';
        localStorage.usuario = usuario;
        localStorage.pass = pass;
    }else{
        alert('No estas registrado !!!')
    }
}

entrar.addEventListener("click", ingresarUsuario);


const nombre = document.querySelector('#nombre').innerHTML = localStorage.usuario;
/* document.getElementById('#nombre').innerHTML = localStorage.usuario; */
/* const formularioUsuario = document.querySelector('#formularioUsuario');
const correo = document.querySelector('#correo');
const contraseña = document.querySelector('#pass');
const parrafo = document.querySelector('warnings') */


/* formularioUsuario.addEventListener("submit", e =>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(regexEmail.test(correo.value)){
        warnings += `El correo no es valido <br>`
        entrar = true
    }
    if(contraseña.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar =true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
    
}) */


/* function login(){
    var user, pass;

    user= document.querySelector("#usuario").value;
    pass = document.querySelector("pass").value;
    if(user == "Maritza" && pass == "1234"){

        window.location = "index.html";
        
    }

   
} */


