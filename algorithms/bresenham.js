const bresenhamController = {
    showName: "Bresenham",
    menuId: "bresenham-menu",
    drawingLogic: drawningLogic,
};

function drawningLogic(){
    console.log('drawingLogic');
    //print(points)
    //let [x0,y0] = points.values(0);
    //let [x1,y1] = points.values(1);
    let [x0,y0] = Object.values(points[0]);
    let [x1,y1] = Object.values(points[1]);
    /*
    console.log('x0',Object.keys(points));
    console.log('x0',points[0]);
    console.log('x0',Object.values(points[0]));
    console.log('x0',Object.values(points[0])[0]);
    let x0 = points.values(0).x;
    let y0 = points.values(0).y;
    let x1 = points.values(1).x;
    let y1 = points.values(1).y;
    console.log('x0',x0);
    console.log('x1',x1);*/
    bresenhamAlgorithm(x0,y0,x1,y1);
    /*
    let isFisrtPointMarked = false;
    let isSecondPointMarked = false;
    // desenha o ponto 1 assim que ele for válido (dentro do canvas) e completo (tem as coordenadas x e y)   
    //var [x0,y0] = getSquarePosition();
    //let isFisrtPointMarked = false;
    for(let i = 0; i<=2;i++){
    let x0 = getSquarePosition().x
    let y0 = getSquarePosition().y
    alert('Primeiro Clique válido');
    console.log(x0,y0);
    // desenha o ponto 2 assim que ele for válido e completo
    //var [x1,y1] = getSquarePosition();
    //let isSecondPointMarked = false;
    let x1 = getSquarePosition().x
    let y1 = getSquarePosition().y
    console.log(x1,y1);
    }
    // faz o desenho quando o botão desenhar é clicado
    if ((isFisrtPointMarked == true) & (isSecondPointMarked == true)){
        console.log("called Bresenham");
        bresenhamAlgorithm(x0,y0,x1,y1);
    }*/
    
}
/*
let points = [];
    const addPoint = (ev)=>{
        ev.preventDefault(); //to stop for submitting when it's not filled
        let point = {xis0: getSquarePosition().x,yps0: getSquarePosition().y}
        points.push(point)
        console.log('points',points)
    } */
function bresenhamAlgorithm(x0, y0, x1, y1){
    // Implementação do algoritmos de desenho de 
    // linhas de Bresenham
    console.log('bresenham');
    var deltaX = x1 - x0;
    var deltaY = y1 - y0;
    var deltaErr = abs(deltaY / deltaX);
    var error = 0;
    var y = y0;
    console.log('bx0',x0);
    console.log('bx1',x1);
    console.log('antes do for');
    for (let x = x0; x <= x1; x++) {
        console.log('bx',x);
        frameBuffer[x][y] = 1;
        error += deltaErr;
        if (error >= 0.5) {
        y += (deltaY > 0 ? 1 : -1);
        error -= 1;
        }
    }
}