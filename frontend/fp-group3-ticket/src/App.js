import SignIn from './Components/SignIn';
import TicketPage from './Components/TicketPage';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Solutions from './Components/Solutions';
import UpperNavBar from './Components/UpperNavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <UpperNavBar/>
            <TicketPage/>
          </Route>
          <Route path="/solutions" exact>
            <UpperNavBar/>
            <Solutions/>
          </Route>
          <Route path="/sign-in" exact>
            <SignIn/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
