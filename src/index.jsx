import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

//pages
import Root from './routes/root';
import Home from './pages/home/home';
import Coursers from './pages/coursers/coursers';
import CourseDetails from './pages/coursers/details';
import ErrorPage from "./routes/error_page";
import Partners from './pages/partners/partners';
import Transparency from './pages/transparency/transparency';

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
        path:'/coursers/:search?',
        element: <Coursers />
      },
      {
        path:'/coursers/details/:courseId',
        element: <CourseDetails />
      },
      {
        path:'/partners',
        element: <Partners />
      },
      {
        path:'/transparency',
        element: <Transparency />
      },
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
