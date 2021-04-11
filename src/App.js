import './styles/App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/dashboard">
          <Main />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
