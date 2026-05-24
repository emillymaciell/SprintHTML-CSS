//class contato
class Contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    let data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipoContato").value,
        form.elements.namedItem("mensagem").value
    );

    Enviar(data);
    form.reset();
    // Retorna false para não recarregar a página
    return false;
}

function Enviar(data) {
    console.log(data);

    if (data.nome !== "") {
        alert("Obrigado, " + data.nome + "! Seus dados foram encaminhados com sucesso.");
    }
}
