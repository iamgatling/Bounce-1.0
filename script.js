
var ball =
document.getElementById("ball");
var wall = document.getElementById("wall");
function jump(){
    if(ball.classList != "animate"){
        ball.classList.add("animate");
    }
    setTimeout(function(){
        ball.classList.remove("animate");
    },500);
}

var checkLoss = setInterval(function(){
    var ballTop =
    parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    var wallLeft =
    parseInt(window.getComputedStyle(wall).getPropertyValue("left"));
    if(wallLeft<20 && wallLeft>0 && ballTop>=170){
        wall.style.animation = "none";
        wall.style.display = "none";
        var answer = confirm("YOU LOSE...REPLAY?");
        if (answer == true){
            window.location.reload(true);
            }
            else{
                window.close();
            }
    }
},10);
//RESTART THE GAME
function restart(){
    window.location.reload(true);
}
function quit(){
    var quit = confirm("DO YOU WANT TO CLOSE THE GAME?")
    if (quit == true){
        window.close();
        }
}