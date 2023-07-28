const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const createAccountBtn = document.querySelector("button");
const inputs = document.querySelectorAll("input");
createAccountBtn.addEventListener("click", e => {
    createAccountBtn.style.opacity = "50%";
    setTimeout(() => {
        createAccountBtn.style.opacity = "100%";
    }, 125);
    if(confirmPassword.value != password.value){
        confirmPassword.style.borderColor = "red";
        e.preventDefault();
        alert("password doesn't match");
        return false;
    }
    else{
        return true;
    }
});

