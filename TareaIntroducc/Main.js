document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('menu').classList.add('hidden')
    document.getElementById('destinationMenu').classList.remove('hidden')
})

document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('destinationMenu').classList.add('hidden')
    document.getElementById('creditCardMenu').classList.remove('hidden')
})

document.getElementById('nextButtonCC').addEventListener('click', function() {
    const creditCardNumber = document.getElementById('creditCard').value
    if (validateCreditCard(creditCardNumber)) {
        document.getElementById('creditCardMenu').classList.add('hidden')
        document.getElementById('personalIdMenu').classList.remove('hidden')
    } else {
        alert('Número de tarjeta de crédito no válido')
    }
})

document.getElementById('submitButton').addEventListener('click', function() {
    const personalId = document.getElementById('personalId').value
    if (personalId) {
        document.getElementById('personalIdMenu').classList.add('hidden')
        document.getElementById('ticketMessage').classList.remove('hidden')
    } else {
        alert('Por favor, ingrese su identificador personal')
    }
})
document.getElementById('finishButton').addEventListener('click', function() {
    document.getElementById('ticketMessage').classList.add('hidden')
    document.getElementById('menu').classList.remove('hidden')
    resetForm();
});

function validateCreditCard(number) {
    const regex = new RegExp("^[0-9]{16}$")
    return regex.test(number)
}
