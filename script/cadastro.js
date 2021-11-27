
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

function tiraHifen(telefone) {
    const textoAtual = telefone.value;
    const textoAjustado = textoAtual.replace(/\-/g, '');

    return telefone.value = textoAjustado;
}

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const logradouro = document.getElementById("logradouro");
const complemento = document.getElementById("complemento");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");
const cep = document.getElementById("cep");
const telefone = document.getElementById("telefone");

const usuario = {};

cep.addEventListener("keypress", function (){ 
    if(cep.value.length == 5)
        cep.value = cep.value + '-'; 
});

function limpa_formulário_cep() {
    logradouro.value=("");
    complemento.value=("");
    bairro.value=("");
    cidade.value=("");
    uf.value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        logradouro.value=(conteudo.logradouro);
        complemento.value=(conteudo.complemento);
        bairro.value=(conteudo.bairro);
        cidade.value=(conteudo.localidade);
        uf.value=(conteudo.uf);
    }
    else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {
            logradouro.value="...";
            complemento.value="...";
            bairro.value="...";
            cidade.value="...";
            uf.value="...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        }
        else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    }
    else {
        limpa_formulário_cep();
    }
}
