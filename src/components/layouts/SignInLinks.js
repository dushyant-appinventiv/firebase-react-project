import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOutUser } from "../../store/actions/authActions";

function SignedIn() {
  const dispatch = useDispatch();
  return (
    <ul className={"right"}>
      <li>
        <NavLink to={"/createProject"}> {"New Projects"} </NavLink>
      </li>
      <li>
        <a onClick={() => dispatch(signOutUser())}>{"Log Out"}</a>
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
