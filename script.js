//gets the square and assigns it a random color
function changeColor(squareId){
    var square =  document.getElementById(squareId);
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
}
//makes random colors
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i = 0; i < 6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//flash function changes the colors of the 3 by 3 grid
function flashColors(){
    var flashes = document.querySelectorAll(".flash");
    flashes.forEach(function(flashes){
    var randomColor = getRandomColor();
    flashes.style.backgroundColor = randomColor;
    })
    
}
setInterval(flashColors, 100);

