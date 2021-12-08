
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

let novoUsuario = {};
let enderecoUsuario = {};
let telefoneUsario = {};

const btnCriarConta = document.getElementById("btn-cria-conta");

function mascaraDeTelefone(){
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
            telefone.value = textoAjustado;
        }
}

function tiraHifen() {
    const textoAtual = telefone.value;
    const textoAjustado = textoAtual.replace(/\-/g, '');
    telefone.value = textoAjustado;
}

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
    var cep1 = valor.replace(/\D/g, '');
    if (cep1 != "") {
        var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep1)) {
            logradouro.value="...";
            complemento.value="...";
            bairro.value="...";
            cidade.value="...";
            uf.value="...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep1 + '/json/?callback=meu_callback';
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

function construirUsuarioCadastrar(){

    novoUsuario.nome = nome.value.trim();
    
    enderecoUsuario.logradouro = logradouro.value.trim();
    enderecoUsuario.complemento = complemento.value.trim();
    enderecoUsuario.bairro = bairro.value.trim();
    enderecoUsuario.cep = cep.value.trim();
    enderecoUsuario.cidade = cidade.value.trim();
    enderecoUsuario.uf = uf.value.trim();

    novoUsuario.endereco = enderecoUsuario;

    telefoneUsario.ddd = telefone.value.substr(1,3).trim();
    telefoneUsario.numero = telefone.value.substr(4,11).trim();

    novoUsuario.telefone = telefoneUsario;

    novoUsuario.email = email.value.trim();
    novoUsuario.senha = senha.value.trim();

    console.log(novoUsuario)
}

function verificaCamposObrigatorios(){
    if(novoUsuario.nome && novoUsuario.endereco && novoUsuario.telefone && novoUsuario.email && novoUsuario.senha){
        return true;
    }
    return false;
}

function cadastrar(){
    construirUsuarioCadastrar();
    verificaCamposObrigatorios();

    if(verificaCamposObrigatorios()){
        let status;
        fetch(`${BASE_URL_SERVER}${API_USUARIOS}`,{
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(novoUsuario)
        })
        .then(res => {
            status = res.status;
            return res.json()
        })
        .then(() => {
            if(status == 201){
                Swal.fire({
                    icon: 'success',
                    title: 'Usuário cadastrado com sucesso!',
                    text: 'Você será redirecionado para a tela de login.'
                })
                setTimeout(function(){location.href = `${BASE_URL_CLIENT}${CLIENT_LOGIN}`;}, 5000);
            } else if(status == 400){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Dados inválidos, tente novamente!'
                  })
            }   
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }else{
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Você não preencheu todos os campos obrigatórios marcados com *'
          })
    }
}

btnCriarConta.addEventListener("click", function(e){
    e.preventDefault()
    cadastrar()
})

