
/*formulario validacion loguin*/

const formulario = document.getElementById('formulario')
const usuarioInput = document.getElementById('usuario')
const passwordInput = document.getElementById('password')


const PASSWORD_REGEX =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;



const isEmpty = (value) => value === '';

const isBetween = (length, min, max) => length > min && length < max;

const isPasswordValid = (password) => PASSWORD_REGEX.test(password)


const showError = (input, message) => {
    const loguinValid = input.parentElement;
    loguinValid.classList.remove('success')
    loguinValid.classList.add('error')
    const errorContainer = loguinValid.querySelector('small')
    errorContainer.textContent = message
}

const showSuccess = (input) => {
    const loguinValid = input.parentElement;
    loguinValid.classList.remove('erorr')
    loguinValid.classList.add('success')
    const errorContainer = loguinValid.querySelector('small')
    errorContainer.textContent = ''
}



const checkUsuario = () => {
    let valid = false;

    const min = 4
    const max = 15

    const usuario = usuarioInput.value.trim()

    if (isEmpty(usuario)) {
        showError(usuarioInput, 'El usuario es obligatorio')
    } else {
        showSuccess(usuarioInput)
        valid = true
    }
    return valid
}

const checkPassword = () => {
    let valid = false;

    const password = passwordInput.value.trim()

    if (isEmpty(password)) {
        showError(passwordInput, 'La contraseña es obligatoria')
    }  else {
        showSuccess(passwordInput)
        valid = true
    }
    return valid
}

formulario.addEventListener('submit', e => {
    e.preventDefault()

    const isUsuarioValid = checkUsuario()
    const isPasswordValid = checkPassword()

    const isFormularioValid = isUsuarioValid && isPasswordValid;
    if (isFormularioValid) {
        formulario.submit()
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

formulario.addEventListener(
    'input',
    debounce(
        (e) => {
            switch (e.target.id) {
                case "usuario":
                    checkUsuario();
                    break;
                case "password":
                    checkPassword();
                    break;
            }

        })
);