function cambioBol(){
    var dol = 6.96; 
    var re ;   
    var pe =parseInt(document.getElementById('inputBol').value, 10);
    
    re = pe / dol ;
    document.getElementById('resultadoBol').innerHTML= re  + ' Dolares';
}

function cambioDol(){
var dol = 6.96; 
var re ;   
var pe =parseInt(document.getElementById('inputDol').value, 10);

re = pe * dol ;
document.getElementById('resultadoDol').innerHTML= re + ' Bolivianos';
}

function convertir(){            
    if(opcionBolivianos.check)
    {
        let valor = parseFloat(inputMonto) * 2.2046;
    }
    else
    {
        let valor = parseFloat(inputMonto) * 2.2046;
    }
    resultadoConversion.innerHTML = valor

}

let ejer1 = document.getElementById('buttonInput')
ejer1.addEventListener('click', ejercicio1)

function ejercicio1(){
    let entrada = document.getElementById('input')
    let mensaje = document.getElementById('InicioSesion')

    if(entrada.value == ''){
        mensaje.innerHTML = 'Iniciar Sesión'
    }else{
        mensaje.innerHTML = 'Bienvenido ' + entrada.value
        entrada.value = ''
    }
}

