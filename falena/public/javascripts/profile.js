window.addEventListener('load', () => {
            let saveBtn = document.querySelector('#profile-save')
            let deleteBtn = document.querySelector('#profile-delete')
            let formUpdate = document.querySelector('#profileUpdate-form')
            let formDelete = document.querySelector('#profileDelete-form')

            


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
                            }).then(()=>{
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
                            }).then(()=>{
                                formDelete.submit()
                            })
                    };
                })
            })

        })
