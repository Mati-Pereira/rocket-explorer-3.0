const alunos = [
    {
        nome: 'Lucas',
        nota1: 10,
        nota2: 5,
    },
    {
        nome: 'Matheus',
        nota1: 5,
        nota2: 3,
    },
    {
        nome: 'Rafael',
        nota1: 8,
        nota2: 4,
    },
    {
        nome: 'Vinicius',
        nota1: 10,
        nota2: 8,
    },
    {
        nome: 'Marcos',
        nota1: 3,
        nota2: 1,
    },
    {
        nome: 'Thiago',
        nota1: 9,
        nota2: 6,
    },
    {
        nome: 'Amanda',
        nota1: 10,
        nota2: 9,
    },
    {
        nome: 'Letícia',
        nota1: 6,
        nota2: 6,
    },
    {
        nome: 'Beatriz',
        nota1: 9,
        nota2: 7,
    },
]

function mediaNotas(num1, num2) {
    return (num1 + num2) / 2
}

alunos.forEach(aluno => {
    if (mediaNotas(aluno.nota1, aluno.nota2) >= 7) {
        alert(`O(A) aluno(a) ${aluno.nome} obteve as notas ${aluno.nota1} e ${aluno.nota2}, portando uma média de ${mediaNotas(aluno.nota1, aluno.nota2)}\n\n Parabéns você passou nesta matéria`)
    } else {
        alert(`O aluno ${aluno.nome} obteve as notas ${aluno.nota1} e ${aluno.nota2}, portando uma média de ${mediaNotas(aluno.nota1, aluno.nota2)}\n\n Estude mais um pouco e tente outra vez`)
    }
})