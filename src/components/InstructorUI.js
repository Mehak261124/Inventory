import React , {useState, useEffect} from "react";
import Sidebar from "./InstructorComponents/Sidebar";
import Navbar from "./InstructorComponents/Navbar";
import Footer from "./InstructorComponents/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "./IndstructorPages/About";
import ReportAPorblem from "./IndstructorPages/ReportAPorblem";
import AddNewItem from "./IndstructorPages/AddNewItem";
import HistoryOfRequests from "./IndstructorPages/HistoryOfRequests";
import InstructorHome from "./IndstructorPages/InstructorHome";
import ViewActiveRequest from "./IndstructorPages/ViewActiveRequest";
import InstructorViewAllItems from "./IndstructorPages/InstructorViewAllItems";


export default function InstructorUI() {

  const [items, setItems] = useState([]);

  

  const [isMobile, setIsMobile] = useState(window.innerWidth < 912); 
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 912);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);
  return (
      <div className="row w-100 ">
        <div className={`col-2 p-0 sticky-top ${isMobile ? 'd-none' : 'd-block'}`}>
          <div className="sticky-top">
          <Sidebar />
          </div>
        </div>
        <div className={`${isMobile ? "col": "col-10"} p-0`}>
          <div class="row">
            <div class="col sticky-top p-0" style={{marginLeft:"12px",}}>
              <Navbar isMobile={isMobile} />
            </div>
            <div class="row p-0" >
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
