const initialState = {
  isLoggedIn: false,
  msg: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_FAILURE":
      console.log("Login Failure");
      return {
        ...state,
        msg: "Auth error , Login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        isLoggedIn: true,
        msg: "Login Success",
      };
    case "SIGNOUT_SUCCESS":
      console.log("User signed out success");
      return {
        ...state,
        isLoggedIn: false,
        msg: "User Signed out!",
      };
    default:
      return state;
  }
};

export default authReducer;
