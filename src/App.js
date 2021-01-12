import "./style/reset.css";
import "./style/bootstrap-grid.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./style/main.css";

import { Route, Switch } from "react-router-dom";

import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Layout from "./Layout";
import Resume from "./Routes/Resume";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <Layout>
            <Home />
          </Layout>
        )}
      />
      <Route
        exact
        path="/about-me"
        component={() => (
          <Layout>
            <About />
          </Layout>
        )}
      />
      <Route
        exact
        path="/resume"
        component={() => (
          <Layout>
            <Resume />
          </Layout>
        )}
      />
      <Route
        exact
        path="/contact-me"
        component={() => (
          <Layout>
            <Contact />
          </Layout>
        )}
      />
    </Switch>
  );
}

export default App;
