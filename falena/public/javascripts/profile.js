window.addEventListener('load', () => {
    
    let editUserForm = document.querySelector('#profileUpdate-form')

    let nickInput = document.querySelector('#nick')
    let firstNameInput = document.querySelector('#first_name')
    let lastNameInput = document.querySelector('#last_name')
    let dniInput = document.querySelector('#dni')
    let phoneNumberInput = document.querySelector('#phone_number')
    let citySelect = document.querySelector('#citySelect')
    let townSelect = document.querySelector('#townSelect')
    let cityInput = document.querySelector('#cityInput')
    let townInput = document.querySelector('#townInput')
    let zipCodeInput = document.querySelector('#zip_code')
    let emailInput = document.querySelector('#email')

    let urlZipCode = 'https://github.com/jcodagnone/localidades-ar/tree/master/codigo-postal/correo'

    let saveBtn = document.querySelector('#profile-save')
    let deleteBtn = document.querySelector('#profile-delete')
    let formUpdate = document.querySelector('#profileUpdate-form')
    let formDelete = document.querySelector('#profileDelete-form')

    function ordenarAsc(p_array_json, p_key) {
        p_array_json.sort(function (a, b) {
           return a[p_key] > b[p_key];
        });
     }

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
    phoneNumberInput.addEventListener('blur', () => {

        switch (true) {
            case phoneNumberInput.value.length === 0:
                errorPhone_number.innerHTML = "Si dejas este campo vacío se te idenfiticará por tu nombre y apellido"
                phoneNumberInput.classList.remove('is-invalid')

                break;
            case  phoneNumberInput.value.length < 10 :
                phoneNumberInput.classList.add('is-invalid')
                errorPhone_number.innerHTML = "Ingresa tu número con su código de área"
                break;
            case phoneNumberInput.value.length > 12:
                phoneNumberInput.classList.add('is-invalid')
                errorPhone_number.innerHTML = "Debes ingresar número de teléfono válido"
                break;
            default:
                phoneNumberInput.classList.remove('is-invalid')
                phoneNumberInput.classList.add('is-valid')
                errorPhone_number.innerHTML = ""
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





     let townSelectF = function(){

        cityInput.value = citySelect.options[citySelect.selectedIndex].text;

        townSelect.innerHTML = ""

        fetch('https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia=' + cityInput.value)

        .then(response => response.json())

        .then( result => {
            
            ordenarAsc(result.localidades,'nombre');

            result.localidades.forEach(localidad => {
                townSelect.innerHTML += `<option value=${localidad.id}>${localidad.nombre}</option>`
            })

            townSelect.style.display = "block";
            townInput.style.display = "none";
        })
     }




    fetch('https://apis.datos.gob.ar/georef/api/provincias')
  
    .then(response => response.json())

    .then(result => {

        ordenarAsc(result.provincias,'nombre')
        
        result.provincias.forEach(provincia => {
            citySelect.innerHTML += `<option value=${provincia.id}>${provincia.nombre}</option>`
        })
    })

    cityInput.addEventListener('focus',()=>{
        cityInput.style.display = "none";
        citySelect.style.display = "block"
    })

    citySelect.addEventListener('change',()=>{
        citySelect.style.display = "none";
        cityInput.style.display = "block";

        

        townSelectF();
    })

    townSelect.addEventListener('change',() =>{
        townSelect.style.display = "none";
        townInput.style.display = "block";

        townInput.value = townSelect.options[townSelect.selectedIndex].text;

    })

    townInput.addEventListener('focus',()=>{
        townInput.style.display = "none";
        townSelect.style.display = "block";
        townSelectF()
    })

})
