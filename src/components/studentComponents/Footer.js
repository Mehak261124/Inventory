import React from "react";
import { FaHeart } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
      <div class="container">
  {/* <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <span class="col-md-4 mb-0 text-muted">© 2024 UniCart, Inc</span> */}
    <div className="">
      <div className="col">© 2024 UniCart, Inc</div>
      <div className="col">Made with <FaHeart /> from SDG</div>
      <div className="col">
        {/* <div> */}
      {/* <ul class="nav col-md-4 justify-content-end"> */}
      <div className="col ">
        
      <div>Follow us on:</div>
      <button  class="btn link-secondary" ><AiFillInstagram size={25}/></button>
      <button  class="btn link-danger"><FaYoutube size={25}/></button>
      <button  class="btn "><FaSquareXTwitter size={25}/></button>
      <button  class="btn link-info"><BsFillThreadsFill size={25}/></button>
    {/* </ul> */}
    {/* </div> */}
    </div>
    </div>
    </div>

    {/* <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <span class="col-md-4 mb-0 text-muted">Made with <FaHeart /> from SDG</span>
    </a> */}
    
    {/* <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Follow us on:</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><AiFillInstagram size={25}/></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><FaYoutube size={25}/></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><FaSquareXTwitter size={25}/></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><BsFillThreadsFill size={25}/></a></li>
    </ul> */}
  {/* </footer> */}
</div>
  );
}
