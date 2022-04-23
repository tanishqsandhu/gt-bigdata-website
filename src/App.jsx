import { Landing } from "./components/Landing";
import { AboutPage } from "./components/AboutPage";
import {AlumniPage} from "./components/AlumniPage"
import { SponsorsPage } from "./components/SponsorsPage";
import {Team} from "./components/Team"
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
        <Route exact path="/leadership">
          <Team/>
        </Route>
        <Route exact path="/alumni">
          <AlumniPage/>
        </Route>
        <Route exact path = "/sponsors">
          <SponsorsPage/>  
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
