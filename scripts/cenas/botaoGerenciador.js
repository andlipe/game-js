class BotaoGerenciador {
  constructor(text, x, y) {
    (this.text = text), (this.x = x), (this.y = y);
    this.botao = createButton(this.text);
  }

  draw() {
    this.botao.position(this.x, this.y);
    this.botao.addClass("botao-tela-inicial");
    this.botao.center("horizontal");
    this.botao.mousePressed(() => this._alteraCena());
  }

  _alteraCena() {
    this.botao.remove();
    cenaAtual = "jogo";
  }
}
