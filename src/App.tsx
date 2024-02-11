import {RouterProvider} from "react-router-dom";
import router from "./config/router.tsx";
import "./App.css";


const App = () => {
  return (
      <RouterProvider router={router}/>
  );
};

export default App;
