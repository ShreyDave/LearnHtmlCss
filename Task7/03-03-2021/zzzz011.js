$( document ).ready(function() {
    console.log( "ready!" );

    jQuery.validator.addMethod("emailExt", function(value, element, param) {
    return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
},'Your E-mail is wrong');

            // Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        
      // Specify validation rules
      rules: {
        
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        firstname: "required",
        email: { 
            required: true,
            emailExt: true
        },
        password: {
          required: true,
          minlength: 5
        },
        mobile: {
          required: true,
          maxlength: 10,
          minlength: 10,
          digits: true
        },
        gender:{
            required: true,
        },
        country:{
            required: true,
        },
        password1:{
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        textarea:{
            required: true,
        }
      },

      // Specify validation error messages
      messages: {
        firstname: "Please enter your firstname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        password1: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address",
        mobile: "please enter your valid mobile number",
        gender:"please select your gender",
        country:"please select your country",
        password1:"please enter confirm password",
        textarea:"Please fill your description"

      },
      
      
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
          console.log("=========")
        let fullname = document.getElementById("firstname").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobile").value;
        let country = document.getElementById("country").value;
        let comment = document.getElementById("comment").value;

    
        document.getElementById("outputname").innerText = fullname;
        document.getElementById("outputemail").innerText = email;
        document.getElementById("outputmnumber").innerText = mobile;
        document.getElementById("outputcountry").innerText = country;
        document.getElementById("outputdescription").innerText = comment;
        var form = document.getElementById("myForm");
        function handleForm(event) { event.preventDefault(); } 
        form.addEventListener('submit', handleForm); 
        form.submit();
      }
    });
  });
    
});
 
function changeText() {
  var userInputgender = document.getElementsByName('gender');
  for (var i = 0, length = userInputgender.length; i < length; i++) {
      if (userInputgender[i].checked) {
          document.getElementById('output1').innerHTML = userInputgender[i].value;
          break;
      }
  }
  return false;
}