import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './index.css';

import App from './App';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/console",
//     element: <Console />,
//   },
// ]);

// initJuno({
//   satelliteId: "ruc7a-fiaaa-aaaal-ab4ha-cai",
// });


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
