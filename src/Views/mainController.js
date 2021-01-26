import Question from "./QustionModule.js";
import Result from "./resultModule.js";

export default class MainController {
    constructor() {
        this.question;
        this.eventController();
    }

    eventController() {
        let question = this.question;
        const audio = new Audio('Sunny Days - Anno Domini Beats.mp3');
        const shareMainKakao = this.shareMainKakao;
        const shareFinKakao = this.shareFinKakao;
        const result = new URLSearchParams(location.search).get('result');
        console.log(result)
        if (result != null) {
            audio.pause();
            new Result(result);
            return;
        }
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
            if (className === 'share-fin') {
                shareFinKakao();
            }
            if (className === 'share-main') {
                shareMainKakao();
            }
        })
        this.question = question;
        audio.addEventListener('ended', function(){
            this.currentTime = 0;
            this.play();
        }, false);
    }

    shareMainKakao() {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: 'DRINK (with) ME',
              description: '당신과 어울리는 술을 찾아드립니다.',
              imageUrl:
                'https://sunhpark42.github.io/Drink_with_Me/images/temp_title.png',
              link: {
                mobileWebUrl: 'https://sunhpark42.github.io/Drink_with_Me/',
              },
            },
            buttons: [
              {
                title: '웹으로 이동',
                link: {
                  mobileWebUrl: 'https://sunhpark42.github.io/Drink_with_Me/',
                },
              },
            ]
          });
    }

    shareFinKakao() {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: '당신은 ~~한 막걸리.',
              description: '어느 술에나 다 잘 어울리는 막걸리!',
              imageUrl:
                'https://sunhpark42.github.io/Drink_with_Me/images/temp_martini.jpg',
              link: {
                mobileWebUrl: 'https://sunhpark42.github.io/Drink_with_Me/?result=ISTP',
              },
            },
            buttons: [
              {
                title: '웹으로 이동',
                link: {
                  mobileWebUrl: 'https://sunhpark42.github.io/Drink_with_Me/?result=ISTP',
                },
              },
            ]
          });
    }

}