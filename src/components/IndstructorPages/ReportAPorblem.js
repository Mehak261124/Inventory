import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdFeedback } from "react-icons/md";

export default function ReportAPorblem() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("")
    setEmail("")
    setMessage("")
    emailjs
      .sendForm('service_xdkkrkr', 'template_pxvq4y4', form.current, {
        publicKey: 'YYHtgp7__9NHK6z2K',
      })
      .then(
        () => {
          console.log('SUCCESS!');

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <h3>Report A Problem</h3>
    <div className='card w-75 m-auto text-start mt-1 p-3'>
      <form className="was-validated" onSubmit={sendEmail} ref={form}>
  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Your Name</label>
    <input className="form-control" id="validationTextarea" value={name} onChange={(ev)=> setName(ev.target.value)} placeholder="Enter your name..."  name='user_name' required></input>
    </div>

  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Your Email</label>
    <input className="form-control" id="validationTextarea" value={email} onChange={(ev) => setEmail(ev.target.value)} type='email' placeholder="Enter your name..."  name='user_email' required></input>
    </div>

  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Your Complaint / Feedback <MdFeedback/></label>
    <textarea className="form-control" id="validationTextarea" value={message} onChange={(ev)=> setMessage(ev.target.value)} placeholder="Enter The Complaint Here..."  rows="6" name='message' required></textarea>
    <div className="invalid-feedback">
      Please enter a valid complaint .
    </div>
    </div>


    


  <div className="mb-3">
    <button className="btn btn-danger" type="submit" value="send">Report</button>
  </div>
</form>
<div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
    </div>
    </>
  )
}
