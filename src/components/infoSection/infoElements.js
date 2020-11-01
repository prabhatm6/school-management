import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoContainer = styled.div`
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 769px) {
    height: auto;
  }
`;
export const InfoBox = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
  grid-gap: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media only screen and (max-width: 769px) {
    width: 100%;
    padding: 0px;
    grid-template-columns: 1fr;
  }
`;
export const Column1 = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 769px) {
    box-shadow: none;
  }
`;
export const InfoHeaderProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HeaderH2 = styled.div`
  margin-top: 10px;
  text-transform: capitalize;
  font-size: 32px;
  font-weight: bold;

  @media only screen and (max-width: 769px) {
    font-size: 20px;
  }
`;
export const HeaderClass = styled.div`
  font-size: 20px;
`;
export const InfoRowContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;
export const InfoRow = styled.div`
  width: 90%;
  background-color: #f1f1f1;
  margin-top: 20px;

  display: flex;
  align-items: center;
  padding: 10px;
`;
export const InfoTitle = styled.p`
  margin-left: 10px;
  font-size: 22px;

  @media only screen and (max-width: 769px) {
    font-size: 18px;
  }
`;
export const HeaderProfile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media only screen and (max-width: 769px) {
    height: 70px;
    width: 70px;
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  right: 20px;

  @media only screen and (max-width: 769px) {
    top: 15px;
    right: 10px;
  }
`;

export const Btn = styled.button`
  width: 100%;
  padding: 8px 25px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #ffcea2;
  color: #000;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;

  @media only screen and (max-width: 769px) {
    padding: 5px 16px;
    font-size: 14px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;

export const SetIcon = styled(Link)`
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
`;

export const Column2 = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  padding: 30px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 769px) {
    border: none;
    width: 100%;
    align-items: stretch;
  }
`;

export const DocForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DocBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const DocInputNo = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #000;
  font-family: inherit;
  font-weight: bold;
  margin-bottom: 5px;

  @media only screen and (max-width: 769px) {
    width: 90%;
  }
`;

export const DocLabel = styled.label`
  background-color: #482ff7;
  width: fit-content;
  padding: 7px 15px;
  border-radius: 5px;
  margin-bottom: 5px;
  color: #fff;
`;
export const DocShow = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 10px;
  border: 2px solid black;
  margin-top: 20px;
`;

export const DocHeader = styled.h2`
  font-size: 35px;
  text-align: center;

  @media only screen and (max-width: 769px) {
    font-size: 20px;
  }
`;

export const DocInput = styled.input`
  display: none;
`;

export const DocSaveBtn = styled.button`
  position: absolute;
  right: 30px;
  top: 22px;
  padding: 7px 20px;
  background: #21e6c1;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const UploadBtn = styled.label`
  padding: 5px 10px;
  margin-top:10px;
  background: #21e6c1;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const UploadLabel = styled.label`
  padding: 5px 10px;
  margin-top:10px;
  background: #21e6c1;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const PhotoInput = styled.input`
  display:none;
`
