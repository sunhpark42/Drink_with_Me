import Question from "./QustionModule.js";
import Result from "./resultModule.js";

export default class MainController {
    constructor() {
        this.question;
        this.eventController();
    }

    eventController() {
        let question = this.question;
        const getResult = this.getResult;
        const audio = new Audio('Sunny Days - Anno Domini Beats.mp3');
        document.addEventListener('click', function(e) {
            const className = e.target.className;
            if (className === 'start-button') {
                question = new Question(0,0);
                question.Animate();
                audio.play();
            }
            if (className === 'option') {
                const option = e.target.dataset.optionNum;
                const next = question.getNextQuestionNumber();
                question.addScore(option);
                if (next === -1) {
                    audio.pause();
                    new Result();
                    return;
                }
                question = new Question(next, option);
                question.Animate();
            }
        })
        this.question = question;
        audio.addEventListener('ended', function(){
            this.currentTime = 0;
            this.play();
        }, false);
    }

}