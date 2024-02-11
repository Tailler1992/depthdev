import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/Error/Error.tsx";
import Login from "../pages/Login/Login.tsx";
import Main from "../pages/Main/Main.tsx";
import Register from "../pages/Register/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "login",
    element: <Login/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "register",
    element: <Register/>,
  },
]);

export default router;
