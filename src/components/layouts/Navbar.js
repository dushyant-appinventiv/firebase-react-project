import { Link } from "react-router-dom";
import SignedIn from "./SignInLinks";
// import SignedOut from "./SignedOutLinks";

function Navbar() {
  return (
    <nav className={"nav-wrapper grey darken-3"}>
      <div className={"container"}>
        <Link className={"brand-logo"} to={"/"}>
          {"Project Plan"}
        </Link>
        <SignedIn />
      </div>
    </nav>
  );
}

export default Navbar;
