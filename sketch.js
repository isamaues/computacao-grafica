// Variáveis de escopo global
var frameBuffer;
// Quantidade de quadrados por linha e por coluna
const rows = 25;
const cols = 25; 
// Largura e altura do canvas
const width = 600;
const height = 600;
// Tamanho do lado do quadrado
const squareSide = Math.floor( width/rows );
// Estado global com o último algoritmo selecionado
// por padrão é o algoritmo de linhas de Bresenham
var currentAlgorithm = "Brensenham";

function setup() {
  // método que faz o preparo do desenho
  createCanvas(width, height);
  frameBuffer = makeFrameBuffer(rows, cols); 
  // adiciona os event listeners que detectam a escolha de algoritmo
  addAlgChoiceListener();
}

function draw() {
  // método que é chamado constantemente para atualizar o desenho
  background(200);
  drawFrameBuffer();
}


/************ Métodos de desenho auxiliares **********************/


function makeFrameBuffer(rows, cols) {
  // Método que cria a matriz de pontos que armazena 
  // os pixels a desenhar  na tela (frame buffer)
  // deve ser chamado ao preparar o canvas (método setUp)

  var arr = new Array(rows);
  for (var i = 0; i < rows; i++)
    arr[i] = new Array(cols).fill(0);
  return arr;
}


function drawFrameBuffer() {
  // usa as informações sobre pixels a desenhar
  // contidas no frameBufer e desenha elas em uma grade
  // de quadrados
  // é chamado repetidamente pelo método draw
  
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {

      var px = x * squareSide;
      var py = y * squareSide;

      stroke(0);
      strokeWeight(0.7);

      if (frameBuffer[x][y] == 1) fill(0);
      else noFill();
      square(px, py, squareSide);
    }
  }
}

function mouseClicked(){
  // Executa o código abaixo quando o mouse é clicado
  markSquare();
}

function markSquare() {
  // método auxiliar para marcar um quadrado
  // baseado nas coordenadas x e y do mouse quando clicado
  // o quadrado marcado será armazenado no frame buffer
  
  // descarta cliques fora da área do canvas
  if (mouseX > width || mouseY > height) return; 
  let rowClicked = Math.floor(mouseX/squareSide);
  let colClicked = Math.floor(mouseY/squareSide);

  // Atualiza o frame buffer
  frameBuffer[rowClicked][colClicked] = 1;
}


function addAlgChoiceListener(){
  // adiciona o event listener que 
  // verifica qual algoritmo está selecionado no momento
  var algChoices = document.getElementById("algorithm-selection");

  algChoices.addEventListener("change", function() {
    // currentAlgorithm é um estado global
    currentAlgorithm = algChoices.value;
  });
}