



function calcularSalarioNeto() {
    let puesto=parseInt(document.getElementById('puesto').value);
    let horas=parseInt(document.getElementById('horas').value);
    let anios=parseInt(document.getElementById('anios').value);
    let sueldoMensual= 28;
    let sueldoHora=0;
    switch(puesto){
        case 1: sueldoHora=300; break;
        case 2: sueldoHora=250; break;
        case 3: sueldoHora=150; break;
        case 4: sueldoHora=150; break;
        case 5: sueldoHora=180; break;
        case 6: sueldoHora=150; break;
    }
    let sueldoBase=(sueldoHora*horas) * sueldoMensual;
    let presentismo=parseFloat(sueldoBase*0.08);
    let apoyo=parseFloat(sueldoBase*0.05);
    let antiguedad=parseFloat(anios*0.01);
    let estimulo=parseFloat(sueldoBase*0.08);
    let totalPercepciones=parseFloat(sueldoBase+presentismo+apoyo+antiguedad+estimulo);
    let jubilacion=parseFloat(sueldoBase*0.11);
    let obraSocial=parseFloat(sueldoBase*0.03)
    let ley=parseFloat(sueldoBase*0.03);
    let sindicato=parseFloat(sueldoBase*0.02);
    let totalDeducciones=parseFloat(jubilacion+obraSocial+ley+sindicato);
    let SalarioNeto=parseFloat(totalPercepciones-totalDeducciones);
    document.getElementById("sueldoBase").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("apoyo").innerHTML="<h3>$"+apoyo.toFixed(2)+"</h3>";
    document.getElementById("presentismo").innerHTML="<h3>$"+presentismo.toFixed(2)+"</h3>";
    document.getElementById("antiguedad").innerHTML="<h3>$"+antiguedad.toFixed(2)+"</h3>";
    document.getElementById("estimulo").innerHTML="<h3>$"+estimulo.toFixed(2)+"</h3>";
    document.getElementById("totalPercepciones").innerHTML="<h3>$"+totalPercepciones.toFixed(2)+"</h3>";
    document.getElementById("jubilacion").innerHTML="<h3>$"+jubilacion.toFixed(2)+"</h3>";
    document.getElementById("obraSocial").innerHTML="<h3>$"+obraSocial.toFixed(2)+"</h3>";
    document.getElementById("ley").innerHTML="<h3>$"+ ley.toFixed(2)+"</h3>";
    document.getElementById("sindicato").innerHTML="<h3>$"+sindicato.toFixed(2)+"</h3>";
    document.getElementById("totalDeducciones").innerHTML="<h3>$"+totalDeducciones.toFixed(2)+"</h3>";
    document.getElementById("SalarioNeto").innerHTML="<h3>$"+SalarioNeto.toFixed(2)+"</h3>";

}



