<style>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  font-weight: bold;
  border: 1px;
  border-style: solid;
  border-color: white;
}

.active, .accordion:hover {
  background-color: rgb(255, 217, 0); 
}

.panel {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
  border: 1px;
  border-style: solid;
  border-color: rgb(255, 217, 0);
}
.post-container {
    overflow: auto
}
.post-thumb {
    float: left
}
.post-thumb img {    
    width: 100%;
  	height: auto;
}
.post-content {	
    overflow:hidden;
    padding-left: 10px;
}

</style>
<body>

<h2>Golpes</h2>

<button class="accordion">Golpe do perfil falso no whatsapp</button>
<div class="panel">
  <div class="post-container">                
     <div class="post-thumb"><img src="images/golpe-whatsapp.png" /></div>
     <div class="post-content">
     	<p>Os criminosos vinculam uma imagem de perfil da vítima, geralmente retirada do seu próprio perfil de WhatsApp ou redes sociais. Com uma conta falsa, eles se passam pela vítima e solicitam dinheiro para amigos, familiares e conhecidos.</p>
     </div>
  </div>
  <h4>Como previnir?</h4>
  <ul>
    <li>Ajuste a visualização da imagem da conta do WhatsApp apenas para contatos autorizados;</li>
    <li>Fique atento a mensagens de conhecidos ou familiares solicitando depósito e/ou transferências bancárias (ainda mais se for em nome de terceiros);</li>
    <li>Desconfie de contas com fotos de conhecidos, mas com números diferentes;</li>
  </ul> 
  	<h4>O que fazer?</h4>
    <p>Registrar um <b>Boletim de Ocorrência</b> e <b>denunciar ao WhatsApp</b> através do e-mail: <a href="mailto:suporte@whatsapp.com?subject=Denúncia">suporte@whatsapp.com</a>. Também é possível denunciar clicando no número do golpe, clicar no campo "Dados do contato" e clicar em "denunciar". Avisar familiares e conhecidos, no caso de detectar que estão utilizando seu nome para aplicar o golpe.</p>
	<p>* Este golpe não se trata de clonagem de WhatsApp; a vítima não deixa de ter acesso ao seu aplicativo; os criminosos utilizam um número diferente, com a foto da vítima, para se passar por ela.</p>
</div>
<button class="accordion">Golpe do voucher/cupom desconto em restaurante</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpes em plataformas de compra/venda online</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe dos falsos links</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe do falso intermediador de vendas</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe do falso empréstimo</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe do amor</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe do falso sequestro</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe da troca do cartão</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe do falso site de leilão</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe da sextorsão/nudes</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe da clonagem do whatsapp</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe do bilhete premiado</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe do parente que quebrou o carro</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe do depósito com envelope vazio</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe da recuperação do veículo furtado</button>
<div class="panel">
  <p>TO DO</p>
</div>
<button class="accordion">Golpe da falsa ligação do banco</button>
<div class="panel">
  <p>TO DO</p>
</div>
<p>*Conteúdo produzido com a colaboração de informações das Polícias Civis do Distrito Federal (PC/DF) e do Rio Grande do Sul (PC/RS).</p>
<script>
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
      });
    }
</script>