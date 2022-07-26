// PROGRAMA PARA DEFINIR COSTO DE ENVIO

let ciudad

do {
    ciudad = parseInt(prompt("Ingrese su opcion correcta:\n\n 1.CABA \n 2.Provincia de BSAS \n 3.Otro \n 4. Salir de la aplicacion"))
    
    
    if (ciudad == 1){
        alert ("El envio costará $500")
       
    } else if (ciudad == 2){
        alert ("El envio costará $800")
        
    } else if (ciudad == 3) {
        alert ("El envio costará $1500")
       
   }   else if (ciudad == 4) {
    break
   }else{
    alert ("Ingrese una opcion correctas")
   }

} while (ciudad !=4); 

