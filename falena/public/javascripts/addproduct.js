let qs = function (elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function () { 
    let formulario = qs('form#formAdd');
    let errores = {};
    let deleteBtn = qs('#deleteButton_products')
    let saveBtn = qs('#saveButton_products')
    
    let inputTitulo = qs('#name');
    inputTitulo.addEventListener('blur', function () {
        switch (true) {
            case this.value.length == 0:
                errores.name = "El campo titulo es obligatorio";
                errorNombre.innerHTML = errores.name;
                console.log(this.value)
                break;
            case this.value.trim().length <= 2:
                console.log(this.value)
                errores.name = "Tenés que poner al menos 3 letras"
                errorNombre.innerHTML = errores.name; 
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorNombre.innerHTML = "";
                console.log(this.value)
        }
    })   
    let inputAutor = qs('#author');
    inputAutor.addEventListener('blur', function () {
        switch (true) {
            case this.value.length == 0:
                errores.author = "El campo Autor es obligatorio";
                errorAutor.innerHTML = errores.author;

                break;
            case this.value.trim().length <= 2:
                errores.author = "Tenés que poner al menos 3 letras"
                errorAutor.innerHTML = errores.author;
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorAutor.innerHTML = "";
        }
    })

    let textDescripcion = qs('#review');
    textDescripcion.addEventListener('blur', function () {
        switch (true) {
            case this.value == "":
                errores.review = "Este campo es obligatorio"
                errorDescripcion.innerHTML = errores.review;
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorDescripcion.innerHTML = "";
        }
    })

    let inputPrecio = qs('#price');
    let regExPrecio = /^[0-9]*$/
    inputPrecio.addEventListener('blur', function () {
        switch (true) {
            case this.value == "":
                errores.price = "Es obligatorio declarar un precio";
                errorPrecio.innerHTML = errores.price;

                break;
            case !regExPrecio.test(this.value):
                errores.price = "solo puede ingresar numeros"
                errorPrecio.innerHTML = errores.price;
                break;

            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPrecio.innerHTML = "";
        }
    })


    let inputDescuento = qs('#discount');
    let regExDescuento = /^[0-9]*$/
    inputDescuento.addEventListener('blur', function () {
        switch (true) {
            case this.value == "":
                errores.discount = "Es obligatorio establecer un descuento";
                errorDescuento.innerHTML = errores.discount;

                break;
            case !regExDescuento.test(this.value):
                errores.discount = "solo puede ingresar numeros"
                errorDescuento.innerHTML = errores.discount;
                break;

            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorDescuento.innerHTML = "";
        }
    })


    let inputRating = qs('#rating');
    let regExRating = /^[0-9]*$/
    inputRating.addEventListener('blur', function () {
        switch (true) {
            case this.value == "":
                errores.rating = "Es obligatorio establecer una calificacion";
                errorRating.innerHTML = errores.rating;
                break;
            case !regExRating.test(this.value):
                errores.rating = "solo puede ingresar numeros"
                errorRating.innerHTML = errores.rating;
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorRating.innerHTML = "";
        }
    })

    let inputFoto = qs('#image');
    (inputFoto.value) ? inputFoto.value = "" : ""
    inputFoto.addEventListener('blur', function () {
        switch (true) {
            case this.value == "":
                errores.image = "Es obligatorio subir una imagen de portada"
                errorimagen.innerHTML = errores.image;
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorimagen.innerHTML = "";
        }
    })    
    
    
    // SWEET ALERT //
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
                    text: "El perfil ha sido actualizado",
                    timer: 3000
                }).then(()=>{
                    formulario.submit()
                })
        };
    })
})
    
    
    
    
    
    
    /*
    formulario.addEventListener('submit', function (event) {
        event.preventDefault()
        let elementosForm = formulario.elements;

        let error = false
        for (let index = 0; index < formulario.length - 1; index++) {
            if (elementosForm[index].value == 0) {
                elementosForm[index].classList.add('is-invalid');
                error = true;
            }
        }
        if(!error){
            formulario.submit()
        }else{
            msgError.innerHTML = "Los campos señadados son obligatorios"
        }


    })
    */
})