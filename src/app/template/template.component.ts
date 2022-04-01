import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  golpes = [
    {
      id: 'WhatsApp',
      title: 'WhatsApp',
      description: 'Os criminosos vinculam uma imagem de perfil da vítima, geralmente retirada do seu próprio perfil de WhatsApp ou redes sociais. Com uma conta falsa, eles se passam pela vítima e solicitam dinheiro para amigos, familiares e conhecidos.',
      img: 'https://i.ibb.co/cNnHyRc/Ellipse-50.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Ajuste a visualização da imagem da conta do WhatsApp apenas para contatos autorizados;',
            'Fique atento a mensagens de conhecidos ou familiares solicitando depósito e/ou transferências bancárias (ainda mais se for em nome de terceiros);',
            'Desconfie de contas com fotos de conhecidos, mas com números diferentes;'
          ]
        },
        {
          title: 'O que Fazer?',
          description: ['Registre um Boletim de Ocorrência e denunciar ao WhatsApp através do e-mail: suporte@whatsapp.com. Também é possível denunciar clicando no número do golpe, clicar no campo "Dados do contato" e clicar em "denunciar". Avisar familiares e conhecidos, no caso de detectar que estão utilizando seu nome para aplicar o golpe.']
        },
      ]
    },
    {
      id: 'GolpeDoAmor',
      title: 'Golpe do Amor',
      description: `Os golpistas buscam dados de suas vítimas em aplicativos de relacionamento e namoro.

        O primeiro contato é feito pelo site de relacionamento e depois pelo WhatsApp.

        - Após iniciar conversas amorosas com fotos de uma pessoa fictícia, surgem as falsas declarações de amor e conversas sobre o desejo de se mudar para o Brasil e assim poder viver perto da vítima;

        - Na sequência, pedem o endereço residencial da vítima e depois afirmam que estão enviando uma caixa (muitas vezes mandam fotos) com joias, numerários e outros itens, que supostamente foram retidos pela Receita Federal. Para retirá-la, a vítima precisa fazer um depósito de um valor, que geralmente varia de R$ 2.500 a R$ 4.000.

        - Em alguns casos, o golpista afirma que tem um intermediário no envio da tal caixa e pede que todo o depósito ou parte dele seja feito no nome dessa pessoa. Fazem ameaças à vítima e seus familiares caso não efetue o depósito.`,
      img: 'https://i.ibb.co/YRrrYCx/Ellipse-49.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Nunca compartilhe fotos e vídeos íntimas através de mensagens;'
          ]
        },
        {
          title: 'O que Fazer?',
          description: ['Se for vítima de extorsão, procure a Delegacia de Polícia mais próxima;', 'Não deposite o valor solicitado.']
        },
      ]
    },
    {
      id: 'FalsoEmprestimo',
      title: 'Falso Empréstimo',
      description: `Os criminosos fazem anúncios em redes sociais se passando por instituições financeiras de crédito rápido com ofertas tentadoras.
      - Após contato da vítima, os criminosos solicitam o pagamento de uma taxa para a liberação do empréstimo;
      - São solicitados diversos pagamentos, até que vítima perceba que se trata de um golpe e pare de pagar.`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Instituições financeiras nunca solicitam pagamentos prévios para a liberação de valores;',
            'Sempre desconfie de ofertas imperdíveis, na dúvida, procure os canais de comunicação da instituição.'
          ]
        },
        {
          title: 'O que Fazer?',
          description: ['Registre um Boletim de Ocorrência']
        }
      ]
    },
    {
      id: 'plataformaCompraVenda',
      title: 'Golpe OLX',
      description: `A vítima faz um anúncio em plataformas de compra/venda online e deixa o número de contato acessível ao público; Os criminosos, de posse do número, se passam pelo suporte da plataforma e pedem para que a vítima passe um código de validação recebido por mensagem;
      O código recebido é de autenticação do WhatsApp da vítima, que terá o 'aplicativo clonado, caso passe o código recebido ao criminoso.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Nunca informe códigos recebidos por mensagem para ninguém e habilite a autenticação de dois fatores em sua conta;',
            'Na dúvida, entre em contato através dos canais oficiais da plataforma.'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            `Registre um Boletim de Ocorrência e denunciar ao WhatsApp através do e-mail: suporte@whatsapp.com, também é possível denunciar clicando no número do golpe, clicar no campo "Dados do contato" e clicar em "denunciar".
            Após o envio do e-mail, realize o procedimento para recuperação da conta sucessivas vezes, para bloquear a conta e o criminoso não conseguir mais utilizá-la.`
          ]
        }
      ]
    },
    {
      id: 'linksFalsos',
      title: 'Golpe dos links falsos',
      description: `Através de mensagens os criminosos dizem que a vítima se enquadrou para o recebimento de alguma promoção, sorteio, auxílio emergencial, ou encaminham algum alerta dizendo que ocorreu uma operação indevida em sua conta.
      – O criminoso então encaminha um link malicioso dizendo que deve ser acessado para que a vítima receba o prêmio o benefício ou para evitar que a conta seja bloqueada;
      – Ao acionar o link, a vítima é redirecionada para sites falsos de cadastros, ou baixa automaticamente aplicativos maliciosos no telefone, todos com objetivo de obter informações pessoais da vítima;`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Sempre desconfie de links encaminhados via WhatsApp ou SMS, na dúvida, entre em contato direto com os canais oficiais de comunicação;'
          ]
        },
        {
          title: 'O que Fazer?',
          description: ['No caso de acionar o link ou realizar o cadastro em algum site, informe seu banco e leve seu telefone em alguma assistência para verificar a existência de aplicativos maliciosos.']
        }
      ]
    },
    {
      id: 'intermediadorVendas',
      title: 'Golpe do falso intermediador de vendas',
      description: `O criminoso consegue o telefone da vítima em sites de vendas online;
      Ele copia o anúncio feito pela vítima e cria um novo anúncio falso, entretanto, com o valor mais baixo.
      - O golpista diz que comprará o bem anunciado e que pagará uma dívida que possui com algum cliente, sócio, amigo ou irmão, e, portanto, pede silêncio no momento de apresentar o objeto para a segunda vítima, prometendo algum lucro financeiro nesta negociação silenciosa;
      - A vítima interessada em comprar também é orientada a se manter em silêncio e por isso ganhará um desconto;
      - Com o enredo pronto, o criminoso fornece contas de terceiro para receber o pagamento;
      – Após recebido valor, o criminoso combina de assinar o recibo em cartório com ambas as vítimas, as quais descobrem que caíram em um golpe.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Mantenha sempre um diálogo aberto com o vendedor/comprador;',
            'Faça questão de ver o bem pessoalmente;',
            'Busque outras formas de confirmar que realmente a pessoa que esta vendendo é a mesma que esta sendo feita a negociação;',
            'Confirme se a conta informada pertence ao vendedor, ou algum familiar próximo (filho, esposa, pai, mãe, etc.);',
            'Quando disponível, utilize os meios de pagamentos oferecidos pelas plataformas de venda.',
          ]
        },
        {
          title: 'O que Fazer?',
          description: ['Registre um Boletim de Ocorrência']
        }
      ]
    },
    {
      id: 'falsoSequestro',
      title: 'Golpe do falso sequestro',
      description: `Os criminosos ligam para a vítima se passando por algum familiar. Com voz de choro, o suposto familiar diz que foi sequestrado e que os criminosos vão tirar a sua vida. A vítima, assustada, acaba informando o nome de familiares aos criminosos, informação utilizada por eles para dar mais autenticidade ao golpe;
      – Os criminosos solicitam o depósito de valores em algumas contas ou pedem que coloquem créditos em alguns números telefônicos;
      – Em algumas modalidades, os criminosos determinam que a vítima saia de casa, vá até um local reservado, que não alerte ninguém e que não entre em contato com seus familiares. Solicitam então o telefone de outra pessoa da família, para que este consiga o dinheiro solicitado;
      – De posse do telefone de outro familiar, o criminoso entra em contato, dizendo que sequestrou a vítima, esta, incomunicável e fora de casa, não consegue entrar em contato, deixando a impressão que realmente foi sequestrada;`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'No caso de receber alguma ligação deste tipo, desligue e tente entrar em contato com o familiar que supostamente foi sequestrado;',
            'Na dúvida, solicite ajuda a alguém próximo para entrar em contato com o familiar; o nervosismo pode induzir a vítima a erro, alguém que não esteja sofrendo o golpe pode ajudar a localizá-lo e perceber que se trata de um golpe;',
            'Caso não consiga entrar em contato com o familiar, procure em locais próximos, como shoppings, praças, bares e até mesmo hotéis, às vezes o familiar supostamente sequestrado também esta sendo induzido a erro.'
          ]
        },
        {
          title: 'O que Fazer?',
          description: ['Registre um Boletim de Ocorrência']
        }
      ]
    },
    {
      id: 'trocaCartao',
      title: 'Golpe da troca do cartão',
      description: `Os criminosos entram em contato com a vítima se passando pela instituição financeira do cartão de crédito e alegam que houve uma compra duvidosa.
       Com isso, solicitam que a vítima ligue no número indicado no verso do cartão para efetuar o seu cancelamento.

      - O golpista continua na linha, coloca uma música similar àquela utilizada pela instituição bancária e solicita algumas informações. Sem perceber a vítima repassa dados pessoais e a senha do cartão;

      - Na sequência, o golpista informa que um funcionário da instituição irá até à residência da vítima para efetuar a troca do cartão;

      - De posse do cartão, os criminosos efetuam diversas transações bancárias.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Nunca forneça seus dados pessoais ou bancários via telefone;',
            'Caso receba ligações de instituições financeiras, dirija-se à agência bancária para confirmar a informação;',
            'Na impossibilidade de se dirigir até uma agência, encerre a ligação, espere alguns minutos e entre em contato com os canais oficiais do estabelecimento.'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'Registre um boletim de ocorrência'
          ]
        }
      ]
    },
    {
      id: 'falsoSiteLeilao',
      title: 'Golpe do falso site de leilão',
      description: `Os criminosos criam sites falsos de leilão de veículos e vinculam imagens oficiais do Detran e do Tribunal de Justiça para dar veracidade.
      Eles utilizam endereços onlines como: leilão-oficial, leilão-detran-oficial, entre outros.

      - A negociação ocorre via aplicativo de mensagens;

      - O depósito é realizado em contas bancárias de terceiros.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Nunca deposite valores antecipadamente e não caia na tentação de comprar veículos com valores abaixo do mercado;',
            'Veja o veículo antes de fechar o negócio;',
            'Vá até o endereço indicado nos sites para confirmar que se trata de um local oficial de leilão. Se for em outra cidade, entre em contato com a Polícia da cidade e tente confirmar se existe este estabelecimento.'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'Entre em contato com o Detran da sua cidade, ou se dirija até a Delegacia de Polícia mais próxima para confirmar a informação;'
          ]
        }
      ]
    },
    {
      id: 'sextorsao',
      title: 'Golpe da sextorsão/nudes',
      description: `Os golpistas estudam o perfil de suas vítimas através das redes sociais.
      Geralmente as vítimas em potencial são homens (podendo também ser mulheres) de meia idade ou mais, casados e com círculo familiar, amigos ou profissional visível nas redes sociais.
      O golpista utiliza um perfil falso, muitas vezes com a fotografia de uma jovem bonita e atraente. O contato inicial quase sempre ocorre através do Facebook onde eles começam uma amizade.
      Logo a conversa privada passa para o WhatsApp onde a moça encaminha fotos íntimas suas e pede para que a vítima faça o mesmo.
      A partir dai, outro golpista entra em cena:
      o suposto pai ou padrasto da jovem, alegando que ela é “menor de idade” e que a vítima estaria praticando pedofilia através da internet, inicia a extorsão.
      Para que o caso não seja levado à polícia, ou para que as fotos íntimas e as conversas privadas não sejam compartilhadas com a esposa, parentes ou amigos da vítima, o golpista exige que seja paga certa quantia em dinheiro por meio de depósito bancário.
      *ATENÇÃO:Algumas vezes os golpistas também se fazem passar por supostos advogados, policiais civis ou delegados, alegando que as fotos já fazem parte de uma investigação policial e solicitam depósitos em dinheiro para
      que o “inquérito” seja arquivado. A vítima, temendo ser presa ou à exposição social cede à extorsão e acaba fazendo o depósito dos valores solicitados pelos golpistas.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Nunca compartilhe fotos íntimas pela internet. Depois de compartilhado, a foto ou o vídeo podem circular entre milhares de pessoas;',
            'Desconfie sempre de solicitações de amizade, através das redes sociais, de pessoas que você não conhece;',
            'Não forneça seus dados pessoais (como nome completo, CPF, RG, endereço, número de conta bancária e senha) para estranhos, em ligações telefônicas, mensagens SMS ou WhatsApp;',
            'Cuidado com operações bancárias (depósitos ou transferências em dinheiro) para pessoas do seu círculo familiar ou de amigos, principalmente quando isso é solicitado exclusivamente através do WhatsApp;'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            `Se você sabe de alguém que pode estar praticando algum destes golpes, denuncie pelo telefone 181 ou WhatsApp da Polícia Civil (48) 98844-0011 ou procure a Delegacia de Polícia mais próxima;
            Caso você tenha sido vítima de algum destes golpes, procure imediatamente a Polícia Civil. Você também pode registrar o boletim de ocorrência através da Delegacia de Polícia Virtual de Santa Catarina, acessível em:
            https://delegaciavirtual.sc.gov.br/inicio.aspx.`
          ]
        }
      ]
    },
    {
      id: 'clonagemWhatsapp',
      title: 'Golpe da clonagem do whatsapp',
      description: `Os criminosos possuem diversas formas de obter o número de telefone das vítimas, mas o mais usual é que seja retirado de anúncios em plataformas de sites de compras ou anúncios públicos em redes sociais.
      O golpista se passa por funcionário da plataforma de anúncio e, sob o pretexto de corrigir uma duplicidade no anúncio com valores diferentes, ou mesmo ativar o anúncio, solicita à vítima para que informe seus dados pessoais (nome, RG, CPF, endereço) e um código de 6 dígitos que receberá no telefone.
      Esse código, na verdade, é uma verificação do WhatsApp, ou seja, a partir do fornecimento dessa chave o golpista desviará o WhatsApp da vítima para o aplicativo dele.
      Nesse caso a vítima perde o acesso ao aplicativo de mensagens.
      A partir disso o criminoso se passa pela vítima e, alegando algum problema na conta ou com cartão de crédito bloqueado solicita dinheiro emprestado se comprometendo a pagar no dia seguinte.
      O parente ou amigo da vítima, acreditando estar falando com a pessoa de sua confiança, acaba transferindo o dinheiro para a conta bancária informada, e assim se torna também vítima do golpe.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Habilite a “confirmação em duas etapas” no aplicativo WhatsApp. Para isso, dentro do seu aplicativo clique ' +
            'em “configurações/ajustes” e depois clique em “conta”, escolha a opção “confirmação em duas etapas” e ' +
            'habilite a senha de 6 dígitos numéricos. Isso impede que golpistas façam a clonagem do WhatsApp.',
            '**Esse código numérico é uma senha, portanto não envie para ninguém.'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'Caso tenha enviado o código recebido por torpedo SMS e caído no golpe, encaminhe um e-mail para:' +
            ' support@whatsapp.com pedindo a desativação temporária de sua conta do WhatsApp. Posteriormente, após ' +
            'receber o e-mail do WhatsApp no prazo de 30 dias, configure-o novamente com o seu número de celular. ' +
            'Caso você receba uma mensagem de algum amigo ou parente solicitando empréstimo em dinheiro, ou depósito ' +
            'de algum valor em uma determinada conta, verifique com cautela a veracidade desta solicitação. ' +
            'E, caso seja verdade, antes de qualquer confirmação de depósito, verifique o destinatário (nome, CPF, ' +
            'agência bancária).'
          ]
        }
      ]
    },
    {
      id: 'bilhetePremiado',
      title: 'Golpe do bilhete premiado',
      description: `A vítima, geralmente pessoa idosa, é abordada por uma pessoa com aparência humilde, que pede algumas informações, dizendo ter um bilhete de loteria premiado.
      O criminoso, supostamente ganhador da loteria, alega ter medo de ser enganado na hora de resgatar o prêmio ou que tem ações na justiça que o impediriam de receber o prêmio.
      Em seguida entra em cena um segundo golpista, um sujeito bem arrumado, que diz ter ouvido a conversa.
      A partir daí se inicia toda uma encenação, onde o segundo golpista simula falar com alguém da Caixa Econômica Federal para confirmar a legitimidade do prêmio.
      Então, ele sugere que a vítima fique com o bilhete premiado, mas, em contrapartida, repasse algum dinheiro para o suposto ganhador.
      Geralmente eles acompanham a vítima até uma agência bancária para fazer o saque do dinheiro, ou a transferência como garantia de que o humilde suposto ganhador não seja enganado, e então entregam o bilhete premiado.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Caso se depare com alguém pedindo ajuda em situação semelhante diga que não pode ajudar e procure uma Delegacia de Polícia mais próxima para informar o fato.',
            '*ATENÇÃO: Saiba que não se ganha dinheiro fácil, principalmente em abordagens de rua por desconhecidos. Sempre desconfie!'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'Chame a polícia'
          ]
        }
      ]
    },
    {
      id: 'parenteCarroQuebrado',
      title: 'Golpe do parente que quebrou o carro',
      description: `O golpista liga aleatoriamente para as vitimas, geralmente no período noturno.
      Independentemente de quem atende o telefone, o golpista logo fala: “oi tio (a), ou oi primo (a), sabe quem está falando?
      Caso a vítima diga um nome, achando ser algum sobrinho ou outro parente distante, já deu ao golpista o que ele queria.
      Muitas vezes a vítima fala que não se recorda e então o golpista usa do artifício “nossa, não lembra mais de mim!”, dialogando com a vítima até que seja possível extrair dela um nome de um parente que mora distante.
      Com isso, ele forja uma história de que estaria viajando ou chegando próximo à cidade onde a vítima reside, e relata que sofreu algum acidente ou que o carro de quebrou.
      Então o criminoso solicita que a vítima faça uma transferência em dinheiro para determinada conta bancária do mecânico, do guincho ou da borracharia onde o veículo está sendo consertado.
      Ele promete devolver o dinheiro no dia seguinte quando chegar à cidade da vítima.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Não faça transferências ou entregue dinheiro para terceiros;',
            'Desligue o telefone e faça contato com o familiar que você achava estar falando. Caso a pessoa esteja realmente em apuros, você ainda poderáajudá-la.'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'Reporte no golpes.org'
          ]
        }
      ]
    },
    {
      id: 'depositoEnvelopeVazio',
      title: 'Golpe do depósito com envelope vazio',
      description: `Geralmente a vítima fez algum tipo de anúncio para a venda de um determinado bem/objeto em sites de compras pela internet ou através de redes sociais.
      Após a negociação, o golpista simula o depósito do valor acertado inserindo um envelope vazio no caixa eletrônico (ou na lotérica).
      O golpista então encaminha uma fotografia do comprovante de depósito e a vítima confirma o recebimento em consulta à sua conta pelo aplicativo do banco.
      Como a verificação bancária do depósito demora algumas horas ou, às vezes, é feita apenas no próximo dia útil, o valor fica aparecendo como depositado até que se verifique que depósito não foi satisfeito.
      Assim, a vítima efetua a entrega do bem/objeto (normalmente o golpista manda um motorista de aplicativo para apanhar o objeto no mesmo dia do depósito).`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'Quando realizada uma negociação pela internet aguarde sempre a compensação do depósito bancário. ' +
            'Se possível, aguarde até o próximo dia útil para que haja a confirmação da entrada do dinheiro na conta. ' +
            'Isso vale para qualquer situação.',
            '*ATENÇÃO: O golpe do envelope vazio também é aplicado de outras formas. ' +
            'Geralmente, o golpista se passa por uma suposta autoridade pública ou servidor de algum órgão público. ' +
            'É um golpe bastante comum, por exemplo, na época das eleições. ' +
            'O golpista se passa por suposto servidor da justiça eleitoral ou promotor, requisitando os serviços de “motorista” de alguma ' +
            'instituição ou empresa, sob o pagamento de supostas diárias para a fiscalização de seções eleitorais nos municípios da região. ' +
            'O depósito dos valores (diárias) é feito de forma antecipada diretamente na conta do “motorista”, e o golpista envia a foto do comprovante. ' +
            'Logo em seguida, o golpista novamente entra em contato alegando que, por equívoco, efetuou o depósito de valor superior e necessita que seja imediatamente ' +
            'restituída a diferença por se tratar de verba pública. ' +
            'Ocorre que a vítima confirma o recebimento em consulta à sua conta pelo aplicativo do banco. ' +
            'Como a verificação bancária do depósito demora algumas horas ou, às vezes, é feita apenas no próximo dia útil, o valor fica ' +
            'aparecendo como depositado até que se verifique que o depósito não foi satisfeito. ' +
            'Assim, a vítima acreditando se tratar de uma situação real, efetua a transferência do valor recebido a mais. ' +
            '*ATENÇÃO: Nenhum servidor público, de qualquer órgão que seja, requisitará serviços de “motorista” por telefone mediante pagamento de diárias antecipadas. '
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'Reporte no golpes.org e faça um BO'
          ]
        }
      ]
    },
    {
      id: 'falsaLigaçãoBanco',
      title: 'Golpe da falsa ligação do banco',
      description: `O golpista liga para a vítima como se fosse o banco no qual a vítima possui conta, fala que precisa liberar algumas chaves de acesso e passa um endereço de site supostamente do banco, para ela acessar.
      Este site é falso e redireciona a vítima para uma página semelhante a página oficial, mas que pertence ao golpista, o qual vai roubar todas as credenciais da vítima, como número da conta e senhas.
      Após a vítima digitar os seus dados na página falsa e de posse dessas informações, o golpista transfere todo o dinheiro da conta da vítima para sua conta.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Prevenir?',
          description: [
            'Nunca forneça dados pessoais ou realize atendimentos bancários de ligações recebidas no telefone, caso seja urgente, ligue para o número do banco ou vá pessoalmente na agência.'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'Procure uma Delegacia de Polícia mais próxima para informar o fato.'
          ]
        }
      ]
    },
    {
      id: 'golpeDoMecanico',
      title: 'Golpe do Mecânico',
      description: `-O golpe do mecânico se inicia com um suposto mecânico te abordando no trânsito e dizendo que o seu carro está com problemas e até que pode ter caído uma peça. Neste momento muitas confiam no golpista e deixam que o carro seja examinado., 
                    -Na sequência, o golpista pode, por exemplo, desligar o fio da bateria e aí que o carro realmente apresenta defeito. Depois disso, o suposto mecânico realiza o conserto e acaba cobrando muito mais., 
                    - Muitas vezes a única coisa que ele faz é religar o fio da bateria ou então o que ele mesmo desligou para acusar suposto defeito.,
                    -O golpista muitas das vezes pode ser um frentista, querendo resolver um problema que ele mesmo cria em seu veículo, fazendo barulhos na lataria do carro.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            '-Evite consertar seu veículo em mecânicos desconhecidos, leve a um de sua confiança;',
            '-Desconfie quando afirmarem que seu carro está quebrado, pois muitas pessoas acabam se convencendo pelas palavras do golpista e nem chegam a se questionar se o entranho que acabou de abordá-la de fato é mecânico;',
            '-Antes de consertar seu veículo faça um orçamento, mesmo que precise consertar na rua, não aceite qualquer manutenção sem um orçamento;',
            '-Faça revisões periódicas e evite problemas com seu carro;',
            '-Sempre desconfie de abordagem no trânsito, não confie na primeira informação que você receber de um desconhecido até mesmo de um frentista, mesmo que pareça convincente;'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'Reporte no golpes.org e faça um BO.'
          ]
        }
      ]
    },
    {
      id: 'golpePropagandasFalsasFacebook',
      title: 'Golpe Propaganda Falsa do Facebook',
      description: `Golpistas postam anúncios de descontos usando o nome de varejistas, usando seus logotipos e marcas. Esses anúncios levam a sites semelhantes, porém falsos, que roubam dados financeiros dos consumidores, como informação de cartão de crédito e senhas bancárias. `,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Prevenir?',
          description: [
            '-É preciso ter cuidado na hora de aderir a uma promoção para garantir que a oferta é real e anunciada por uma fanpage oficial da marca.',
            '-Verifique se a página é oficial ou cópia',
            '-Observe o texto da URL do site para ver se a grafia está correta e se as palavras correspondem à do site oficial.',
            '-Procure indicativos de segurança como o uso do SSL(HTTPS) e também se a página possui o selo Site Blindado.',
            '- Faça uma busca pela marca e veja quantas curtidas a página possui.De forma geral, páginas oficiais costumam ter muitas curtidas, mais que uma página falsa.',
            '-Clique na página e verifique se ela possui uma validação, em azul, ao lado do nome da página.',
            '-Preste atenção no valor do produto ofertado. Os valores dos produtos, em promoção falsa, tendem a ser muito mais baratos que a média de outros sites do varejo. Por isso, desconfie desse tipo de oferta para não correr o risco de perder seu dinheiro.',
            '- Para pequenos ou médios negócios nas plataformas, vale conferir os comentários nas publicações, assim como a data de criação da página. Caso seja recente demais, verifique o histórico das interações e o que outros clientes têm comentado a respeito dos produtos e serviços da empresa;'
          ]
        },
        {
          title: 'O Que Fazer?',
          description: [
            'A dica, segundo os especialistas, é que vítimas de golpes do gênero registrem na Polícia Civil um boletim assim que suspeitarem que estão caindo em um golpe.',
            'Caso um usuário depare com anúncios considerados suspeitos, a orientação da empresa é reportar a situação ao próprio Facebook, que analisará o conteúdo. A rede social frisa que a prática contribui para evitar que um número maior de pessoas seja impactado por possíveis ações criminosas.' ,
            '-Para denunciar uma publicação:',
            '	- Clique no canto superior direito da postagem;',
            '	- Clique em "Denunciar publicação" ou "Denunciar foto";',
            '- Selecione a opção que melhor descreva o problema e siga as instruções na tela.',
            '-Para denunciar um perfil ou uma página:',
            '- Vá para o perfil ou a página que deseja denunciar;',
            '- No canto inferior direito da foto da capa, clique e selecione "Denunciar";',
            '- Siga as instruções na tela.'
          ]
        }
      ]
    },
    {
      id: 'golpeFalsoEmprego',
      title: 'Golpe do Falso Emprego',
      description: `Ofertas de emprego aparecem aos montes em anúncios online, serviços de mensagens instantâneas e redes sociais. O problema é que, em muitos casos, as vagas anunciadas não são reais e podem causar numerosos transtornos à pessoa que não perceber a fraude.
      Via de regra, as falsas vagas instruem as vítimas a preencherem formulários com dados como nome, CPF, endereço, telefone e informações bancárias. Esses dados podem ser usados para uma série de ações maliciosas, como abertura de contas bancárias fraudulentas e compras ou empréstimos em nome da vítima.
      No fim das contas, a pessoa acaba não conseguindo trabalho e, frequentemente, é vítima de uma fraude que a faz perder tempo e dinheiro.
      Em alguns casos, os criminosos podem até conseguir login e senha da pessoa em serviços de e-mail e redes sociais, situação que dá abertura para o invasor se passar pela vítima e aplicar outros golpes.
      O golpe do falso emprego costuma ser aplicado via mensagens com links e também sites que capturam dados de quem busca uma vaga. `,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Prevenir?',
          description: [
            '-Atente-se à página de divulgação: Ao acessar uma página de candidatura, verifique se ela possui outras sessões, como uma página inicial, uma aba institucional com informações de contato ou que fale sobre a empresa que está oferecendo a suposta vaga.',
            '-Pense duas vezes antes de informar qualquer dado: Todos os sites de empregos falsos solicitam dados pessoais, como nome, telefone, e-mail e endereço. Antes de preencher qualquer formulário, verifique se a página disponibiliza algum campo para que você possa escrever um pouco sobre sua experiência profissional, habilidades ou até mesmo anexar um currículo.',
            '-Anúncios que descrevem grandes quantidades de vagas ou destacam que o preenchimento delas é urgente também podem ser suspeitos, bem como aqueles que não descrevem os cargos disponíveis. Tão ou mais importante é desconfiar de ofertas de vagas garantidas.',
            '-Outra dica é verificar se a descrição da vaga é muito genérica, ou seja, não contém informações importantes sobre o cargo ou dá muito destaque ao salário e benefícios.',
            '-Outra orientação: ao entrar em contato para solicitar mais informações, não prossiga se dados de documentos forem exigidos antes da contratação, se as perguntas sobre o cargo não forem devidamente respondidas ou se te instruírem a fazer pagamentos para conseguir o suposto emprego.'
          ]
        },
        {
          title: 'O Que Fazer?',
          description: [
            'Não deixe de divulgar as dicas dadas aqui a parentes e amigos — vale até indicar este site quando alguém compartilhar ofertas de trabalho suspeitas nas redes sociais ou no WhatsApp, por exemplo.',
            'Não hesite em procurar uma delegacia de polícia ou pedir orientações a um advogado.'
          ]
        }
      ]
    },
    {
      id: 'golpeUberFalso',
      title: 'Golpe do Uber Falso',
      description: `Um homem se passa por motorista de aplicativo para cometer estupros, quando via mulheres esperando por uma corrida, com celular na mão e cabeça baixa, ele parava o carro esperando que alguma vítima desatenta entrasse no veículo. `,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Prevenir?',
          description: [
            'É importantíssimo que as pessoas que utilizam esse serviço de transporte por aplicativo confiram a placa do carro, os dados do veículo que aparecem no aplicativo com o veículo que para. O próprio motorista, vejam a avaliação desse motorista, compartilhem localização com pessoas conhecidas ou se comuniquem o tempo todo", alertou a delegada.'
          ]
        },
        {
          title: 'O Que Fazer?',
          description: [
            'Acione imediatamente a polícia ao suspeitar de algum carro parado enquanto aguarda o uber.'
          ]
        }
      ]
    },
    {
      id: 'golpeInstagramPromocaoFalsa',
      title: 'Golpe do Instagram Promoção Falsa',
      description: `As promoções e sorteios têm sido bastante usuais como estratégia de marketing no Instagram. Contas de pequeno, médio e grande porte oferecem os mais distintos benefícios: conteúdos, workshops, produtos etc. Tudo grátis, desde que a pessoa preencha um cadastro.
      Quando a conta é verdadeira, os dados tendem a ser usados para a finalidade anunciada. O problema ocorre quando os usuários são vítimas do golpe da promoção falsa.
      O golpe da promoção falsa acontece em contas comerciais. Neste caso, os criminosos criam um perfil do zero e adicionam no nome ou na descrição as abreviações “mkt” para marketing ou “promo”, de promoção. Fazem reprodução de fotos e textos do perfil original da loja e seguem as mesmas pessoas.
      Nos stories, os golpistas iniciam uma campanha de sorteio ou promoção e pedem que os seguidores participem clicando no link adicionado na biografia ou página inicial do perfil. O objetivo deste golpe não é subtrair dinheiro diretamente pelo Instagram, mas roubar dados pessoais.
      Os interessados no benefício irão preencher o cadastro e fornecer informações que podem ser usadas para abrir contas de banco, crediário, empréstimos ou outro uso indevido.`,
      img: 'assets/images/logo.png',
      steps: [
        {
          title: 'Como Prevenir?',
          description: [
            'É importante se certificar sobre quem entra em contato com você por mensagens e só estabelecer diálogo com contatos de confiança. O Instagram reforça que, se precisar entrar em contato, usará a aba “E-mails do Instagram”, que fica nas configurações.'
          ]
        },
        {
          title: 'O Que Fazer?',
          description: [
            `Se você foi vítima do golpe, a recomendação é entrar em contato com a sua instituição financeira e reportar a fraude, solicitando o estorno do valor enviado.
            "A denúncia será consolidada e enviada para as equipes de segurança do banco ou fintech, as quais posteriormente vão agir para congelar ou cancelar a chave Pix", explica Assolini. Segundo ele, é comum a reutilização de chaves Pix em golpes. Logo, a denúncia é importante para evitar que outras pessoas caiam na fraude.
            Em seguida, é preciso avisar à pessoa que teve o perfil hackeado, para que ela possa alertar outros sobre a ocorrência do golpe e impedir que surjam novas vítimas.`
          ]
        }
      ]
    }
  ]

  searchText = '';
  onHome = true;
  selectedGolpe: any;

  constructor(private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      if (params['g']) {

        this.golpes.map(golpe => {
          if (golpe.id === params['g']) {
            this.selectedGolpe = golpe;
          }
        })

        this.onHome = false;

      } else {
        this.onHome = true;
      }
    })
  }

  ngOnInit(): void {
  }

  get filteredList(): any[] {
    if (this.searchText) {
      return this.golpes.filter( item => item.title.toLocaleUpperCase().includes(this.searchText.toLocaleUpperCase()));
    } else {
      return this.golpes;
    }
  }

  scrollUp(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

}
