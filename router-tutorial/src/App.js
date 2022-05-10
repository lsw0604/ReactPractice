import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Profiles from './Profiles.js';
import HistorySample from './HistorySample.js';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/profiles">Profile</Link>
        </li>
        <li>
          <Link to="/history">History Example</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>this page is doesn't exist</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  )
}

export default App;