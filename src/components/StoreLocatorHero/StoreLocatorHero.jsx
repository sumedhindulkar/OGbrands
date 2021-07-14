import React from "react";
import * as Scroll from "react-scroll";
import {
  Desc,
  DescBlock,
  DescWrapper,
  Heading,
  HeadingBlock,
  Img,
  Line1,
  Line2,
  SLHeroCol,
  SLHeroContainer,
  SLHeroImgWrapper,
  SLHeroWrapper,
  TextWrapper,
} from "./SLHeroStyles";
import Image from "../../assets/smoker.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "../UI Button/ButtonStyles";

const StoreLocatorHero = () => {
  var scroll = Scroll.animateScroll;

  const scrollToMap = () => {
    scroll.scrollTo(800);
  };

  return (
    <>
      <SLHeroContainer>
        <SLHeroWrapper>
          <SLHeroCol>
            <HeadingBlock>
              <TextWrapper>
                <Line1>
                  <Heading>STORE</Heading>
                  <FaMapMarkerAlt color="yellow" size="70px"></FaMapMarkerAlt>
                </Line1>
                <Line2>LOCATOR</Line2>
              </TextWrapper>
            </HeadingBlock>
            <DescBlock>
              <DescWrapper>
                <Desc>
                  "Locate Our Store!
                  <br />
                  <br />
                  Our stores are located all over the USA. If you have a hard
                  time finding any store location, then Locate OG Brands Store
                  near you."
                </Desc>
                <Button onClick={scrollToMap} width="180px" primary>
                  FIND STORES
                </Button>
              </DescWrapper>
            </DescBlock>
          </SLHeroCol>
          <SLHeroImgWrapper>
            <Img src={Image} alt="image" />
          </SLHeroImgWrapper>
        </SLHeroWrapper>
      </SLHeroContainer>
    </>
  );
};

export default StoreLocatorHero;
