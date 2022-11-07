const renderArray = (clientes) => {
    const contenido = document.querySelector('#contenido')

    let html = ""

    clientes.forEach(cliente =>{
        const {logo, comercio, sucursales, email  } = cliente

        html += `
            <img src= ${logo}>
            <p>Comercio: ${comercio}</p>
            <p>Sucursales: <a href= ${sucursales} target="_blank">ver sucursales</a></a></p>
            <p>Email: ${email}</p>
        `
    });

    contenido.innerHTML = html;

}

const obtenerDatosJson = () =>{
    fetch("../data/datos.json")
    .then((respuesta) => {
       return respuesta.json()
    })
    .then((datos) => {
       
        renderArray (datos)
    })
    .catch((error)=>{
        console.log(error)
    });
   
}


const btnCliente = document.querySelector('#btn-clientes')
btnCliente.addEventListener('click', obtenerDatosJson)
