import { useGetProjectsQuery } from "../../features/projects/projectsApi";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { data: { projects = [] } = {} } = useGetProjectsQuery();
  // TODO: replace id
  const targetTeamMemberId = "64f23a10219063e8246e119d";

  const myProjects = projects.filter((project) => {
    if (
      project.assignedTeam &&
      project.assignedTeam.teamMembers.includes(targetTeamMemberId)
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className="min-h-screen p-5">
      <div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
        <h2 className="text-lg font-medium">All Projects</h2>
        <div>
          <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-lg flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Create Project
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {myProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
