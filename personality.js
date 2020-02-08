function results() {
    /* create variables for each answer and princess */
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;

    var belle = 0;
    var tiana = 0;
    var merida = 0;
    var rapunzel = 0;

    /* tally scores from each question */
    switch(question1){
        case "book": belle++;
        case "visionboard": tiana++;
        case "sport": merida++;
        case "art": rapunzel++;
    }
    switch(question2){
        case "intelligence": belle++;
        case "ambition": tiana++;
        case "bravery": merida++;
        case "kindness": rapunzel++;
    }
    switch(question3){
        case "aloof": belle++;
        case "uptight": tiana++;
        case "stubborn": merida++;
        case "trusting": rapunzel++;
    }
    switch(question4){
        case "education": belle++;
        case "goals": tiana++;
        case "family": merida++;
        case "independence": rapunzel++;
    }
    switch(question5){
        case "author": belle++;
        case "business": tiana++;
        case "overthrowing": merida++;
        case "traveling": rapunzel++;
    }
    switch(question1){
        case "colors": belle++;
        case "howfar": tiana++;
        case "letitgo": merida++;
        case "wholenewworld": rapunzel++;
    }
    switch(question1){
        case "harrypotter": belle++;
        case "hiddenfigures": tiana++;
        case "captainmarvel": merida++;
        case "ferrisbueller": rapunzel++;
    }
    switch(question1){
        case "yellow": belle++;
        case "green": tiana++;
        case "red": merida++;
        case "purple": rapunzel++;
    }
    switch(question1){
        case "greys": belle++;
        case "bakeoff": tiana++;
        case "strangerthings": merida++;
        case "riverdale": rapunzel++;
    }
    switch(question1){
        case "london": belle++;
        case "newyork": tiana++;
        case "switzerland": merida++;
        case "japan": rapunzel++;
    }

    /* determine which princess*/
    var max = 0;
    var winner = "";
    if(belle>max){
        winner = "Belle";
        max = belle;
    } if (tiana>max){
        winner = "Tiana";
        max = tiana;
    } if (merida>max){
        winner = "Merida";
        max = merida;
    } if (rapunzel>max){
        winner = "Rapunzel";
        max = rapunzel;
    }

    document.getElementById("after_submit").style.visibility= "visible";
    document.getElementById("results").innerHTML = "Your inner Disney princess is: " + winner + "!";
    


}