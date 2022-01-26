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
          description: ['Registrar um Boletim de Ocorrência e denunciar ao WhatsApp através do e-mail: suporte@whatsapp.com. Também é possível denunciar clicando no número do golpe, clicar no campo "Dados do contato" e clicar em "denunciar". Avisar familiares e conhecidos, no caso de detectar que estão utilizando seu nome para aplicar o golpe.']
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
          description: ['Registrar um Boletim de Ocorrência']
        },
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
