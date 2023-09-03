import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
import MyProfile from "./pages/MyProfile/MyProfile";
import Projects from "./pages/Projects/Projects";
import Tasks from "./pages/Tasks/Tasks";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import MyTeams from "./pages/MyTeams/MyTeams";
import MyTasks from "./pages/MyTasks/MyTasks";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardHome />,
        },
        {
          path: "/my-profile",
          element: <MyProfile />,
        },
        {
          path: "/my-teams",
          element: <MyTeams />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/tasks",
          element: <Tasks />,
        },
        {
          path: "/my-tasks",
          element: <MyTasks />,
        },
        {
          path: "/team-members",
          element: <TeamMembers />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
