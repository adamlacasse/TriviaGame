$(document).ready(function () {

    const questions = [{
            question: "Which singer's real name is Stefani Joanne Angelina Germanotta?",
            correctAnswer: "Lady Gaga",
            choices: ["Madonna", "Gwen Stefani", "Lady Gaga", "Sufjan Stevens"]
        },
        {
            question: "The average human body contains how many pints of blood?",
            correctAnswer: "9",
            choices: ["9", "12", "5", "20"]
        },
        {
            question: "According to Greek mythology who was the first woman on earth?",
            correctAnswer: "Pandora",
            choices: ["Aphrodite", "Daphne", "Persephone", "Pandora"]
        },
        {
            question: "In which country would you find the Ian Fleming International Airport, named after the James Bond author?",
            correctAnswer: "Jamaica",
            choices: ["England", "Jamaica", "United States", "Denmark"]
        },
        {
            question: "From which language does the word ‘futon’ originate?",
            correctAnswer: "Japanese",
            choices: ["Japanese", "Chinese", "Dutch", "None, it's a made up word"]
        },
        {
            question: "In the year 1900 what were the most popular baby names in the US?",
            correctAnswer: "John and Mary",
            choices: ["John and Mary", "Joseph and Catherine", "George and Anne", " William and Elizabeth"]
        },
        {
            question: "Which of the following items was owned by the fewest US homes in 1990?",
            correctAnswer: "compact disk player",
            choices: ["home computer", "dishwasher", "cordless phone", "compact disk player"]
        },
        {
            question: "Who was the first black American pictured on a US postage stamp?",
            correctAnswer: "Booker T. Washington",
            choices: ["Joe Louis", "Booker T. Washington", "Louis Armstrong", "Frederick Douglass"]
        },
        {
            question: "Which album features the song 'Come Together'?",
            correctAnswer: "Abbey Road",
            choices: ["Abbey Road", "Revolver", "Help!", "Rubber Soul"]
        },
        {
            question: "Which of these songs was written by the band Aerosmith?",
            correctAnswer: "Dream On",
            choices: ["Whole Lotta Love", "Rumours", "Uptown Funk", "Dream On"]
        }
    ]

    const currentQuestion = 0;

    function loadQuestion() {
        // put the question at the top
        $("#gameplay").append(`<div class="" style="width: 50%">${questions[currentQuestion].question}</div><br>`)
        // make buttons for each choice
        questions[currentQuestion].choices.forEach(c => {
            $("#gameplay").append(`<button class="btn btn-dark btn-lg m-1 answer" style="width: 50%">${c}</button><br>`)
        })
    }

    $("#start-button").on("click", function() {
        $("#start-button").remove();
        loadQuestion();
    });

    $("body").on("click", ".answer", function(){
        // $(this).attr("class", "btn btn-success btn-lg m-1 answer")
        
    })
















}); // end of document.ready