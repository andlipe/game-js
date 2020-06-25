let sceneImage;
let characterImage;
let inimigoImage;
let scene;
let gameMusic;
let character;
let inimigo;
this.matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [400, 810],
  [660, 810],
];

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

function preload() {
  sceneImage = loadImage("assets/imagens/cenario/floresta.png");
  characterImage = loadImage("assets/imagens/personagem/correndo.png");
  enemyImage = loadImage("assets/imagens/inimigos/gotinha.png");
  gameMusic = loadSound("assets/sons/trilha_jogo.mp3");
  jumpSound = loadSound("assets/sons/somPulo.mp3");
}

function setup() {
  createCanvas(1280, 720);
  scene = new Cenario(sceneImage, 10);
  character = new Character(
    matrizPersonagem,
    characterImage,
    0,
    110,
    135,
    220,
    270
  );
  inimigo = new Inimigo(
    matrizInimigo,
    enemyImage,
    width - 52,
    52,
    52,
    104,
    104
  );
  frameRate(30);
  gameMusic.loop();
}

function keyPressed() {
  if (key === "ArrowUp") {
    character.pula();
    jumpSound.play();
  }
}

function draw() {
  scene.show();
  scene.move();

  character.show();
  character.aplicaGravidade();

  inimigo.show();
  inimigo.move();

  if (character.estaColidindo(inimigo)) {
    console.log("colidiu");
    noLoop();
  }
}
