window.addEventListener('load', () => {
    let formularioDelete = document.querySelectorAll('#deleteFormProductList');

    for (let i = 0 ; i < formularioDelete.length; i++) {
        formularioDelete[i].addEventListener('submit', (e) => {
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
                            formularioDelete[i].submit()
                        })
                    };
                })
            })
        } 
})