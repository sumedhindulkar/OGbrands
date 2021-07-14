import styled from "styled-components";

export const CardContainer = styled.div`
  width: 370px;
  height: 190px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding-top: 20px;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.hover === true ? "#FCD804" : "#fff")};
  }

  &:hover Button {
    background: ${(props) => (props.hover === true ? "black" : "#FCD804")};
    color: ${(props) => (props.hover === true ? "white" : "black")};
  }

  @media screen and (max-width: 768px) {
    width: 320px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardTitle = styled.h6`
  font-weight: 600;
  font-size: 15px;
  line-height: 11px;
  margin-bottom: 12px;
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

export const CardP = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 11px;
  letter-spacing: 0.654546px;
  color: grey;
  padding-left: 10px;
`;
