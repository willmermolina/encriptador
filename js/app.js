let encriptarButton = document.querySelector(".encriptar-btn");
let desencriptarButton = document.querySelector(".desencriptar-btn");
let copiar = document.getElementById("copiar-btn");
let imgEncriptador = document.querySelector(".img-encriptador");
let titulo = document.querySelector(".cajatitulo-respuesta");
let parrafoRespuesta = document.querySelector(".cajaparrafo-respuesta");
let respuesta = document.querySelector(".area-respuesta");
let ventanaModal = document.getElementById("modal");
let mensajeX = document.getElementById("mensajeX");
let cdrrarButton = document.getElementById("cerrar-btn");

//funcion para leer elcontenido del textarea de la consulta
function leerAreaConsulta(){
    let areaConsulta = document.getElementById("area-consulta");
    return areaConsulta.value;
}

//funcion para abrir ventana modal con mensaje de error
function abrirModal(){
    ventanaModal.classList.add("modal-abrir");
}

//funcion para cerrar ventana modal con mensaje de error
function cerrarModal(){
    ventanaModal.classList.remove("modal-abrir");
}

//funcion para validar la entrada de texto
function validar(texto) {

    texto = String(texto).trim();
  
    const validado = {      
        "minuscula": /^[a-z! ]+$/,
        "mayuscula": /^[A-Z0-9 ]+$/,
        "combinado": /^[A-Za-z0-9 ]+$/,
        "acentos": /^[a-zA-Z\u00C0-\u017F]+$/
    }
            
    if (validado.minuscula.test(texto)) return '0';
    if (validado.mayuscula.test(texto)) return '1';
    if (validado.combinado.test(texto)) return '1';
    if (validado.acentos.test(texto)) return '2';
  
    return -1;  
}



//funcion para encriptar dato escrito en el textarea de consulta
function encriptar(){ 
       
    let textSinEncriptar = leerAreaConsulta();    
    
    if (validar(leerAreaConsulta())== 0){               
        ocultarParrafo();  
        mostrarRespuesta();        
        let textEncriptado = textSinEncriptar.replace(/e/g,"enter");
        textEncriptado = textEncriptado.replace(/i/g,"imes");
        textEncriptado = textEncriptado.replace(/a/g,"ai");
        textEncriptado = textEncriptado.replace(/o/g,"ober");                               
        textEncriptado = textEncriptado.replace(/u/g,"ufat");   
                
        titulo.textContent = "Texto Encriptado";
        
        respuesta.value = textEncriptado;        
        
    } else if (validar(leerAreaConsulta())== 1){  
        mensajeX.textContent = "No se admite el uso de letras MAYUSCULAS";
        abrirModal();
        
    } else if(validar(leerAreaConsulta())== 2){
        mensajeX.textContent = "No se admite el uso de letras con ACENTOS";
        abrirModal();

    } else if (textSinEncriptar.length == 0){
        mensajeX.textContent = "No se admite el uso de TEXTO VACIO";
        abrirModal();
        
    } else {
        mensajeX.textContent = "No se admite el uso de SIMBOLOS solamente (!)";
        abrirModal();        
    }  
}

//funcion para desencriptar dato escrito en el textarea de consulta
function desencriptar(){    
    let textEncriptar = leerAreaConsulta();    
    
    if (validar(leerAreaConsulta())== 0 ){       
        ocultarParrafo();  
        mostrarRespuesta();   
        let textSinEncriptado = textEncriptar.replace(/enter/g,"e");
        textSinEncriptado = textSinEncriptado.replace(/imes/g,"i");
        textSinEncriptado = textSinEncriptado.replace(/ai/g,"a");
        textSinEncriptado = textSinEncriptado.replace(/ober/g,"o");                               
        textSinEncriptado = textSinEncriptado.replace(/ufat/g,"u");
                
        titulo.textContent = "Texto Desencriptado";

        respuesta.value = textSinEncriptado;

    } else if (validar(leerAreaConsulta())== 1){  
        mensajeX.textContent = "No se admite el uso de letras MAYUSCULAS";
        abrirModal();
        
    } else if(validar(leerAreaConsulta())== 2){
        mensajeX.textContent = "No se admite el uso de letras con ACENTOS";
        abrirModal();

    } else if (textEncriptar.length == 0){
        mensajeX.textContent = "No se admite el uso de TEXTO VACIO";
        abrirModal();
        
    } else {
        mensajeX.textContent = "No se admite el uso de SIMBOLOS solamente (!)";
        abrirModal();        
    }    
}

//funcion copiar texto en portapapeles
function copiarTexto (){
    titulo.textContent = "El Texto ha sido copiado con exito";
    document.getElementById("area-consulta").value = "";
    let textoCopia = respuesta.value;
    navigator.clipboard.writeText(textoCopia)
    console.log('Texto copiado al portapapeles')
    ocultarRespuesta(); 
    mostrarParrafo();     
    return;
 }


//funcion para ocultar la imagen
function ocultarImagen(){
    imgEncriptador.classList.add("ocultar");
    
}
//funcion para ocultarel parrafo
function ocultarParrafo(){    
    parrafoRespuesta.classList.add("ocultar");    
}
//funcion para mostrar el parrafo
function mostrarParrafo(){
    parrafoRespuesta.classList.remove("ocultar"); 
}
//funcion para mostrar textarea respuesta y boton copiar
function mostrarRespuesta(){
    copiar.style.display='block';
    respuesta.style.display='block';
}
//funcion para ocultar textarea respuesta y boton copiar
function ocultarRespuesta(){
    copiar.style.display='none';
    respuesta.style.display='none';
}