import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from "./routes/error-page";
import { ThemeProvider } from "@material-tailwind/react";

//pages
import Home from './pages/home/home';
import Coursers from './pages/coursers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/coursers',
        element: <Coursers />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
