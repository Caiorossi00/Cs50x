# Wise Wealth

#### Video Demo: <URL HERE>

#### Description: O Wise Wealth é um aplicativo destinado a simplificar a organização financeira, permitindo que os usuários gerenciem e visualizem seus gastos mensais de maneira eficiente. Com um foco central na experiência do usuário, o aplicativo oferece uma abordagem intuitiva para categorizar despesas, exibindo um saldo total em tempo real para uma compreensão clara da situação financeira.

<ol>
    <li>
        <strong>Motivações</strong>
        <ul>
            <li>Observando a necessidade de um controle mais eficaz das finanças, desenvolvi o Wise Wealth, um aplicativo projetado para ajudar os usuários a acompanhar e categorizar seus gastos mensais.</li>
            <li>Este aplicativo foi inicialmente criado para uso pessoal, com o objetivo de auxiliar na gestão das entradas e saídas de dinheiro.</li>
            <li>Optar por uma aplicação web proporcionou um acesso fácil e rápido, enquanto o uso do <code>localStorage</code> garante que as informações do usuário sejam armazenadas localmente no navegador, mantendo o saldo sempre disponível.</li>
        </ul>
    </li>
<li>
        <strong>Funcionamento</strong>
        <ul>
            <li><strong>Campo de Inputs e Campo de Display</strong>
                <ul>
                    <li>No campo de inputs, o usuário insere a descrição, o valor, a categoria e o tipo da transação (entrada ou saída).</li>
                    <li>Ao clicar no botão "Inserir Dados", essas informações são renderizadas na área de display à direita da tela, onde as transações são organizadas por mês.</li>
                    <li>Os usuários podem navegar entre diferentes meses para visualizar transações passadas ou futuras e têm a opção de remover transações conforme necessário.</li>
                </ul>
            </li>

<li><strong>Navbar</strong>
                <ul>
                    <li>Na barra de navegação (navbar), o usuário tem acesso a algumas funcionalidades:</li>
                    <li><strong>Como Usar:</strong> Um link que abre um modal com instruções detalhadas sobre o uso do aplicativo.</li>
                    <li><strong>Suporte:</strong> Um link que redireciona o usuário para o WhatsApp, permitindo enviar uma mensagem diretamente para relatar problemas com o aplicativo.</li>
                    <li><strong>Apoie:</strong> Um botão que direciona para meu Instagram profissional, onde os usuários podem apoiar o projeto.</li>
                </ul>
            </li>

<li><strong>Footer</strong>
                <ul>
                    <li>No rodapé (footer), o usuário pode consultar informações sobre a política de privacidade e os termos de uso, ambos acessíveis por meio de modais.</li>
                    <li>Além disso, há uma âncora que leva ao meu Instagram, onde estão os créditos ao desenvolvedor.</li>
                </ul>
            </li>
        </ul>
    </li>

<li>
        <strong>Conceitos</strong>
        <ul>
            <li><strong>Armazenamento Local:</strong> O código utiliza o <code>localStorage</code> do navegador para persistir os dados das transações, garantindo que as informações sejam mantidas mesmo após o fechamento da página.</li>
            <li><strong>Manipulação de Objetos:</strong> A criação de objetos <code>Transacao</code> permite representar cada transação com suas propriedades específicas (id, descrição, valor, tipo, categoria). Isso facilita a organização e o gerenciamento dos dados.</li>
            <li><strong>Arrays e Objetos:</strong> Os dados são estruturados em arrays e objetos para armazenar as transações e organizar as informações por mês.</li>
            <li><strong>DOM:</strong> A interface do usuário é manipulada através do DOM (Document Object Model), permitindo a criação e atualização de elementos HTML dinamicamente.</li>
            <li><strong>Eventos:</strong> A interação do usuário com a aplicação é gerenciada através de eventos, como cliques em botões, que desencadeiam funções específicas.</li>
            <li><strong>Funções:</strong> Funções são utilizadas para encapsular funcionalidades específicas, como adicionar transações, calcular o saldo, exibir transações na tela, etc.</li>
            <li><strong>Lógica Condicional:</strong> Estruturas condicionais (<code>if/else</code>) são utilizadas para tomar decisões, como determinar se uma transação é uma entrada ou saída, ou se o saldo é positivo ou negativo.</li>
            <li><strong>Formatação:</strong> O código utiliza métodos de formatação de números e datas para apresentar os valores monetários e datas de forma clara e consistente.</li>
        </ul>
    </li>

