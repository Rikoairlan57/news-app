import * as Page from "./pages";
import Navbar from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Page.Home />
        </Route>
        <Route path={["/programming", "/covid", "/search/*"]}>
          <Page.SpecialPages />
        </Route>
        <Route path="/saved">
          <Page.Saved />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
