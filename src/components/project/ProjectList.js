import ProjectSummary from "./ProjectSummary";

function ProjectList(props) {
  return (
    <div className={"project-list section"}>
      {Object.entries(props?.projects)?.map((item, i) => {
        return (
          <ProjectSummary
            key={i}
            proID={item[0]}
            title={item[1]?.title}
            content={item[1]?.content}
            author={item[1]?.authorFname + " " + item[1]?.authorLname}
            date={item[1]?.createdAt}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
