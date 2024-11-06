import React, { useState, useEffect } from "react";
import db from "../../database/db";
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
export default function MyRequest({ userName, setUserName }) {
  const [myRequest, setMyRequest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accepted,setAccepted] = useState(false);

  useEffect(() => {
    async function getRequests() {
      const userReqRef = collection(db, `anuj`)
      const userReqs = onSnapshot(userReqRef, (querySnapshot)=>{
        const req = []
        querySnapshot.forEach((doc)=>{
          req.push(doc.data());
        })
        setMyRequest(req);
        setLoading(true);
        // console.log(myRequest)
      })
      return ()=>{
        userReqs()
      }
    }

      // const requestsRef = doc(db, `${userName}`, "requests");
    //   const docSnap = await getDoc(requestsRef);
    //   if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data().request);
    //     setMyRequest(docSnap.data().request);
    //     setLoading(true);
    //   } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }
    getRequests();
    
  }, []);

  async function delcheck(){
    await deleteDoc(doc(db, "Allrequests", "DC"));

  }
  
  async function handleCancelRerquest(request) {
    delcheck()
   
  }
  async function handleClear(ReqUserName,reqID){
    try {
      const statusReq = collection(db,ReqUserName);
      const refering = doc(statusReq,String(reqID))
      await deleteDoc(refering)
    } catch (error) {
      console.log("There Was an error clearing request", error)
    }
  }
  return (
    <>
      <h1>My Requests</h1>
      {myRequest.length === 0 ? ( <h2>You Haven't Requested For Anything yet...</h2>):("")}
      <div class="d-flex flex-wrap gap-3 justify-content-center m-auto align-items-center">
        {loading ? (
          <>
            {myRequest.map((request) => {
              
                let background;
                if(request.status == "pending"){
                  background = "bg-warning";
                }else if (request.status == "Accepted"){
                  background = "bg-success text-white";
                }else if (request.status == "Rejected"){
                  background = "bg-danger text-white";
                }
                
              return (
                <div class="card" style={{ width: "18rem;" }}>
                  <div class="card-body">
                    <h5 class="card-title">Request For:- {request.request_for}</h5>
                    <p class="card-text">
                      Requested From:- {request.startDate} 
                    </p>
                    <p class="card-text">Requested Till:- {request.endDate}</p>
                    <p class="card-text">Reason:- {request.reason}</p>
                    <p class="card-text">
                      Availablility Count: {request.availablility}
                    </p>
                    {/* <p class="card-text">{request.reason}</p> */}
                    
                    <p class={`card-text ${background} rounded`}>
                      {request.status}
                    </p>
                {!(request.status === "Accepted" || request.status === "Rejected") ? (
                <button
                      class="btn btn-danger m-1"
                      onClick={() =>handleClear(request.username, request.id)}
                    >
                      Cancel Request
                    </button>
                    ):(<button
                      class="btn btn-info m-1"
                      onClick={()=>handleClear(request.username, request.id)}
                    >
                      Clear Request
                    </button>)
                    
                }
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div class="text-center d-flex align-items-center justify-content-center">
              <div className="m-2">Loading...</div>
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
