import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
import MyProfile from "./pages/MyProfile/MyProfile";
import Projects from "./pages/Projects/Projects";
import Tasks from "./pages/Tasks/Tasks";
import TeamMembers from "./pages/TeamMembers/TeamMembers";

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
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/tasks",
          element: <Tasks />,
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
