## Flexbox
    A idéia do Flexbox é a de criar um container, e permitir alterar tamanho e posição dos elementos dentro deste container.

### display: flex;
    - Define o elemento como um Flexbox, alinha horizontalmente e ajusta o tamanho dos elementos;

### align-items: (valor);
    - Alinha verticalmente os elementos conforme informado no valor;
    - center - centraliza os elementos,
    - flex-end - joga os elementos para o final do Flexbox (direita),
    - flex-start - joga os elementos para o inicio do Flexbox (esquerda).

### justify-content: (valor);
    - Justifica o alinhamento dos elementos distribuindo o espaço exedente do elemento conforme o valor;
        - flex-end - joga os elementos para o final do Flexbox (direita),
        - flex-start - joga os elementos para o inicio do Flexbox (esquerda - padrão),
        - center - centraliza os elementos distribuindo os espaços para a esquerda e para a direita,
        - space-between - coloca todo o espaço excedente entre os elementos,
        - space-between - distribui igualitariamente o espaço envolta dos elementos.

### flex-direction: (valor);
    - Define a direção para o alinhamento do flex container, o padrão, caso não seja informado, é row (linha), mas podem ser definidos outros valores. Quando alteramos a direção de um flex container, também alteramos seu eixo, o padrão é ter um eixo principal horizontal, row, quando alteramos para column, mudamos esse eixo para a vertical, isso pode afetar o comportamento de alguns comandos;
        - row - alinhamento horizontal, em linha (padrão),
        - column - alinhamento vertical, em coluna.

### flex-wrap: (valor);
    - Informa para o flex se ele terá multiplas linhas ou não;
        - nowrap - linha única e contínua (padrão), não tem quebra ao final da Flexbox,
        - wrap - multiplas linhas, quebra ao final da Flexbox, justificando o posicionamento dos elementos.

### flex-flow: <orientação> <linhas>;
    - É um atalho que substitui os comandos flex-direction e flex-wrap, ele informa qual orientação o elemento deve seguir e se deve quebrar ao final de cada elemento;

### flex-grow: (valor);
    - Aumenta o tamanho dos elementos conforme o valor passado.
        - Exemplo: 4 quadrados de 50px por 50px numa flexbox com 2000px de largura
            - flex-grow: 1; - os elementos ocupam de forma igual todo o espaço disponível da flexbox;
            - flex-grow: 2; <para 1 quadrado> flex-grow: 1; <para 3 quadrados> - o elemento que recebeu o flex-grow 2 vai ocupar 2/5 do espaço disponível, os demais dividirão os 3/5 restantes do espaço.
        - flex-grow: 0; - faz com que os elementos mantenham o tamanho original.

### flex-shrink: (valor);
    - Diminui o tamanho dos elementos conforme o valor passado.
        - Exemplo: 4 quadrados de 50px por 50px numa flexbox com 2000px de largura
            - flex-shrink: 1; - todos os elementos vão reduzir proporcionalmente caso a tela ou a flexbox seja diminuida;
            - flex-shrink: 2; <para 1 quadrado> flex-shrink: 1; <para 3 quadrados> - o elemento que recebeu o flex-shrink 2 vai reduzir o dobro em comparação aos elementos que receberam o flex-shrink 1.
        - flex-shrink: 0; - impede que os elementos diminuam, eles fogem ao limite da tela mas não diminuem seu tamanho.

### flex-basis: (valor)
    - Tem a mesma funcionalidade do width.

### flex: <valorGrow> <valorShrink> <valorBasis>;
    - Um atalho que combina flex-grow (1º valor), flex-shrink (2º valor) e flex-basis (3º valor);
    - Pode ser usado somente com grow e shrink (basta omitir o 3º valor).

### order: (valor);
    - Muda a ordem dos elementos, por padrão todos os flex items possuem order: 0, então, usamos esse comando para alterar a ordem desses elementos, um valor negativo coloca o item primeiro.


http://flexboxfroggy.com/ - Tutorial de flexbox no formato de um jogo.

http://www.flexboxdefense.com/ - Tutorial de flexbox no formato de um jogo.

https://css-tricks.com/snippets/css/a-guide-to-flexbox/ - Tutoriais e referencias de Flexbox (CSS em geral).

https://developer.mozilla.org/pt-BR/docs/Web/CSS - Documentação de CSS feita pela Mozilla.
