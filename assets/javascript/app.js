$(document).ready(function(){

    $("#answersSection").hide();
    $("#timer").hide();

    $("#start-button").on("click",function(){
        $("#start-button").remove();
        loadQuestion();        
    });

var questions = [
    {   question:"Which singer's real name is Stefani Joanne Angelina Germanotta?",
        correctAnswer:"Lady Gaga",
        choices: ["Madonna","Gwen Stefani","Lady Gaga","Sufjan Stevens"]
    },
    {   question:"The average human body contains how many pints of blood?",
    correctAnswer:"9",
    choices: ["9","12","5","20"]
    },
    {   question:"According to Greek mythology who was the first woman on earth?",
    correctAnswer:"Pandora",
    choices: ["Aphrodite","Daphne","Persephone","Pandora"]
    },
    {   question:"",
    correctAnswer:"",
    choices: ["","","",""]
    },
    {   question:"",
    correctAnswer:"",
    choices: ["","","",""]
    },
    {   question:"",
    correctAnswer:"",
    choices: ["","","",""]
    },
    {   question:"",
    correctAnswer:"",
    choices: ["","","",""]
    },
    {   question:"",
    correctAnswer:"",
    choices: ["","","",""]
    },
    {   question:"",
    correctAnswer:"",
    choices: ["","","",""]
    },
    {   question:"",
    correctAnswer:"",
    choices: ["","","",""]
    }
]

var currentQuestion = 0;
var correct = 0;
var incorrect =  0;
var answered = 0;
var unanswered = 11;


function loadQuestion(){
    $("#timer").show();
    $("#answersSection").show();
    // for(i=0; i < questions.length; i++){
    // }
    $("#questionSection").append("This is where the question displays");

    } // end of loadQuestion()




}); // end of document.ready