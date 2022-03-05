import { Landing } from "./components/Landing";
import { AboutPage } from "./components/AboutPage";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
