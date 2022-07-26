//PROGRAMA PARA DEFINIR COSTO DE ENVIO

let menu
let nombre
const alert = document.getElementById('alert')
alert.style.display="none"

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    
}

const arrayUsuario = []
const login = document.getElementById("iniciarSesion")

login.addEventListener('submit', (event) => {
    event.preventDefault()
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    const usuario = new Usuario(nombre, apellido)
    arrayUsuario.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuario))

    Toastify({
        text: "Bienvenido de nuevo.",
        duration: 4000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#00c9c8",
          borderRadius: "15px",
          boxShadow: " box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1)"
        },
        onClick: function(){} // Callback after click
      }).showToast();

   

      addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            Toastify({
                text: 'Tenes que tocar el botón "Enviar."',
                duration: 2000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "#00c9c8",
                  borderRadius: "15px",
                  boxShadow: " box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1)"
                },
                onClick: function(){} // Callback after click
              }).showToast();
        }
    });

    // USO DE OPERADOR TERNARIO

    localStorage.getItem('usuarios') != '' ? login.style.display="none"  :   login.style.display="block"


let nombreUsuario = JSON.parse(localStorage.getItem('usuarios'))

    login.reset()
    let titulo = document.getElementById('titulo')
    let container = document.getElementById('conteiner')
    titulo.innerText = `Bienvenido ${nombreUsuario.nombre} ${nombreUsuario.apellido}`
    container.innerHTML = `<div class="botones" id="botones">
<button class="boton" id="calcular">Calcular envio</button>
<button class="boton" id="empresas">Empresas de envio</button>
<button class="boton" id="consultas">Consultas</button>
</div>
<div id="subContainer"></div>`

    const calcular = document.getElementById('calcular')
    const empresas = document.getElementById('empresas')
    const consultas = document.getElementById('consultas')

    const subContainer = document.getElementById('subContainer')
    calcular.addEventListener('click', () => {
        alert.style.display="none"
        alert.innerHTML=''

        
          
        subContainer.innerHTML = `<div class="conteiner">
    <label for="consultaCiudad">¿De qué ciudad sos?</label>
    <ol>
    <li>CABA</li>
    <li>Gran Buenos Aires</li>
    <li>Otro</li>
</ol>
    <input type="text" id="consultaCiudad">
    <button type="submit" class="boton" id="enviarCiudad">Enviar</button>
</div>
   `
        const botonCiudad = document.getElementById('enviarCiudad')
        const inputCiudad = document.getElementById('consultaCiudad')

        botonCiudad.addEventListener('click', () => {
            calcularEnvio(inputCiudad.value)
        })
    })
    empresas.addEventListener('click', () => {
        alert.style.display="none"
        alert.innerHTML=''
        subContainer.innerHTML = `<div class="conteiner">
    <label for="consultaCiudad">¿Qué empresa elegis?</label>
    <ol>
    <li>Correo Argentino</li>
    <li>Andreani</li>
    <li>OCA</li>
</ol>
    <input type="text" id="consultaEmpresa">
    <button type="submit" class="boton" id="enviarEmpresa">Enviar</button>
</div>
   `
        const botonEmpresa = document.getElementById('enviarEmpresa')
        const inputEmpresa = document.getElementById('consultaEmpresa')

        botonEmpresa.addEventListener('click', () => {
            elegirEmpresa(inputEmpresa.value)

        })
        
    })

    consultas.addEventListener('click', () => {
        alert.style.display="none"
        alert.innerHTML=''
        subContainer.innerHTML = `<div class="conteiner">
    <label for="consultaCiudad"> Ingrese una distancia </label>
    
    <input type="text" id="consulta">
    <button type="submit" class="boton" id="enviarConsulta">Enviar</button>
</div>
   `
        const consulta = document.getElementById('consulta')
        const enviarConsulta = document.getElementById('enviarConsulta')

       enviarConsulta.addEventListener('click', () => {
        distanciaDelUsuario(consulta.value)

        })
    })
})



//Funcion para decir cuanto costará el envio segun la distancia del usuario.
function calcularEnvio(ciudad) {
   

    if (ciudad == 1) {
        alert.style.display="block"
        alert.innerHTML="El envio costará $500"

    } else if (ciudad == 2) {
        alert.style.display="block"
        alert.innerHTML="El envio costará $800"

    } else if (ciudad == 3) {
        alert.style.display="block"
        alert.innerHTML='Tocar el botón "Consultas" para más información '
    } else {
        alert.style.display="block"
        alert.innerHTML="Ingrese una opción correcta"
    }
    
}

//Array para guardar empresas 
class Empresa {
    constructor(nombre, costo, valoracion) {

        this.nombre = nombre
        this.costo = costo
        this.valoracion = valoracion
    }
}

// const empresa1 = new Empresa("Correo Argentino", "$300", "4,3")
// USO DE DESESTRUCTURACIÓN

const empresa1 = {
    nombre: "Correo Argentino",
    costo: 300,
    valoracion: 3.2
}

const {
    nombre: nombre1,
    costo: costo1,
    valoracion: valoracion1
} =empresa1
const empresa2 = new Empresa("Andreani", "$400", "3.8")
const empresa3 = new Empresa("OCA", "$700", "3.2")

const empresas = [empresa1, empresa2, empresa3]



//Funcion para mostrar descripcion de las empresas
function elegirEmpresa(elegir) {
    if (elegir == 1) {
        alert.style.display="block"
        alert.innerHTML=`${nombre1} tiene un costo de $${costo1} y una valoracion de ${valoracion1}/5 estrellas.`
    } else if (elegir == 2) {
        alert.style.display="block"
        alert.innerHTML=`${empresa2.nombre} tiene un costo de ${empresa2.costo} y una valoracion de ${empresa2.valoracion}/5 estrellas.`
    } else if (elegir == 3) {
        alert.style.display="block"
        alert.innerHTML=`${empresa3.nombre} tiene un costo de ${empresa3.costo} y una valoracion de ${empresa3.valoracion}/5 estrellas.`
    } else {
        alert.style.display="block"
        alert.innerHTML="Pone bien la opcion"
    }
}


//Funcion para según la distancia del usuario te muestre el costo del envio. 
function distanciaDelUsuario(distUsuario) {
    const distancia = [0, 100, 300, 500, 1000, 5000, 10000, 15000]
    resultadoDistancia = distancia.find(distArray => distArray >= distUsuario)

    if (resultadoDistancia == 100) {
        alert.style.display="block"
        alert.innerHTML="El envio es gratis!"
    } else if (resultadoDistancia == 300) {
        alert.style.display="block"
        alert.innerHTML="El envio costará $200"
    } else if (resultadoDistancia == 500) {
        alert.style.display="block"
        alert.innerHTML="El envio costará $400"
    } else if (resultadoDistancia == 1000) {
        alert.style.display="block"
        alert.innerHTML="El envio costará $700"
    } else if (resultadoDistancia == 5000) {
        alert.style.display="block"
        alert.innerHTML="El envio costará $1500"
    } else if (resultadoDistancia == 10000) {
        alert.style.display="block"
        alert.innerHTML="El envio costará $5000"
    } else if (distUsuario > 15000) {
        alert.style.display="block"
        alert.innerHTML="No se puede realizar envio a esta distancia"
    } else {
        alert.style.display="block"
        alert.innerHTML="Ingrese un valor correcto."
    }
}

