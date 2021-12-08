const sair = document.getElementById("btn-sair");

const userLog = document.getElementById("usuarioLogado");
const emailLog = document.getElementById("emailLogado");
const cepLog = document.getElementById("cepLogado");
const ruaLog = document.getElementById("ruaLogado");
const complementoLog = document.getElementById("complLogado");
const telefoneLog = document.getElementById("telefoneLogado");   

const dadosUsuario = async () => {
    try{
        const emailLocalStorage = localStorage.getItem("email");

        const response = await fetch(`${BASE_URL_SERVER}${API_USUARIOS}/email/${emailLocalStorage}`)
        
        if(!response.ok) throw `com o status: ${response.status}`
        
        let usuarioJson = await response.json()

        userLog.innerHTML= usuarioJson.nome;
        emailLog.innerHTML = usuarioJson.email;
        cepLog.innerHTML = "CEP: " + usuarioJson.endereco.cep;
        ruaLog.innerHTML = usuarioJson.endereco.logradouro;
        complementoLog.innerHTML = usuarioJson.endereco.complemento;
        telefoneLog.innerHTML = "("+usuarioJson.telefone.ddd+") "+usuarioJson.telefone.numero

    }catch(e){
        console.log(e)
    }
}

dadosUsuario();
    
sair.addEventListener("click", function(e){
    e.preventDefault()
    localStorage.clear()
    redirecionamento(`${BASE_URL_CLIENT}${CLIENT_HOME}`)    
})

$(document).ready(function(){
    if(localStorage.length == 0){
        redirecionamento(`${BASE_URL_CLIENT}${CLIENT_HOME}`)    
    }
})

