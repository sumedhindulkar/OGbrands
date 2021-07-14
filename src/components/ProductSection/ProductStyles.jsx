import styled from "styled-components";

export const ProductContainer = styled.div`
  background: #010101;
  color: #fff;
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    display: block;
  }
`;

export const ProductWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ProdRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1";
  grid-column-gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const TextWrapper = styled.div`
  width: 45%;
  padding: 100px !important;

  @media screen and (max-height: 736px) {
    padding-bottom: 24px;
    width: 100%;
    padding: 10px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 60px;
  line-height: 1.1;
  font-weight: 500;
  color: #fcd804;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Desc = styled.p`
  line-height: 28px;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    width: 100%;
    font-size: 18px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 50%;
  height: 700px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;

export const DropCaps = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
