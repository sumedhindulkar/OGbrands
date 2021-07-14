import React from "react";
import "./products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TextWrapper, Heading, Desc, DropCaps } from "./ProductStyles";

export default function Products() {
  return (
    <div className="products">
      <div className="row gx-0 gy-0">
        <div className="col col-lg-6 left"></div>
        <div className="col col-lg-6 ">
          <div className="container p-5">
            <Heading>OUR PRODUCT</Heading>
            <Desc>
              OG Brands delivers Premium Fronto Leaf to our consumers all over
              the USA. A wide range of people has enjoyed Fronto leaf for
              decades. We make our products unique to give you the best
              experience. The product is air-cured, which makes it darker in
              color and adds smoothness. Our premium fronto leaf comes in
              different flavors. Each one of our products is made with natural
              ingredients.
              <br />
              <br />
              <DropCaps>Please note</DropCaps>, state laws vary from state to
              state. OG Grabba LLC follows Connecticut state law, where whole
              leaf tobacco is NOT taxable as a tobacco product.
            </Desc>
          </div>
        </div>
      </div>
    </div>
  );
}
