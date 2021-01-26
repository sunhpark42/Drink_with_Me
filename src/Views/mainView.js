export default class MainView {
    constructor () {
        this.view();
    }

    view() {
        document.querySelector("#main-view-container").innerHTML = `
            <div class="start-view-title">
                <h1>DRINK (with) ME</h1>
                <img src="" alt="title-image"/>
            </div>
            <div class="start-view-content">
                <button class="start-button">시작하기</button>
            </div>
            <div class="footer">
            제작 : 홍수진, 박선희
            </div>
        `
    }
}