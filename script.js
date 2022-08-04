//PROGRAMA PARA DEFINIR COSTO DE ENVIO







let menu
let nombre

//Menu que se abre al hacer click en "iniciar" desde acá llamo a las funciones
const boton = document.getElementById("submit")
boton.addEventListener("click" , () => {
    do {
        menu= parseInt(prompt("Bienvenido al sistema de presupuesto de envios, elija la opcion que desee.\n\n 1.Ingresar cuenta \n 2.Empresas de envio \n 3 Consultas \n 4. Salir de la aplicacion"))
        
        switch(menu){
            case 1:
                nombre=prompt("Ingrese su nombre")
                calcularEnvio()
                break
            case 2:
               
                elegirEmpresa()
                break
            
            case 3:
                prompt("Envie su consulta y en la brevedad sera respondida.")
                break
            
            case 4:
                break
        }
    } while (menu != 4); 
})

//Funcion para decir cuanto costará el envio segun la distancia del usuario.
function calcularEnvio(){
    let ciudad
    do {
        ciudad = parseInt(prompt(`Hola ${nombre} ingrese su opcion correcta:\n\n 1.CABA \n 2.Provincia de BSAS \n 3.Otro \n 4. Volver atras`))

        if (ciudad == 1){
            alert ("El envio costará $500")
           
        } else if (ciudad == 2){
            alert ("El envio costará $800")
            
        } else if (ciudad == 3) {
            distanciaDelUsuario()
           
       }   else if (ciudad == 4) {
        break

       }else{

        alert ("Ingrese una opción correcta")
       }   
    } while (ciudad !=4); 
}


//Array para guardar empresas 
class Empresa {
    constructor(nombre,costo, valoracion){

    this.nombre = nombre 
    this.costo = costo 
    this.valoracion = valoracion
    }
}
const empresa1 = new Empresa("Correo Argentino" , "$300", "4,3")
const empresa2 = new Empresa("Andreani", "$400", "3.8")
const empresa3 = new Empresa("OCA","$700","3.2")

const empresas= [empresa1,empresa2,empresa3]
console.table(empresas)
let cantEmpresas = empresas.length

//Funcion para mostrar descripcion de las empresas
function elegirEmpresa(){
    let elegir
    do{
        elegir=prompt("Elija una opcion \n 1.Correo Arg \n 2.Andreani \n 3.Oca \n 4.Volver atrás")

        if(elegir==1){
            alert(`${empresa1.nombre} tiene un costo de ${empresa1.costo} y una valoracion de ${empresa1.valoracion}/5 estrellas.`)
        }else if (elegir==2){
            alert(`${empresa2.nombre} tiene un costo de ${empresa2.costo} y una valoracion de ${empresa2.valoracion}/5 estrellas.`)
        }else if (elegir==3){
            alert(`${empresa3.nombre} tiene un costo de ${empresa3.costo} y una valoracion de ${empresa3.valoracion}/5 estrellas.`)

        }else if (elegir==4){
            break
        }
        else {
            alert ("Pone bien la opcion")
        }
    } while (elegir !=4); 
 }


//Funcion para según la distancia del usuario te muestre el costo del envio. 
function distanciaDelUsuario(){
    const distancia = [0,100,300,500,1000,5000,10000,15000]

    let distUsuario =prompt("Ingrese una distancia")
    resultadoDistancia = distancia.find(distArray => distArray >= distUsuario)
        
        if(resultadoDistancia==100){
            alert("El envio es gratis!")
        } else if(resultadoDistancia == 300) {
            alert("El envio costará $200")
        } else if(resultadoDistancia == 500) {
            alert("El envio costará $400")
        } else if(resultadoDistancia == 1000) {
            alert("El envio costará $700")
        }  else if(resultadoDistancia == 5000) {
            alert("El envio costará $1500")
        }  else if(resultadoDistancia == 10000) {
            alert("El envio costará $5000")
        }  else if(distUsuario > 15000) {
            alert("No se puede realizar envio a esta distancia")
        } else{
            alert("Ingrese un valor correcto.")
        }
}

