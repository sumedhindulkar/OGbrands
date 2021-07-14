import React from "react";
// import Background from '../../assets/Group 1BG image home.png'
import {
  HeroContainer,
  HeroBg,
  HeroRow,
  HeroCol,
  HeroWrapper,
  TextWrapper,
  HeroDesc,
  BackgroundImg,
  Heading,
  ImgWrapper,
  HeroImg,
  BtnWrapper,
  DescBlock,
} from "./HeroStyles";
import Banner from "../../assets/The Productsproducts home page.png";
import Logo from "../../assets/OG_Brands_Web.png";
import { Button } from "../UI Button/ButtonStyles";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <>
      <HeroContainer id="hero">
        {/* <HeroBg>
                <BackgroundImg src={Background} alt=''/>
            </HeroBg> */}
        <HeroWrapper>
          <HeroRow>
            <HeroCol>
              <DescBlock>
                <TextWrapper>
                  <img src={Logo} style={{ width: "280px" }} />
                </TextWrapper>
                <Fade left cascade delay={1500}>
                  <BtnWrapper>
                    <Button primary width={"140px"} marginB={"20px"}>
                      SHOP NOW
                    </Button>
                    <Button to="/store-locator" width={"200px"}>
                      STORE LOCATOR{" "}
                    </Button>
                  </BtnWrapper>
                </Fade>
              </DescBlock>
            </HeroCol>
            <HeroCol>
              <ImgWrapper>
                <Fade right duration={2000}>
                  <HeroImg src={Banner} alt="" />
                </Fade>
              </ImgWrapper>
            </HeroCol>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
