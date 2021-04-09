import './styles/App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <div className="container d-flex vh-100 align-items-center justify-content-center">
            <Login />
          </div>
        </Route>

        <Route path="/dashboard">
          <Main />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
