class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    scene = new Cenario(sceneImage, 10);
    character = new Character(
      matrizPersonagem,
      characterImage,
      30,
      30,
      110,
      135,
      220,
      270
    );
    inimigoSlime = new Inimigo(
      matrizInimigo,
      enemyImage,
      30,
      30,
      52,
      52,
      104,
      104,
      20,
      100
    );

    inimigoGrande = new Inimigo(
      matrizInimigoGrande,
      inimigoGrandeImage,
      width * 3,
      20,
      200,
      200,
      400,
      400,
      13,
      100
    );

    inimigoVoador = new Inimigo(
      matrizInimigoVoador, //matriz
      inimigoVoadorImage, //imagem
      width - 52, //x
      300, //variacaoY
      100, //largura
      100, //altura
      200, //larguraSprite
      170, //alturaSprite
      10, //velocidade
      100 //delay
    );

    pontos = new Pontuacao();

    inimigos.push(inimigoSlime);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  draw() {
    scene.show();
    scene.move();
    pontos.show();
    pontos.adicionarPontos();
    character.show();
    character.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.show();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(10, 30));
    }

    if (character.estaColidindo(inimigo)) {
      image(gameOverImage, width / 2 - 200, height / 2);
      noLoop();
    }
  }

  movimentoDoPersonagem(key) {
    if (key === "ArrowUp") {
      character.pula();
      jumpSound.play();
    }
  }
}
