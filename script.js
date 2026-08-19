// Pegar os botões e as classes
const botoes = document.querySelectorAll(".btn");
const paginas = document.querySelectorAll(".tela");

// Criar a função
botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        // Esconde todas as páginas
        paginas.forEach(pagina => {
            pagina.classList.remove("show");
        });

        // Pega o ID da página que o botão deve abrir
        const idPagina = botao.getAttribute("content-id");

        // Mostra a página correspondente
        const pagina = document.getElementById(idPagina);

        if (pagina) {
            pagina.classList.add("show");
        }
    });
});