// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
        
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.stopPropagation();
        }
        event.preventDefault()
        form.classList.add('was-validated');
      }, false);
    });
  })();
  

  

let submit = document.getElementById("submit");

submit.onclick = function(){
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let Mnumber = document.getElementById("Mnumber").value;
    let male = document.getElementById("male").value;
    let country = document.getElementById("country").value;
    let comment = document.getElementById("comment").value;



    document.getElementById("outputname").innerText = fullname;
    document.getElementById("outputemail").innerText = email;
    document.getElementById("outputmnumber").innerText = Mnumber;
    document.getElementById("outputmale").innerText = male;
    document.getElementById("outputcountry").innerText = country;
    document.getElementById("outputdescription").innerText = comment;
}       