</ol>

<h2>Estrutura do Projeto</h2>

<h3>HTML</h3>

<ol>
    <li><strong>Estrutura Básica</strong>
        <ul>
            <li>O documento HTML utiliza a tag <code>&lt;!DOCTYPE html&gt;</code> para garantir a compatibilidade com HTML5.</li>
            <li>O idioma do documento está definido como português (<code>lang="pt"</code>).</li>
        </ul>
    </li>

 <li><strong>Cabeçalho (<code>&lt;head&gt;</code>)</strong>
        <ul>
            <li><strong>Metadados Essenciais:</strong> Utiliza charset UTF-8 e meta tag viewport para garantir responsividade.</li>
            <li><strong>Estilo:</strong> Referencia a folha de estilo externa <code>style.css</code> e fontes externas do Google Fonts (Poppins e Source Sans 3).</li>
            <li><strong>Favicon:</strong> O ícone do aplicativo é carregado com o arquivo <code>wwlogo.png</code>.</li>
            <li><strong>Título:</strong> O título da página é "Wise Wealth".</li>
        </ul>
    </li>

<li><strong>Corpo da Página (<code>&lt;body&gt;</code>)</strong>
        <ul>
            <li><strong>Cabeçalho e Navegação (<code>&lt;header&gt; &lt;nav&gt;</code>)</strong>
                <ul>
                    <li><strong>Logo:</strong> Inclui o logotipo <code>WW.png</code>.</li>
                    <li><strong>Links:</strong>
                        <ul>
                            <li>"Como Usar?": Abre um modal com instruções de uso.</li>
                            <li>"Suporte": Redireciona para o WhatsApp para suporte.</li>
                            <li>"Apoie": Botão com link para o Instagram do desenvolvedor.</li>
                        </ul>
                    </li>
                </ul>
            </li>

  <li><strong>Conteúdo Principal (<code>&lt;main&gt;</code>)</strong>
                <ul>
                    <li><strong>Container Esquerdo:</strong>
                        <ul>
                            <li>Mensagem de boas-vindas e exibição dinâmica do saldo.</li>
                            <li>Formulário de Transações com campos para descrição, valor e categoria.</li>
                            <li>Botão de Inserção para adicionar transações.</li>
                        </ul>
                    </li>
                    <li><strong>Container Direito:</strong>
                        <ul>
                            <li>Controle de meses e exibição de detalhes das transações mensais.</li>
                        </ul>
                    </li>
                </ul>
            </li>

  <li><strong>Modais</strong>
                <ul>
                    <li><strong>Modal "Como Usar?":</strong> Explica funcionalidades do aplicativo.</li>
                    <li><strong>Modal de Política de Privacidade:</strong> Esclarece que as informações são armazenadas localmente e não compartilhadas.</li>
                    <li><strong>Modal de Termos de Uso:</strong> Define regras para o uso do aplicativo.</li>
                </ul>
            </li>

 <li><strong>Rodapé (<code>&lt;footer&gt;</code>)</strong>
         <ul>
                    <li>Informações de direitos autorais e link para o Instagram do desenvolvedor.</li>
                    <li>Links para a política de privacidade e termos de uso.</li>
                </ul>
            </li>
        </ul>
    </li>

</ol>

<h3>CSS</h3>

<ol>
    <li><strong>Variáveis CSS</strong>
        <ul>
            <li>Define variáveis para fontes principais (<code>--font-general</code> e <code>--font-details</code>).</li>
        </ul>
    </li>
 <li><strong>Estilos Gerais</strong>
        <ul>
            <li>Aplica uma fonte padrão e ajusta espaçamento de letras e peso de fonte.</li>
            <li>Define estilos para o <code>body</code>, incluindo cor de fundo e altura mínima.</li>
        </ul>
    </li>

