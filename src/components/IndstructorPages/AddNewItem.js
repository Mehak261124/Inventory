import React, { useState, useRef } from "react";
import {
  collection,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import db from "../../database/db";
import { FaCheckCircle } from "react-icons/fa";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

export default function AddNewItem({ setItems, items }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [availablility, setAvailablility] = useState("");
  const storage = getStorage();

  const [showDatabaseInfo, setShowDatabaseInfo] = useState(false);
  const [dataUploadStatus, setDataUploadStatus] = useState(false);
  const [checkBox,setCheckBox] = useState('');
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [imageUrl5, setImageUrl5] = useState("");

  async function handleAddNewItemSubmit(event) {
    event.preventDefault();
    setShowDatabaseInfo(true);
    const date = new Date().getTime();
    try {
      await setDoc(doc(db, "productsData", String(date)), {
          title: title,
          description: description,
          availablility: availablility,
          category: category,
          imageUrl1: imageUrl1,
          imageUrl2: imageUrl2,
          imageUrl3: imageUrl3,
          imageUrl4: imageUrl4,
          imageUrl5: imageUrl5,
          id:date,
      });

      setDataUploadStatus(true);
      // console.log("Data written successfully!");
    } catch (error) {
      console.error("Error writing data:", error);
    }

    setTitle("");
    setDescription("");
    setCategory("");
    setAvailablility("");
    setImageUrl1("");
    setImageUrl2("");
    setImageUrl3("");
    setImageUrl4("");
    setImageUrl5("");
    setCheckBox("")

  }

  return (
    <>
      <h3>Add A New Item</h3>

      <div className="card w-75 m-auto text-start mt-1 p-3">
        <form class="was-validated" onSubmit={handleAddNewItemSubmit}>
          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Product Title:
            </label>
            <input
              type="text"
              class="form-control"
              value={title}
              id="validationTextarea"
              placeholder="Product Title"
              onChange={(ev) => setTitle(ev.target.value)}
              required
            ></input>
            <div class="invalid-feedback">
              *This Title Will Be Displayed As Same As Entered Above On The
              Products Page*
            </div>
          </div>

          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Product Description:
            </label>
            <textarea
              class="form-control"
              id="validationInput"
              placeholder="Product Description"
              rows={4}
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
              required
            ></textarea>
            <div class="invalid-feedback">
              *Keep The Description Short And Precise, This Description Will
              Look As Same As You Have Entered Above On The Products Page*
            </div>
          </div>

          <div class="mb-3">
            <select
              class="form-select"
              value={category}
              onChange={(ev) => setCategory(ev.target.value)}
              required
              aria-label="select example"
            >
              <option value="">Product Category</option>
              <option value="Arduino Uno">Arduino Uno</option>
              <option value="Battery">Battery</option>
              <option value="BreadBoard">BreadBoard</option>
              <option value="Software">Software</option>
              <option value="Motors">Motors</option>
              <option value="Drone">Drone</option>
              <option value="Rasberry">Rasberry</option>
              <option value="propeller">propeller</option>
              <option value="wheels">wheels</option>
              <option value="wires">wires</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Number of Items Available in Inventory:
            </label>
            <input
              type="number"
              class="form-control"
              id="validationTextarea"
              placeholder="Stock Size"
              value={availablility}
              onChange={(ev) => setAvailablility(ev.target.value)}
              required
            ></input>
          </div>

          <div class="mb-3">
          <label for="file1" class="form-label">
              Add An Image for the product:
            </label>
            <input
              type="text"
              class="form-control mt-1"
              aria-label="file example"
              id="file1"
              value={imageUrl1}
              onChange={(ev) => {
                const uploadedFile = ev.target.value;
                setImageUrl1(uploadedFile);
              }}
              required
            />
            <div class="invalid-feedback">
              *Recommanded: Add Pictures with [width: 300px] and [height: 300px]*
            </div>
            <div class="">
              Note: Use "PostImage.com" To Upload Your Images And Then Paste The URLs In the Input Boxes

            </div>
          </div>

          <h5 className="text-start">--Additional Image Options--</h5>
          <div class="mb-3 ">
          <label for="file2" class="form-label">
          2nd Image:
            </label>
            <input
              type="text"
              class="form m-2"
              aria-label="file example"
              id="file2"
              value={imageUrl2}
              onChange={(ev) => {
                const uploadedFile = ev.target.value;
                setImageUrl2(uploadedFile);
              }}
            />
            <label for="file3" class="form-label">
            3rd Image:
            </label>
            <input
              type="text"
              class=" m-2"
              aria-label="file example"
              id="file3"
              value={imageUrl3}
              onChange={(ev) => {
                const uploadedFile = ev.target.value;
                setImageUrl3(uploadedFile);
              }}
            />
            </div>
            <div class="mb-3 ">
            <label for="file4" class="form-label">
              4th Image:
            </label>
            <input
              type="text"
              class="form m-2"
              aria-label="file example"
              value={imageUrl4}
              id="file4"
              onChange={(ev) => {
                const uploadedFile = ev.target.value;
                setImageUrl4(uploadedFile);
              }}
            />
            <label for="file5" class="form-label">
             5th Image:
            </label>
            <input
              type="text"
              class="form m-2"
              id="file5"
              aria-label="file example"
              onChange={(ev) => {
                const uploadedFile = ev.target.value;
                setImageUrl5(uploadedFile);
              }}
            />
          </div>

          <div class="form-check mb-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="validationFormCheck1"
              required
            />
            <label class="form-check-label" for="validationFormCheck1">
              All Details Entered Are Correct
            </label>
            <div class="invalid-feedback">
              *Please check this checkbox only when you have entered all the
              details correctly*
            </div>
          </div>

          <div class="mb-3">
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <button class="btn btn-success" type="submit">
                Add This Item
              </button>
            </button>
            {showDatabaseInfo ? (
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Adding Data To Database
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => {
                          setShowDatabaseInfo(false);
                          setDataUploadStatus(false);
                        }}
                      ></button>
                    </div>
                    {!dataUploadStatus ? (
                      <div class="modal-body d-flex justify-content-center align-items-center">
                        Writing The data to the database please wait..
                        <div
                          class="spinner-border text-success m-2"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <div class="modal-body d-flex justify-content-center align-items-center text-success">
                        Data Uploaded Successfully
                        <div className="m-1">
                          <FaCheckCircle size={25} />
                        </div>
                      </div>
                    )}

                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          setShowDatabaseInfo(false);
                          setDataUploadStatus(false);
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Invalid Form Data
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-danger text-center">Please first Fill the form.</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
