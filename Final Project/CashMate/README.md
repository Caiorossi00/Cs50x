# CASHMATE

#### Video Demo: <URL HERE>

#### Description: CashMate é uma ferramenta prática e intuitiva para ajudar no fechamento de caixa de pequenos e médios estabelecimentos. O operador insere a quantidade de notas e moedas disponíveis, e o aplicativo calcula automaticamente o total em caixa. Além disso, CashMate sugere a melhor combinação de notas para retirada, garantindo que o estabelecimento sempre tenha troco suficiente para o próximo dia de trabalho. O objetivo é otimizar o processo de fechamento de caixa, reduzir erros manuais e economizar tempo.

Essa é a explicação geral das motivações, funcionamento e conceitos aplicados no projeto

1. Motivações
   Observando as necessidades de auxílio no fechamento de caixa de uma empresa na vida real, comecei a pensar em soluções para a resolução desse problema. Surgiram três grandes problemas logo de cara, 1. A necessidade de fazer contas de forma manual, o que consumia tempo. 2. As contas manuais poderiam levar a erros que levariam a uma perda de dinheiro. 3. O estabelecimento ficava sem dinheiro de troco depois que o funcionário retirava o dinheiro do caixa ao fim do dia.
   A escolha por um aplicativo web se deu pela possibilidade de oferecer o acesso fácil e rápido para qualquer operador de caixa em qualquer máquina de maneira simplificada e cotidiana.
2. Funcionamento
   O responsável pelo fechamento do caixa insere os dados do dia, a quantidade de cada unidade de cédula e cada unidade de moedas no seu respectivo campo, após inserir, o valor total desta unidade já será calculado automaticamente, oferecendo um total específico dessa unidade de moeda, além de, somar todas as unidades que já foram inseridas e oferecer um total de tudo que foi inserido.
   Após essa inserção, o responsável insere a quantidade de dinheiro que gostaria de deixar no caixa para o dia seguinte de trabalho, para manter o fluxo de caixa. Com esses dados, o aplicativo CashMate utiliza um algoritmo de cálculo que oferecerá a melhor combinação possível de retirada de notas, optando por tirar as notas de maior valor, retirando o mínimo de unidades possíveis, fazendo com que ao longo do tempo as unidades de pequeno valor vão se acumulando, garantindo que o estabelecimento sempre mantenha um fluxo de caixa ideal para oferecer o troco ao cliente.
   Todo esse procedimento automático auxilia na redução do tempo perdido com cálculos manuais e especialmente nos erros manuais que acontecem ao longo do tempo.
3. Conceitos
   Foi utilizado o algoritmo ganancioso, conceitos matemáticos de lógica de programação, renderização no Dom por meio do Javascript de maneira dinâmica, uso de condicionais, expressões booleanas, conversão de valores, estilização por meio do Javascript, uso de objetos, uso de arrays, uma interface construída de maneira intuitiva ao usuário, respeitando os princípios de UI e UX.

Essa explanação passará por quatro fases, as primeiras três tratam da descrição técnica do projeto, passando pela estrutura HTML, CSS e Javascript

Começarei descrevendo a estrutura do HTML.
Dentro do HTML, podemos observar logo ao início uma estrutura de navbar, nela, podemos conferir uma âncora na brand, que está representada apenas por um texto onde se lê CashMate, e do outro lado 3 novos itens.

Como utilizar?
Esse item abre um modal com as instruções de uso, conta com 3 pontos que explicam como o usuário deve manejar o uso do aplicativo

Por que utilizar?
Redireciona por meio de uma âncora à uma outra página construída como um projeto pessoal que consta com mais informações sobre o aplicativo CashMate, chamade de CashMate Home.

Entre em contato
Redireciona ao instagram profissional por meio de uma âncora

Ainda no HTML, existe uma estrutura chamada central, onde são renderizadas as informações que são passadas ao DOM por meio do Javascript, aí também é renderizado o valor total de maneira dinâmica conforme os valores são manipulados em tempo real

Por fim, dentro da div right-side, constam as informações para retirada do dinheiro, onde o usuário decide quanto dinheiro ele quer deixar no caixa e o display das informações de retirada. Também consta com uma developer info, onde uma imagem serve de âncora para referenciar o link do instagram.

O projeto consta também com uma pasta chamada assets, onde estão mantidas as imagens que representam as notas, o ícone do aplicativo e o logo pessoal. As fotos que representam o dinheiro são usadas no Javascript.
