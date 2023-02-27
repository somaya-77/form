
document.getElementById("signUp").addEventListener("click", function() {
    // get value input
    let userName = document.getElementById("user-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    let array = [];

    if(localStorage.getItem("data")){
        array = JSON.parse(localStorage.getItem("data"))
    }
    addDataToArray()
    function addDataToArray() {
        const data = {
            name: userName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        array.push(data)
    }

    if(password != confirmPassword){
        alert ("You must correct the password !")
    }else {

        function addToLocalStorage(array){
            window.localStorage.setItem("data", JSON.stringify(array))
        }
            document.querySelector(".overlay").style.display = "block";
        
        addToLocalStorage(array)
    }
})

