import React, { useState, useEffect } from "react";
import db from "../../database/db";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { TbPremiumRights } from "react-icons/tb";


import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  runTransaction,
  collection,
  addDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export default function StudentHome() {
  const [latest, setLatest] = useState([]);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const userReqRef = collection(db, `productsData`);
      const userReqs = onSnapshot(userReqRef, (querySnapshot) => {
        const req = [];
        querySnapshot.forEach((doc) => {
          req.push(doc.data());
        });
        setLatest(req.slice(-3));
        setTrending(req.slice(-9));
        // setLoading(true);
      });
      return () => {
        userReqs();
      };
    }
    getProducts();
  }, []);
  return (
    <div>

      <div>
        <h2>UniCart Specials <TbPremiumRights/></h2>
        <div class="card-wrapper container-sm d-flex  justify-content-around">
        <div class="card " style={{ width: "18rem;" }}>
                <img
                  src="https://sm.mashable.com/mashable_me/article/a/apple-visi/apple-vision-pro-returns-are-happening-but-is-it-actually-a_3x3g.jpg"
                  class="card-img-top"
                  alt="..."
                  style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">Apple Vision Pro</h5>
                </div>
              </div>

              <div class="card " style={{ width: "18rem;" }}>
                <img
                  src="https://assets.newatlas.com/dims4/default/d3da2bd/2147483647/strip/true/crop/3443x2295+573+320/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2F0a%2F70c848b546efa2fdc138f271c99f%2Flifestyle-1.jpg"
                  class="card-img-top"
                  alt="..."
                  style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">oculus quest 2</h5>
                </div>
              </div>
        </div>
        
      </div>
      <div className="m-5"></div>
      <hr />
      <div className="m-5"></div>

      <h2>
        Our Latest Products <MdOutlineWatchLater size={35} />
      </h2>
      <div class="card-wrapper container-sm d-flex  justify-content-around">
        {latest.map((ele) => {
          return (
            <>
              <div class="card " style={{ width: "18rem;" }}>
                <img
                  src={ele.imageUrl1}
                  class="card-img-top"
                  alt="..."
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">{ele.title}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="m-5"></div>
      <hr />
      <div className="m-5"></div>

      <h2>
        Trending Section <BsFire size={35} />
      </h2>
      <div class="card-wrapper container-sm d-flex  justify-content-around">
        {trending.map((ele) => {
          return (
            <>
              <div class="card " style={{ width: "18rem;" }}>
                <img
                  src={ele.imageUrl1}
                  class="card-img-top"
                  alt="..."
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">{ele.title}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="m-5"></div>
      <hr />
      <div className="m-5"></div>
      <div>
        <h2 className="">Notifications and Updates</h2>
        <div>
          <ul className="text-start">
            <li>
              {" "}
              Grant available to all current learners (all programs, all years)
            </li>
            <li>
              Reward points (25,000 per enrollment) given to referrers in first
              week of November 2024
            </li>
            <li>
              Grant available for up to 3 successful enrollments (up to 75,000
              points)
            </li>
            <li>
              Refer applicants to any of the 5 programs: B.Design, Makers
              Undergrad, Business Analytics with KPMG, B.Tech in CS and AI with
              Newton School of Technology, BSc Hons in Psychology
            </li>
            <div className="d-flex flex-column align-items-center">
              <p>
                Choose from various reward options based on your total
                referrals.
              </p>
              <p className="text-center">
                <thead>
                  <tr>
                    <th># of referrals</th>
                    <th>Reward Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>25,000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>50,000</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>75,000</td>
                  </tr>
                </tbody>
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
