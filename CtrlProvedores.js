"use strict";

var forma = document.getElementById("forma"),
        formal = document.getElementById("formal"),
    txtFecha = forma["fecha"],
    salidaFecha = document.getElementById("salidaFecha"),
    salidaClave = document.getElementById("salidaClave"),
    SalidaNombre = document.getElementById("salideNombre"),
    salidaTelefono = document.getElementById("salidaTelefono"),
    campos = ["clave","nombre","telefono"],
    salidas = ["salidaClave", "salidaNombre","salidaTelefono"];
forma.addEventListener("submit", procesa, false);
    
    function procesa(){
    var fechaValueAsDate = txtFecha.valueAsDate,
       fecha = new Date(txtFecha.value),
       miFecha; 
       miFecha=((fecha.getDate()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear());
       salidaFecha.textContent = miFecha + " | " + txtFecha.value + fecha.toGMTString();
    
        for (var i = 0, longitud = campos.length;  i<longitud; i++) {
      var campo = forma[campos[i]];
      var salida = document.getElementById(salidas[i]);
      salida.value = campo.value;
    }
    }
    function limpiar(){
    salidaClave.inf("");
    salidaNombre.info("");
    salidaTelefono.info("");
    forma["salidaFecha"].value="";
    forma["nombre"].value="";
    forma["clave"].value="";
    forma["telefono"].value="";
    forma["fecha"].value="";
}
