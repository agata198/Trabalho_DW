document.getElementById('Atualizar').addEventListener('click', exibir_alunos)

/*Acessa o formulário através do getElementById e fica "escutando"/esperando através do addEventListener o evento(submint)  que ocorrerá no caso o click no botão cadastrar. Quando isso ocorre ele executa a função anonima function(event) desencadeando as ações desejadas* */
document.getElementById("formcadastro").addEventListener("submit", function (event) {
    /*Não deixa carregar uma nova página */
    event.preventDefault();
    /*Declara as variáveis e pega os valores da caixa de texto*/
    var nome = document.getElementById('nome').value;
    var quantia = document.getElementById('Quantia' ).value;
    var tipo = document.getElementById('Tipo').value
    var data = document.getElementById('Data').value
    /*Atribui nome e idade para o objeto aluno*/
    var finança = { nome: nome, quantia: quantia,
        tipo:tipo, data:data
     }
    /*Criar lista de alunos, carrega o aquivo do LocalStorage se houver, caso não exista cria uma lista vazia*/
    var a = JSON.parse(localStorage.getItem('finanças')) || [];
    /*Insere o aluno digitado na caixa de texto na lista*/
    a.push(finança)
    /*Adiciona o aluno ao LocalStorage */
    localStorage.setItem('finanças', JSON.stringify(a))
    /*Limpa o formulário*/
    document.getElementById('formcadastro').reset()

    //chama a função exibir alunos que irá exibir a listagem de alunos
    exibir_alunos()
})

function exibir_alunos() {
    //Carrega a lista de alunso do LocalStorage ou inicializa a lista como vazio

    var a = JSON.parse(localStorage.getItem('finanças')) || [];
    //alert(lista_aluno[5].nome)
    /* Acessa o elemento output no documento HTML*/
    var output = document.getElementById('output')
    // Limpa o conteúdo atual
    output.innerHTML = '';
    for (let i = 0; i < a.length; i++) {

        if(a[i]!=undefined) {
            //Cria a variável li e cria o elemento (tag) li 
            let li = document.createElement('li')
            li.innerHTML = '<strong>Nome<strong/>: ' + a[i].nome +
                '<br><strong>Quantia</strong>: ' + a[i].quantia +
                '<br><strong>Data</strong>: ' + a[i].data +
                '<br><strong>Tipo</strong>: ' + a[i].tipo

            const Excluir = document.createElement('button')
            Excluir.textContent = 'Excluir'
            Excluir.addEventListener('click', function () {
                a[i] = null
                localStorage.setItem('finanças', JSON.stringify(a))
                exibir_alunos()
            })
            li.appendChild(Excluir)

            output.appendChild(li)
        } 
    }
}