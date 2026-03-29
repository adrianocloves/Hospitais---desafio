// Função para normalizar strings removendo acentos e caracteres especiais
function normalizarTexto(texto) {
    // Converte para minúsculas
    texto = texto.toLowerCase();
    
    // Remove acentos usando a API de normalização Unicode
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    // Remove caracteres especiais mantendo apenas letras, números e espaços
    texto = texto.replace(/[^a-z0-9\s]/g, '');
    
    // Remove espaços extras
    texto = texto.trim().replace(/\s+/g, ' ');
    
    return texto;
}

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campo de pesquisa for uma string vazia
    if (!campoPesquisa || campoPesquisa.trim() === "") {
        section.innerHTML = "<p>Nada encontrado. Digite o nome de um hospital ou especialidade</p>";
        return;
    }

    // Normaliza o termo de busca
    let campoPesquisaNormalizado = normalizarTexto(campoPesquisa);

    // Inicializa strings para armazenar os resultados
    let resultadosSUS = "";
    let resultadosPrivados = "";
    let encontrouSUS = false;

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Normaliza todos os campos para comparação
        let tituloNormalizado = normalizarTexto(dado.titulo);
        let descricaoNormalizada = normalizarTexto(dado.descricao);
        let tagsNormalizado = normalizarTexto(dado.tags || "");

        // Verifica se algum campo contém o termo de busca normalizado
        if (tituloNormalizado.includes(campoPesquisaNormalizado) || 
            descricaoNormalizada.includes(campoPesquisaNormalizado) || 
            tagsNormalizado.includes(campoPesquisaNormalizado)) {
            
            let isPrivado = dado.rede === "Privada";
            let htmlResultado = `
                <div class="item-resultado ${isPrivado ? 'unidade-privada' : ''}">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                        ${isPrivado ? '<span class="badge-privada">Rede Privada</span>' : ''}
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <div class="links-navegacao">
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dado.titulo + " " + dado.descricao)}" target="_blank" class="btn-mapa">Google Maps</a>
                        <a href="https://waze.com/ul?q=${encodeURIComponent(dado.titulo + " " + dado.descricao)}&navigate=yes" target="_blank" class="btn-waze">Waze</a>
                    </div>
                </div>
            `;

            if (isPrivado) {
                resultadosPrivados += htmlResultado;
            } else {
                resultadosSUS += htmlResultado;
                encontrouSUS = true;
            }
        }
    }

    let resultadoFinal = "";

    if (resultadosSUS) {
        resultadoFinal += `<h3>Unidades SUS Encontradas</h3>${resultadosSUS}`;
    }

    // Se encontrou unidades SUS, sugere as privadas como alternativa (simulando alta demanda)
    // Se não encontrou SUS mas encontrou privadas, mostra as privadas
    if (resultadosPrivados) {
        if (encontrouSUS) {
            resultadoFinal += `<hr><div style="margin-top: 20px; padding: 10px; background: #e3f2fd; border-radius: 8px;">
                <strong>Dica:</strong> Se as unidades SUS estiverem com alta demanda, considere estas unidades privadas de referência:
            </div>${resultadosPrivados}`;
        } else if (!resultadosSUS) {
            resultadoFinal += `<h3>Unidades Privadas Encontradas</h3>${resultadosPrivados}`;
        }
    }

    if (!resultadoFinal) {
        resultadoFinal = "<p>Nada foi encontrado para sua busca. Tente usar termos diferentes ou verifique a ortografia.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultadoFinal;
}
