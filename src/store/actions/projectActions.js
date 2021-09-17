import { ref, set, onValue } from "firebase/database";
import { db } from "../../firebase/firebaseConfig";
import { nanoid } from "nanoid";
// { getFirebase, getFirestore }
export const createProject = (project) => {
  // make async call to firestore and dispatch action
  return (dispatch, getState) => {
    set(ref(db, "projects/" + nanoid()), {
      ...project,
      authorFname: "Dushy",
      authorLname: "goyal",
      authorID: 28840,
      createdAt: new Date().toLocaleDateString(),
    }).catch((err) => {
      console.log("Error updating: ", err);
    });
  };
};

export const updateProjects = () => {
  const projectRef = ref(db, "projects");
  return (dispatch, getState) => {
    onValue(projectRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch({ type: "UPDATE_PROJECTS", payload: data });
      }
    });
  };
};
