function setup() {
  createCanvas(1280, 720);
  frameRate(30);
  gameMusic.loop();
  jogo = new Jogo();

  telaInicial = new TelaInicial();
  cenas = {
    jogo,
    telaInicial,
  };
  jogo.setup();
  botaoGerenciador = new BotaoGerenciador("Iniciar", width / 2, height / 2);
}

function keyPressed() {
  jogo.movimentoDoPersonagem(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
