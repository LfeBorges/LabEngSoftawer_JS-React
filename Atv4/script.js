document.addEventListener('DOMContentLoaded', function() {
    const formAluno = document.getElementById('formAluno');
    const formProfessor = document.getElementById('formProfessor');
    const alunoRadio = document.getElementById('aluno');
    const professorRadio = document.getElementById('professor');
    const dadosExibidos = document.getElementById('dadosExibidos');

    alunoRadio.addEventListener('change', function () {
        formAluno.style.display = 'block';
        formProfessor.style.display = 'none';
    });

    professorRadio.addEventListener('change', function () {
        formAluno.style.display = 'none';
        formProfessor.style.display = 'block';
    });

    formAluno.addEventListener('submit', function (event) {
        event.preventDefault();
        const dados = {
            nome: document.getElementById('nomeAluno').value,
            email: document.getElementById('emailAluno').value,
            dataNascimento: document.getElementById('dataNascimentoAluno').value,
            telefoneFixo: document.getElementById('telefoneFixoAluno').value,
            telefoneCelular: document.getElementById('telefoneCelularAluno').value,
            curso: document.getElementById('cursoAluno').value,
            matricula: document.getElementById('matriculaAluno').value
        };
        dadosExibidos.textContent = JSON.stringify(dados, null, 2);
    });

    formProfessor.addEventListener('submit', function (event) {
        event.preventDefault();
        const dados = {
            nome: document.getElementById('nomeProfessor').value,
            email: document.getElementById('emailProfessor').value,
            dataNascimento: document.getElementById('dataNascimentoProfessor').value,
            telefoneFixo: document.getElementById('telefoneFixoProfessor').value,
            telefoneCelular: document.getElementById('telefoneCelularProfessor').value,
            area: document.getElementById('areaProfessor').value,
            matricula: document.getElementById('matriculaProfessor').value,
            lattes: document.getElementById('lattesProfessor').value
        };
        dadosExibidos.textContent = JSON.stringify(dados, null, 2);
    });
});
