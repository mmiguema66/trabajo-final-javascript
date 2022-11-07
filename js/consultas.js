function limpiarFormulario() {
    let campos= document.querySelector('.campos');
        for(let x=0; x<campos.length; x++){
            campos[x].value='';
        }
    }
    let mensajes=[];
    function agregarConsulta(){
    
        let consulta=[];
        consulta.push(document.getElementById('txtNombre').value);
        consulta.push(document.getElementById('txtMensaje').value);
        consulta.push(document.getElementById('txtEmail').value);
        consulta.push(document.getElementById('txtTelefono').value);
    
        let validarFormulario=true;
        for(let x=0; x < consulta.length; x++){
            if(consulta[x]=="")
            {
                validarFormulario=false;
            }
        }
        if(validarFormulario){
            mensajes.push(consulta);
            let datos=JSON.stringify(mensajes);
            localStorage.setItem('listadoConsulta', datos);
            limpiarFormulario();
            mostrarMensaje();
    
        }else {
            alert("Por favor llenar los campos requeridos");
        }
        
    }
    function mostrarMensaje(){
        let llenarTabla= document.getElementById("tbDatos");
        llenarTabla.innerHTML="";
        for(x= 0; x < mensajes.length; x++){
            tr=document.createElement('tr');
            consulta= mensajes[x];
            for(y=0; y< consulta.length; y++){
                celda=consulta[y];
                td=document.createElement('td');
                td.innerHTML=celda;
                tr.appendChild(td);
    
            }
            llenarTabla.appendChild(tr);
        }
    }
    datos=localStorage.getItem('listadoConsulta');
    if(datos!=null){
        mensajes=JSON.parse(datos);
        mostrarMensaje();
    }
