let qs = function (elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function () { //capturamos los id
    let formulario = qs('form#formEdit');
    let formularioDelete = qs('form#formDelete');

    let inputTitulo = qs('#name');
    let inputAutor = qs('#author');
    let inputPrecio = qs('#price');
    let regExPrecio = /^[0-9]*$/

    let textDescripcion = qs('#review');
    let inputDescuento = qs('#discount');
    let regExDescuento = /^[0-9]*$/
    let inputRating = qs('#rating');
    let regExRating = /^[0-9]*$/
    let inputFoto = qs('#image');
    inputFoto.value = (inputFoto.value) ? "" : ""

    let deleteBtn = qs('#deleteButton_products')
    let saveBtn = qs('#saveButton_products')

    let errores = {};



    inputTitulo.addEventListener('blur', function () {
        switch (true) {
            case this.value.length == 0:
                errores.name = "El campo titulo es obligatorio";
                errorNombre.innerHTML = errores.name;
                this.classList.add('is-invalid')

                break;
            case this.value.trim().length <= 2:
                errores.name = "Tenés que poner al menos 3 letras"
                errorNombre.innerHTML = errores.name; //hay que ponerlo en el formulario para que se muestre
                this.classList.remove('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorNombre.innerHTML = "";
        }

        inputAutor.addEventListener('blur', function () {
            switch (true) {
                case this.value.length == 0:
                    errores.author = "El campo Autor es obligatorio";
                    errorAutor.innerHTML = errores.author;
                    this.classList.add('is-invalid')
                    break;
                case this.value.trim().length <= 2:
                    errores.author = "Tenés que poner al menos 3 letras"
                    errorAutor.innerHTML = errores.author;
                    this.classList.remove('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorAutor.innerHTML = "";
            }
        })


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

        inputFoto.addEventListener('change', function (e) {
            // Creamos el objeto de la clase FileReader
            let reader = new FileReader();

            // Leemos el archivo subido y se lo pasamos a nuestro fileReader
            reader.readAsDataURL(e.target.files[0]);

            // Le decimos que cuando este listo ejecute el código interno
            reader.onload = function () {
                vistaPrevia.src = reader.result;
            };

            errorimagen.innerHTML = "";
        })


        inputPrecio.addEventListener('blur', function () {
            switch (true) {
                case this.value == "":
                    errores.price = "Es obligatorio declarar un precio";
                    errorPrecio.innerHTML = errores.price;
                    this.classList.add('is-invalid')

                    break;
                case !regExPrecio.test(this.value):
                    errores.price = "solo puede ingresar numeros"
                    errorPrecio.innerHTML = errores.price;
                    this.classList.remove('is-invalid');
                    break;

                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorPrecio.innerHTML = "";
            }
        })


        inputDescuento.addEventListener('blur', function () {
            switch (true) {
                case this.value == "":
                    errores.discount = "Es obligatorio establecer un descuento";
                    errorDescuento.innerHTML = errores.discount;
                    this.classList.add('is-invalid')

                    break;
                case !regExDescuento.test(this.value):
                    errores.discount = "solo puede ingresar numeros"
                    errorDescuento.innerHTML = errores.discount;
                    this.classList.remove('is-invalid');
                    break;

                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorDescuento.innerHTML = "";
            }
        })

        inputRating.addEventListener('blur', function () {
            switch (true) {
                case this.value == "":
                    errores.rating = "Es obligatorio establecer una calificacion";
                    errorRating.innerHTML = errores.rating;
                    this.classList.add('is-invalid')

                    break;
                case !regExRating.test(this.value):
                    errores.rating = "solo puede ingresar numeros"
                    errorRating.innerHTML = errores.rating;
                    this.classList.remove('is-invalid');
                    break;

                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorRating.innerHTML = "";
            }
        })

        // console.log(errores);

        formulario.addEventListener('submit', function (event) {
            event.preventDefault()
            let elementosForm = formulario.elements;

            let error = false
            for (let index = 0; index < formulario.length - 1; index++) {
                if (elementosForm[index].value == 0) {
                    elementosForm[index].classList.add('is-invalid');

                    error = true;
                    elementosForm[index].classList.add('is-invalid');
                }
            }
            if (!error) {
                formulario.submit()
            } else {
                msgError.innerHTML = "los campos señalados son obligatorios"
            }

        })


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
                }).then(() => {
                    formulario.submit()
                })
            };
        })
    })
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault()
        Swal.fire({
            title: '¿Esta seguro de que quiere eliminar este producto?',
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
                    title: "Producto eliminado",
                    icon: "success",
                    text: "",
                    timer: 3000
                }).then(() => {
                    formularioDelete.submit()
                })
            };
        })
    })

})

/*formulario.addEventListener('submit',function(event){
    event.preventDefault();

    let elementosForm = this.elements;

    let error = false
    for (let index = 0; index < elementosForm.length-1; index++) {
        if(elementosForm[index].value == ""){

            msgError.innerHTML = "Complete todos los datos";
            error =true
        }
    }
    if(!error){
        console.log("Todo Perfecto!!");
        formulario.submit()
    }

})*/