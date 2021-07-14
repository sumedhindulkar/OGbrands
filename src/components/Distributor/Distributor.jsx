import React from "react";
import "./Distributor.css";
import smoker from "../../assets/anime smoker lol 1anime smoker 1 .png";
import msg from "../../assets/emailicon 4 .svg";
import chat from "../../assets/chaticon 7.svg";
import name from "../../assets/account_boxicon 1 .svg";
import title from "../../assets/picture_in_pictureicon 2.svg";
import work from "../../assets/workicon 3 .svg";
import phone from "../../assets/contact_phoneicon 5.svg";
import location from "../../assets/roomicon 6.svg";

export default function Distributor() {
  return (
    <div className="distributor">
      <div className="d-top">
        <div className="container d-flex">
          <img src={smoker} />
          <div className="d-flex flex-column justify-content-center mx-5">
            <h1>
              <b>BECOME A DISTRIBUTOR !!!</b>
            </h1>
            <h2>
              <span></span>
              <b>Application Form</b>
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-max">
        <div class="input-group my-5">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <img src={name} alt="icons" />
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Name" />
        </div>
        <div class="input-group my-5">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <img src={title} alt="icons" />
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Title" />
        </div>
        <div class="input-group my-5">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <img src={work} alt="icons" />
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Company" />
        </div>
        <div class="input-group my-5">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <img src={msg} alt="icons" />
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Email Address" />
        </div>
        <div class="input-group my-5">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <img src={phone} alt="icons" />
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Phone" />
        </div>
        <div class="input-group my-5">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <img src={location} alt="icons" />
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Address" />
        </div>
        <div class="input-group">
          <textarea class="form-control p-3">Message</textarea>
        </div>
        <button className="mt-5 px-5">Submit Form</button>

        <h2 style={{ fontWeight: "600" }} className="mt-5">
          Submit your State Tobacco License and Vendor Permit
        </h2>
        <h3 style={{ fontWeight: "600" }} className="mt-4">
          Acceptable formats include PDF, JPG, JPEG and DOCX
        </h3>
        <h5 style={{ fontWeight: "600" }} className="mt-5">
          UPLOAD YOUR TOBACCO LICENSE.
        </h5>
        <div class=" mb-3">
          <div class="custom-file">
            <input
              class="btn btn-warning"
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
            />
          </div>
        </div>
        <h5 style={{ fontWeight: "600" }} className="mt-5">
          UPLOAD YOUR TOBACCO LICENSE.
        </h5>
        <div class=" mb-3">
          <div class="custom-file">
            <input
              class="btn btn-warning"
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
