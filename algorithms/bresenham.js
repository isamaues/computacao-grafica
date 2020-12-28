const bresenhamController = {
    showName: "Bresenham",
    menuId: "bresenham-menu",
    drawingLogic: bresenhamDrawningLogic,
};

function bresenhamDrawningLogic(){
    // desenha o ponto 1 assim que ele for válido e completo    
    
    // desenha o ponto 2 assim que ele for válido e completo
    
    // faz o desenho quando o botão desenhar é clicado
}

function bresenhamAlgorithm(x0, y0, x1, y1){
    // Implementação do algoritmos de desenho de 
    // linhas de Bresenham
    var deltaX = x1 - x0;
    var deltaY = y1 - y0;
    var deltaErr = abs(deltaY / deltaX);
    var error = 0;
    var y = y0;
    
    for (var x = x0; x <= x1; x++) {
        frameBuffer[x][y] = 1;
        error += deltaErr;
        if (error >= 0.5) {
        y += (deltaY > 0 ? 1 : -1);
        error -= 1;
        }
    }
}