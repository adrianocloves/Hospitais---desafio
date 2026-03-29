# Roteiro de Apresentação: Projeto de Busca de Hospitais

## Slide 1: Título

**Título:** Melhorias e Novas Funcionalidades no Sistema de Busca de Hospitais

**Subtítulo:** Uma Solução Otimizada para Acesso à Saúde em Belo Horizonte

**Apresentador:** [Seu Nome/Nome da Equipe]

**Data:** 29 de Março de 2026

---

## Slide 2: Introdução e Contexto

**Objetivo da Apresentação:** Apresentar as correções de bugs e as novas funcionalidades implementadas no sistema de busca de hospitais, visando aprimorar a experiência do usuário e a eficiência na localização de serviços de saúde.

**Contexto Original do Projeto:** O projeto inicial visava listar hospitais do SUS em Belo Horizonte com suas especialidades. No entanto, apresentava falhas que comprometiam sua funcionalidade e usabilidade.

---

## Slide 3: Problemas Identificados e Soluções

**Problema 1: Erros de Sintaxe e Lógica no Código**

*   **Detalhes:** O arquivo `index.html` continha um atributo `onclick` inválido no botão de pesquisa (`HTMLButtonElement.onclick`). No `app.js`, havia inconsistência no ID do campo de pesquisa (`campoPesquisa` vs. `campo-pesquisa`) e referências incorretas a objetos (`dados.descricao` em vez de `dado.descricao`). Além disso, a capitalização inconsistente da propriedade `tags` no `dados.js` causava falhas na busca.

*   **Solução:** Realizamos uma revisão completa do código, corrigindo os atributos HTML, padronizando os IDs e as referências a objetos no JavaScript, e unificando a capitalização da propriedade `tags` para `tags` em todos os registros. Isso garantiu o funcionamento correto da lógica de pesquisa.

---

## Slide 4: Nova Funcionalidade: Integração com Google Maps e Waze

**Desafio:** Facilitar a navegação dos usuários até as unidades de saúde encontradas.

**Solução Implementada:**

*   **Botões de Navegação:** Adicionamos botões intuitivos de **Google Maps** e **Waze** para cada resultado de busca.
*   **Navegação Direta:** Ao clicar, o usuário é direcionado automaticamente para o aplicativo ou site correspondente, com o endereço do hospital pré-preenchido para iniciar a rota.
*   **Benefícios:** Reduz o tempo de busca por rotas, melhora a acessibilidade e a experiência do usuário em momentos de necessidade.

---

## Slide 5: Nova Funcionalidade: Sugestão de Unidades Privadas

**Desafio:** Oferecer alternativas de atendimento quando a rede pública (SUS) estiver com alta demanda ou não possuir a especialidade desejada.

**Solução Implementada:**

*   **Inclusão de Dados:** Adicionamos unidades de referência da rede privada de Belo Horizonte ao banco de dados.
*   **Lógica Inteligente:** O sistema agora prioriza resultados do SUS, mas, em caso de busca por especialidades que também são atendidas na rede privada ou para complementar a oferta, exibe sugestões de hospitais privados.
*   **Identificação Clara:** As unidades privadas são visualmente destacadas com um *badge* "Rede Privada" e um estilo diferenciado, garantindo transparência ao usuário.
*   **Benefícios:** Amplia as opções de atendimento, oferece alternativas em situações de emergência ou alta demanda no SUS, e melhora a capacidade de resposta do sistema de saúde como um todo.

---

## Slide 6: Melhorias na Experiência do Usuário (UX)

**Visão Geral:** Além das funcionalidades, focamos em tornar a interface mais agradável e informativa.

**Melhorias:**

*   **Estilos Visuais:** Implementamos novos estilos CSS para os botões de navegação (Google Maps em azul, Waze em ciano) e para o destaque das unidades privadas, tornando a interface mais moderna e fácil de usar.
*   **Mensagens Claras:** As mensagens de feedback ao usuário foram aprimoradas, oferecendo informações mais claras sobre os resultados da busca ou a ausência deles.
*   **Responsividade:** O layout foi ajustado para garantir uma boa visualização em diferentes dispositivos (desktops, tablets e celulares).

---

## Slide 7: Demonstração (Opcional - para apresentação ao vivo)

**Pontos a Demonstrar:**

1.  Realizar uma busca por uma especialidade (ex: "pediatria") e mostrar os resultados do SUS com os botões de mapa.
2.  Realizar uma busca por uma especialidade (ex: "oncologia") que retorne tanto hospitais SUS quanto privados, destacando a sugestão das unidades privadas.
3.  Clicar nos botões de Google Maps e Waze para simular a navegação.

---

## Slide 8: Conclusão e Próximos Passos

**Resumo das Conquistas:**

*   Sistema de busca robusto e funcional.
*   Integração com ferramentas de navegação essenciais.
*   Ampliação das opções de atendimento com a inclusão da rede privada.
*   Experiência do usuário significativamente aprimorada.

**Próximos Passos (Sugestões):**

*   Implementação de filtros avançados (por tipo de rede, por especialidade específica, por localização).
*   Adição de informações sobre tempo de espera estimado.
*   Integração com APIs de dados de saúde em tempo real para verificar a capacidade de atendimento.

---

## Slide 9: Perguntas e Respostas

**Obrigado!**

[Seu Contato/Informações de Contato]
