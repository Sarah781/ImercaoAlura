// Função para realizar uma pesquisa e exibir os resultados na página.
function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa === "") {
        section.innerHTML = "<p> Nada foi encontrado</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada dado na lista de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
            // Constrói o HTML para cada item de resultado, formatando os dados.
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href='#' target="_blank"> ${dado.titulo} </a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Saiba mais</a>
                </div>
            `;
        }
    }

    if(!resultados) {
        resultados = "<p> Nada foi encontrado</p>";
    }
    

    // Atribui o HTML gerado à seção de resultados, atualizando a página.
    section.innerHTML = resultados;

}
