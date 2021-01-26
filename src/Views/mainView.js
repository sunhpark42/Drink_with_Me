export default class MainView {
    constructor () {
        this.view();
    }

    view() {
        document.querySelector("#main-view-container").innerHTML = `
            <div class="start-view-title">
                <p>당신과 어울리는 술을 찾아드립니다</p>
                <h1>DRINK (with) ME</h1>
            </div>
            <div class="start-view-content">
                <button class="start-button"></button>
                <p>테스트를 할 준비가 되셨다면</p>
                <p>위의 문을 열고 바에 들어가 주세요.</p>
                <br/>
                <p>*음악이 재생되는 컨텐츠 입니다*</p>
                <p>이어폰을 꽂고 플레이하시면 더 좋아요</p>
            </div>
            <button class="share-main">SHARE</button>
            <div class="footer">
            <p>제 작 : 홍수진, 박선희</p>
            </div>
        `
    }
}