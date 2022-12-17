import * as Page from "./pages";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useFetch } from "./hook/useFetch";

function App() {
  useFetch();
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
