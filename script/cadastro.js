
function mascaraDeTelefone(telefone){
    const textoAtual = telefone.value;
    const isCelular = textoAtual.length === 11;
    let textoAjustado;
        if(isCelular) {
            const parte0 = textoAtual.slice(0,2);
            const parte1 = textoAtual.slice(2,7);
            const parte2 = textoAtual.slice(7,12);
            textoAjustado = `(${parte0}) ${parte1}-${parte2}`; 
        } else {
            const parte0 = textoAtual.slice(0,2);
            const parte1 = textoAtual.slice(2,6);
            const parte2 = textoAtual.slice(6,11);
            textoAjustado = `(${parte0}) ${parte1}-${parte2}`; 
        }

        if (textoAjustado != "() -"){
            return telefone.value = textoAjustado;

        }

}

function mascaraDeCEP(cep) {
    const textoAtual = cep.value;
    let textoAjustado;
    

    const parte1 = textoAtual.slice(0,5);
    const parte2 = textoAtual.slice(5,8);
    textoAjustado = `${parte1}-${parte2}`;
    
    if (textoAjustado != "-"){
        document.getElementById("CEP").value = textoAjustado;

    }
    
}

function tiraHifen(telefone) {
    const textoAtual = telefone.value;
    const textoAjustado = textoAtual.replace(/\-/g, '');

    return telefone.value = textoAjustado;
}
