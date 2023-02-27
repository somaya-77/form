

document.getElementById("logIn").addEventListener("click", function() {
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailCheck = document.getElementById("checkEmail").value;
    let passwordcheck = document.getElementById("checkPass").value;

    if(email == emailCheck && password == passwordcheck) {
        console.log("done")
    }
});