function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;

    var correct = 0;

if (question1 == "True") {
    correct++;
}
if (question2 == "Women's rights/suffrage theorist and activist") {
        correct++;
 }
if (question3 == "Fighting for women's right to vote") {
    correct++;
}
if (question4 == "Mother of modern physics, two-time Nobel Prize winner") {
    correct++;
}
if (question5 == "Clara Barton") {
    correct++;
}
if (question6 == "Elizabeth Blackwell") {
    correct++;
}
if (question7 == "Abolition of slavery") {
    correct++;
}

var messages = ["Great job!", "Pretty good!","That's just okay", "You can do better!"];
var pictures = ["femmehacksIMAGES/win.gif", "femmehacksIMAGES/doBetter.jpg"];

var range;
var picScore;

if (correct == 0) {
    range = 3;
    picScore = 1;
    
}
if (correct > 0 && correct < 5) {
    range = 2; 
    picScore = 1;
 
}
if (correct > 4 && correct < 7) {
    range = 1; 
    picScore = 1;

}
if (correct == 7) {
    range = 0; 
    picScore = 0;
        
}

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + (correct) + " correct!";
document.getElementById("picture").src = pictures[picScore];
}
