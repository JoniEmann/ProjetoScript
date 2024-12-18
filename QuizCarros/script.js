let F1 = 0;
let SEDAN = 0;
let SUV = 0;
let CAMINHAO = 0;

function direcionar() {
let radios = document.querySelectorAll('input[type="radio"]:checked');
    
    
    radios.forEach(e => {
        if (e.value == "F1") {
            F1++;
        } else if (e.value == "SEDAN") {
            SEDAN++;
        } else if (e.value == "SUV") {
            SUV++;
        } else if (e.value == "CAMINHAO") {
            CAMINHAO++;
        }
    });

    
    let resultado = `Fórmula 1 = ${F1}<br>
                     Sedan = ${SEDAN}<br> 
                     SUV = ${SUV}<br>
                     Caminhão = ${CAMINHAO}`;
    document.getElementById("resultado").innerHTML = resultado;

    
    localStorage.setItem('Fórmula 1', F1);
    localStorage.setItem('sedan', SEDAN);
    localStorage.setItem('SUV', SUV);
    localStorage.setItem('Caminhão', CAMINHAO);

    
    let maior = Math.max(F1, SEDAN, SUV, CAMINHAO);
    let pagina = '';

   
    if (F1 === maior) {
        pagina = 'f1';
    } else if (SEDAN === maior) {
        pagina = 'sedan';
    } else if (SUV === maior) {
        pagina = 'suv';
    } else if (CAMINHAO === maior) {
        pagina = 'caminhao';
    }

    
    setTimeout(() => {
        window.location.href = pagina + '.html';  
    }, 5000);
}