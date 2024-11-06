import React, { useState, useEffect } from "react";
import Sidebar from "./studentComponents/Sidebar";
import Navbar from "./studentComponents/Navbar";
import Footer from "./studentComponents/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "./StudentPages/About";
import ReportAPorblem from "./StudentPages/ReportAPorblem";
import StudentHome from "./StudentPages/StudentHome";
import StudentViewAllItems from "./StudentPages/StudentViewAllItems";
import MyRequest from "./StudentPages/MyRequest";
// import { useState } from "react";

export default function InstructorUI() {
  const [userName,setUserName] = useState("");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 912);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 912);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);
  return (
      <div className="row w-100">
        <div
          className={`col-2 p-0 sticky-top ${isMobile ? "d-none" : "d-block"}`}
        >
          <div className="sticky-top">
            <Sidebar />
          </div>
        </div>
        <div className={`${isMobile ? "col" : "col-10"} p-0`}>
          <div class="row p-0">
            <div class="col sticky-top p-0" style={{marginLeft:"12px"}}>
              <Navbar isMobile={isMobile} />
            </div>
            <div class="row">
              <Outlet/>
            </div>
            <div class="row mt-5">
            </div>
          </div>
        </div>
        <hr/>
        <Footer />
      </div>
  );
}
