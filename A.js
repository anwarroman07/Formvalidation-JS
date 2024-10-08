const form=document.getElementById("form");
const Username=document.getElementById("Username");
const Email=document.getElementById("Email");
const Password=document.getElementById("Password");
const Cpassword=document.getElementById("Cpassword");
const Username_error=document.getElementById("Username_error");
const Email_error=document.getElementById("Email_error");
const Password_error=document.getElementById("Password_error");
const Cpassword_error=document.getElementById("Cpassword_error");

var Email_check=/^([a-z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

form.addEventListener("submit",(e)=>{

if (Username.value === "") {
    e.preventDefault();
    Username_error.innerHTML="Please enter your name";
    Username.style="border-color: red;"
    
}
else{
    e.preventDefault();
    Username_error.innerHTML="";
    Username.style="border-color: green;"
}
if (Email.value === "") {
    e.preventDefaul
    Email_error.innerHTML="Please enter a  email";
    Email.style="border-color: red;"
    
}
else if (!Email.value.match(Email_check)) {
    e.preventDefault(); 
    Email_error.innerHTML="Please enter a Valid email";
    
}
else{
    e.preventDefault();
    Email_error.innerHTML="";
    Email.style="border-color: green;"
}

if (Password.value ==="") {
    e.preventDefault();
    Password_error.innerHTML="Please enter password";
    Password.style="border-color: red;"
    
}
else if (Password.value.length <=5) {
    e.preventDefault();
    Password_error.innerHTML="Password must be a above characters";
    Password.style="border-color: red;"
    
}
else{
    e.preventDefault();
    Password_error.innerHTML="";
    Password.style="border-color: green;"
}

if (Cpassword.value !== Password) {
    e.preventDefault();
    Cpassword_error.innerHTML="Please enter above password";
    Cpassword.style="border-color: red;"

    
}
if (Cpassword.value ==="") {
    e.preventDefault();
    Cpassword_error.innerHTML="Please enter confirm password";
    
}
else{
    e.preventDefault();
    Cpassword_error.innerHTML="";
    Cpassword.style="border-color: green;"
}



})
