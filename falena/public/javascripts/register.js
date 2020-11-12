window.addEventListener('load', () => {

    let form = document.querySelector('form#registerForm')
    let firstnameInput = form.elements[0]
    let lastnameInput = form.elements[1]
    let dniInput = form.elements[2]
    let emailInput = form.elements[3]
    let passwordInput = form.elements[4]
    let passwordInput2 = form.elements[5]
    let errors = {}

    //expresiones regulares:
    //validacion de mail
    let regExEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;

    firstnameInput.addEventListener('blur', function() {
        switch (true) {
            case this.value.length === 0:
                firstnameError.innerHTML = "Este campo es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                firstnameError.innerHTML = "Tenés que ingresar al menos dos caracteres"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                firstnameError.innerHTML = ""
                break;
        }
    })

    lastnameInput.addEventListener('blur', function() {
        switch (true) {
            case this.value.length === 0:
                lastnameError.innerHTML = "Este campo es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                lastnameError.innerHTML = "Tenés que ingresar al menos dos caracteres"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                lastnameError.innerHTML = ""
                break;
        }
    })

    dniInput.addEventListener('blur', () => {
        switch (true) {
            case dniInput.value.length === 0:
                dniError.innerHTML = "El dni es obligatorio";
                dniInput.classList.add('is-invalid')
                break;
            case dniInput.value.trim().length < 8:
                dniError.innerHTML = "Tenés que ingresar al menos ocho caracteres"
                dniInput.classList.add('is-invalid')
                break;
            default:
                dniInput.classList.remove('is-invalid')
                dniInput.classList.add('is-valid')
                dniError.innerHTML = ""
                break;
        }
    })
    emailInput.addEventListener('blur', () => {

        switch (true) {
            case emailInput.value.length === 0:
                emailInput.classList.add('is-invalid')
                emailError.innerHTML = "Este campo es obligatorio";
                break;
            case !regExEmail.test(emailInput.value):
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

    emailInput.addEventListener('blur', () => {
        fetch(`${window.location.origin}/api/email`,{method : 'POST'})
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                if(user.email == emailInput.value){
                    emailError.innerHTML = 'Este email ya se encuentra registrado'
                    emailInput.classList.toggle('is-invalida')
                }
            });
        })
    })

    passwordInput.addEventListener('blur', () => {
        switch (true) {
            case passwordInput.value.length === 0:
                passwordInput.classList.add('is-invalid')
                passwordError.innerHTML = "La contraseña es obligatoria";
                break;
            case !regExPass.test(passwordInput.value):
                passwordInput.classList.add('is-invalid')
                passwordError.innerHTML = "La contraseña debe tener entre 8 y 24 caracteres, una mayúscula una minúscula y un número"
                break
            default:
                passwordInput.classList.remove('is-invalid')
                passwordInput.classList.add('is-valid')
                passwordError.innerHTML = ""
                break;
        }
    })
    passwordInput2.addEventListener('blur', function() {

        switch (true) {
            case this.value.length === 0:
                this.classList.add('is-invalid')
                passwordError2.innerHTML = "Reingrese su contraseña";
                break;
            case this.value !== passwordInput.value:
                this.classList.add('is-invalid')
                passwordError2.innerHTML = "Las contraseñas no coinciden"
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                passwordError2.innerHTML = ""
                break;
        }

    })
})