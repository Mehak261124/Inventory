import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdDensitySmall } from "react-icons/md";
import { HiBellAlert } from "react-icons/hi2";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import unicartLogo from "../../assets/uniCart-Logo.png"

export default function Navbar({ isMobile }) {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{borderRadius:"30px 0px 0px 30px",backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)"}}>
        <div class="container-fluid p-0">
        {isMobile ? (<img style={{width:"29px",borderRadius:"800px",marginLeft:"12px"}} src={unicartLogo}/>): (<span class="navbar-brand" >
            Student Dashboard
          </span>)}
          
          <button
            class={`navbar-toggler ${isMobile ? 'd-block' : 'd-none'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{marginRight:"6px"}}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse"id="navbarNavAltMarkup" style={{background:`url("https://cdni.iconscout.com/illustration/premium/thumb/warehouse-worker-checking-inventory-9174404-7481960.png?f=webp")`, backgroundRepeat:"no-repeat",backgroundSize:"40vw", backgroundPositionX:"240px"}}>
            <div class={`navbar-nav ${isMobile ? 'd-block' : 'd-none'} `} style={{marginLeft:"13px"}}>
              <button class="nav-link text-center"  onClick={()=> navigate("/")}>
              <FaCartArrowDown /> Home
              </button>
              <button class="nav-link" onClick={()=> navigate("all-items")}>
              <MdDensitySmall /> View All Items
              </button>
              <button class="nav-link" onClick={()=> navigate("requests")}>
              <HiBellAlert /> View Active Requests
              </button>
              <button class="nav-link " onClick={()=> navigate("new-item")}>
              <IoAddCircleSharp /> Add Anuj
              </button>
              <button class="nav-link " onClick={()=> navigate("history")}>
              <FaHistory /> History Of Requests
              </button>
              <button class="nav-link " onClick={()=> navigate("report")}>
              <MdReport /> Report A Problem
              </button>
              <button class="nav-link " onClick={()=> navigate("about")}>
              <BsFillQuestionCircleFill /> About
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
