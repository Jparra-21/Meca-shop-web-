const form = document.getElementById('form');
const nombre = document.getElementById('name-infouser');
const email = document.getElementById('email-infouser');
const rut = document.getElementById('run-infouser');
const tel = document.getElementById('cell-infouser')


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const nombreValue = nombre.value.trim();
    const rutValue = rut.value.trim();
    const telValue = tel.value.trim();

    if(nombreValue === '') {
        setError(nombre, 'Nombre requerido');
    } else if (nombreValue.length < 3) {
        setError(nombre, 'El nombre debe tener al menos 3 letras');
    } else {
        setSuccess(nombre);
    }

    if(rutValue === '') {
        setError(rut, 'Rut requerido');
    } else if (rutValue.length < 7) {
        setError(rut, 'El RUT debe tener almenos 8 numeros.');
    } else {
        setSuccess(rut);
    }


    if(emailValue === '') {
        setError(email, 'Email requerido');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Ingrese un email valido');
    } else {
        setSuccess(email);
    }

    if(telValue === '') {
        setError(tel, 'Numero requerido');
    } else if (telValue.length < 8 ) {
        setError(tel, 'El telefono debe tener almenos 8 numeros.')
    } else {
        setSuccess(tel);
    }

};
