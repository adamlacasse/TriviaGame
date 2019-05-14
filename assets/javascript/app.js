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

    let currentQuestion = 0;
    let timer;
    let timerOn = false;
    let countdown = 20;
    let correct = 0;
    let incorrect = 0;
    let unanswered = questions.length;

    $("#correct").text(`Correct: ${correct}`);
    $("#incorrect").text(`Incorrect: ${incorrect}`);

    $("#timer-score").hide();
    $("#question").hide();

    function loadQuestion() {
        $("#timer-score").show();
        $("#question").show();
        $("#question").html(`<div class="" style="width: 50%">${questions[currentQuestion].question}</div><br>`)
        questions[currentQuestion].choices.forEach(choice => {
            if (choice === questions[currentQuestion].correctAnswer) {
                $("#answers").append(`<button class="btn btn-dark btn-lg m-1 answer correct" style="width: 50%">${choice}</button><br>`)
            } else {
                $("#answers").append(`<button class="btn btn-dark btn-lg m-1 answer" style="width: 50%">${choice}</button><br>`)
            }
        });
    }

    function showAnswer() {
        $("#answers").empty();
        questions[currentQuestion].choices.forEach(choice => {
            if (choice === questions[currentQuestion].correctAnswer) {
                $("#answers").append(`<button class="btn btn-success btn-lg m-1 correct" style="width: 50%">${choice}</button><br>`)
            } else {
                $("#answers").append(`<button class="btn btn-danger btn-lg m-1" style="width: 50%">${choice}</button><br>`)
            }
        });
    }

    $("#start-button").on("click", function () {
        $("#start-button").remove();
        loadQuestion();
    });

    $("body").on("click", ".answer", function () {
        showAnswer();
        if ($(this).attr("class").search("correct") === -1) {
            console.log(`${$(this).text()} is wrong`)
            $("#incorrect").text(`Incorrect: ${++incorrect}`);
        } else {
            console.log("correct :-)")
            $("#correct").text(`Correct: ${++correct}`);
        }
    });

    $("#timer").on("click", function () {
        if ($(this).attr("data-timer") === "on") {
            clearInterval(timer);
            $(this).attr("data-timer", "off")
        } else {
            countdown = 20;
            $("#timer").text(countdown);
            timer = setInterval(() => {
                countdown--
                $("#timer").text(countdown);
            }, 1000)
            $(this).attr("data-timer", "on")
        }
    });












}); // end of document.ready