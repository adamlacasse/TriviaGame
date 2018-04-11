$(document).ready(function(){

    $("#answersSection").hide();
    $("#winSection").hide();
    $("#loseSection").hide();
    $("#timer").hide();
    $("#scoreboard").hide();
    $("#nextQuestion").hide();
    $("#seeResults").hide();

    $("#start-button").on("click",function(){
        $("#start-button").remove();
        loadQuestion();        
    });

var questions = [
    {   question:"Which singer's real name is Stefani Joanne Angelina Germanotta?",
        correctAnswer:"Lady Gaga",
        choices: ["Madonna","Gwen Stefani","Lady Gaga","Sufjan Stevens"] // } // DON'T FORGET TO GET RID OF THIS "}"
    },
    {   question:"The average human body contains how many pints of blood?",
    correctAnswer:"9",
    choices: ["9","12","5","20"]
    },
    {   question:"According to Greek mythology who was the first woman on earth?",
    correctAnswer:"Pandora",
    choices: ["Aphrodite","Daphne","Persephone","Pandora"]
    },
    {   question:"In which country would you find the Ian Fleming International Airport, named after the James Bond author?",
    correctAnswer:"Jamaica",
    choices: ["England","Jamaica","United States","Denmark"]
    },
    {   question:"From which language does the word ‘futon’ originate?",
    correctAnswer:"Japanese",
    choices: ["Japanese","Chinese","Dutch","None, it's a made up word"]
    },
    {   question:"In the year 1900 what were the most popular baby names in the US?",
    correctAnswer:"John and Mary",
    choices: ["John and Mary","Joseph and Catherine","George and Anne"," William and Elizabeth"]
    },
    {   question:"Which of the following items was owned by the fewest US homes in 1990?",
    correctAnswer:"compact disk player",
    choices: ["home computer","dishwasher","cordless phone","compact disk player"]
    },
    {   question:"Who was the first black American pictured on a US postage stamp?",
    correctAnswer:"Joe Louis",
    choices: ["Joe Louis","Booker T. Washington","Louis Armstrong","Frederick Douglass"]
    },
    {   question:"Which album features the song 'Come Together'?",
    correctAnswer:"Abbey Road",
    choices: ["Abbey Road","Revolver","Help!","Rubber Soul"]
    },
    {   question:"Which of these songs was written by the band Aerosmith?",
    correctAnswer:"Dream On",
    choices: ["Whole Lotta Love","Rumours","Uptown Funk","Dream On"]
    }
]

var currentQuestion = 0;
var correct = 0;
var incorrect =  0;
var timer = 5;

function loadQuestion(){
    $("#nextQuestion").hide();
    $("#loseSection").hide();
    $("#winSection").hide();
    $("#timer").show();
    $("#answersSection").show();
    $("#scoreboard").show();
    $("#scoreboard").html("Correct Answers: " + correct + "<br>Incorrect Answers: " + incorrect);

    $("#questionSection").text("Q: " + questions[currentQuestion].question);
    $("#butA0").text(questions[currentQuestion].choices[0]);
    $("#butA1").text(questions[currentQuestion].choices[1]);
    $("#butA2").text(questions[currentQuestion].choices[2]);
    $("#butA3").text(questions[currentQuestion].choices[3]);

    clock();
    if(timer == 0){timeOut();}

} // end of loadQuestion()

function clock(){
    setInterval(
        function countdown(){    
            $("#timer").html(timer--);
        }, 1000);
} 

$("#butA0").on("click",function(){
    if(questions[currentQuestion].choices[0] === questions[currentQuestion].correctAnswer){
        correctAnswer();
    } else incorrectAnswer();
});

$("#butA1").on("click",function(){
    if(questions[currentQuestion].choices[1] === questions[currentQuestion].correctAnswer){
        correctAnswer();
    } else incorrectAnswer();
});

$("#butA2").on("click",function(){
    if(questions[currentQuestion].choices[2] === questions[currentQuestion].correctAnswer){
        correctAnswer();
    } else incorrectAnswer();
});

$("#butA3").on("click",function(){
    if(questions[currentQuestion].choices[3] === questions[currentQuestion].correctAnswer){
        correctAnswer();
    } else incorrectAnswer();
});

$("#butA4").on("click",function(){
    if(questions[currentQuestion].choices[4] === questions[currentQuestion].correctAnswer){
        correctAnswer();
    } else incorrectAnswer();
});

// =============================================================================================





// =============================================================================================

function correctAnswer(){
    $("#answersSection").hide();
    $("#timer").hide();
    $("#winSection").show();
    correct++;
    if(correct + incorrect < questions.length){
        $("#nextQuestion").show();
        } else {$("#seeResults").show(); $("#nextQuestion").hide();}
}

function incorrectAnswer(){
    $("#answersSection").hide();
    $("#timer").hide();
    $("#loseSection").show();
    incorrect++;
    if(correct + incorrect < questions.length){
        $("#nextQuestion").show();
        } else {$("#seeResults").show(); $("#nextQuestion").hide();}
}

function timeOut(){
    $("#answersSection").hide();
    $("#timer").hide();
    incorrect++;
    if(correct + incorrect < questions.length){
        $("#nextQuestion").show();
        } else {$("#seeResults").show(); $("#nextQuestion").hide();}
}

$("#nextQuestion").on("click",function(){
    currentQuestion++;    
    loadQuestion();
});

$("#seeResults").on("click",function(){
    $("#game-action").html("<img id='lose' src ='./assets/images/theEnd.jpg'></img>");
});



}); // end of document.ready