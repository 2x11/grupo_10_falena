window.addEventListener('load', () => {

    let nickInput = document.querySelector('#nick')
    let firstNameInput = document.querySelector('#first_name')
    let lastNameInput = document.querySelector('#last_name')
    let dniInput = document.querySelector('#dni')
    let phoneNumberInput = document.querySelector('#phone_number')
    let adressInput = document.querySelector('#adress')
    let zipCodeInput = document.querySelector('#zip_code')
    let emailInput = document.querySelector('#email')

    let editUserForm = document.querySelector('#profileUpdate-form')

    let saveBtn = document.querySelector('#profile-save')
    let deleteBtn = document.querySelector('#profile-delete')
    let formUpdate = document.querySelector('#profileUpdate-form')
    let formDelete = document.querySelector('#profileDelete-form')


    nickInput.addEventListener('blur', () => {

        switch (true) {
            case nickInput.value.length === 0:
                errorNick.innerHTML = "Si dejas este campo vacío se te idenfiticará por tu nombre y apellido"
                break;
            case nickInput.value.length < 3:
                nickInput.classList.add('is-invalid')
                errorNick.innerHTML = "Debes ingresar un nick de mínimo 3 letras"
                break;
            case nickInput.value.length >= 22:
                nickInput.classList.add('is-invalid')
                errorNick.innerHTML = "Debes ingresar un nick con máximo 21 letras"
                break;
            default:
                nickInput.classList.remove('is-invalid')
                nickInput.classList.add('is-valid')
                errorNick.innerHTML = ""
                break;
        }
    })

// no funciona en elementos con el atributo disabled

/* 
    firstNameInput.addEventListener('mouseenter', () => {
        errorFirst_name.innerHTML = "No puedes modificar este campo"
    })
    firstNameInput.addEventListener('mouseleave', () => {
        errorFirst_name.innerHTML = ""
    })
*/
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault()
        Swal.fire({
            title: '¿Esta seguro de que quiere guardar los cambios?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Guardar`,
            denyButtonText: `Cancelar`,
            customClass: {
                confirmButton: 'order-2',
                denyButton: 'order-1',
            },
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire({
                    title: "Guardado!",
                    icon: "success",
                    text: "Tu perfil ha sido actualizado",
                    timer: 3000
                }).then(() => {
                    formUpdate.submit()
                })
            };
        })
    })

    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault()
        Swal.fire({
            title: '¿Esta seguro de que quiere eliminar su cuenta?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Cancelar`,
            customClass: {
                confirmButton: 'order-2',
                denyButton: 'order-1',
            },
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire({
                    title: "Eliminamos tu perfil :(",
                    icon: "success",
                    text: "Esperamos verte de nuevo!",
                    timer: 3000
                }).then(() => {
                    formDelete.submit()
                })
            };
        })
    })

})