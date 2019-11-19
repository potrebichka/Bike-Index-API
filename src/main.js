import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Quiz } from './backend-code';
let timer, timer2;
let quiz = new Quiz();
let time = 20;

$(document).ready(function() {
  $("#startGame").click(function() {
    $("#intro").hide();
    $("#deck1").show();

    $("#resultDiv").show();
    $("#playerResult").text(quiz.score);
    timer = setTimeout(() => {
      quiz.stopTimer();
      time--;
      $("#showTimeOut").show();
      $("#timerDisplay").text(time);
      clearInterval(timer2);
    },20000);

    timer2 = setInterval(() => {
      time--;
      $("#timerDisplay").text(time);
    },1000);


  });

  $(".gameBoard").click(function(event) {
    //event.stopPropagation();
    //event.stopImmediatePropagation();
    console.log($(event.target).parent().parent().attr('id'));
    let clickFlashCard = $(event.target).parent().parent().attr('id');
    if (clickFlashCard === '1') {
      quiz.playerScore(true);
      $("#deck1").hide();
      $("#deck2").show();
    }
    else if (clickFlashCard === '11') {
      quiz.playerScore(true);
      $("#deck2").hide();
      $("#deck3").show();
    }
    else if (clickFlashCard === '14') {
      quiz.playerScore(true);
      $("#deck3").hide();
      $("#deck4").show();
    }
    else if (clickFlashCard === '20') {
      quiz.playerScore(true);
      $("#deck4").hide();
    }

    else {
      quiz.playerScore(false);
    }
    if (parseInt(clickFlashCard) >= 19) {
      clearInterval(timer2);
      clearTimeout(timer);
      $("#timerDisplay").text(0);
      // $("#results").text("Good Job!");
    }
    $("#playerResult").text(quiz.score);
  });

});
