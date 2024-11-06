import React, { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import db from "../../database/db";
import { IoGitPullRequest } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

import { doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  runTransaction,
  collection,
  addDoc,
  deleteDoc,
  onSnapshot, } from "firebase/firestore";

export default function ViewAllItems({ userName, setUserName }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState(false);
  // const [userName, setUserName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [currentItem, SetCurrentItem] = useState({});
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItems(data.products);
  //       setLoading(true);
  //     });
  // }, []);

  useEffect(() => {
    async function getProducts() {
      const userReqRef = collection(db, `productsData`)
      const userReqs = onSnapshot(userReqRef, (querySnapshot)=>{
        const req = []
        querySnapshot.forEach((doc)=>{
          req.push(doc.data());
        })
        setItems(req);
        setLoading(true);
        // console.log(myRequest)
      })
      return ()=>{
        userReqs()
      }
    }
    // async function getProducts() {
    //   const productRef = doc(db, "productsData", "items");
    //   const docSnap = await getDoc(productRef);
    //   if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data().product);
    //     setItems(docSnap.data().product);
    //     setLoading(true);
    //   } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }
    getProducts();
  }, []);

  async function handleRequestSubmissison(event) {
    // console.log("hello")
    // console.log(userName)
    // console.log(reason)
    // console.log(startDate)
    // console.log(endDate)
    // console.log(currentItem.title)
    event.preventDefault();
    const date = new Date().getTime();
    try {
      await setDoc(doc(db, "Allrequests", String(date)), {
          request_for: currentItem.title,
          availablility: currentItem.availablility,
          username: userName,
          reason: reason,
          startDate: startDate,
          endDate: endDate,
          status: "pending",
          id: date ,
      });

      setRequestStatus(true);
      // console.log("Data written successfully!");
    } catch (error) {
      console.error("Error writing data:", error);
    }


    try {
      await setDoc(doc(db,`${userName}`, String(date)), {
          request_for: currentItem.title,
          availablility: currentItem.availablility,
          username: userName,
          reason: reason,
          startDate: startDate,
          endDate: endDate,
          status: "pending",
          id: date ,

      });

      setRequestStatus(true);
      // console.log("Data written successfully!");
    } catch (error) {
      console.error("Error writing data:", error);
    }

    setUserName("");
    setStartDate("");
    setEndDate("");
    setReason("");
  }

  return (
    // <div className="m-auto p-0">
    <>
      <div class="input-group mb-3 mt-4 m-auto w-75">
        <input
          type="text"
          class="form-control"
          placeholder="Search An Item"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-success"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>

      <div className="w-75 m-auto">
        <span>Sort Items With:</span>
        <button type="button" class="btn btn-success btn-sm m-1">
          Newest First
        </button>
        <button type="button" class="btn btn-success btn-sm m-1">
          Rating
        </button>
        <button type="button" class="btn btn-success btn-sm m-1">
          Price: Low To High
        </button>
        <button type="button" class="btn btn-success btn-sm m-1">
          Price: High To Low
        </button>
        <select class="btn btn-success btn-sm m-1">
          <option selected>Items Category</option>
          <option value="1">Arduino Uno</option>
          <option value="1">Battery</option>
          <option value="3">BreadBoard</option>
          <option value="2">Software</option>
          <option value="3">Motors</option>
          <option value="3">Drone</option>
          <option value="3">Rasberry</option>
          <option value="3">propeller</option>
          <option value="3">wheels</option>
          <option value="3">wires</option>
        </select>
      </div>

      {/* <div className="m-auto"> */}
      <p>Total Search Results:{items.length}</p>
      {items.length === 0 ? ( <h2>No Products At The Moment...</h2>):("")}

      <div class="d-flex flex-wrap gap-3 justify-content-center m-auto align-items-center">
        {loading ? (
          <>
            {items.map((item) => {
              return (
                <div class="card" style={{ width: "18rem" }}>
                  <div
                    id={`carouselExample_${item.id}`}
                    class={`carousel slide ${item.id}`}
                  >
                    <div class="carousel-inner">
                      <div class={`carousel-item active ${item.id}`}>
                        <img
                          src={
                            item.imageUrl1
                              ? item.imageUrl1
                              : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                          }
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={
                            item.imageUrl2
                              ? item.imageUrl2
                              : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                          }
                          class="d-block w-100"
                          alt="..."
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={
                            item.imageUrl3
                              ? item.imageUrl3
                              : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                          }
                          class="d-block w-100"
                          alt="..."
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={
                            item.imageUrl4
                              ? item.imageUrl4
                              : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                          }
                          class="d-block w-100"
                          alt="..."
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={
                            item.imageUrl5
                              ? item.imageUrl5
                              : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                          }
                          class="d-block w-100"
                          alt="..."
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carouselExample_${item.id}`}
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target={`#carouselExample_${item.id}`}
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p
                      class="card-text overflow-auto card m-1"
                      style={{ height: "60px" }}
                    >
                      {item.description}
                    </p>
                    <p class="card-text m-0">
                      Rating:{item.rating ? item.rating : 0} <IoIosStar />
                    </p>
                    <p class="card-text m-0">
                      Items Available in Inventory: {item.availablility}
                    </p>
                    <p class="card-text">
                      Price: {item.price ? item.price : 0}
                      <div></div>
                      <span class="badge text-bg-success">
                        #{item.category}
                      </span>
                    </p>

                    <div className="d-flex justify-content-around">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal_${item.id}`}
                        data-bs-whatever="@mdo"
                      >
                        Issue This Item
                      </button>

                      <div
                        class="modal fade"
                        id={`exampleModal_${item.id}`}
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <>
                          {!requestStatus ? (
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id={`exampleModalLabel_${item.id}`}
                                  >
                                    <IoGitPullRequest /> Item Selected:{" "}
                                    {item.title}
                                  </h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <form
                                    class="was-validated"
                                    onSubmit={handleRequestSubmissison}
                                  >
                                    <div class="mb-3">
                                      <label
                                        for="validationTextarea"
                                        class="form-label"
                                      >
                                        Your Name:
                                      </label>
                                      <input
                                        type="input"
                                        class="form-control"
                                        value={userName}
                                        id="validationTextarea"
                                        placeholder="Product Title"
                                        onChange={(ev) =>
                                          setUserName(ev.target.value)
                                        }
                                        required
                                      ></input>
                                    </div>

                                    <div class="mb-3">
                                      <label
                                        for="validationTextarea"
                                        class="form-label"
                                      >
                                        Request Item From:
                                      </label>
                                      <input
                                        type="date"
                                        class="form-control"
                                        value={startDate}
                                        id="validationTextarea"
                                        placeholder="Product Title"
                                        onMouseUp={() => {
                                          SetCurrentItem(item);
                                        }}
                                        onChange={(ev) =>
                                          setStartDate(ev.target.value)
                                        }
                                        required
                                      ></input>
                                    </div>

                                    <div class="mb-3">
                                      <label
                                        for="validationTextarea"
                                        class="form-label"
                                      >
                                        Request Item Till:
                                      </label>
                                      <input
                                        type="date"
                                        class="form-control"
                                        value={endDate}
                                        id="validationTextarea"
                                        placeholder="Product Title"
                                        onChange={(ev) =>
                                          setEndDate(ev.target.value)
                                        }
                                        required
                                      ></input>
                                    </div>

                                    <div class="mb-3">
                                      <label
                                        for="validationTextarea"
                                        class="form-label"
                                      >
                                        Why You Want To Issue This Item?
                                      </label>
                                      <textarea
                                        class="form-control"
                                        id="validationInput"
                                        placeholder="Product Description"
                                        rows={4}
                                        value={reason}
                                        onChange={(ev) =>
                                          setReason(ev.target.value)
                                        }
                                        required
                                      ></textarea>
                                    </div>

                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="submit"
                                        class="btn btn-primary"
                                      >
                                        Send Request
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id={`exampleModalLabel_${item.id}`}
                                  >
                                    <IoGitPullRequest /> Item Selected:{" "}
                                    {item.title}
                                  </h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => {
                                      setRequestStatus(false);
                                    }}
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <div class="modal-body d-flex justify-content-center align-items-center text-success">
                                    <span className="m-1">
                                      Request Send Successfully{" "}
                                    </span>
                                    <FaCheckCircle size={30} />
                                    <div className="m-1">
                                      {/* <FaCheckCircle size={25} /> */}
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                      setRequestStatus(false);
                                    }}
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      </div>
                      {/* <button class="btn btn-sm btn-primary p-2">
                        Issue This Item
                      </button> */}
                      {/* <button class="btn btn-sm btn-success p-2">
                        Buy This Item
                      </button> */}
                    </div>
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
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://s1.zerochan.net/Okumura.Rin.600.660518.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://honeysanime.com/wp-content/uploads/2015/12/Uchouten-Kazoku-Wallpaper-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://historyofblacksuperheroes.com/wp-content/uploads/2021/08/unnamed-file-20-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://historyofblacksuperheroes.com/wp-content/uploads/2020/08/TOO-Fly-For-Words-%F0%9F%92%A5Credit-@mcflyy__We-Love-Samurai...-case-yall-was-curious...__ImASuperhero-PantheonUniverse-BlackSuperheroes-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://historyofblacksuperheroes.com/wp-content/uploads/2021/03/unnamed-file-5-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://historyofblacksuperheroes.com/wp-content/uploads/2021/12/When-The-Small-Talk-Becomes-Unnecessary...-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
      </div>
      {/* </div> */}
      {/* // </div> */}
      {/* // </div> */}
      {/* </div> */}
    </>
  );
}
