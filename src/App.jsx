import Enterprise from "./Enterprise";
import SBM from "./SBM"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Startup from "./Startup";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SBM/>,
    },
    {
      path: "/startup",
      element: <Startup/>,
    },

    {
      path: "/enterprise",
      element: <Enterprise/>,
    },
    
  ]);
  
  
  return (
    
    <RouterProvider router={router} />
  )
}

export default App
