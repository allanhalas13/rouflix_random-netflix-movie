var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');


function storeAnswer(question_number, event){
    if(event.target.type === 'button'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})

question_one.addEventListener('click', function(event){
    storeAnswer(2, event)
})

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5;
    
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() < 10){
        var score_info = "Você precisa tomar mais cuidado com a segurança!";
    } else if(totalScore() > 10){
        var score_info = "Parabéns! Você está bem de segurança!"
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
})

submit2.addEventListener('click', function(){
    nextQuestion(3);
})