function alertTyp() {
    Swal.fire({
        title: `<h2 id="${localStorage.getItem('idtyp')}" >¡Gracias por tu registro!</h2>`,
        text: 'Pronto uno de nuestros asesores se comunicará contigo.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('idtyp')
        }
    })
}

alertTyp();