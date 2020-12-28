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
/*Objeto que armazena os controladores de cada algoritmo de desenho
cada chave é uma opção do select em index.html e cada valor é
uma função que implementa o algoritmo a implementação de cada
  função pode ser encontrada na pasta algorithms/ */
var controllersList = {
  "Bresenham": bresenhamController,
  "Círculos": circleController,
  "Curvas": curveController,
  "Polilinhas": polylineController,
  "Preenchimento Recursivo": recursivePaddingController,
  "Varredura": scanConversionController,
  "Recorte de linha": lineClippingController,
  "Recorte de polígono": polygonClippingController,
  "Transformações": transformationsController,
  "Projeções ortogonais": ortogonalProjectionController,
  "Perspectiva": perspectiveController,
};
// Estado global com o último algoritmo selecionado
// por padrão é o algoritmo de linhas de Bresenham
var lastAlg = "Bresenham";
var currentAlg = "Bresenham";
// Estado global com o último controlador selecionado
// por padrão é o controlador do algoritmo de linhas de Bresenham
var controller = controllersList[currentAlg];

function setup() {
  // método que faz o preparo do desenho
  createCanvas(width, height);
  frameBuffer = makeFrameBuffer(rows, cols);
  // adiciona os event listeners que detectam a escolha de algoritmo
  addAlgChoiceListener();
}

function draw() {
  background(200);
  // checa se o algoritmo escolhido mudou
  let algHasChanged = lastAlg === currentAlg ? false : true;
  // caso sim, fazemos o preparo para o novo algoritmo
  if (algHasChanged){
    frameBuffer = makeFrameBuffer(rows, cols);
    controller = controllersList[currentAlg];
    switchMenu();
  }
  // caso não, é proseguido com o desenho do algoritmo passado
  drawFrameBuffer();

  // Por último, atualiza a informação sobre o último algoritmo escolhido
  lastAlg = currentAlg; 
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
    currentAlg = algChoices.value;
  });
}

function switchMenu(){
  // Troca o menu de opções para refletir a escolha
  // atual do algoritmo de desenho

  // Some com o menu passado
  console.log(lastAlg);
  let lastMenu = document.getElementById(controllersList[lastAlg].menuId);
  lastMenu.classList.add('uk-hidden');
  //aparce com o novo menu
  let currentMenu = document.getElementById(controllersList[currentAlg].menuId);
  currentMenu.classList.remove('uk-hidden');
  console.log(currentMenu.classList);
}