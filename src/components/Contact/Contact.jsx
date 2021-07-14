import React, { useEffect } from "react";
import {
  Col,
  ContactUsContainer,
  ContactWrapper,
  FormField,
  FormHeading,
  FormInput,
  FormWrapper,
  ImgWrapper,
  PurpleDiv,
  Img,
} from "./ContactStyles";
import { Button } from "../../components/UI Button/ButtonStyles";
import Anime from "../../assets/anime illustration 1.png";
import "./contact.css";
import name from "../../assets/account_boxicon 1 .svg";
import phone from "../../assets/contact_phoneicon 5.svg";

import chat from "../../assets/chaticon 7.svg";
const Contact = (props) => {
  return (
    <>
      <ContactUsContainer>
        <ContactWrapper>
          <Col padding>
            <FormHeading>LET'S KEEP IN TOUCH</FormHeading>
            <FormWrapper>
              <div className="input-group ">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={name} alt="name" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="input-group ">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={chat} alt="chat" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="input-group ">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={phone} alt="phone" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact Us"
                />
              </div>
              <div class="input-group">
                <textarea class="form-control p-2">Message</textarea>
              </div>

              <Button primary width="140px" marginT="15px">
                SUBMIT
              </Button>
            </FormWrapper>
          </Col>
          <Col>
            <ImgWrapper>
              <Img src={Anime} alt="image" />
            </ImgWrapper>
            <PurpleDiv></PurpleDiv>
          </Col>
        </ContactWrapper>
      </ContactUsContainer>
    </>
  );
};

export default Contact;
