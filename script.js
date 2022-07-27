// PROGRAMA PARA DEFINIR COSTO DE ENVIO
function calcularEnvio(){

    let ciudad
    do {
        ciudad = parseInt(prompt(`Hola ${nombre} ingrese su opcion correcta:\n\n 1.CABA \n 2.Provincia de BSAS \n 3.Otro \n 4. Volver atras`))

        if (ciudad == 1){
            alert ("El envio costará $500")
           
        } else if (ciudad == 2){
            alert ("El envio costará $800")
            
        } else if (ciudad == 3) {
            alert ("El envio costará $1500")
           
       }   else if (ciudad == 4) {
        break
       }else{
        alert ("Ingrese una opción correcta")
       }
    
    } while (ciudad !=4); 
}

let menu
let nombre
do {
    menu= parseInt(prompt("Bievenido al sistema de presupuesto de envios, elija la opcion que desee.\n\n 1.Ingresar cuenta \n 2.Empresas de envio \n 3 Consultas \n 4. Salir de la aplicacion"))
    
    switch(menu){
        case 1:
            nombre=prompt("Ingrese su nombre")
            calcularEnvio()
            break
        case 2:
            alert("Las empresas que trabajan con nosotros son:\n\n Correo Argentino \n Andreani \n OCA")
            break
        
        case 3:
            prompt("Envie su consulta y en la brevedad sera respondida.")
            break
    }

} while (menu != 4); 

