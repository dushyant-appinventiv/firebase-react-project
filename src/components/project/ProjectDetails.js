import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProjectDetails(props) {
  const id = props.match.params.id;
  const [projectDetail, setProjectDetail] = useState(null);
  const { project } = useSelector((state) => state);

  useEffect(() => {
    setProjectDetail(project[id]);
  }, [project, id]);

  if (projectDetail) {
    return (
      <div className={"container section project-details"}>
        <div className={"card z-depth-0"}>
          <div className={"card-content"}>
            <span className={"card-title"}>{projectDetail?.title}</span>
            <p>{projectDetail?.content}</p>
            <div className={"card-action lighten-4 grey-text"}>
              <div>
                {"Author name: " +
                  projectDetail?.authorFname +
                  " " +
                  projectDetail?.authorLname}
              </div>
              <div> {"Created On: " + projectDetail?.createdAt} </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div className={"container center"}>
      <p> {"Loading Project..."} </p>
    </div>;
  }
}

export default ProjectDetails;
