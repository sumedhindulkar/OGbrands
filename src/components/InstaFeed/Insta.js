import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import instaIcon from "./insta.png";
import "./insta.css";
function Insta() {
  return (
    <Container className="insta">
      <h1 align="center">
        <img className="insta-icon" src={instaIcon} />
        <span>@OG BRANDS</span>
      </h1>
      <div className="my-grid">
        {[1, 2, , 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <div className="my-grid-item">
              <img
                src="https://instagram.fbom16-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.249.640.640a/205187978_334441718265288_8096795520075241580_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Wzi6FUjaGGcAX-TI674&edm=ABfd0MgBAAAA&ccb=7-4&oh=fc10d0806104ab147316be8b94031cbd&oe=60F13DFB&_nc_sid=7bff83"
                alt
                img
              />
            </div>
          );
        })}
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          margin: "50px auto",
        }}
      >
        <a className="my-3" href="https://www.instagram.com/oggrabba/">
          <button>Visit the InstaPage</button>
        </a>
      </div>
    </Container>
  );
}
// IGQVJWT1kwMURUOFJkVVB2OUE3N2FOVUs2OTFFeldZANVFGYXdrSUJOZAkhzM2lPb2VJSUZAJOVEyTWQzZAWJSVkJGVEYxOFpobzFtZAFRXLXhaRDVQNWl3OXROcGhSaDVseHF2b0VkZAzE3SmNhUzA2Y2dMOAZDZD
export default Insta;
