import React, {useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaListUl } from "react-icons/fa";
import "./css/main.css"
import "./css/responsive.css"
import contact from "./img/contact/01.png"
import business from "./img/business/business-img.png"
import showcase from "./img/showcase/01.jpg"
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { GiBrain } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import { VscTasklist } from "react-icons/vsc";
import { MdOutlineBorderColor } from "react-icons/md";
import { SiApple } from "react-icons/si";
import { FaNotEqual } from "react-icons/fa6";
import Footer from '../InstructorComponents/Footer';
import { IoAccessibilityOutline } from "react-icons/io5";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import unicartLogo from "../../assets/uniCart-Logo.png"




export default function LandingPage({login, setLogin}) {
    const [clicked , setClicked ] = useState(true);
    const navigate = useNavigate();
  return (
    <div className='landingPage'>
       <header id="home" class="hero-area">    
      <div class="overlay">
        <span></span>
        <span></span>
      </div>
      <nav class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar p-2" style={{background:"linear-gradient(90deg ,#6610f2,#0d6efd,#20c997)"}}>
        {/* <div class="container"> */}
          <span  class="navbar-brand d-flex justify-content-center align-items-center"><img style={{width:"29px",borderRadius:"800px",marginRight:"3px"}} src={unicartLogo}/>
          <span>UniCart</span>
          </span>       
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={()=> setClicked(prev=> !prev)}>
            <i class="lni-menu">
                <FaListUl size={25}/>
            </i>
          </button>
          <div class={clicked ? "collapse navbar-collapse" : "collapse navbar-collapse show fade p-3"} id="navbarCollapse">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#home" onClick={()=> setClicked(true)}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#services" onClick={()=> setClicked(true)}>About</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#features" onClick={()=> setClicked(true)}>Services</a>
              </li>                            
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#showcase" onClick={()=> setClicked(true)}>Showcase</a>
              </li>           
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#team" onClick={()=> setClicked(true)}>Team</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#blog" onClick={()=> setClicked(true)}>Blog</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#contact" onClick={()=> setClicked(true)}>Contact</a>
              </li> 
              <li class="nav-item">
                <a class="btn btn-singin" href="#" onClick={()=> setClicked(true)}>Download App</a>
              </li>
            </ul>
          </div>
      </nav>  
      <div class="container">      
        <div class="row space-100">
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div class="contents">
              <h2 class="head-title">Welcome! Rent tech, build your future</h2>
              <p>Level up your learning! Rent the latest tech and robotics gear you need to explore, invent, and create. Apply for new products and manage your inventory with ease. Get ready to power up your semester! </p>
              <div class="header-button">
                <button  onClick={()=> {
                  navigate("/login-singup")
                  setLogin(true);
                  }} class="btn btn-border-filled">Sign In </button>
                <button   class="btn btn-border page-scroll" onClick={()=> {
                  navigate("/login-singup")
                  setLogin(false);
                  }}>Sign Up</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-xs-12 p-0">
            <div class="intro-img">
              <img src="https://www.enerpize.com/wp-content/uploads/2019/01/inventory-hero.svg" alt=""/>
            </div>            
          </div>
        </div> 
      </div>             
    </header>


    <section id="services" class="section">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="services-item text-center">
              <div class="icon " >
                <i class="lni-cog "style={{position:"relative", top:"8px"}}><GiBrain size={84}/></i>
              </div>
              <h4>BrainStorm</h4>
              <p>Tap into our collective creativity, and explore every angle.  No idea is too crazy, the wilder the better!  Let's spark some innovation and turn those brainstorming bolts into brilliant solutions.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="services-item text-center">
              <div class="icon">
                <i class="lni-brush" style={{position:"relative", top:"18px"}}><BiPurchaseTag size={74}/></i>
              </div>
              <h4>Rent or Purchase</h4>
              <p>Flex your inventor muscles! Rent the latest tech & robotics for instant projects, or purchase to build your dream toolkit. We empower your innovation journey, whichever path you choose. .</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="services-item text-center">
              <div class="icon">
                <i class="lni-heart" style={{position:"relative", top:"18px"}}><TbBulb size={74}/></i>
              </div>
              <h4>Innovate</h4>
              <p>Ignite your inventor spirit!  Explore the latest tech & robotics to fuel your creativity and conquer challenges. Rent what you need now, or build your dream toolkit. Innovation starts here! </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    



    
    <section id="business-plan">
      <div class="container">

        <div class="row">
          
          <div class="col-lg-6 col-md-12 pl-0 pt-70 pr-5">
            <div class="business-item-img">
              <img src={business} class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 pl-4">
            <div class="business-item-info">
              <h3>Invent On-the-Go: Download</h3>
              <p>Unleash your inner inventor on the go!  Download our [App Name] Android app and unlock a world of possibilities.  Browse cutting-edge tech & robotics, request new gear, manage your rentals, and fuel your creative journey - all at your fingertips.  Innovation awaits - download today! </p>

              <a class="btn btn-common" href="#">download app</a>
            </div>
          </div>
          

        </div>
      </div>
    </section>
    



    
    <section id="features" class="section">
      <div class="container">
        
        <div class="row">
          <div class="col-lg-12">
            <div class="features-text section-header text-center">  
              <div>   
                <h2 class="section-title">Services We Provide</h2>
                <div class="desc-text">
                  <p>Need a powerful tool for a short-term project? Rent it with ease! Building your dream arsenal? Purchase your favorites and keep inventing. Can't find the exact gear you crave? Request new items - your ideas shape our ever-expanding inventory! Unleash the future with premium tech like Apple Vision Pro and Meta Quest (and more!). This is just the spark. Explore our platform and discover everything you need to turn ideas into reality. Let's invent the future, together!.</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
        
        
        <div class="row featured-bg">
         
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
             
            <div class="feature-item featured-border1">
               <div class="feature-icon float-left">
                 <i class="lni-coffee-cup" style={{position:"relative", top:"18px", left:"-4px"}}><VscTasklist size={56}/></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Issue any item from Inventory</h4>
                 <p>Head to our inventory and browse a vast selection of tech <br/> and robotics!  Simply select the perfect item, complete a quick checkout, and <br/>  it's ready for pickup.  Get what you need, when you need it, to keep your innovative momentum going</p>
               </div>
            </div>
            
          </div>
           
          
         
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
             
            <div class="feature-item featured-border2">
               <div class="feature-icon float-left">
                 <i class="lni-briefcase" style={{position:"relative", top:"18px", left:"-4px"}}><MdOutlineBorderColor size={56}/></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Request for New Item</h4>
                 <p>Dreaming up something amazing but missing the perfect tool? Don't let that stop you!  Our "Request for New Item" feature is here to help.  Just head over and tell us what you need.  Your innovative ideas shape our ever-expanding inventory, so don't hesitate to share your wildest dreams!.</p>
               </div>
            </div>
        
          </div>
           
          
         
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
             
            <div class="feature-item featured-border1">
               <div class="feature-icon float-left">
                 <i class="lni-invention" style={{position:"relative", top:"18px", left:"-4px"}}><SiApple size={56}/></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Unlock Premium Gear</h4>
                 <p>Craving the cutting edge?  Level up your innovation with premium gear like Apple Vision Pro and Meta Quest!  Unlock them through our request system and push the boundaries of what's possible</p>
               </div>
            </div>
            
          </div>
           
          
         
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
             
            <div class="feature-item featured-border2">
               <div class="feature-icon float-left">
                <i class="lni-layers" style={{position:"relative", top:"18px", left:"-4px"}}><FaNotEqual size={56}/></i>
               </div>
               <div class="feature-info float-left">
                 <h4>No limit for requesting</h4>
                 <p>Our "Request for New Item" feature is always open.  Share your innovative ideas, no matter how wild they seem.  Your requests fuel our ever-growing inventory, shaping the future of what's available!</p>
               </div>
            </div>
            
          </div>
           
          
         
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
             
            <div class="feature-item featured-border3">
               <div class="feature-icon float-left">
                 <i class="lni-reload" style={{position:"relative", top:"18px", left:"-1px"}}><IoAccessibilityOutline size={56}/></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Easy To Access</h4>
                 <p>Our platform makes access a breeze. Simply browse our extensive inventory, select your items, and complete the checkout process. No complicated procedures, just a smooth and efficient way to get the tools you need, to keep your creative flow going!</p>
               </div>
            </div>
            
          </div>
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
            <div class="feature-item">
               <div class="feature-icon float-left">
                 <i class="lni-support" style={{position:"relative", top:"18px", left:"-1px"}}><HiOutlineWrenchScrewdriver size={56} /></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Premier Support</h4>
                 <p>Our dedicated support specialists are here to empower your creative journey.  Need help navigating the platform, troubleshooting tech issues, or maximizing your equipment's potential? We're just a mail away, offering priority service and fast response times</p>
               </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
    


    
    <section id="showcase">
      <div class="container-fluid right-position">
        
        <div class="row gradient-bg">
          <div class="col-lg-12">
            <div class="showcase-text section-header text-center">  
              <div>   
                <h2 class="section-title">Peak Into Some of our Products 👀</h2>
                <div class="desc-text">
                  <p>Get a sneak peek at some of the amazing tech and robotics we offer!  From cutting-edge gadgets to powerful tools, we have everything you need to bring your ideas to life.  Explore further to discover the full range and find the perfect fit for your next project!</p>  
                  
                </div>
              </div> 
            </div>
          </div>

        </div>
        <div class="row justify-content-center showcase-area">
          <div class="col-lg-12 col-md-12 col-xs-12 pr-0">
            <div class="showcase-slider owl-carousel d-flex gap-2 flex-wrap justify-content-center">
              <div class="item">
                <div class="screenshot-thumb">
                  <img src="https://cdn.storifyme.xyz/accounts/cashify-in-0561312/assets/f-apple-vision-pro-hands-on-gear-featured-gettyimages-1496190487-50951697553451271.webp?t=1697596250000" class="img-fluid" alt=""  style={{width:"360px",height:"360px",objectFit:"cover"}}/>
                  <div class="hover-content text-center">
                    <div class="fancy-table">
                      <div class="table-cell">
                        <div class="single-text">
                          <p>Future is Here!</p>
                          <h5>Apple Vision Pro</h5>
                        </div>
                        <div class="zoom-icon">
                          <a class="lightbox" href="img/showcase/01.jpg"><i class="lni-zoom-in"></i></a>
                          <a href="#"><i class="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="item">
                <div class="screenshot-thumb">
                  <img src="https://komete-xr.com/cdn/shop/files/Acheter-Meta-Quest-3.webp?v=1695843071&width=360" class="img-fluid" alt="" />
                  <div class="hover-content text-center">
                    <div class="fancy-table">
                      <div class="table-cell">
                        <div class="single-text">
                          <p>AR , VR</p>
                          <h5>Meta Quest</h5>
                        </div>
                        <div class="zoom-icon">
                          <a class="lightbox" href="img/showcase/02.jpg"><i class="lni-zoom-in"></i></a>
                          <a href="#"><i class="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="screenshot-thumb">
                  <img src="https://content.jdmagicbox.com/quickquotes/images_main/arduino-uno-memory-usb-board-801200546-s8kqppqr.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit" class="img-fluid" alt="" />
                  <div class="hover-content text-center">
                    <div class="fancy-table">
                      <div class="table-cell">
                        <div class="single-text">
                          <p>Arduino UNO , NANO</p>
                          <h5>Arduino Kit</h5>
                        </div>
                        <div class="zoom-icon">
                          <a class="lightbox" href="img/showcase/03.jpg"><i class="lni-zoom-in"></i></a>
                          <a href="#"><i class="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="screenshot-thumb">
                  <img src="https://mecheltron.com/sites/default/files/webresources/MechanicalElectroMech/IntegratedStepperMotors/images/iHSS42.png" class="img-fluid" alt="" />
                  <div class="hover-content text-center">
                    <div class="fancy-table">
                      <div class="table-cell">
                        <div class="single-text">
                          <p>Motor , Powerful</p>
                          <h5>Stepper Motors</h5>
                        </div>
                        <div class="zoom-icon">
                          <a class="lightbox" href="img/showcase/04.jpg"><i class="lni-zoom-in"></i></a>
                          <a href="#"><i class="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="screenshot-thumb">
                  <img src="https://lzd-img-global.slatic.net/g/p/24a22529df55ad2394ef435a5f782ecb.jpg_360x360q75.jpg_.webp" class="img-fluid" alt="" />
                  <div class="hover-content text-center">
                    <div class="fancy-table">
                      <div class="table-cell">
                        <div class="single-text">
                          <p>Wireless , Controller</p>
                          <h5>Flysky Controller</h5>
                        </div>
                        <div class="zoom-icon">
                          <a class="lightbox" href="img/showcase/05.jpg"><i class="lni-zoom-in"></i></a>
                          <a href="#"><i class="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="screenshot-thumb">
                  <img src="https://lzd-img-global.slatic.net/g/p/7bfb29dd847507139d41df0b3a0755e7.jpg_360x360q75.jpg_.webp" class="img-fluid" alt="" />
                  <div class="hover-content text-center">
                    <div class="fancy-table">
                      <div class="table-cell">
                        <div class="single-text">
                          <p>Display , Web</p>
                          <h5>OLED Displays</h5>
                        </div>
                        <div class="zoom-icon">
                          <a class="lightbox" href={showcase}><i class="lni-zoom-in"></i></a>
                          <a href="#"><i class="lni-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section id="pricing" class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pricing-text section-header text-center">  
              <div>   
                <h2 class="section-title">Pricing Plans</h2>
                <div class="desc-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>  
                  <p>eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
        <div class="row pricing-tables">
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div class="pricing-table text-center">
              <div class="pricing-details">
                <h3>Free</h3>
                <h1><span>$</span>00</h1>
                <ul>
                  <li>Free Instalation</li>
                  <li>500MB Storage</li>
                  <li>Single User</li>
                  <li>5 GB Bandwith</li>
                  <li>Minimal Features</li>
                  <li>No Dashboard</li>
                </ul>
              </div>
              <div class="plan-button">
                <a href="#" class="btn btn-border">Purchase</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div class="pricing-table text-center">
              <div class="pricing-details">
                <h3>standard</h3>
                <h1><span>$</span>19.99</h1>
                <ul>
                  <li>Free Instalation</li>
                  <li>2 GB Storage</li>
                  <li>Upto 2 users</li>
                  <li>50 GB Bandwith</li>
                  <li>All Features</li>
                  <li>Sales Dashboard</li>                  
                </ul>
              </div>
              <div class="plan-button">
                <a href="#" class="btn btn-common">Purchase</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div class="pricing-table text-center">
              <div class="pricing-details">
                <h3>Business</h3>
                <h1><span>$</span>29.99</h1>
                <ul>
                  <li>Free Instalation</li>
                  <li>5 GB Storage</li>
                  <li>Upto 4 users</li>
                  <li>100 GB Bandwith</li>
                  <li>All Features</li>
                  <li>Sales Dashboard</li>
                </ul>
              </div>
              <div class="plan-button">
                <a href="#" class="btn btn-border">Purchase</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section> */}
    
    <section id="testimonial" class="section">
      <div class="container right-position">
        <div class="row">
          <div class="col-md-12 col-sm-12">
          
            <div class="video-promo-content text-center">

              <a id="play-video" class="video-play-button video-popup" href="https://www.youtube.com/watch?v=TuUVVKVdZm4&list=RDTuUVVKVdZm4&start_radio=1&ab_channel=SonyMusicIndiaVEVO"> 
              
                <span></span>
              </a>

            </div>
          </div>
        </div>
        <div class="row justify-content-center testimonial-area">
          <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12 pr-20 pl-20" style={{overflow: "hidden;padding-bottom: 60px"}}>
            <div id="client-testimonial" class="text-center owl-carousel">
              <div class="item">
                <div class="testimonial-item">
                  <div class="content-inner">
                    <p class="description">Professor Soumitra Mishra here, teaching development for decades. I've seen many inventory systems, but UniCart stands out. User-friendly, with features like getting premium items from inventory. In class, it optimized stock levels and minimized stockouts. Particularly impressed by its ability to manage the whole process of issueing and returning back to admin. This system has potential to revolutionize inventory management. Highly recommend it.</p>
                    <div class="author-info">
                      <h5>Soumitra Mishra : <span> NST Professor</span></h5>
                    </div>
                  </div>
                  <div class="client-thumb">
                    <img src="https://media.licdn.com/dms/image/C5603AQHclRq9e3Kpeg/profile-displayphoto-shrink_800_800/0/1650201310768?e=1720656000&v=beta&t=dUjO3YUN5cOKCByceK_FZn3FUpaoO9H0dXsX4mehE8A" alt="" style={{width:"8em"}}/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="team" class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="team-text section-header text-center">  
              <div>   
                <h2 class="section-title">Our Developers</h2>
                <div class="desc-text">
                  <p>Hey everyone, the Dev Team here!  We're a bunch of tech and robotics enthusiasts who got tired of seeing amazing ideas held back by limited resources. So, we built this platform!  Now you can rent the coolest tech and robotics gear, manage it with ease, and focus on what matters – making something incredible. Let's turn those late-night brainstorming sessions into reality!   We're excited to see what you build</p>  
                  
                </div>
              </div> 
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="single-team" style={{borderRadius:"400px"}}>
              <div class="team-thumb">
                <img src="https://firebasestorage.googleapis.com/v0/b/unicart-d242d.appspot.com/o/IMG-20231003-WA0019.jpg?alt=media&token=2fd87920-712d-4ec1-9400-1a8fb4b462ca" class="img-fluid" alt="" style={{borderRadius:"400px"}}/>
              </div>

              <div class="team-details">
              <div class="team-social-icons">
                  <ul class="social-list">
                  <li><a href="https://github.com/MUFFANUJ"><i className='lni-google-plus d-flex justify-content-center align-items-center'><FiGithub size={26}/></i></a></li>
                    <li><a href="https://www.linkedin.com/in/anuj-singh-2b2ab6206/"><i className='lni-google-plus d-flex justify-content-center align-items-center'><CiLinkedin size={26}/></i></a></li>
                    <li className='text-center'><a href="https://www.instagram.com/nerd_anuj/"><i className='lni-google-plus d-flex justify-content-center align-items-center'><FaInstagram size={26}/></i></a></li>
                  </ul>
                </div> 
                <div class="team-inner text-center">
                  <h5 class="team-title">Anuj Kumar Singh</h5>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="single-team" style={{borderRadius:"400px"}}>
              <div class="team-thumb">
                <img src="https://firebasestorage.googleapis.com/v0/b/unicart-d242d.appspot.com/o/IMG-20231003-WA0019.jpg?alt=media&token=2fd87920-712d-4ec1-9400-1a8fb4b462ca" class="img-fluid" alt="" style={{borderRadius:"400px"}}/>
              </div>

              <div class="team-details">
              <div class="team-social-icons">
                  <ul class="social-list">
                  <li><a href="https://github.com/MUFFANUJ"><i className='lni-google-plus d-flex justify-content-center align-items-center'><FiGithub size={26}/></i></a></li>
                    <li><a href="https://www.linkedin.com/in/anuj-singh-2b2ab6206/"><i className='lni-google-plus d-flex justify-content-center align-items-center'><CiLinkedin size={26}/></i></a></li>
                    <li className='text-center'><a href="https://www.instagram.com/nerd_anuj/"><i className='lni-google-plus d-flex justify-content-center align-items-center'><FaInstagram size={26}/></i></a></li>
                  </ul>
                </div>
                <div class="team-inner text-center">
                  <h5 class="team-title">Celina D Cruze</h5>
                  <p>Front-end Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12 ">
            <div class="single-team" style={{borderRadius:"400px"}}>
              <div class="team-thumb">
                <img src="https://firebasestorage.googleapis.com/v0/b/unicart-d242d.appspot.com/o/IMG-20231003-WA0019.jpg?alt=media&token=2fd87920-712d-4ec1-9400-1a8fb4b462ca" class="img-fluid" alt="" style={{borderRadius:"400px"}}/>
              </div>

              <div class="team-details">
              <div class="team-social-icons">
                  <ul class="social-list">
                  <li><a href="#"><i className='lni-google-plus d-flex justify-content-center align-items-center'><FiGithub size={26}/></i></a></li>
                    <li><a href="#"><i className='lni-google-plus d-flex justify-content-center align-items-center'><CiLinkedin size={26}/></i></a></li>
                    <li className='text-center'><a href="#"><i className='lni-google-plus d-flex justify-content-center align-items-center'><FaInstagram size={26}/></i></a></li>
                  </ul>
                </div>
                <div class="team-inner text-center">
                  <h5 class="team-title">Daryl Dixon</h5>
                  <p>Content Writer</p>
                </div>
              </div>
            </div>
          </div>
          
 
          
          <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="single-team" style={{borderRadius:"400px"}}>
              <div class="team-thumb">
                <img src="https://firebasestorage.googleapis.com/v0/b/unicart-d242d.appspot.com/o/IMG-20231003-WA0019.jpg?alt=media&token=2fd87920-712d-4ec1-9400-1a8fb4b462ca" class="img-fluid" alt="" style={{borderRadius:"400px"}}/>
              </div>

              <div class="team-details">
                <div class="team-social-icons">
                  <ul class="social-list">
                    <li><a href="#"><i className='lni-google-plus d-flex justify-content-center align-items-center'><FiGithub size={26}/></i></a></li>
                    <li><a href="#"><i className='lni-google-plus d-flex justify-content-center align-items-center'><CiLinkedin size={26}/></i></a></li>
                    <li className='text-center'><a href="#"><i className='lni-google-plus d-flex justify-content-center align-items-center'><FaInstagram size={26}/></i></a></li>
                  </ul>
                </div>
                <div class="team-inner text-center">
                  <h5 class="team-title">Mark Parker</h5>
                  <p>Support Engineer</p>
                </div>
              </div>
            </div>
          </div>
          
 

        </div>
      </div>
    </section>
    <section id="blog" class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-text section-header text-center">  
              <div>   
                <h2 class="section-title">Latest Blog Posts</h2>
                <div class="desc-text">
                  <p>Dive into inspiring stories, practical tips, and expert insights on our blog.  Discover how to unlock the full potential of the latest tech and robotics, conquer creative challenges, and turn your ideas into reality.  Let's invent the future, together!</p>  
                </div>
              </div> 
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12 blog-item">
            <div class="blog-item-wrapper">
              <div class="blog-item-img">
                <a href="single-post.html">
                  <img src="img/blog/01.jpg" class="img-fluid" alt="" />
                </a>             
              </div>
              <div class="blog-item-text"> 
                <h3><a href="single-post.html">How Slick Will Transform  <br />Your Business</a></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <a href="" class="read-more">5 Min read</a>
              </div>
              <div class="author">
                <span class="name"><i class="lni-user"></i><a href="#">Posted by Admin</a></span>
                <span class="date float-right"><i class="lni-calendar"></i><a href="#">10 April, 2020</a></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12 blog-item">
            <div class="blog-item-wrapper">
              <div class="blog-item-img">
                <a href="single-post.html">
                  <img src="img/blog/02.jpg" class="img-fluid" alt="" />
                </a>             
              </div>
              <div class="blog-item-text"> 
                <h3><a href="single-post.html">Growth Techniques for  <br />New Startups</a></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <a href="" class="read-more">5 Min read</a>
              </div>
              <div class="author">
                <span class="name"><i class="lni-user"></i><a href="#">Posted by Admin</a></span>
                <span class="date float-right"><i class="lni-calendar"></i><a href="#">10 April, 2020</a></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12 blog-item">
            <div class="blog-item-wrapper">
              <div class="blog-item-img">
                <a href="single-post.html">
                  <img src="img/blog/03.jpg" class="img-fluid" alt="" />
                </a>             
              </div>
              <div class="blog-item-text"> 
                <h3><a href="single-post.html">Writing Professional <br />Emails to Customers</a></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <a href="" class="read-more">5 Min read</a>
              </div>
              <div class="author">
                <span class="name"><i class="lni-user"></i><a href="#">Posted by Admin</a></span>
                <span class="date float-right"><i class="lni-calendar"></i><a href="#">10 April, 2020</a></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section id="contact" class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="contact-text section-header text-center">  
              <div>   
                <h2 class="section-title">Get In Touch</h2>
                <div class="desc-text">
                  <p>Stuck on a project or have a burning question?  Don't let it stop your inventing spree!  Our friendly support team is here to help.  Reach out through chat, email, or phone, and we'll get you back on track in no time.  Let's keep the innovation flowing together! </p>  
                </div>
              </div> 
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12">
          <form id="contactForm">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name" />
                  <div class="help-block with-errors"></div>
                </div>                                 
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" id="email" name="email" placeholder="Email" required data-error="Please enter your Email" />
                  <div class="help-block with-errors"></div>
                </div>                                 
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input type="text" placeholder="Subject" id="msg_subject" class="form-control" name="msg_subject" required data-error="Please enter your subject" />
                  <div class="help-block with-errors"></div>
                </div> 
              </div>
              
              <div class="col-md-12">
                <div class="form-group"> 
                  <textarea class="form-control" id="message"  name="message" placeholder="Write Message" rows="4" data-error="Write your message" required></textarea>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="submit-button">
                  <button class="btn btn-common" id="submit" type="submit">Submit</button>
                  <div id="msgSubmit" class="h3 hidden"></div> 
                  <div class="clearfix"></div> 
                </div>
              </div>
            </div>            
          </form>
          </div>
          <div class="col-lg-1">
            
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="contact-img">
              <img src={contact} class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-lg-1">
          </div>

        </div>
      </div>
    </section>
    <Footer/>
    <a href="#" class="back-to-top">
      <i class="lni-chevron-up"></i>
    </a> 
    </div>
  )
}
