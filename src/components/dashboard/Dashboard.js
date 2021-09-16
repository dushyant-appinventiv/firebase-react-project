import Notifications from "./Notification";
import ProjectList from "../project/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateProjects } from "../../store/actions/projectActions";

function Dashboard() {
  const { project } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProjects());
  }, [dispatch]);
  return (
    <div className={"dashboard container"}>
      <div className={"row"}>
        {/* PROJECT LIST */}
        <div className={"col s12 m6"}>
          <ProjectList projects={project} />
        </div>
        {/* NOTIFICATIONS */}
        <div className={"col s12 m5 offset-m1"}>
          <Notifications />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
