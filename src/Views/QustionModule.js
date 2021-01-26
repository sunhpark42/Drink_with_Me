import { question } from "../question.js";

export default class Question {
    constructor(num, answer) {
        this.questionNum = num;
        this.question = question[num].question;
        this.options = question[num].options;
        this.scores = question[num].scores;
        if (num >= 1) {
            this.preAnswer = question[num - 1].options[answer];
        }
        this.view();
    }

    view() {
        document.querySelector("#main-view-container").innerHTML = `
        <div class="question-container">
            <p class="question-box">${this.question}<p>
            ${this.preAnswer === undefined ? `` : `<p class="answer-box">${this.preAnswer}<p>`}
            </div>
        <div class="options-container">
            <ul>
                ${this.options.map((option, index) => 
                    `<li><button class="option" data-option-num=${index}>${option}</button></li>`
                ).join('')
            }
            </ul>
        </div>
        <div class="footer">
        제작 : 홍수진, 박선희
        </div>
        `;
    }

    addScore(answer) {
        const scores = this.scores;
        let result = localStorage.getItem("result").split(',');
        result = result.map((res, index) =>
            res = parseInt(res) + scores[answer][index]
        );
        localStorage.setItem("result", result);
    }

    getNextQuestionNumber () {
        if (question[this.questionNum + 1]) {
            return this.questionNum + 1;
        }
        return -1;
    }

    Animate() {
        const question = document.querySelector('.question-box');
        const answer = document.querySelector('.answer-box');
        this.disableButtonClick();
        const enableButtonClick = this.enableButtonClick;
        if (this.questionNum === 0) {
            const questionPlayer = question.animate([
            {opacity: 0, top: '-10px'},
            {opacity: 1, top: '10px'}
            ], 1000);
            questionPlayer.addEventListener('finish', function() {
                question.style.top = '10px';
                question.style.opacity = 1;
                enableButtonClick();
            });
        } else {
            const answerPlayer = answer.animate([
                {opacity: 0, bottom: '-10px'},
                {opacity: 1, bottom: '10px'},
                {opacity: 1, bottom: '10px'},
                {opacity: 0, bottom: '-5px'},
                {opacity: 0, bottom: '-5px'}
              ], 5000);
            answerPlayer.addEventListener('finish', function() {
                const questionPlayer = question.animate([
                    {opacity: 0, top: '-10px'},
                    {opacity: 1, top: '10px'}
                  ], 2000);
                questionPlayer.addEventListener('finish', function() {
                    question.style.top = '10px';
                    question.style.opacity = 1;
                    enableButtonClick();
                })
            })
        }
    }

    enableButtonClick() {
        const options = document.getElementsByClassName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].hidden = false;
        }
    }

    disableButtonClick() {
        const options = document.getElementsByClassName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].hidden = true;
        }
    }
}