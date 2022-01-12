// Everytime the Calculate button is clicked, 
// determine and print out lettergrade to the right spot on index.html

$("#calc").click(function () {

    // Find number grade by multiplying each category by the weight
        //44 % - Assignments
        //13 % - Quizzes
        //43 % - INTEX
        //0 % - Extra Credit - Decided not to include. :D
    var numgrade = $("#assignment").val() * .44 + $("#quiz").val() * .13 + $("#intex").val() * .43

    // Determine letter grade based on number grade
    if (numgrade >= 93) {
        var lettergrade = "A"
    }
    else if (numgrade >= 90) {
        var lettergrade = "A-"
    }
    else if (numgrade >= 87) {
        var lettergrade = "B+"
    }
    else if (numgrade >= 83) {
        var lettergrade = "B"
    }
    else if (numgrade >= 80) {
        var lettergrade = "B-"
    }
    else if (numgrade >= 77) {
        var lettergrade = "C+"
    }
    else if (numgrade >= 73) {
        var lettergrade = "C"
    }
    else if (numgrade >= 70) {
        var lettergrade = "C-"
    }
    else if (numgrade >= 67) {
        var lettergrade = "D+"
    }
    else if (numgrade >= 63) {
        var lettergrade = "D"
    }
    else if (numgrade >= 60) {
        var lettergrade = "D-"
    }
    else {
        var lettergrade = "E"
    }

    // Put the lettergrade into the html header with the id "lettergrade"
    $("#lettergrade").html(lettergrade)

})