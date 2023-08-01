export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    };

    if(input.validity.valid) {
        input.parentElement.classList.remove("ontact-form--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("ontact-form--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    };
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    name: {
        valueMissing: "The name field cannot be empty.",
        patternMismatch: "Maximum 40 characters."
    },
    message: {
        valueMissing: "The message field cannot be empty.",
        patternMismatch: "Maximum 120 characters."
    }
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";

    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
};

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};