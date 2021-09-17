import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signinUser = (credentials) => {
  return (dispatch, getState) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, credentials?.email, credentials?.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User credentials after signin: ", user);
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error signin : ", errorMessage);
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };
};

export const signOutUser = () => {
  return (dispatch, getState) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })
      .catch((err) => {
        console.log("Error Signout: ", err);
      });
  };
};
