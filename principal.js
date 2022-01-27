/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras
*/


// botones y eventos en los mismos

var btnEncriptar= document.getElementById("btnEncriptar");
var btnDesencriptar= document.getElementById("btnDesencriptar");
var btnCopiar= document.getElementById("btnCopiar");





btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var inputTexto= document.getElementById("mjeParaEncriptar").value;
    var texto= document.getElementById("mjeParaEncriptar");
    if (!validarIngreso(inputTexto)) {
        encriptarMensaje(inputTexto);
        texto.value="";
        texto.focus();
        
    }
    
  
  });

btnDesencriptar.addEventListener("click",function(e){

    e.preventDefault();
    var encriptado= document.getElementById("mjeParaEncriptar").value;
    var inputEncrip= document.getElementById("mjeEncriptado");   
    desencriptarMje(encriptado);
    inputEncrip.value="";
    
});

btnCopiar.addEventListener("click",function(event){
event.preventDefault();
copiarMje();


});

 
//la función usa el método replace para cambiar las vocales por lo solicitado, usando la expresión global(g)

function encriptarMensaje(mensaje){
    console.log(mensaje);
    var mjeEncriptado= mensaje.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/g,"ufat");
    var mostrarMje = document.getElementById("mjeEncriptado");
    console.log(mjeEncriptado);
     mostrarMje.value= mjeEncriptado;
     return mjeEncriptado;

}

function validarIngreso(mensaje){

    const letrasPermitidas= " abcdefghijklmnñopqrstuvwxyz"; // sólo las letras permitidas y el espacio
    var ingreso = document.getElementById("mjeParaEncriptar");

    for (let i = 0; i < mensaje.length; i++) {
       if (letrasPermitidas.indexOf(mensaje.charAt(i),0) < 0) {
           ingreso.value="";
           ingreso.focus();
           alert("Sólo puede ingresar letras y deben ser minúsculas");
           return true;
           break;
       }
    }

}


function desencriptarMje(mensaje) {
    
    var textoDesencriptado = mensaje
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/obes/gi, "o")
      .replace(/ufat/gi, "u");
    var inputTexDesencriptado = document.getElementById("mjeParaEncriptar");
    inputTexDesencriptado.value = textoDesencriptado;
    return textoDesencriptado;
  }


  function copiarMje(){

   var copiado = document.getElementById("mjeEncriptado")

    if (copiado.value == "") {
     
        alert("No hay palabras por copiar");
        copiado.focus();
        console.log(copiado.value);
    }
    else {
        copiado.select();
        navigator.clipboard.writeText(copiado.value);
        copiado.focus();
        
    }
        

  }


