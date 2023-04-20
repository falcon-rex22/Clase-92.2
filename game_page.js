var J1 = localStorage.getItem("Jugador 1");
var J2 = localStorage.getItem("Jugador 2");
J1Score = 0;
J2Score = 0;

document.getElementById("PlayerName1").innerHTML = J1;
document.getElementById("PlayerName2").innerHTML = J2;
document.getElementById("PlayerScore1").innerHTML = J1Score;
document.getElementById("PlayerScore2").innerHTML = J2Score;
document.getElementById("PlayerQuiz").innerHTML = "turno para preguntar = " + J1
document.getElementById("PlayerAnswer").innerHTML = "turno para responder = " + J2

function send(){
     get_word = document.getElementById("word").value;
     word = get_word.toLowerCase();
    console.log(word);

    letter1 = word.charAt(0);
    console.log(letter1);

    middleLetter = Math.floor(word.length / 2);
    position_middle = word.charAt(middleLetter);
    console.log(position_middle);

    lastLetter = word.length-1;
    The_Letter =word.charAt(lastLetter);
    console.log(The_Letter);

    removeletter1 = word.replace(letter1, "_");
    console.log(removeletter1);

    removeMidle = removeletter1.replace(position_middle, "_");
    console.log(removeMidle);

    removeLast = removeMidle.replace(The_Letter, "_");
    console.log(removeLast);

    var quiz = "<h4 id='quiz_h4'>" +  removeLast  + "</h4>";
    var input = "<br> respuesta: <input type='text' id='input_answer'>";
    var button = "<br> <br> <button class='btn btn-info' onclick='check()'>Comprobar</button>";
    var Master = quiz + input + button;

    document.getElementById("output").innerHTML = Master;
    document.getElementById("word").value = "";
}

var question_turn = "Player1";
var answer_turn = "Player2";

function check(){
    var get_answer = document.getElementById("input_answer").value;
    var real_answer = get_answer.toLowerCase();
    console.log("palabra: " + real_answer);
    console.log("wprd: " + word);
    if(real_answer == word){
        console.log("1")
        if(answer_turn == "Player1"){
            J1Score = J1Score + 1;
            console.log(J1Score)
            document.getElementById("PlayerScore1").innerHTML = J1Score;
        }

        else{
            J2Score = J2Score + 1;
            document.getElementById("PlayerScore2").innerHTML = J2Score;
        }
    }

    if(question_turn == "Player1"){
        question_turn = "Player2";
        document.getElementById("PlayerQuiz").innerHTML = "Turno para preguntar : " + J2;
    }

    else{
        question_turn = "Player1";
        document.getElementById("PlayerQuiz").innerHTML = "Turno para preguntar : " + J1;
    }

    if(answer_turn == "Player1"){
        answer_turn = "Player2";
        document.getElementById("PlayerAnswer").innerHTML = "Turno para responder : " + J2;
    }

    else{
        answer_turn = "Player1";
        document.getElementById("PlayerAnswer").innerHTML = "Turno para responder : " + J1;
    }

    document.getElementById("output").innerHTML = "";
}