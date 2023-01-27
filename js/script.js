//Iniciando JavaScroipt

//Declaraciones de las variables
let mensaje;
let textoEncriptado = '';
let textoDesencriptado = '';
const textAreaEncriptar = document.querySelector("#textarea1");
const textAreaEncriptado = document.querySelector("#textarea2");
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');
const img = document.querySelector('.img-textarea');

//------------------

textAreaEncriptar.addEventListener('input', function(e) {
    mensaje = e.target.value;    
});

btnEncriptar.addEventListener('click', function(e) {    
    
    let actual = '';
    let posActual = 0;
    let final;

    if(mensaje.value != ''){

        for(let i = 0; i < mensaje.length; i++) {            

            if(mensaje[i] === 'a') {                

                actual = actual + mensaje.slice(posActual, i + 1) +  'i'
                final = mensaje.slice(i + 1, mensaje.length);
                posActual = i + 1;                

            }
            else if(mensaje[i] === 'o') {                
                
                actual = actual + mensaje.slice(posActual, i + 1) + 'ber';
                final = mensaje.slice(i + 1, mensaje.length);
                posActual = i + 1;

            }
            else if(mensaje[i] === 'e') {                
                
                actual = actual + mensaje.slice(posActual, i + 1) + 'nter';
                final = mensaje.slice(i + 1, mensaje.length);
                posActual = i + 1;
                
            }
            else if(mensaje[i] === 'i') {                
                
                actual = actual + mensaje.slice(posActual, i + 1) + 'mes';
                final = mensaje.slice(i + 1, mensaje.length);
                posActual = i + 1;
                
            }
            else if(mensaje[i] === 'u') {                
                
                actual = actual + mensaje.slice(posActual, i + 1) + 'fat';
                final = mensaje.slice(i + 1, mensaje.length);
                posActual = i + 1;
                
            }
        }
        textoEncriptado = actual + final;        
        img.style.visibility = 'hidden'; 
        document.querySelector('.p1').style.visibility = 'hidden';
        document.querySelector('.p2').style.visibility = 'hidden';        
        textAreaEncriptado.textContent = textoEncriptado;     
    }      
});

btnDesencriptar.addEventListener('click', function(e){
    let pos = 0;
    let actual = '';
    let final = '';

    if(mensaje.value != '') {
        
        let j = mensaje.length;

        for( let i = 0; i < mensaje.length; i++) {
            console.log('--------------');            
            console.log(i);

            //Cambio de ai por a
            if(mensaje.indexOf('ai') != -1) {
                pos = mensaje.indexOf('ai');
                
                actual = mensaje.slice(0, pos);
                final = mensaje.slice(pos + 2, mensaje.length);
                mensaje = actual + 'a' + final;
                textoDesencriptado = mensaje;                
            }
            //Cambio de ober por o
            if (mensaje.indexOf('ober') != -1) {
                pos = mensaje.indexOf('ober');
                
                actual = '';
                actual = mensaje.slice(0, pos);                        
                final = mensaje.slice(pos + 4, mensaje.length);            
                mensaje = actual + 'o' + final;
                textoDesencriptado = mensaje;                
            }
            //Cambio de ufat por u
            if(mensaje.indexOf('ufat') != -1) {
                pos = mensaje.indexOf('ufat');

                actual = '';
                actual = mensaje.slice(0, pos);
                final = mensaje.slice(pos + 4, mensaje.length);
                mensaje = actual + 'u' + final;
                textoDesencriptado = mensaje;                            
            }
            //Cmambio de enter por e
            if(mensaje.indexOf('enter') != -1) {
                pos = mensaje.indexOf('enter');

                actual = '';
                actual = mensaje.slice(0, pos);
                final = mensaje.slice(pos + 5, mensaje.length);
                mensaje = actual + 'e' + final;
                textoDesencriptado = mensaje;                
            }
            //Cambiando de imes a i
            if(mensaje.indexOf('imes') != -1 ) {
                pos = mensaje.indexOf('imes');

                actual = '';
                actual = mensaje.slice(0, pos);
                final = mensaje.slice(pos + 4, mensaje.length);
                mensaje = actual + 'i' + final;
                textoDesencriptado = mensaje;                
            }                              
        }

        textAreaEncriptado.textContent = textoDesencriptado;
    }
})