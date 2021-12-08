const email = document.getElementById("email")
const senha = document.getElementById("senha")
const btnEntrar = document.getElementById("btn-entrar")
const usuario = {}

btnEntrar.addEventListener("click", function(e){
    e.preventDefault()
    enviar()
})

function constroiUsuario(){
    usuario.email = email.value
    usuario.senha = senha.value
}

function verificaCamposObrigatorios(){
    if(usuario.email  && usuario.senha){
        return true
    } 
     return false
}

function enviar(){
    constroiUsuario(); 
    if(verificaCamposObrigatorios()) {
        let status;
        fetch(`${BASE_URL_SERVER}${API_AUTH}`,{
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(usuario)
        })
        .then(res => {
            status = res.status;
            return res.json();
        })
        .then(({token}) => {
            if(status == 200){
                localStorage.setItem("email", email.value)
                localStorage.setItem("token", token)
                redirecionamento(`${BASE_URL_CLIENT}${CLIENT_PRINCIPAL}`)               
            }else if(status == 400) {
                localStorage.clear()
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuário ou senha inválido!'
                  })
                email.value = ""
                senha.value = ""
            }else{
                localStorage.clear()
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocorreu um erro ao logar, tente novamente mais tarde!'
                  })
                email.value = ""
                senha.value = ""  
            }
        })
    }else{
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Você não preencheu todos os campos obrigatórios.'
          })
    }
}
