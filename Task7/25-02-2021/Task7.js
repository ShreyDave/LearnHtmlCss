// Disable form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();










var submit = document.getElementById("submit");

submit.onclick = function(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var Mnumber = document.getElementById("Mnumber").value;
    var male = document.getElementById("male").value;
    var country = document.getElementById("country").value;
    var comment = document.getElementById("comment").value;



    document.getElementById("outputname").innerText = fullname;
    document.getElementById("outputemail").innerText = email;
    document.getElementById("outputmnumber").innerText = Mnumber;
    document.getElementById("outputmale").innerText = male;
    document.getElementById("outputcountry").innerText = country;
    document.getElementById("outputdescription").innerText = comment;
}       


