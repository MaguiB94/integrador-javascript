
/*formulario validacion regitro*/

const form = document.getElementById('form')
const nombresInput = document.getElementById('nombres')
const apellidoInput = document.getElementById('apellido')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')



const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;



const isEmpty = value => value === '';

const isBetween = (length, min, max) => length > min && length < max;

const isEmailValid = email => EMAIL_REGEX.test(email)

const isPasswordValid = password => PASSWORD_REGEX.test(password)


const showError = (input, message) => {
const formParent = input.parentElement;
formParent.classList.remove('success')
formParent.classList.add('error')
const errorContainer = formParent.querySelector('small')
errorContainer.textContent = message
}

const showSuccess = (input) => {
const formParent = input.parentElement;
formParent.classList.remove('erorr')
formParent.classList.add('success')
const errorContainer = formParent.querySelector('small')
errorContainer.textContent = ''
}



const checkNombres = () => {
    let valid = false;

    const min = 4
    const max = 15

const nombres = nombresInput.value.trim()

if (isEmpty(nombres)) {
    showError(nombresInput,'El nombre es obligatorio')
} else if (!isBetween(nombres.length, min, max)) {
    showError(nombresInput, `Debe tener entre ${min} y ${max} caracteres`)
} else {
showSuccess(nombresInput)
    valid = true
}
return valid
} 


const checkApellido = () => {
    let valid = false;

    const min = 4
    const max = 15

const apellido = apellidoInput.value.trim()

if (isEmpty(apellido)) {
    showError(apellidoInput,'El apellido es obligatorio')
} else if (!isBetween(apellido.length, min, max)) {
    showError(apellidoInput, `Debe tener entre ${min} y ${max} caracteres`)
} else {
showSuccess(apellidoInput)
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



const checkPassword = () => {
    let valid = false;

    const password = passwordInput.value.trim()

    if (isEmpty(password)) {
        showError(passwordInput, 'La contraseña es obligatoria')
    } else if (!isPasswordValid(password)) {
        showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un simbolo')
    } else {
        showSuccess(passwordInput)
        valid = true
    }
 return valid   
}

form.addEventListener('submit', e => {
e.preventDefault()

const isNombresValid = checkNombres()
const isApellidoValid = checkApellido()
const isEmailValid = checkEmail()
const isPasswordValid = checkPassword()

const isFormValid = isNombresValid && isApellidoValid && isEmailValid && isPasswordValid;
if (isFormValid) {
    form.submit()
}
})