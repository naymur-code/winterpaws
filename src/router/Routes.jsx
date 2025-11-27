import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../root/RootLayout";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Error from "../pages/Error";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ServiceDetails />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