<li><strong>Navegação</strong>
        <ul>
            <li>Define layout flexível e estilos para itens de navegação e botões.</li>
        </ul>
    </li>

<li><strong>Layout Principal</strong>
        <ul>
            <li>Organiza o conteúdo principal com flexbox.</li>
            <li>Estiliza o container esquerdo e direito, incluindo formulários e detalhes de gastos.</li>
        </ul>
    </li>

<li><strong>Detalhamento de Gastos</strong>
        <ul>
            <li>Define estilos para a exibição de detalhes de gastos e ícones.</li>
        </ul>
    </li>

 <li><strong>Rodapé</strong>
        <ul>
            <li>Estiliza o rodapé com fundo branco e borda superior.</li>
        </ul>
    </li>

  <li><strong>Modais</strong>
        <ul>
            <li>Define estilos para modais, sobreposição e botão de fechamento.</li>
        </ul>
    </li>

  <li><strong>Responsividade</strong>
        <ul>
            <li>Ajusta layout e estilos para telas menores com media queries.</li>
        </ul>
    </li>

</ol>

<h3>JavaScript</h3>

<ol>
    <li><strong>Variáveis e Inicialização</strong>
        <ul>
            <li><code>contador</code>: Recupera o valor do contador do localStorage ou inicializa como 0.</li>
            <li><code>transacoes</code>: Recupera transações do localStorage ou inicializa como array vazio.</li>
            <li><code>dataMeses</code>: Recupera dados das transações por mês ou inicializa um objeto vazio para cada mês.</li>
            <li><code>chaves</code>: Array com os nomes dos meses.</li>
        </ul>
    </li>

  <li><strong>Funções</strong>
        <ul>
            <li><code>ordenarTransacoes</code>: Ordena transações por categoria.</li>
            <li><code>salvarNoLocalStorage</code>: Salva chave e valor no localStorage.</li>
        </ul>
    </li>

  <li><strong>Funções de CRUD</strong>
        <ul>
            <li><code>adicionarTransacao</code>: Adiciona nova transação e atualiza saldo.</li>
            <li><code>atualizarSaldo</code>: Calcula e exibe saldo total.</li>
            <li><code>adicionarTransacaoComDescricao</code>: Valida e adiciona transação com descrição.</li>
            <li><code>exibirTransacoes</code>: Exibe transações do mês atual.</li>
            <li><code>criarElemento</code>: Função utilitária para criar elementos HTML.</li>
            <li><code>criarTransacaoItem</code>: Cria item de lista para transações.</li>
            <li><code>changeBackgroundColor</code>: Define cor de fundo dos ícones de transação.</li>
        </ul>
    </li>

  <li><strong>Navegação entre Meses</strong>
        <ul>
            <li><code>passarMes</code> e <code>voltarMes</code>: Alteram o mês atual e atualizam exibição.</li>
        </ul>
    </li>

 <li><strong>Deletar Transação</strong>
        <ul>
            <li><code>deletarTransacao</code>: Remove transação do array e atualiza exibição.</li>
        </ul>
    </li>

<li><strong>Modal</strong>
        <ul>
            <li><code>Eventos de Modal</code>: Abre e fecha modais e fecha ao clicar fora.</li>
        </ul>
    </li>

</ol>

<h3>Considerações Gerais</h3>

<ol>
    <li><strong>Uso do localStorage</strong>
        <ul>
            <li>Utiliza localStorage para persistir dados entre recarregamentos de página.</li>
        </ul>
    </li>

  <li><strong>Validação de Dados</strong>
        <ul>
            <li>Valida entradas de usuário antes de adicionar novas transações.</li>
        </ul>
    </li>

  <li><strong>Atualização Dinâmica</strong>
        <ul>
            <li>Atualiza saldo e exibição de transações dinamicamente.</li>
        </ul>
  </li>

  <li><strong>Acessibilidade e UX</strong>
        <ul>
            <li>Adiciona feedback visual para saldo e interatividade com modais e botões.</li>
        </ul>
    </li>

</ol>
