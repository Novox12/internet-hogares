function swalAlert(message) {
    Swal.fire({
        title: '¡Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    })
}

function validateDesktopFields_md() {
    const desktopName_md = document.getElementById("desktopName-md");
    const desktopCellPhone_md = document.getElementById("desktopCellPhone-md");
    const checkboxDesktop_md = document.getElementById('checkboxDesktop-md').checked;

    const pattern_md = new RegExp('^[A-Z\u00f1\u00d1\u00E0-\u00FC\\s]+$', 'i');
    const words_md = /([a-zA-Z])\1{2,}/

    const telephonePattern_md = /([1-8])\1{4,}/
    const initialNumber_md = /^([1-8]){1}/

    let btnSendLead_md = document.getElementById("btn-desktop-send-md");

    if (desktopName_md) {
        if (desktopName_md.value === "") {
            desktopName_md.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede estar vacío.');
            return false;

        } else if (desktopName_md.value.length <= 2)  {
            desktopName_md.classList.add("is-invalid");
            swalAlert('Tu nombre debe contener al menos tres letras.');
            return false;

        } else if (!pattern_md.test(desktopName_md.value))  {
            desktopName_md.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener números.');
            return false;

        } else if (words_md.test(desktopName_md.value))  {
            desktopName_md.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener tantos dígitos iguales de seguido.');
            return false;

        } else {
            desktopName_md.classList.remove("is-invalid");
        }
    }

    if (desktopCellPhone_md) {
        if (desktopCellPhone_md.value === "") {
            desktopCellPhone_md.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede estar vacío.');
            return false;

        } else if (desktopCellPhone_md.value.length < 8) {
            desktopCellPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener menos de 8 dígitos.');
            return false;
            
        } else if (desktopCellPhone_md.value.length > 10) {
            desktopCellPhone_md.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener más de 10 dígitos.');
            return false;
            
        } else if (desktopCellPhone_md.value.length === 9) {
            desktopCellPhone_md.classList.add("is-invalid");
            swalAlert('El número móvil que acabas de ingresar no es valido. El número que debes ingresar debe contener 8 o 10 dígitos.');
            return false;
        
        } else if (desktopCellPhone_md.value.length === 8) {
            if (!initialNumber_md.test(desktopCellPhone_md.value)) {
                desktopCellPhone_md.classList.add("is-invalid");
                swalAlert(
                    'El número de telefono que acabas de ingresar no puede empezar con un dígito diferente entre 1 y 8. ' + 
                    'El número de teléfono debe ser digitado así: Indicativo de la cuidad donde te encuentras + Número telefonico.'
                );
                return false;
            } else if (desktopCellPhone_md.value.startsWith(3)) {
                desktopCellPhone_md.classList.add("is-invalid");
                swalAlert('El número de telefono que acabas de ingresar no puede empezar con el número 3, a menos que sea un dispositivo móvil.');
                return false;
            }
            
        }  else if (desktopCellPhone_md.value.length === 10) {
            if (!desktopCellPhone_md.value.startsWith(3)) {
                desktopCellPhone_md.classList.add("is-invalid");
                swalAlert('El campo para digitar tu número móvil no puede empezar por un número diferente a 3.');
                return false;

            } else if (telephonePattern_md.test(desktopCellPhone_md.value)) {
                desktopCellPhone_md.classList.add("is-invalid");
                swalAlert('El número móvil que acabas de ingresar contiene demasiados digitos iguales. Verifica la infomación.');
                return false;
            }
            
        } else {
            desktopCellPhone_md.classList.remove("is-invalid");
        }
    }

    if (!checkboxDesktop_md) {
        swalAlert('Primero debes aceptar los terminos y condiciones para poder continuar.');
        return false;
    }

    btnSendLead_md.disabled = true;
    return true;
}

function validateDesktopFields() {
    const desktopName = document.getElementById("desktopName");
    const desktopCellPhone = document.getElementById("desktopCellPhone");
    const checkboxDesktop = document.getElementById('checkboxDesktop').checked;

    const pattern = new RegExp('^[A-Z\u00f1\u00d1\u00E0-\u00FC\\s]+$', 'i');
    const words = /([a-zA-Z])\1{2,}/

    const telephonePattern = /([1-8])\1{4,}/
    const initialNumber = /^([1-8]){1}/

    let btnSendLead = document.getElementById("btn-desktop-send");

    if (desktopName) {
        if (desktopName.value === "") {
            desktopName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede estar vacío.');
            return false;

        } else if (desktopName.value.length <= 2)  {
            desktopName.classList.add("is-invalid");
            swalAlert('Tu nombre debe contener al menos tres letras.');
            return false;

        } else if (!pattern.test(desktopName.value))  {
            desktopName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener números.');
            return false;

        } else if (words.test(desktopName.value))  {
            desktopName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener tantos dígitos iguales de seguido.');
            return false;

        } else {
            desktopName.classList.remove("is-invalid");
        }
    }

    if (desktopCellPhone) {
        if (desktopCellPhone.value === "") {
            desktopCellPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede estar vacío.');
            return false;

        } else if (desktopCellPhone.value.length < 8) {
            desktopCellPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener menos de 8 dígitos.');
            return false;
            
        } else if (desktopCellPhone.value.length > 10) {
            desktopCellPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener más de 10 dígitos.');
            return false;
            
        } else if (desktopCellPhone.value.length === 9) {
            desktopCellPhone.classList.add("is-invalid");
            swalAlert('El número móvil que acabas de ingresar no es valido. El número que debes ingresar debe contener 8 o 10 dígitos.');
            return false;
        
        } else if (desktopCellPhone.value.length === 8) {
            if (!initialNumber.test(desktopCellPhone.value)) {
                desktopCellPhone.classList.add("is-invalid");
                swalAlert(
                    'El número de telefono que acabas de ingresar no puede empezar con un dígito diferente entre 1 y 8. ' + 
                    'El número de teléfono debe ser digitado así: Indicativo de la cuidad donde te encuentras + Número telefonico.'
                );
                return false;
            } else if (desktopCellPhone.value.startsWith(3)) {
                desktopCellPhone.classList.add("is-invalid");
                swalAlert('El número de telefono que acabas de ingresar no puede empezar con el número 3, a menos que sea un dispositivo móvil.');
                return false;
            }
            
        }  else if (desktopCellPhone.value.length === 10) {
            if (!desktopCellPhone.value.startsWith(3)) {
                desktopCellPhone.classList.add("is-invalid");
                swalAlert('El campo para digitar tu número móvil no puede empezar por un número diferente a 3.');
                return false;

            } else if (telephonePattern.test(desktopCellPhone.value)) {
                desktopCellPhone.classList.add("is-invalid");
                swalAlert('El número móvil que acabas de ingresar contiene demasiados digitos iguales. Verifica la infomación.');
                return false;
            }
            
        } else {
            desktopCellPhone.classList.remove("is-invalid");
        }
    }

    if (!checkboxDesktop) {
        swalAlert('Primero debes aceptar los terminos y condiciones para poder continuar.');
        return false;
    }

    btnSendLead.disabled = true;
    return true;
}

function validateMobileFields() {
    const mobileName = document.getElementById("mobileName");
    const mobilePhone = document.getElementById("mobileCellPhone");
    const checkboxMobile = document.getElementById('checkboxMobile').checked;

    const pattern = new RegExp('^[A-Z\u00f1\u00d1\u00E0-\u00FC\\s]+$', 'i');
    const words = /([a-zA-Z])\1{2,}/

    const telephonePattern = /([1-8])\1{4,}/
    const initialNumber = /^([1-8]){1}/

    let btnSendLead = document.getElementById("btn-mobile-send");

    if (mobileName) {
        if (mobileName.value === "") {
            mobileName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede estar vacío.');
            return false;

        } else if (mobileName.value.length <= 2)  {
            mobileName.classList.add("is-invalid");
            swalAlert('Tu nombre debe contener al menos tres letras.');
            return false;

        } else if (!pattern.test(mobileName.value))  {
            mobileName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener números.');
            return false;

        } else if (words.test(mobileName.value))  {
            mobileName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener tantos dígitos iguales de seguido.');
            return false;

        } else {
            mobileName.classList.remove("is-invalid");
        }
    }

    if (mobilePhone) {
        if (mobilePhone.value === "") {
            mobilePhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede estar vacío.');
            return false;

        } else if (mobilePhone.value.length < 8) {
            mobilePhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener menos de 8 dígitos.');
            return false;
            
        } else if (mobilePhone.value.length > 10) {
            mobilePhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener más de 10 dígitos.');
            return false;
            
        } else if (mobilePhone.value.length === 9) {
            mobilePhone.classList.add("is-invalid");
            swalAlert('El número móvil que acabas de ingresar no es valido. El número que debes ingresar debe contener 8 o 10 dígitos.');
            return false;
        
        } else if (mobilePhone.value.length === 8) {
            if (!initialNumber.test(mobilePhone.value)) {
                mobilePhone.classList.add("is-invalid");
                swalAlert(
                    'El número de telefono que acabas de ingresar no puede empezar con un dígito diferente entre 1 y 8. ' + 
                    'El número de teléfono debe ser digitado así: Indicativo de la cuidad donde te encuentras + Número telefonico.'   
                );
                return false;
            } else if (mobilePhone.value.startsWith(3)) {
                mobilePhone.classList.add("is-invalid");
                swalAlert('El número de telefono que acabas de ingresar no puede empezar con el número 3, a menos que sea un dispositivo móvil.');
                return false;
            }
            
        }  else if (mobilePhone.value.length === 10) {
            if (!mobilePhone.value.startsWith(3)) {
                mobilePhone.classList.add("is-invalid");
                swalAlert('El campo para digitar tu número móvil no puede empezar por un número diferente a 3.');
                return false;

            } else if (telephonePattern.test(mobilePhone.value)) {
                mobilePhone.classList.add("is-invalid");
                swalAlert('El número móvil que acabas de ingresar contiene demasiados digitos iguales. Verifica la infomación.');
                return false;
            }
            
        } else {
            mobilePhone.classList.remove("is-invalid");
        }
    }

    if (!checkboxMobile) {
        swalAlert('Primero debes aceptar los terminos y condiciones para poder continuar.');
        return false;
    }

    btnSendLead.disabled = true;
    return true;
}

function validateModalFields(name, phone) {

    const modalName = document.getElementById(name);
    const modalPhone = document.getElementById(phone);
    const checkboxModal = document.getElementById('checkboxModal').checked;

    const pattern = new RegExp('^[A-Z\u00f1\u00d1\u00E0-\u00FC\\s]+$', 'i');
    const words = /([a-zA-Z])\1{2,}/

    const telephonePattern = /([1-8])\1{4,}/
    const initialNumber = /^([1-8]){1}/

    let btnSendLead = document.getElementById("btn-modal-send");

    if (modalName) {
        if (modalName.value === "") {
            modalName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede estar vacío.');
            return false;

        } else if (modalName.value.length <= 2)  {
            modalName.classList.add("is-invalid");
            swalAlert('Tu nombre debe contener al menos tres letras.');
            return false;

        } else if (!pattern.test(modalName.value))  {
            modalName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener números.');
            return false;

        } else if (words.test(modalName.value))  {
            modalName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener tantos dígitos iguales de seguido.');
            return false;

        } else {
            modalName.classList.remove("is-invalid");
        }
    }

    if (modalPhone) {
        if (modalPhone.value === "") {
            modalPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede estar vacío.');
            return false;

        } else if (modalPhone.value.length < 8) {
            modalPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener menos de 8 dígitos.');
            return false;
            
        } else if (modalPhone.value.length > 10) {
            modalPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener más de 10 dígitos.');
            return false;
            
        } else if (modalPhone.value.length === 9) {
            modalPhone.classList.add("is-invalid");
            swalAlert('El número móvil que acabas de ingresar no es valido. El número que debes ingresar debe contener 8 o 10 dígitos.');
            return false;
        
        } else if (modalPhone.value.length === 8) {
            if (!initialNumber.test(modalPhone.value)) {
                modalPhone.classList.add("is-invalid");
                swalAlert('El número de telefono que acabas de ingresar no puede empezar con un dígito diferente entre 1 y 8.');
                return false;
            } else if (modalPhone.value.startsWith(3)) {
                modalPhone.classList.add("is-invalid");
                swalAlert('El número de telefono que acabas de ingresar no puede empezar con el número 3, a menos que sea un dispositivo móvil.');
                return false;
            }
            
        }  else if (modalPhone.value.length === 10) {
            if (!modalPhone.value.startsWith(3)) {
                modalPhone.classList.add("is-invalid");
                swalAlert('El campo para digitar tu número móvil no puede empezar por un número diferente a 3.');
                return false;

            } else if (telephonePattern.test(modalPhone.value)) {
                modalPhone.classList.add("is-invalid");
                swalAlert('El número móvil que acabas de ingresar contiene demasiados digitos iguales. Verifica la infomación.');
                return false;
            }
            
        } else {
            modalPhone.classList.remove("is-invalid");
        }
    }

    if (!checkboxModal) {
        swalAlert('Primero debes aceptar los terminos y condiciones para poder continuar.');
        return false;
    }

    btnSendLead.disabled = true;
    return true;
}

function validateEmailModal() {
    const modalEmialName = document.getElementById("modalNameEmail");
    const modalEmail = document.getElementById("modalEmail");
    const modalPhone = document.getElementById("modalPhone");
    const checkboxModal = document.getElementById('checkboxModalEmail').checked;

    const pattern = new RegExp('^[A-Z\u00f1\u00d1\u00E0-\u00FC\\s]+$', 'i');
    const words = /([a-zA-Z])\1{2,}/

    const telephonePattern = /([1-8])\1{4,}/
    const initialNumber = /^([1-8]){1}/

    const emailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z-])+\.)+([a-zA-Z]{2,4})+$/;

    let btnSendLead = document.getElementById("btn-email-send");

    if (modalEmialName) {
        if (modalEmialName.value === "") {
            modalEmialName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede estar vacío.');
            return false;

        } else if (modalEmialName.value.length <= 2)  {
            modalEmialName.classList.add("is-invalid");
            swalAlert('Tu nombre debe contener al menos tres letras.');
            return false;

        } else if (!pattern.test(modalEmialName.value))  {
            modalEmialName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener números.');
            return false;

        } else if (words.test(modalEmialName.value))  {
            modalEmialName.classList.add("is-invalid");
            swalAlert('El campo para digitar tu nombre no puede contener tantos dígitos iguales de seguido.');
            return false;

        } else {
            modalEmialName.classList.remove("is-invalid");
        }
    }

    if (modalPhone) {
        if (modalPhone.value === "") {
            modalPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede estar vacío.');
            return false;

        } else if (modalPhone.value.length < 8) {
            modalPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener menos de 8 dígitos.');
            return false;
            
        } else if (modalPhone.value.length > 10) {
            modalPhone.classList.add("is-invalid");
            swalAlert('El campo para digitar tu número móvil no puede contener más de 10 dígitos.');
            return false;
            
        } else if (modalPhone.value.length === 9) {
            modalPhone.classList.add("is-invalid");
            swalAlert('El número móvil que acabas de ingresar no es valido. El número que debes ingresar debe contener 8 o 10 dígitos.');
            return false;
        
        } else if (modalPhone.value.length === 8) {
            if (!initialNumber.test(modalPhone.value)) {
                modalPhone.classList.add("is-invalid");
                swalAlert('El número de telefono que acabas de ingresar no puede empezar con un dígito diferente entre 1 y 8.');
                return false;
            } else if (modalPhone.value.startsWith(3)) {
                modalPhone.classList.add("is-invalid");
                swalAlert('El número de telefono que acabas de ingresar no puede empezar con el número 3, a menos que sea un dispositivo móvil.');
                return false;
            }
            
        }  else if (modalPhone.value.length === 10) {
            if (!modalPhone.value.startsWith(3)) {
                modalPhone.classList.add("is-invalid");
                swalAlert('El campo para digitar tu número móvil no puede empezar por un número diferente a 3.');
                return false;

            } else if (telephonePattern.test(modalPhone.value)) {
                modalPhone.classList.add("is-invalid");
                swalAlert('El número móvil que acabas de ingresar contiene demasiados digitos iguales. Verifica la infomación.');
                return false;
            }
            
        } else {
            modalPhone.classList.remove("is-invalid");
        }
    }

    if (modalEmail) {
        if (modalEmail.value === "") {
            modalEmail.classList.add("is-invalid");
            swalAlert('El campo para digitar tu correo electronico no puede estar vacío.');
            return false;

        } else if (!emailPattern.test(modalEmail.value)) {
            modalEmail.classList.add("is-invalid");
            swalAlert('El correo electronico que acabas de ingresar no es valido. Por favor corrigelo.');
            return false;
            
        } else {
            modalEmail.classList.remove("is-invalid");
        }
    }

    if (!checkboxModal) {
        swalAlert('Primero debes aceptar los terminos y condiciones para poder continuar.');
        return false;
    }

    btnSendLead.disabled = true;
    return true;
}