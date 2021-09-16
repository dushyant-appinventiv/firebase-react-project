import { useHistory } from "react-router-dom";

function ProjectSummary(props) {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push("/project/" + props?.proID)}
      className={"card z-depth-0 project-summary"}>
      <div className={"card-content grey-text text-darken-3"}>
        <span className={"card-title"}>{props?.title}</span>
        <p> {props?.author} </p>
        <p className={"grey-text"}> {props?.date} </p>
      </div>
    </div>
  );
}
export default ProjectSummary;
