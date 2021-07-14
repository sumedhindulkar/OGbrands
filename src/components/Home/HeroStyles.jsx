import styled from "styled-components";
import Banner from "../../assets/The Productsproducts home page.png";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  overflow-x: clip;
  height: 100vh;
  position: relative;
  display: flex;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroWrapper = styled.div`
  padding: 160px 0;
  z-index: 999;

  @media screen and (max-width: 991px) {
    padding-top: 100px;
    padding-right: 30px;
    padding-left: 30px;
  }

  @media screen and (max-height: 736px) {
    padding-top: 100px;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const HeroRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-right: -15px;
    margin-bottom: -15px;
    margin-left: -15px; */
  flex-wrap: wrap;
  align-content: stretch;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-height: 736px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const HeroCol = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
  }

  @media screen and (max-height: 736px) {
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }
`;

export const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 300px;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (max-height: 736px) {
    justify-content: flex-start;
  }
`;

export const TextWrapper = styled.div`
  max-width: 90%;
  padding-top: 0;
  padding-bottom: 60px;
  margin-left: 80px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    margin-left: 0;
  }
`;

export const BtnWrapper = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 80px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 40px;
  font-weight: 600;
  color: #fff;
  line-height: 29px;
  font-size: 80px;
  width: 115%;

  @media screen and (max-width: 1100px) {
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const HeroDesc = styled.p`
  max-width: 300px;
  margin-left: 15px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  width: 50%;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  margin-left: 400px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    position: left -100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const HeroImg = styled.img`
  /* max-width: 95%; */
  height: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  opacity: 1;
  background: transparent;
  position: relative;
  left: -400px;
  top: -130px;
  @media screen and (max-width: 768px) {
    height: 289.27px;
    max-width: 100%;
  }
`;
