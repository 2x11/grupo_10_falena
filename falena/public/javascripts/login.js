window.addEventListener('load', () => {

    let emailInput = document.querySelector('#inputEmail')
    let passwordInput = document.querySelector('#inputPassword')
    let errors = {}

    //expresiones regulares:
    //validacion de mail
    let regExEmail =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;


    emailInput.addEventListener('blur', () => {

        switch (true) {
            case emailInput.value.length === 0:
                emailInput.classList.add('is-invalid')
                emailError.innerHTML = "El correo electrónico es obligatorio";
                break;
            case !regExEmail.test(emailInput.value) :
                emailInput.classList.add('is-invalid')
                emailError.innerHTML = "Debes escribir un correo válido"
                break;
            default:
                emailInput.classList.remove('is-invalid')
                emailInput.classList.add('is-valid')
                emailError.innerHTML = ""
                break;
        }
    })
    passwordInput.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                this.classList.add('is-invalid')
                passwordError.innerHTML = "La contraseña es obligatorio";
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                passwordError.innerHTML = ""
                break;
        }

    })

})