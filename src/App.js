import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import { MainPage, QuestionPage } from './pages';
import { PATH } from './constants';
import ResultPage from './pages/ResultPage';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  padding: 2rem 1rem;
`;

function App() {
  return (
    <Container className="App">
      <audio controls>
        <source
          src="https://sunhpark42.github.io/Drink_with_Me/src/assets/Sunny Days - Anno Domini Beats.mp3"
          type="audio/mp3"
        />
      </audio>
      <GlobalStyle />
      <Contents>
        <Router>
          <Switch>
            <Route exact path={PATH.ROOT} component={MainPage} />
            <Route exact path={`${PATH.QUESTION}/:id`} component={QuestionPage} />
            <Route exact path={`${PATH.RESULT}/:id`} component={ResultPage} />
          </Switch>
        </Router>
      </Contents>
      <Footer>제 작 : 홍수진, 박선희</Footer>
    </Container>
  );
}

export default App;
