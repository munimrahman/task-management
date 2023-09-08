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
import LogIn from "./pages/LogIn/LogIn";
import useAuthCheck from "./hooks/useAuthCheck";
import SignUp from "./pages/SignUp/SignUp";
import PublicRoute from "./Routes/PublicRoute/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";

function App() {
  const authCheck = useAuthCheck();

  const router = createBrowserRouter([
    {
      path: "/log-in",
      element: (
        <PublicRoute>
          <LogIn />
        </PublicRoute>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      ),
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      ),
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
  return authCheck && <RouterProvider router={router} />;
}

export default App;
