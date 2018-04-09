$(document).ready(function(){

    $("#answersSection").hide();
    $("#timer").hide();

    $("#start-button").on("click",function(){
        $("#start-button").remove();
        loadQuestion();        
    });

function loadQuestion(){
    $("#timer").show();
    $("#questionSection").append("This is where the question displays");
    $("#answersSection").show();
    }

}); // end of document.ready