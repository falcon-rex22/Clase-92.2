function addUser(){
    var J1 = document.getElementById("player1_name").value;
    var J2 = document.getElementById("player2_name").value;
    localStorage.setItem("Jugador 1", J1)
    localStorage.setItem("Jugador 2", J2)
    window.location = "game_page.html";
}