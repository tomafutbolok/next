var pantalla = document.getElementById('display');

var cero = document.getElementById('0');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');

var igual = document.getElementById('igual');
var mas = document.getElementById('mas');
var resta = document.getElementById('menos');
var por = document.getElementById('por');
var dividir = document.getElementById('dividido');
var sign = document.getElementById('sign');
var on = document.getElementById('on');
var punto = document.getElementById('punto');



igual.addEventListener('mousedown',function(){
    igual.setAttribute('style','transform:scale(0.95,0.95)')
 })
 igual.addEventListener('mouseout',function(){
     igual.setAttribute('style','transform:scale(1,1)')
 })
 mas.addEventListener('mousedown',function(){
    mas.setAttribute('style','transform:scale(0.95,0.95)')
 })
 mas.addEventListener('mouseout',function(){
    mas.setAttribute('style','transform:scale(1,1)')
 })
 resta.addEventListener('mousedown',function(){
    resta.setAttribute('style','transform:scale(0.95,0.95)')
 })
 resta.addEventListener('mouseout',function(){
    resta.setAttribute('style','transform:scale(1,1)')
 })
 dividir.addEventListener('mousedown',function(){
    dividir.setAttribute('style','transform:scale(0.95,0.95)')
 })
 dividir.addEventListener('mouseout',function(){
    dividir.setAttribute('style','transform:scale(1,1)')
 })
 sign.addEventListener('mousedown',function(){
    sign.setAttribute('style','transform:scale(0.95,0.95)')
 })
 sign.addEventListener('mouseout',function(){
    sign.setAttribute('style','transform:scale(1,1)')
 })
 on.addEventListener('mousedown',function(){
    on.setAttribute('style','transform:scale(0.95,0.95)')
 })
 on.addEventListener('mouseout',function(){
    on.setAttribute('style','transform:scale(1,1)')
 })
 punto.addEventListener('mousedown',function(){
    punto.setAttribute('style','transform:scale(0.95,0.95)')
 })
 punto.addEventListener('mouseout',function(){
    punto.setAttribute('style','transform:scale(1,1)')
 })
 por.addEventListener('mousedown',function(){
    por.setAttribute('style','transform:scale(0.95,0.95)')
 })
 por.addEventListener('mouseout',function(){
    por.setAttribute('style','transform:scale(1,1)')
 })


cero.addEventListener('click',function(){
    numero = 0;
     contador= pantalla.textContent;

    if (pantalla.textContent==0){

    }else if(contador.length < 9){

        pantalla.textContent += numero;
    }
})
cero.addEventListener('mousedown',function(){
   cero.setAttribute('style','transform:scale(0.95,0.95)')
})
cero.addEventListener('mouseout',function(){
    cero.setAttribute('style','transform:scale(1,1)')
})
uno.addEventListener('click',function(){
    var numero = 1;
     contador= pantalla.textContent;

    if (pantalla.textContent== 0){

        pantalla.textContent=numero;

    }else if(contador.length < 9){

        pantalla.textContent+= numero;
    }
})
uno.addEventListener('mousedown',function(){
    uno.setAttribute('style','transform:scale(0.95,0.95)')
})
uno.addEventListener('mouseout',function(){
    uno.setAttribute('style','transform:scale(1.1)')
})

dos.addEventListener('click',function(){
    var numero = 2;
     contador= pantalla.textContent;

    if (pantalla.textContent== 0){

        pantalla.textContent=numero;

    }else if(contador.length < 9){

        pantalla.textContent+= numero;
    }
})
dos.addEventListener('mousedown',function(){
    dos.setAttribute('style','transform:scale(0.95,0.95)')
})
dos.addEventListener('mouseout',function(){
    dos.setAttribute('style','transform:scale(1.1)')
})


tres.addEventListener('click',function(){
    var numero = 3;
    contador = pantalla.textContent;

    if (pantalla.textContent== 0){

        pantalla.textContent=numero;

    }else if(contador.length < 9){

        pantalla.textContent+= numero;
    }
})
tres.addEventListener('mousedown',function(){
    tres.setAttribute('style','transform:scale(0.95,0.95)')
})
tres.addEventListener('mouseout',function(){
    tres.setAttribute('style','transform:scale(1.1)')
})
 

