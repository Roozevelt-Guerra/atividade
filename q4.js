function alunosAprovados(alunos) {
    return alunos.map(aluno => {
        const status = aluno.nota >= 7 ? 'Aprovado' : 'Reprovado';
        return `${aluno.nome}: ${status}`;
    });
}

const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'João', nota: 7 }
];

console.log(alunosAprovados(alunos));
