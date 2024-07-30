import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Resume from './Pages/Resume/Resume.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Photography from './Pages/Photography/Photography.jsx'
import Tutoring from './Pages/Tutoring/Tutoring.jsx'
import Contact from './Pages/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>,
  },
  {
    path: 'about',
    element:<About/>,
  },
  {
    path: 'resume',
    element:<Resume/>,
  },
  {
    path: 'projects',
    element:<Projects/>,
  },
  {
    path: 'photography',
    element:<Photography/>,
  },
  {
    path: 'tutoring',
    element:<Tutoring/>,
  },
  {
    path: 'contact',
    element:<Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
