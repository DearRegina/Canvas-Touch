var NewWidth = 0.8 * screen.width;
var NewHeight = 0.8*screen.height;
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

if (screen.width < 992)
{
    document.getElementById("myCanvas").width = NewWidth;
    document.getElementById("myCanvas").height = NewHeight;
    document.body.style.overflow = "hidden";
        }
    canvas.addEventListener("touchstart", myTouchStart);
    
    function myTouchStart(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional

        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;

        console.log("myTouchStart");

    }

canvas.addEventListener("touchmove", myTouchMove);
    
function myTouchMove(e) {

    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

     
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();
        

        lastPositionOfX = currentPositionOfTouchX; 
        lastPositionOfY = currentPositionOfTouchY;
    }

function limpar()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
