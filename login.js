let login = document.querySelector('#login');
let password = document.querySelector('#password');
const button = document.querySelector('#button');
let error = document.querySelector('#error');
button.addEventListener("click", () => {
    
    if(login.value == "ave" && password.value == "satan" || login.value == "admin" && password.value == "admin")
    {
        window.location.href = '1.html';
    }
    else if(login.value == "kacper" && password.value == "hanus")
    {
        window.location.href = 'https://legokapiman.github.io/';
    }
    else
    {
    error.innerHTML = "Błąd";
    }
})
