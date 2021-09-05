function form(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var Qualification=document.getElementById("Qualification").value;
    var Profession=document.getElementById("Profession").value;
    var phone = document.getElementById("number").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById('password').value;
document.write("<center><h1> SignUp Form Print </h1> <hr> <hr> <br></center>")

  document.write("<center><h3><b> First Name :- "+fname + "</h3>");
  
  document.write("<center><h3><b /> Last Name :- "+lname + "</h3>");
  
  document.write("<center><h3><b /> Qualification :- "+Qualification + "</h3>");
  
  document.write("<center><h3><b /> Profession :- "+ Profession + "</h3>");
  
  document.write("<center><h3><b /> Phone Number :- "+phone + "</h3>");
  
  document.write("<center><h3><b /> Email Id :- "+ email + "</h3>");

  print();

}