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


