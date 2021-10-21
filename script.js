const inputs = document.querySelectorAll('input');

const mensagensDeErro = {
    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        tooShort: 'A senha deve conter entre 6 a 12 caracteres.',
        tooLong: 'A senha deve conter entre 6 a 12 caracteres.'
    }
}

const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'tooShort',
    'tooLong'
]

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
}
)

function valida(input) {
    const tipoDeInput = input.dataset.tipo


    if (input.validity.valid) {
        input.parentElement.classList.remove('validacao-invalida');
        input.parentElement.querySelector('.validacao').innerHTML = ''
    } else {
        input.parentElement.querySelector('.validacao').classList.add('validacao-invalida');
        input.parentElement.querySelector('.validacao').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErros.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    });
    return mensagem
}

