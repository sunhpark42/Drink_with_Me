import { resultScript } from "../resultScript.js";

export default class Result {
    constructor() {
        this.result = this.getResult();
        this.view();
    }

    view() {
        document.querySelector("#main-view-container").innerHTML = `
            <div class="result-view-content">
                <p class="title">결과 : ${this.result}</p>
                ${resultScript.map(res => 
                    res.type === this.result ? `
                    <img src="../../images/temp_martini.jpg" alt="${res.type}"/>
                    <p class="result-script">${res.script}</p>`
                    : ``
                )}
            </div>
            <button class="share">공유하기</button>
            <div class="footer">
            제작 : 홍수진, 박선희
            </div>
            `
    }

    getResult() {
        let resString = "";
        let result = localStorage.getItem("result").split(',');
        result = result.map((res) => res = parseInt(res));
        if (result[0] > result[1]) {
            resString += 'E';
        } else {
            resString += 'I';
        }
        if (result[2] > result[3]) {
            resString += 'N';
        } else {
            resString += 'S';
        }
        if (result[4] > result[5]) {
            resString += 'F';
        } else {
            resString += 'T';
        }
        if (result[6] > result[7]) {
            resString += 'P';
        } else {
            resString += 'J';
        }
        console.log(resString);
        return (resString);
    }
}