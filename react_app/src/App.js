import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import { MainPage, QuestionPage } from './pages';
import { PATH } from './constants';

const Contents = styled.div`
  width: 100%;
  height: 640px;
  background-color: #1f1f2e;
  padding: 2rem 1rem;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Contents>
        <Router>
          <Switch>
            <Route exact path={PATH.ROOT} component={MainPage} />
            <Route exact path={`${PATH.QUESTION}/:id`} component={QuestionPage} />
          </Switch>
        </Router>
      </Contents>
      <Footer>제 작 : 홍수진, 박선희</Footer>
    </div>
  );
}

export default App;
