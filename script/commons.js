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