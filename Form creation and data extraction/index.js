const registrationForm = document.querySelector("#registration");
registrationForm.addEventListener("submit", function (event) {
    //default behavior of form submit is expose data to url and refresh detail
    event.preventDefault();
    const pwd = document.getElementById("userPassword").value;
    const cnfpwd = document.getElementById("userCnfPassword").value;
    if (pwd !== cnfpwd) {
        alert("password miss match!!");
        return;
    }
    const formData={
        fullName: document.getElementById("userFullName").value,
        email: document.getElementById("userEmail").value,
        phone: document.getElementById("userPhone").value,
        password: document.getElementById("userCnfPassword").value,
    }
    alert(JSON.stringify(formData));
});

const passwordField= document.getElementById("userPassword");
const showPasswordButton= document.getElementById("showPassword");

showPasswordButton.addEventListener('click',function(){
    if(passwordField.type=='password'){
        passwordField.type= 'text';
        showPasswordButton.value = "Hide Password";
    }
    else{
        passwordField.type = 'password';
        showPasswordButton.value = "Show Password";
    }
});


