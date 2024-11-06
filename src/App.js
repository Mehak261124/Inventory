import "./App.css";
import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import InstructorUI from "./components/InstructorUI";
import LoginPage from "./components/Login-Signup/LoginPage";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route, Switch, createBrowserRouter,RouterProvider } from "react-router-dom";
import StudentUI from './components/StudentUI';
import ErrorPage from "./components/ErrorPage";
import StudentAbout from "./components/StudentPages/About";
import StudentMyRequest from "./components/StudentPages/MyRequest";
import StudentReportAPorblem from "./components/StudentPages/ReportAPorblem";
import StudentViewAllItems from "./components/StudentPages/StudentViewAllItems.js"
import StudentHome from "./components/StudentPages/StudentHome";
import InstructorAbout from "./components/IndstructorPages/About.js";
import InstructorAllItems from "./components/IndstructorPages/InstructorViewAllItems.js"
import AddNewItem from "./components/IndstructorPages/AddNewItem.js"
import HistoryOfRequests from "./components/IndstructorPages/HistoryOfRequests.js"
import InstructorHome from "./components/IndstructorPages/InstructorHome.js"
import ReportAPorblem from "./components/IndstructorPages/ReportAPorblem.js"
import ViewActiveRequest from "./components/IndstructorPages/ViewActiveRequest.js"

function App() {
  const [login, setLogin] = useState(true);
  const [items, setItems] = useState([]);
  const [userName,setUserName] = useState("");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 912); 
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 912);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage login={login} setLogin={setLogin}/>,
    },
    {
      path: "login-singup",
      element: <LoginPage login={login} setLogin={setLogin}  />,
    },
    {
      path: "admin",
      element: <InstructorUI />,
      children:[{
        path:"about",
        element:<InstructorAbout/>
      },
      {
        path:"all-items",
        element:<InstructorAllItems setItems={setItems} items={items} />
      },
      {
        path:"new-item",
        element:<AddNewItem setItems={setItems} items={items}/>
      },
      {
        path:"history",
        element:<HistoryOfRequests/>
      },
      {
        index:true,
        path:"home",
        element:<InstructorHome />
      },
      {
        path:"report",
        element:<ReportAPorblem/>
      },
      {
        path:"active-requests",
        element:<ViewActiveRequest/>
      },
    ]
    },
    {
      path: "student",
      element: <StudentUI />,
      children:[
        {
          path:"about",
          element:<StudentAbout/>
        },
        {
          path:"requests",
          element:<StudentMyRequest/>
        },
        {
          path:"report",
          element:<StudentReportAPorblem/>
        },
        {
          path:"all-items",
          element:<StudentViewAllItems userName={userName} setUserName={setUserName} />
        },
        { index:true,
          path:"home",
          element:<StudentHome/>
        },
      ]
    },
    {
      path: "*",
      element: <ErrorPage />,
    }
  ])
  return (

      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
