import React, { useEffect, useState } from "react";
import "./login-signup.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc,
  setDoc,
  collection,
  onSnapshot, } from "firebase/firestore";
import db from "../../database/db.js"
import { useNavigate } from "react-router-dom";

export default function LoginPage({login, setLogin}) {
  const  [email,setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("")
  const [admin,setAdmin] = useState({email:"admin@gmail.com",password:"admin1234"})
  

  const auth = getAuth();
  const navigate = useNavigate()
  // useEffect(()=>{
  //   async function getProducts() {
  //     const userReqRef = collection(db, "admin")
  //     const userReqs = onSnapshot(userReqRef, (querySnapshot)=>{
  //       const req = []
  //       querySnapshot.forEach((doc)=>{
  //         req.push(doc.data());
  //       })
  //       setAdmin(req);
  //     })
  //     return ()=>{
  //       userReqs()
  //     }
  //   }
  //   getProducts();
  // },[])

  console.log(admin)
  
  // const [login, setLogin] = useState(true);

  function handleLogin(e){
    e.preventDefault();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    if (admin.email === email ){
      console.log("going")
      navigate("/admin/home",{ replace: true });
    }else{
      // navigate("/admin",{ replace: true });
      console.log("student")
      navigate("/student/home",{ replace: true });
    }
    console.log("logged in success")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  setEmail("")
  setPassword("")
  }
  
  async function handleSignUp(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // console.log("user created")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  await setDoc(doc(db, "Users", email), {
    name: user,
    email: email,
    password: password,
  });
  // console.log("Successful")

  setEmail("")
  setPassword("")
  setUser("")
  }

  return (
    <div className="login-signup">
      <div className="login-signup">
        <div class={login ? `Logincontainer` : "Logincontainer sign-up-mode"}>
          <div class="forms-Logincontainer">
            <div class="signin-signup">
              <form action="#" class="sign-in-form" onSubmit={handleLogin}>
                <h2 class="title">Sign in</h2>
                <div class="input-field">
                  <i>
                    <FaRegUser />
                  </i>
                  <input type="email" placeholder="Email"  value={email} onChange={(ev)=> setEmail(ev.target.value)} />
                </div>
                <div class="input-field">
                  <i>
                    <RiLockPasswordLine />
                  </i>
                  <input type="password" placeholder="Password" value={password} onChange={(ev)=> setPassword(ev.target.value)} />
                </div>
                <input type="submit" value="Login" class="btn solid" />
                <p class="social-text">Or Sign in with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i>
                      <CiFacebook />
                    </i>
                  </a>
                  <a href="#" class="social-icon">
                    <i>
                      <CiTwitter />
                    </i>
                  </a>
                  <a href="#" class="social-icon">
                    <i>
                      <FaGoogle />
                    </i>
                  </a>
                  <a href="#" class="social-icon">
                    <i>
                      <FaGithub />
                    </i>
                  </a>
                </div>
              </form>
              <form action="#" class="sign-up-form " onSubmit={handleSignUp}>
                <h2 class="title">Sign up</h2>
                <div class="input-field">
                  <i>
                    <FaRegUser />
                  </i>
                  <input type="text" placeholder="Username" value={user} onChange={(ev)=> setUser(ev.target.value)}/>
                </div>
                <div class="input-field">
                  <i>
                    <TfiEmail />
                  </i>
                  <input type="email" placeholder="Email" value={email} onChange={(ev)=> setEmail(ev.target.value)}/>
                </div>
                <div class="input-field">
                  <i>
                    <RiLockPasswordLine />
                  </i>
                  <input type="password" placeholder="Password" value={password} onChange={(ev)=> setPassword(ev.target.value)}/>
                </div>
                <input type="submit" class="btn" value="Sign up" />
                <p class="social-text">Or Sign up with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i>
                      <CiFacebook />
                    </i>
                  </a>
                  <a href="#" class="social-icon">
                    <i>
                      <CiTwitter />
                    </i>
                  </a>
                  <a href="#" class="social-icon">
                    <i>
                      <FaGoogle />
                    </i>
                  </a>
                  <a href="#" class="social-icon">
                    <i>
                      <FaGithub />
                    </i>
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div class="panels-Logincontainer">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p className="inside-text">
                  Unleash your inner organizer! Join the inventory revolution
                  and take control of your stock. Sign up today and conquer
                  clutter for good!
                </p>
                <button
                  class="btn transparent"
                  id="sign-up-btn"
                  onClick={() => setLogin(false)}
                >
                  Sign up
                </button>
              </div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png?f=webp"
                class="image"
                alt=""
              />
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3>One of us ?</h3>
                <p className="inside-text">
                  Get ready to level up your stock management game! Conquer
                  clutter, gain total control, and keep things organized with
                  ease. Let's optimize your inventory together!
                </p>
                <button
                  class="btn transparent"
                  id="sign-in-btn"
                  onClick={() => setLogin(true)}
                >
                  Sign in
                </button>
              </div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-8694031-6983270.png"
                class="image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
