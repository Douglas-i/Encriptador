//Iniciando JavaScroipt

//Declaraciones de las variables
let textoEncriptar;
let textoEncriptado = '';
const textAreaEncriptar = document.querySelector("#textarea1");
const textAreaEncriptado = document.querySelector("#textarea2");
const btnEncriptar = document.querySelector('#btnEncriptar');
const img = document.querySelector('.img-textarea');

//------------------

textAreaEncriptar.addEventListener('input', function(e) {
    textoEncriptar = e.target.value;    
});

btnEncriptar.addEventListener('click', function(e) {    
    
    let actual = '';
    let posActual = 0;
    let final;

    if(textoEncriptar.value != ''){

        for(let i = 0; i < textoEncriptar.length; i++) {            

            if(textoEncriptar[i] === 'a') {                

                actual = actual + textoEncriptar.slice(posActual, i + 1) +  'i'
                final = textoEncriptar.slice(i + 1, textoEncriptar.length);
                posActual = i + 1;                

            }
            if(textoEncriptar[i] === 'o') {                
                
                actual = actual + textoEncriptar.slice(posActual, i + 1) + 'ber';
                final = textoEncriptar.slice(i + 1, textoEncriptar.length);
                posActual = i + 1;

            }
            else if(textoEncriptar[i] === 'e') {                
                
                actual = actual + textoEncriptar.slice(posActual, i + 1) + 'nter';
                final = textoEncriptar.slice(i + 1, textoEncriptar.length);
                posActual = i + 1;
                
            }
            else if(textoEncriptar[i] === 'i') {                
                
                actual = actual + textoEncriptar.slice(posActual, i + 1) + 'mes';
                final = textoEncriptar.slice(i + 1, textoEncriptar.length);
                posActual = i + 1;
                
            }
            else if(textoEncriptar[i] === 'u') {                
                
                actual = actual + textoEncriptar.slice(posActual, i + 1) + 'fat';
                final = textoEncriptar.slice(i + 1, textoEncriptar.length);
                posActual = i + 1;
                
            }
        }
        textoEncriptado = actual + final;        
        img.style.visibility = 'hidden'; 
        textAreaEncriptado.textContent = textoEncriptado;        
    }      
});
