/**
 * Validação da maioridade
 * @author Elen Grecco
 */

//função para validadeção pra maioridade

function validar(event){
    // a linha abaixo desabilita , desativa o comportamento padrão de envio de formulário
    event.preventDefault()
    // alert("teste de envio")
    let nome = document.getElementById('nome').value
    //alert(nome)
    //console.log(nome)
    let idade = document.getElementById('idade').value

    //Saída
    document.getElementById('aluno').value = `Aluno: ${nome}`

    if(idade < 18){
        document.getElementById('status').value = "Menor de idade"
    } else {
        document.getElementById('status').value = "Maior de idade"
    }

}