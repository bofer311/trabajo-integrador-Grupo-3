// $(document).ready(function(){





//   $("document.getElementById").ready(function() {
//   $("document.getElementById").mouseenter(function() {
//     $("#formulario").hide();
//   });


//   });

//   $(function(){

//   $(".btn btn-primary").click(function(){

//     alert($("comentario").html());
//   });
//   });

// });

var formVisible = false;
var button = document.querySelector('button');

function showForm() {
  var form = document.getElementById('Formulario');
  form.style.display = 'block';
  button.textContent = 'Doble click para ocultar el formulario';
  button.removeEventListener('click', showForm);
  button.addEventListener('dblclick', hideForm);
  formVisible = true;
}

// function hideForm() {
//   var form = document.getElementById('Formulario');
//   form.style.display = 'none';
//   button.textContent = 'Contactenos!';
//   button.removeEventListener('dblclick', hideForm);
//   button.addEventListener('click', showForm);
//   formVisible = false;
// }
