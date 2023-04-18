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

function submitForm() {
  const name = document.getElementById("recipient-name").value;
  const message = document.getElementById("message-text").value;

  // Create new jsPDF instance
  const doc = new jsPDF();
  doc.text(`Nombre: ${name}`, 20, 20);
  doc.text(`Mensaje: ${message}`, 20, 30);

  // Save PDF
  doc.save("mensaje.pdf");

  // Reset form
  document.getElementById("form").reset();

  // Hide modal
  $("#exampleModal").modal("hide");
}
