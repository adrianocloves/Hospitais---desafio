function pesquisar(dados){
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campoPesquisa").value

    // se campo de pesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada encontrado Digite o nome de um hospital ou especialidade</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let link = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dados.descricao.toLowerCase()
        tags = dados.tags.toLowerCase()
        // se titulo includes campodPesquisa
        if (dado.titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        // cria um novo elemento
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

     // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;