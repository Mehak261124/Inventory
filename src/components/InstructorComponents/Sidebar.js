import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdDensitySmall } from "react-icons/md";
import { HiBellAlert } from "react-icons/hi2";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import unicartLogo from "../../assets/uniCart-Logo.png"
import { getAuth, signOut } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";



export default function Sidebar() {
  const navigate = useNavigate();

  const [element1Hovered, setElement1Hovered] = useState(false);
  const [element2Hovered, setElement2Hovered] = useState(false);
  const [element3Hovered, setElement3Hovered] = useState(false);
  const [element4Hovered, setElement4Hovered] = useState(false);
  const [element5Hovered, setElement5Hovered] = useState(false);
  const [element6Hovered, setElement6Hovered] = useState(false);
  const [element7Hovered, setElement7Hovered] = useState(false);

  const handleMouseEnter1 = () => setElement1Hovered(true);
  const handleMouseLeave1 = () => setElement1Hovered(false);

  const element1Style = {
    backgroundColor: element1Hovered ? '#575ff7' : '',
    color:element1Hovered ? 'white' : 'black',
    borderRadius:"13px",
  };
 
  
  const handleMouseEnter2 = () => setElement2Hovered(true);
  const handleMouseLeave2 = () => setElement2Hovered(false);

  const element2Style = {
    backgroundColor: element2Hovered ? '#0f9e02' : '',
    color:element2Hovered ? 'white' : 'black',
    borderRadius:"13px",
  };
 
  
  const handleMouseEnter3 = () => setElement3Hovered(true);
  const handleMouseLeave3 = () => setElement3Hovered(false);

  const element3Style = {
    backgroundColor: element3Hovered ? '#f7e963' : '',
    // color:element3Hovered ? 'white' : 'black',
    borderRadius:"13px"
  };
 
  
  const handleMouseEnter4 = () => setElement4Hovered(true);
  const handleMouseLeave4 = () => setElement4Hovered(false);

  const element4Style = {
    backgroundColor: element4Hovered ? '#04b0a4' : '',
    color:element4Hovered ? 'white' : 'black',
    borderRadius:"13px",
  };

  const handleMouseEnter5 = () => setElement5Hovered(true);
  const handleMouseLeave5 = () => setElement5Hovered(false);

  const element5Style = {
    backgroundColor: element5Hovered ? '#e874f2' : '',
    color:element5Hovered ? 'white' : 'black',
    borderRadius:"13px",
  };
  const handleMouseEnter6 = () => setElement6Hovered(true);
  const handleMouseLeave6 = () => setElement6Hovered(false);

  const element6Style = {
    backgroundColor: element6Hovered ? '#f04856' : '',
    color:element6Hovered ? 'white' : 'black',
    borderRadius:"13px",
  };
  const handleMouseEnter7 = () => setElement7Hovered(true);
  const handleMouseLeave7 = () => setElement7Hovered(false);

  const element7Style = {
    backgroundColor: element7Hovered ? '#f56918' : '',
    color:element7Hovered ? 'white' : 'black',
    borderRadius:"13px",
  };

  function handleLogOut(){
    const auth = getAuth();
  signOut(auth).then(() => {
    navigate("/")
  }).catch((error) => {
  console.log(error)
  });
  }

  return (
    <>
     <div className=" text-center mb-3">
        <h4 className="d-flex justify-content-center align-items-center "> <img style={{width:"29px",borderRadius:"800px"}} src={unicartLogo}/>
        <span style={{fontSize:"30px"}}>UniCart</span>
        </h4>
        
      </div>
    <div className="border border-right-3 d-flex flex-column flex-shrink-0 p-3 " style={{borderRadius:"0px 40px 40px 0px",backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)"



}}>
      

      <div className="d-grid gap-2 ">
        <NavLink
          className="btn  p-3 text-start focus-ring focus-ring-primary"
          to="home"
          style={element1Style} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}
        >
          <FaCartArrowDown /> HOME
        </NavLink>
        <NavLink
          className="btn  p-3 text-start"
          to="all-items"
          style={element2Style} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}
        >
          <MdDensitySmall /> View All Items
        </NavLink>
        <NavLink
          className="btn  p-3 text-start"
          to="active-requests"
          style={element3Style} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}
        >
          <HiBellAlert /> View Active Requests
        </NavLink>
        <NavLink
          className="btn p-3 text-start"
          to="new-item"
          style={element4Style} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}
        >
          <IoAddCircleSharp /> Add An Item
        </NavLink>
        <NavLink
          className="btn p-3 text-start"
          to="history"
          style={element5Style} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}
        >
          <FaHistory /> History Of Requests
        </NavLink>
        <NavLink
          className="btn p-3 text-start"
          to="report"
          style={element6Style} onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}
        >
          <MdReport /> Report A Problem
        </NavLink>
        <NavLink
          className="btn p-3 text-start"
          to="about"
          style={element7Style} onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}
        >
          <BsFillQuestionCircleFill /> About
        </NavLink>

        <span style={{marginTop:`${window.innerHeight-650}px`}} ></span>
        
       <button className="btn btn-info position-relative bottom-0 rounded d-flex justify-content-center align-items-center" onClick={handleLogOut}><BiLogOut/>LogOut</button>
      </div>
    </div>
    </>
  );
}
