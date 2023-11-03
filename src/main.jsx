import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contact from './Contact'
import Project from './Project'
import Resume from './Resume'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/resume",
    element: <Resume />,
  }
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
