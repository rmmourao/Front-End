## Grid Layout

### display: grid;
    - Cria o Grid na página, faz com que o CSS se comporte como um grid;

### grid-template-areas: 
        "cabecalho"
        "conteudo"
        "rodape";
    - Define as áreas do Grid, a ordem das áreas na página será a mesma ordem informada, nesse caso a página é separada em 3 áreas, cabeçalho (1ª área na parte superior, header), conteúdo (2ª área na parte central, main) e rodapé (3ª área na parte inferior, footer);

### grid-template-columns: auto;
    - Define o número e o tamanho das colunas do Grid, nesse caso, uma única coluna, de tamanho automático;

### grid-template-rows: 50px auto auto;
    - Define o número e o tamanho das linhas do Grid, nesse caso, 3 linhas, a 1ª com 50 pixels de altura, e as demais com tamanho automático;

        - Para definir o tamanho das colunas e linhas, podem ser usados vários tipos de medidas: px, vw (viewport width), vh (viewport height), %;

### grid-area: (área);
    - Posiciona o elemento o código CSS, na área do Grid informada;

### grid-column-start: (valor);
### grid-row-start: (valor);
    - Defina em qual coluna ou linha o elemento começa a ser exibido;

### grid-column-end: (valor);
### grid-row-end: (valor);
    - Defina em qual coluna ou linha o elemento termina de ser exibido;
    
        - SHORTHAND - grid-column: <valorInicio> / <valorFinal>;
        - SHORTHAND - grid-row: <valorInicio> / <valorFinal>;

        - ATENÇÃO - O inicío e o fim devem ser definidos a partir do pensamento que o elemento irá iniciar e terminar A PARTIR do inicio da linha ou coluna. 
            Ex. Suponha um grid de 3 linhas por 4 colunas, um elemento que comece na coluna 1 e termine na coluna 4, irá preencher a coluna 1, 2 e 3, e terminará no início da coluna 4.

### grid-gap: .2rem;
    - Adiciona um espaçamento entre linhas e colunas;

## Responsividade

### @media screen and (min-width: 0) {
    
    .<seletorElemento> {
        <estilo>: (valor);
    }
    
    - Cria uma media query, através delas podemos configurar estilos para diferentes tamanhos de tela.
        - No exemplo acima cria uma media query que irá aplicar elementos para telas maiores que 0 pixels. No lugar de min-width podemos passar max-width, para definirmos estilos para telas menores que o tamanho informado;
        - .seletorElemento indica em qual elemento será aplicada a mudança;
        - Os elementos que estiverem em uma media query não devem estar duplicados no arquivo CSS com os demais estilos do elemento.


https://css-tricks.com/snippets/css/complete-guide-grid/ - Tutoriais e referencias de Grid (CSS em geral).

https://developer.mozilla.org/pt-BR/docs/Web/CSS - Documentação de CSS feita pela Mozilla.