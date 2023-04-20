var Puntos = 0;

function updateScore(){
    Puntos = Puntos + 1;
    document.getElementById("score").innerHTML ="puntos = " + Puntos;
}

function saveScore(){
    localStorage.setItem("Puntos", Puntos)
}

function nextPage(){
    window.location = "login.html"
}