const sair = document.getElementById("btn-sair");

sair.addEventListener("click", function(e){
    e.preventDefault()
    localStorage.clear()
    redirecionamento(`${BASE_URL_CLIENT}${CLIENT_HOME}`)    
})