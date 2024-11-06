import React, { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import db from "../../database/db";
import { FaCheckCircle } from "react-icons/fa";
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

export default function InstructorViewAllItems({ items, setItems }) {
  const [loading, setLoading] = useState(false);
  const [ratingSort, setRatingSort] = useState(false);
  const [itemsCopy, setItemsCopy] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editAvailibility, setEditAvalibility] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editImg1, setEditImg1] = useState("");
  const [editImg2, setEditImg2] = useState("");
  const [editImg3, setEditImg3] = useState("");
  const [editImg4, setEditImg4] = useState("");
  const [editImg5, setEditImg5] = useState("");
  const [editStatus, setEditStatus] = useState(false);

  useEffect(() => {
    async function getProducts() {
      const userReqRef = collection(db, `productsData`);
      const userReqs = onSnapshot(userReqRef, (querySnapshot) => {
        const req = [];
        querySnapshot.forEach((doc) => {
          req.push(doc.data());
        });
        setItems(req);
        setLoading(true);
      });
      return () => {
        userReqs();
      };
    }
    getProducts();
  }, []);


  function sortByRating() {
    const newArrayToSort = items.slice();
    newArrayToSort.sort((a, b) => b.rating - a.rating);
    setItems([...newArrayToSort]);

  }

  // function handleRatingSort(){
  //   const arr = sortByRating(items);
  //   setItems([...arr])
  // }

  function handleEdit(prodID) {
    const updatedReqStatus = {};
    if (editTitle) {
      updatedReqStatus.title = editTitle;
    }
    if (editDescription) {
      updatedReqStatus.description = editDescription;
    }
    if (editAvailibility) {
      updatedReqStatus.availablility = editAvailibility;
    }
    if (editCategory) {
      updatedReqStatus.category = editCategory;
    }
    if (editImg1) {
      updatedReqStatus.imageUrl1 = editImg1;
    }
    if (editImg2) {
      updatedReqStatus.imageUrl2 = editImg2;
    }
    if (editImg3) {
      updatedReqStatus.imageUrl3 = editImg3;
    }
    if (editImg4) {
      updatedReqStatus.imageUrl4 = editImg4;
    }
    if (editImg5) {
      updatedReqStatus.imageUrl5 = editImg5;
    }

    try {
      const statusReq = collection(db, "productsData");
      const refering = doc(statusReq, String(prodID));
      updateDoc(refering, updatedReqStatus);
      // console.log("Data Successful");
      setEditStatus(true);
    } catch (error) {
      console.log("There was an Error Updating", error);
    }

    setEditAvalibility("");
    setEditCategory("");
    setEditDescription("");
    setEditTitle("");
    setEditImg1("");
    setEditImg2("");
    setEditImg3("");
    setEditImg4("");
    setEditImg5("");
  }

  async function handleDelete(prodID) {
    try {
      const statusReq = collection(db, "productsData");
      const refering = doc(statusReq, String(prodID));
      await deleteDoc(refering);
    } catch (error) {
      console.log("There Was an error clearing request", error);
    }
  }

  return (
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
          Search
        </button>
      </div>

      <div className="w-75 m-auto">
        <span>Sort Items With:</span>
        <button type="button" class="btn btn-success btn-sm m-1">
          All
        </button>
        <button type="button" class="btn btn-success btn-sm m-1">
          Newest First
        </button>
        <button type="button" class="btn btn-success btn-sm m-1">
          Available
        </button>
        <button
          type="button"
          class="btn btn-success btn-sm m-1"
          onClick={sortByRating}
        >
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

      <p>Total Search Results:{items.length}</p>
      {items.length === 0 ? <h2>No Products At The Moment...</h2> : ""}

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
                        class="btn btn-sm btn-danger p-2"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete This Item
                      </button>
                      {/* <button class="btn btn-sm btn-success p-2" onClick={()=>handleEdit()}>
                        Edit This Item
                      </button> */}

                      <button
                        type="button"
                        class="btn btn-sm btn-success p-2"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal${item.id}`}
                        data-bs-whatever="@mdo"
                      >
                        Edit This Item
                      </button>

                      {!editStatus ? (
                        <div
                          class="modal fade"
                          id={`exampleModal${item.id}`}
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Edit Details For:- {item.title}
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  onClick={() => setEditStatus(false)}
                                ></button>
                              </div>
                              <div class="modal-body">
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    handleEdit(item.id);
                                  }}
                                >
                                  <div class="mb-1 text-start">
                                    <label
                                      for="recipient-name"
                                      class="col-form-label"
                                    >
                                      Title:
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="recipient-name"
                                      value={editTitle}
                                      onChange={(ev) =>
                                        setEditTitle(ev.target.value)
                                      }
                                    />
                                  </div>
                                  <div class="mb-1 text-start">
                                    <label
                                      for="message-text"
                                      class="col-form-label"
                                    >
                                      Description:
                                    </label>
                                    <textarea
                                      class="form-control"
                                      id="message-text"
                                      value={editDescription}
                                      onChange={(ev) =>
                                        setEditDescription(ev.target.value)
                                      }
                                    ></textarea>
                                  </div>
                                  <div class="mb-1 text-start">
                                    <label
                                      for="recipient-name"
                                      class="col-form-label"
                                    >
                                      Availablility:
                                    </label>
                                    <input
                                      type="number"
                                      class="form-control"
                                      id="recipient-name"
                                      value={editAvailibility}
                                      onChange={(ev) =>
                                        setEditAvalibility(ev.target.value)
                                      }
                                    />
                                  </div>
                                  <div class="mb-1 text-start">
                                    <label
                                      for="recipient-name"
                                      class="col-form-label"
                                    >
                                      Category:
                                    </label>
                                    <input
                                      type="number"
                                      class="form-control"
                                      id="recipient-name"
                                      value={editCategory}
                                      onChange={(ev) =>
                                        setEditCategory(ev.target.value)
                                      }
                                    />
                                  </div>
                                  <div class="mb-1 text-start">
                                    <label
                                      for="recipient-name"
                                      class="col-form-label"
                                    >
                                      Image-1:-
                                    </label>
                                    <input
                                      type="text"
                                      class=""
                                      id="recipient-name"
                                      value={editImg1}
                                      onChange={(ev) =>
                                        setEditImg1(ev.target.value)
                                      }
                                    />
                                    <div>
                                      <label
                                        for="recipient-name"
                                        class="col-form-label"
                                      >
                                        Image-2:-
                                      </label>
                                      <input
                                        type="text"
                                        class=""
                                        id="recipient-name"
                                        value={editImg2}
                                        onChange={(ev) =>
                                          setEditImg2(ev.target.value)
                                        }
                                      />
                                    </div>
                                    <label
                                      for="recipient-name"
                                      class="col-form-label"
                                    >
                                      Image-3:-
                                    </label>
                                    <input
                                      type="text"
                                      class=""
                                      id="recipient-name"
                                      value={editImg3}
                                      onChange={(ev) =>
                                        setEditImg3(ev.target.value)
                                      }
                                    />
                                    <div>
                                      <label
                                        for="recipient-name"
                                        class="col-form-label"
                                        value={editImg4}
                                        onChange={(ev) =>
                                          setEditImg4(ev.target.value)
                                        }
                                      >
                                        Image-4:-
                                      </label>
                                      <input
                                        type="text"
                                        class=""
                                        id="recipient-name"
                                      />
                                    </div>
                                    <label
                                      for="recipient-name"
                                      class="col-form-label"
                                    >
                                      Image-5:-
                                    </label>
                                    <input
                                      type="text"
                                      class=""
                                      id="recipient-name"
                                      value={editImg5}
                                      onChange={(ev) =>
                                        setEditImg5(ev.target.value)
                                      }
                                    />
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="submit"
                                      class="btn btn-primary"
                                    >
                                      Submit
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                      onClick={() => setEditStatus(false)}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          class="modal fade"
                          id={`exampleModal${item.id}`}
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Edit Details For:- {item.title}
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  onClick={() => setEditStatus(false)}
                                ></button>
                              </div>
                              <div class="modal-body text-success">
                                <span className="m-1">
                                  Item Edited Successfully{" "}
                                </span>
                                <FaCheckCircle size={30} />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                  onClick={() => setEditStatus(false)}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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
      </div>
    </>
  );
}
