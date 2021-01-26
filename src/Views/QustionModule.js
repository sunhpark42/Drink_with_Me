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
}