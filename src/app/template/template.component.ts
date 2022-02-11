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
      img: 'https://i.ibb.co/cNnHyRc/Ellipse-50.png',
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
      img: 'https://i.ibb.co/YRrrYCx/Ellipse-49.png',
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
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
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
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
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
      id: 'iddddd',
      title: 'description',
      description: `description`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'description',
            'description'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'description'
          ]
        }
      ]
    },
    {
      id: 'iddddd',
      title: 'description',
      description: `description`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'description',
            'description'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'description'
          ]
        }
      ]
    },
    {
      id: 'iddddd',
      title: 'description',
      description: `description`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'description',
            'description'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'description'
          ]
        }
      ]
    },
    {
      id: 'iddddd',
      title: 'description',
      description: `description`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'description',
            'description'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'description'
          ]
        }
      ]
    },
    {
      id: 'iddddd',
      title: 'description',
      description: `description`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'description',
            'description'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'description'
          ]
        }
      ]
    },
    {
      id: 'iddddd',
      title: 'description',
      description: `description`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'description',
            'description'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'description'
          ]
        }
      ]
    },
    {
      id: 'iddddd',
      title: 'description',
      description: `description`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'description',
            'description'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'description'
          ]
        }
      ]
    },
    {
      id: 'iddddd',
      title: 'description',
      description: `description`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'description',
            'description'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'description'
          ]
        }
      ]
    },
    {
      id: 'iddddd',
      title: 'description',
      description: `description`,
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: 'Como Previnir?',
          description: [
            'description',
            'description'
          ]
        },
        {
          title: 'O que Fazer?',
          description: [
            'description'
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
