const BASE_URL_CLIENT = "http://localhost:5500/";
const BASE_URL_SERVER = "http://localhost:8080/";

const API_AUTH = "auth"
const API_USUARIOS = "usuarios"
const CLIENT_PRINCIPAL = "pages/principal.html"
const CLIENT_LOGIN = "pages/login.html"
const CLIENT_HOME = "index.html"

//modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

//menu
function menu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function redirecionamento(url){
  location.href = url; 
}