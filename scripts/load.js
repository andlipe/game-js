function preload() {
  sceneImage = loadImage("assets/imagens/cenario/floresta.png");
  gameOverImage = loadImage("assets/imagens/assets/game-over.png");
  telaInicialImage = loadImage("assets/imagens/assets/telaInicial.png");
  telaInicialFont = loadFont("assets/imagens/assets/fonteTelaInicial.otf");
  characterImage = loadImage("assets/imagens/personagem/correndo.png");
  enemyImage = loadImage("assets/imagens/inimigos/gotinha.png");
  inimigoGrandeImage = loadImage("assets/imagens/inimigos/troll.png");
  inimigoVoadorImage = loadImage("assets/imagens/inimigos/gotinha-voadora.png");
  gameMusic = loadSound("assets/sons/trilha_jogo.mp3");
  jumpSound = loadSound("assets/sons/somPulo.mp3");
}
