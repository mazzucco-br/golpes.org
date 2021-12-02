<style>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc; 
}

.panel {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
}
</style>
</head>
<body>

<h2>Golpes</h2>

<button class="accordion">Golpe do perfil falso no whatsapp</button>
<div class="panel">
  <p>TO DO</p>
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