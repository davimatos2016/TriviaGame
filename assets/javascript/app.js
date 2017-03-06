var incorrect = 0;
var correct = 0;
var pointsCorrect = [];
var pointIncorrect = [];
var timeRemaining = 30;
var intervalId;
//when the document loads this will happen
$(document).ready(function() {
    //Start game
    $('#start').click(function() {
        //Hides the start button
        $('#start').addClass('hide');
        //Add the questions on the page
        $('.questions').removeClass('hide');
        //Start Timer
        setTimeout(timer, 30 * 1000);
        intervalId = setInterval(showTimeLeft, 1000);
    });
    //When  click yousubmit button
    $("#submit").click(function() {
        //Hides submit button 
        $('#submit').addClass('hide');
        //Hides questions 
        $('.questions').addClass('hide');
        //Shows results 
        $('#results').removeClass('hide');
        //End time remaining
        clearInterval(intervalId);
        //Calculates correct, incorrect and unanswered
        var numberCorrect = $('input[data-correct="correct"]:checked').length;
        var numberIncorrect = $('input[data-incorrect="incorrect"]:checked').length;
        var numberUnanswered = 10 - numberCorrect - numberIncorrect;
        //Print correct, incorrect and unanswered
        $('#correct').html(numberCorrect);
        $("#incorrect").html(numberIncorrect);
        $("#unanswered").html(numberUnanswered);
    });
});

function timer() {
    $('#results').removeClass('hide');
    $('.questions').addClass('hide');
};

function showTimeLeft() {
    timeRemaining--;
    $('#timer').html(timeRemaining);
    if (timeRemaining === 0) {
        clearInterval(intervalId);
        //Calculates correct, incorrect and unanswered
        var numberCorrect = $('input[data-correct="correct"]:checked').length;
        var numberIncorrect = $('input[data-incorrect="incorrect"]:checked').length;
        var numberUnanswered = 10 - numberCorrect - numberIncorrect;
        //Print correct, incorrect and unanswered
        $('#correct').html(numberCorrect);
        $("#incorrect").html(numberIncorrect);
        $("#unanswered").html(numberUnanswered);
    };
};
