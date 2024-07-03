const registrationForm = document.querySelector("#registration");
const error = document.getElementById("nameError");
registrationForm.addEventListener("submit", function (event) {
    //default behavior of form submit is expose data to url and refresh detail
    event.preventDefault();
    const pwd = document.getElementById("userPassword").value;
    const cnfpwd = document.getElementById("userCnfPassword").value;
    if (pwd !== cnfpwd) {
        alert("password miss match!!");
        return;
    }
    // if(document.getElementById("userFullName").value.length > 35){
    //     error.textContent = "Your name must be less then 35 characters.";
    //     error.style.color = "red";
    //     return false;
    // }
    makeRequests({
        fullName: document.getElementById("userFullName").value,
        email: document.getElementById("userEmail").value,
        phone: document.getElementById("userPhone").value,
        password: document.getElementById("userCnfPassword").value,
    })
    alert("The Form Has Been Submited");
    registrationForm.reset();
    // alert(JSON.stringify(formData));
    document.getElementById("submitBtn").setAttribute('disabled',true);
});

function makeRequests(data){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(output => console.log(output))
}

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


//error management 

const inputField = document.getElementById("userFullName");
const nameError= document.getElementById("nameError");

inputField.addEventListener("keyup",function(){
    const valueLength = this.value.length;
    if(valueLength >35){
        nameError.textContent = "Value exceeds limit (35 characters)";
        this.style.bordercolor = "red";
        document.getElementById("submitBtn").setAttribute('disabled',true);
    } else{
        nameError.textContent = "";
        this.style.borderColor = "";
    }
});

const passwordError= document.getElementById("passowrdError");
passwordField.addEventListener("blur", (e) => {
    const passwordLength = this.value;
    if(passwordLength.length < 6){
        passwordError.textContent = "Passowrd must be at least 6 Characters";
        document.getElementById("submitBtn").setAttribute('disabled',true);
    } else {
        passwordError.textContent = "";
    }
});
