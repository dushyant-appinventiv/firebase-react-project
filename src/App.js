import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/Signup";
import CreateProject from "./components/project/CreateProject";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Dashboard} />
        <Route path={"/project/:id"} component={ProjectDetails} />
        <Route path={"/signin"} component={SignIn} />
        <Route path={"/signup"} component={SignUp} />
        <Route path={"/createProject"} component={CreateProject} />
      </Switch>
    </Router>
  );
}

export default App;
