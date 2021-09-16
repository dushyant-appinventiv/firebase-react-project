import { NavLink } from "react-router-dom";

function SignedIn() {
  return (
    <ul className={"right"}>
      <li>
        <NavLink to={"/createProject"}> {"New Projects"} </NavLink>
      </li>
      <li>
        <NavLink to={"/"}> {"Log Out"} </NavLink>
      </li>
      <li>
        <NavLink to={"/"} className={"btn btn-floating pink ligthen-1"}>
          {"PP"}
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedIn;
