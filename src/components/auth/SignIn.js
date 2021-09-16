import { useState } from "react";

function SignIn() {
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={"container"}>
      <form onSubmit={(e) => handleSubmit(e)} className={"white"}>
        <h5 className={"grey-text text-darken-3"}>{"Sign In"}</h5>
        <div className={"input-field"}>
          <label htmlFor={"email"}> {"EMail"} </label>
          <input
            onChange={(e) =>
              setUserDetail({ ...userDetail, email: e.target.value })
            }
            type={"email"}
            id={"email"}></input>
        </div>
        <div className={"input-field"}>
          <label htmlFor={"password"}> {"Password"} </label>
          <input
            onChange={(e) =>
              setUserDetail({ ...userDetail, password: e.target.value })
            }
            type={"password"}
            id={"password"}></input>
        </div>
        <div className={"input-field"}>
          <button type={"submit"} className={"btn pink lighten-1 z-depth-0"}>
            {"Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
