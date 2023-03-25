/*formulario validacion contacto*/

const form = document.getElementById('form')
const nombreInput = document.getElementById('nombre')
const emailInput = document.getElementById('email')

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;



const isEmpty = (value) => value === '';

const isBetween = (length, min, max) => length > min && length < max;

const isEmailValid = (email) => EMAIL_REGEX.test(email)


const showError = (input, message) => {
    const contactoValid = input.parentElement;
    contactoValid.classList.remove('success')
    contactoValid.classList.add('error')
    const errorContainer = contactoValid.querySelector('small')
    errorContainer.textContent = message
}

const showSuccess = (input) => {
    const contactoValid = input.parentElement;
    contactoValid.classList.remove('erorr')
    contactoValid.classList.add('success')
    const errorContainer = contactoValid.querySelector('small')
    errorContainer.textContent = ''
}



const checkNombre = () => {
    let valid = false;

    const min = 4
    const max = 15

    const nombre = nombreInput.value.trim()

    if (isEmpty(nombre)) {
        showError(nombreInput, 'El nombre completo es obligatorio')
    } else if (!isBetween(nombre.length, min, max)) {
        showError(nombreInput, `Debe tener entre ${min} y ${max} caracteres`)
    } else {
        showSuccess(nombreInput)
        valid = true
    }
    return valid
}

const checkEmail = () => {
    let valid = false;

    const email = emailInput.value.trim()

    if (isEmpty(email)) {
        showError(emailInput, 'El correo electronico es obligatorio')
    } else if (!isEmailValid(email)) {
        showError(emailInput, 'El correo electronico es invalido')
    } else {
        showSuccess(emailInput)
        valid = true
    }
    return valid
}



form.addEventListener('submit', e => {
    e.preventDefault()

    const isNombreValid = checkNombre()
    const isEmailValid = checkEmail()

    const isFormValid = isNombreValid && isEmailValid;
    if (isFormValid) {
        form.submit()
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay)
    }
}

form.addEventListener(
    'input',
    debounce(
        (e) => {
            switch (e.target.id) {
                case "nombre":
                    checkNombre();
                    break;
                case "email":
                    checkEmail();
                    break;
            }

        })
);
