export interface GolpeStep {
  title: string;
  description: string[];
}

export interface Golpe {
  id: string;
  title: string;
  description: string;
  img: string;
  steps: GolpeStep[];
}

export const golpesData: Golpe[] = [
  {
    id: "pix-falso",
    title: "Golpe do PIX Falso",
    description: "Criminosos criam chaves PIX falsas ou interceptam transações para roubar dinheiro das vítimas. Utilizam técnicas de engenharia social para convencer as pessoas a realizarem transferências para contas controladas por eles.",
    img: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    steps: [
      {
        title: "Como Prevenir?",
        description: [
          "Sempre verifique os dados do destinatário antes de fazer uma transferência PIX",
          "Desconfie de ofertas muito vantajosas ou urgentes",
          "Não realize transferências para pessoas desconhecidas",
          "Verifique se o nome do destinatário confere com a pessoa/empresa",
          "Use apenas aplicativos oficiais dos bancos"
        ]
      },
      {
        title: "O que Fazer?",
        description: [
          "Se foi vítima, registre um boletim de ocorrência imediatamente",
          "Entre em contato com seu banco para reportar a fraude",
          "Solicite o bloqueio da transação se ainda for possível",
          "Guarde todas as evidências (prints, mensagens, comprovantes)",
          "Denuncie no Banco Central através do aplicativo Registrato"
        ]
      }
    ]
  },
  {
    id: "whatsapp-clonado",
    title: "Golpe do WhatsApp Clonado",
    description: "Golpistas clonam números de WhatsApp de vítimas para pedir dinheiro emprestado aos contatos, se passando pela pessoa. É um dos golpes mais comuns atualmente, causando prejuízos milionários.",
    img: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    steps: [
      {
        title: "Como Prevenir?",
        description: [
          "Ative a verificação em duas etapas no WhatsApp",
          "Não compartilhe o código de verificação com ninguém",
          "Configure a privacidade para não mostrar foto para desconhecidos",
          "Sempre confirme pedidos de dinheiro por telefone ou pessoalmente",
          "Desconfie de mensagens urgentes pedindo dinheiro"
        ]
      },
      {
        title: "O que Fazer?",
        description: [
          "Avise todos os seus contatos sobre a clonagem imediatamente",
          "Tente recuperar sua conta seguindo as instruções do WhatsApp",
          "Registre boletim de ocorrência na delegacia",
          "Documente todas as conversas suspeitas",
          "Entre em contato com o suporte do WhatsApp"
        ]
      }
    ]
  },
  {
    id: "falso-sequestro",
    title: "Golpe do Falso Sequestro",
    description: "Criminosos ligam para famílias fingindo ter sequestrado um parente, exigindo pagamento de resgate. Usam informações obtidas em redes sociais para tornar a história mais convincente e gerar desespero nas vítimas.",
    img: "https://images.pexels.com/photos/33999/man-person-cute-young.jpg?auto=compress&cs=tinysrgb&w=800",
    steps: [
      {
        title: "Como Prevenir?",
        description: [
          "Mantenha privacidade nas redes sociais sobre rotinas familiares",
          "Estabeleça códigos de segurança com familiares",
          "Não divulgue informações pessoais para desconhecidos",
          "Ensine crianças a não fornecer dados por telefone",
          "Tenha sempre contatos alternativos dos familiares"
        ]
      },
      {
        title: "O que Fazer?",
        description: [
          "Mantenha a calma e não entre em pânico",
          "Tente entrar em contato com o familiar por outros meios",
          "Peça detalhes específicos que só a família saberia",
          "Não faça transferências ou pagamentos imediatamente",
          "Ligue para a polícia (190) para reportar o caso"
        ]
      }
    ]
  },
  {
    id: "cartao-clonado",
    title: "Golpe do Cartão Clonado",
    description: "Fraudadores copiam dados do cartão através de dispositivos em caixas eletrônicos, maquininhas adulteradas ou sites falsos. Com os dados, fazem compras e saques indevidos na conta da vítima.",
    img: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800",
    steps: [
      {
        title: "Como Prevenir?",
        description: [
          "Cubra o teclado ao digitar a senha",
          "Verifique se há dispositivos estranhos no caixa eletrônico",
          "Use apenas caixas eletrônicos em locais seguros",
          "Não acesse sites bancários em redes públicas",
          "Configure alertas de movimentação no cartão"
        ]
      },
      {
        title: "O que Fazer?",
        description: [
          "Bloqueie o cartão imediatamente pelo telefone do banco",
          "Verifique todas as transações realizadas",
          "Registre boletim de ocorrência",
          "Conteste as transações não reconhecidas no banco",
          "Solicite um novo cartão com senha diferente"
        ]
      }
    ]
  },
  {
    id: "romance-virtual",
    title: "Golpe do Romance Virtual",
    description: "Criminosos criam perfis falsos em redes sociais e aplicativos de relacionamento para conquistar vítimas emocionalmente e depois pedir dinheiro. Geralmente se passam por pessoas de outros países ou em situações de emergência.",
    img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    steps: [
      {
        title: "Como Prevenir?",
        description: [
          "Desconfie de pessoas que evitam videochamadas",
          "Verifique a veracidade das fotos através de busca reversa",
          "Não envie dinheiro para pessoas que conheceu online",
          "Seja cauteloso com histórias muito dramáticas",
          "Converse com amigos e familiares sobre relacionamentos online"
        ]
      },
      {
        title: "O que Fazer?",
        description: [
          "Pare imediatamente qualquer envio de dinheiro",
          "Documente todas as conversas e evidências",
          "Bloqueie e denuncie o perfil na plataforma",
          "Registre boletim de ocorrência se houve prejuízo financeiro",
          "Procure apoio psicológico se necessário"
        ]
      }
    ]
  }
];