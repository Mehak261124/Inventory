import React, { useState, useEffect } from 'react'
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
  QuerySnapshot,
} from "firebase/firestore";

export default function HistoryOfRequests() {
  const [requestArr,setRequestArr] = useState([])
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function getRequests() {
      const userReqRef = collection(db, `Allrequests`)
      const userReqs = onSnapshot(userReqRef, (querySnapshot)=>{
        const req = []
        querySnapshot.forEach((doc)=>{
          req.push(doc.data());
          // console.log(doc.data().id)
        })
        setRequestArr(req);
        // console.log(requestArr)
        setLoading(true);
      })
      return ()=>{
        userReqs()
      }
    
      // const requestsRef = doc(db, "Allrequests","requests");
      // const docSnap = await getDoc(requestsRef);
      // if (docSnap.exists()) {
      //   console.log("Document data:", (docSnap.data()).request);
      //   setRequestArr((docSnap.data()).request);
      //   // setLoading(true);
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    }
    getRequests();
  },[]);


  function handleAccept(ReqUserName,reqID,amount){
    const updatedReqStatus = {
      availablility: amount-1,
      status: "Accepted",
    }
    try{
      const statusReq = collection(db,ReqUserName);
      const refering = doc(statusReq,String(reqID))
      updateDoc(refering,updatedReqStatus)
      // console.log("Data Successful")
    }catch(error){
      console.log("There was an Error Updating",error)
    }


    try{
      const statusReq = collection(db,"Allrequests");
      const refering = doc(statusReq,String(reqID))
      updateDoc(refering,updatedReqStatus)
      // console.log("Data Successful")
    }catch(error){
      console.log("There was an Error Updating",error)
    }
  }


  function handleReject(ReqUserName,reqID){
    const updatedReqStatus = {
      
      status: "Rejected",
    }
    try{
      const statusReq = collection(db,ReqUserName);
      const refering = doc(statusReq,String(reqID))
      updateDoc(refering,updatedReqStatus)
      // console.log("Data Successful")
    }catch(error){
      console.log("There was an Error Updating",error)
    }


    try{
      const statusReq = collection(db,"Allrequests");
      const refering = doc(statusReq,String(reqID))
      updateDoc(refering,updatedReqStatus)
      console.log("Data Successful")
    }catch(error){
      console.log("There was an Error Updating",error)
    }
  }

  async function handleClear(ReqUserName,reqID){
    try {
      const statusReq = collection(db,"Allrequests");
      const refering = doc(statusReq,String(reqID))
      await deleteDoc(refering)
    } catch (error) {
      console.log("There Was an error clearing request", error)
    }
  }
  // }
  return (
    <>
    <h1>All Requests</h1>
    {requestArr.length === 0 ? ( <h2>Request History Is Empty...</h2>):("")}
    <div class="d-flex flex-wrap gap-3 justify-content-center m-auto align-items-center">
    {loading ? (
          <>
            {requestArr.map((request) => {
              let background;
              if(request.status == "pending"){
                background = "bg-warning";
              }else if (request.status == "Accepted"){
                background = "bg-success text-white";
               
              }else if (request.status == "Rejected"){
                background = "bg-danger text-white";
               
              }
                  return (<div class="card" style={{width: "18rem;"}}>
                  <div class="card-body">
                    <h5 class="card-title">Request For :- {request.request_for}</h5>
                    <p class="card-text">Request From:- {request.username}</p>
                    <p class="card-text">Requested Item From:- {request.startDate} </p>
                    <p class="card-text">Requested Item Till:- {request.endDate}</p>
                    <p class="card-text">Reason:- {request.reason}</p>
                    {/* <p class="card-text">Reason:- {request.id}</p> */}
                    <p class="card-text">Availablility Count: {request.availablility}</p>
                    {/* <p class="card-text">{request.reason}</p> */}
                    <p class={`card-text ${background} rounded`}>{request.status}</p>
                    {!(request.status === "Accepted" || request.status === "Rejected") ? (<><button class="btn btn-success m-1"  onClick={()=>handleAccept(request.username, request.id,request.availablility)}>Accept</button>

                    <button class="btn btn-danger m-1" onClick={()=>handleReject(request.username, request.id)}>Reject</button></>):(<button class="btn btn-info m-1" onClick={()=>handleClear(request.username, request.id)}>Clear</button>)}
                  </div>
                </div>)
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
  )

        }