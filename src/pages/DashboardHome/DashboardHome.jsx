import ProjectInformation from "./ProjectInformation";
import Statistics from "./Statistics";
import TaskStatistics from "./TaskStatistics";

const DashboardHome = () => {
  return (
    <div className="p-5 min-h-screen">
      <Statistics />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
        <TaskStatistics />
        <ProjectInformation />
      </div>
    </div>
  );
};

export default DashboardHome;
