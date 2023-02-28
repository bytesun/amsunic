import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Console from './pages/Console';
import './index.css'
import { signIn, initJuno, authSubscribe, User, signOut } from "@junobuild/core";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/console",
    element: <Console />,
  },
]);

initJuno({
  satelliteId: "ruc7a-fiaaa-aaaal-ab4ha-cai",
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
