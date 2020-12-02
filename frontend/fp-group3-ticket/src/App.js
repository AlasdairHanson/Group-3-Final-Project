import SignIn from './Components/SignIn';
import TicketPage from './Components/TicketPage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Solutions from './Components/Solutions';
import UpperNavBar from './Components/UpperNavBar';
import PageBG from './Components/PageBG';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <UpperNavBar/>
            <PageBG/>
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
