const bresenhamController = {
    showName: "Bresenham",
    menuId: "bresenham-menu",
    drawingLogic: drawningLogic,
};

function drawningLogic(){
    //console.log('drawingLogic');

    if (points.length == 2){
    let [x0,y0] = Object.values(points[0]);
    let [x1,y1] = Object.values(points[1]);

    bresenhamAlgorithm(x0,y0,x1,y1);
    }
    else if (points.length == 0){
        console.log('Select 2 points before drawing');
    }
    else if (points.length == 1){
        console.log('You need to select 2 points before drawing, 1 missing');
    }
    else if (points.length > 2){
        console.log('You only need to select 2 points before drawing, too many points selected, please restart(F5)');
    }
    //points = []; //se limpar só o points vai dar pra fazer o bresenham várias vezes seguidas mantendo o mesmo frame buffer
}

function bresenhamAlgorithm(x0, y0, x1, y1){
    // Implementação do algoritmos de desenho de 
    // linhas de Bresenham
    //console.log('bresenham');
    var deltaX = x1 - x0;
    var deltaY = y1 - y0;
    var deltaErr = abs(deltaY / deltaX);
    var error = 0;
    var y = y0;

    for (let x = x0; x <= x1; x++) {
        frameBuffer[x][y] = 1;
        error += deltaErr;
        if (error >= 0.5) {
        y += (deltaY > 0 ? 1 : -1);
        error -= 1;
        }
    }
    console.log('Drawing complete, please restart(F5)');
}