cuatro.addEventListener('click',function(){
    var numero = 4;    
    contador = pantalla.textContent;

    if (pantalla.textContent== 0 ){

        pantalla.textContent=numero;

    }else if(contador.length < 9){

        pantalla.textContent+= numero;
      
    }
})
cuatro.addEventListener('mousedown',function(){
    cuatro.setAttribute('style','transform:scale(0.95,0.95)')
})
cuatro.addEventListener('mouseout',function(){
    cuatro.setAttribute('style','transform:scale(1.1)')
})


cinco.addEventListener('click',function(){
    var numero = 5;
    contador = pantalla.textContent;

    if (pantalla.textContent== 0){

        pantalla.textContent=numero;
        
    }else if(contador.length < 9){

        pantalla.textContent+= numero;
    }
})
cinco.addEventListener('mousedown',function(){
    cinco.setAttribute('style','transform:scale(0.95,0.95)')
})
cinco.addEventListener('mouseout',function(){
    cinco.setAttribute('style','transform:scale(1.1)')
})


seis.addEventListener('click',function(){
    var numero = 6;
    contador = pantalla.textContent;
    if (pantalla.textContent== 0){

        pantalla.textContent=numero;

    }else if(contador.length < 9){

        pantalla.textContent+= numero;
    }
})
seis.addEventListener('mousedown',function(){
    seis.setAttribute('style','transform:scale(0.95,0.95)')
})
seis.addEventListener('mouseout',function(){
    seis.setAttribute('style','transform:scale(1.1)')
})

siete.addEventListener('click',function(){
    var numero = 7;
    contador = pantalla.textContent;

    if (pantalla.textContent == 0){

              pantalla.textContent=numero;   

    } else if(contador.length < 9){

        pantalla.textContent+= numero;
    }
})

siete.addEventListener('mousedown',function(){
    siete.setAttribute('style','transform:scale(0.95,0.95)')
})
siete.addEventListener('mouseout',function(){
    siete.setAttribute('style','transform:scale(1,1)')
})


ocho.addEventListener('click',function(){
    var numero = 8;
    contador = pantalla.textContent;
    if (pantalla.textContent== 0){

        pantalla.textContent=numero;

    }else if(contador.length < 9){

        pantalla.textContent+= numero;
    }
})
ocho.addEventListener('mousedown',function(){
    ocho.setAttribute('style','transform:scale(0.95,0.95)')
})
ocho.addEventListener('mouseout',function(){
    ocho.setAttribute('style','transform:scale(1.1)')
})


nueve.addEventListener('click',function(){
    var numero = 9;
    contador = pantalla.textContent;

    if (pantalla.textContent== 0){

        pantalla.textContent=numero;

    }else if(contador.length < 9){

        pantalla.textContent+= numero;       
    }
})
nueve.addEventListener('mousedown',function(){
    nueve.setAttribute('style','transform:scale(0.95,0.95)')
})
nueve.addEventListener('mouseout',function(){
    nueve.setAttribute('style','transform:scale(1.1)')
})



borrar = function(){
    pantalla.textContent="";
}

mas.addEventListener('click',function(){
    numero1 = parseInt(pantalla.textContent);
    signo = "+";
    borrar();
})

resta.addEventListener('click',function(){
    numero1 = parseInt(pantalla.textContent);
    signo = "-";
    borrar();
})

por.addEventListener('click',function(){
    numero1= parseFloat(pantalla.textContent);
    signo = "*";
    borrar();
})

dividir.addEventListener('click',function(){
    numero1 = parseFloat(pantalla.textContent);
    signo="/";
    borrar();
})

on.addEventListener('click',function(){
    numero1=0;
    numero2=0;
    signo="";
    pantalla.textContent="0";
})

igual.addEventListener('click',function(){
    numero2 = parseInt(pantalla.textContent);
    switch(signo){
        case "+": resultado = numero1 + numero2;
        pantalla.textContent=resultado;
        break;
        case "-": resultado = numero1 - numero2;
        pantalla.textContent=resultado;
        break;
        case "*": resultado = numero1 * numero2;
        pantalla.textContent=resultado;
        break;
        case "/": resultado = numero1 / numero2;
        pantalla.textContent=resultado;
        break;
    }
});