class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  show() {
    textAlign(RIGHT);
    fill("#FFF");
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }

  adicionarPontos() {
    this.pontos = this.pontos + 0.2;
  }
}
