import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProject } from "../../store/actions/projectActions";

function CreateProject() {
  const [projectDetail, setProjectDetail] = useState({
    title: "",
    content: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(projectDetail));
    history.replace("/");
  };
  return (
    <div className={"container"}>
      <form onSubmit={(e) => handleSubmit(e)} className={"white"}>
        <h5 className={"grey-text text-darken-3"}>{"Create Project"}</h5>
        <div className={"input-field"}>
          <label htmlFor={"title"}> {"Project Title"} </label>
          <input
            onChange={(e) =>
              setProjectDetail({ ...projectDetail, title: e.target.value })
            }
            type={"text"}
            id={"title"}></input>
        </div>
        <div className={"input-field"}>
          <label htmlFor={"content"}> {"Project Content"} </label>
          <textarea
            rows={"30"}
            className={"materialize-textarea"}
            onChange={(e) =>
              setProjectDetail({ ...projectDetail, content: e.target.value })
            }
            id={"content"}></textarea>
        </div>
        <div className={"input-field"}>
          <button type={"submit"} className={"btn pink lighten-1 z-depth-0"}>
            {"Create Project"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;
