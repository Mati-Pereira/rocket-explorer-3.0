let numberOne = prompt('Digite o Primeiro Número')
let numberTwo = prompt('Digite o Segundo Número')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let soma = numberOne + numberTwo
let subtracao = numberOne - numberTwo
let multiplicacao = numberOne * numberTwo
let divisao = numberOne / numberTwo
let resto = numberOne % numberTwo

alert(`A soma dos dois números é ${soma}`)
alert(`A subtração dos dois números é ${subtracao}`)
alert(`A multiplicação dos dois números é ${multiplicacao}`)
alert(`A divisão dos dois números é ${divisao}`)
alert(`A resto da divisão dos dois números é ${resto}`)

if (soma % 2 === 0) {
    alert('A soma dos Números é par')
} else {
    alert('A soma dos Números é impar')
}

if (numberOne === numberTwo){
    alert('Os números digitados são iguais')
} else {
    alert('Os números digitados são diferentes')
}