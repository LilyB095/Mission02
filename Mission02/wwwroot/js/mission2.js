// Everytime the Calculate button is clicked, 
// determine and print out grade to the right spot on index.html

$("#calc").click(function () {

    // Find number grade by multiplying each category by the weight
        //55 % - Assignments
        //5%   - Group Project
        //10 % - Quizzes
        //20 % - Exams
        //10 % - INTEX
    var numgrade = $("#assignment").val() * .55 + $("#group").val() * .05 +
                    $("#quiz").val() * .1 + $("#exam").val() * .2 + $("#intex").val() * .1

    // Determine letter grade based on number grade
    if (numgrade >= 94) {
        var lettergrade = "A"
    }
    else if (numgrade >= 90) {
        var lettergrade = "A-"
    }
    else if (numgrade >= 87) {
        var lettergrade = "B+"
    }
    else if (numgrade >= 84) {
        var lettergrade = "B"
    }
    else if (numgrade >= 80) {
        var lettergrade = "B-"
    }
    else if (numgrade >= 77) {
        var lettergrade = "C+"
    }
    else if (numgrade >= 74) {
        var lettergrade = "C"
    }
    else if (numgrade >= 70) {
        var lettergrade = "C-"
    }
    else if (numgrade >= 67) {
        var lettergrade = "D+"
    }
    else if (numgrade >= 64) {
        var lettergrade = "D"
    }
    else if (numgrade >= 60) {
        var lettergrade = "D-"
    }
    else {
        var lettergrade = "E"
    }

    // Put the lettergrade and numeric grade together into the html header with the id "grade"
    $("#grade").html("Your grade is: " + lettergrade + " (" + numgrade + "%)");
})