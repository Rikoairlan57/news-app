import * as Page from "./pages";
import { Footer, Navbar, SearchBox } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <SearchBox />
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
      <Footer />
    </Router>
  );
}

export default App;
