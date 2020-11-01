import styled, { keyframes } from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export const MainContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const MainBox = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Column1 = styled.div`
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;

export const Logo = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 10px;

  & .header__logo {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
`;

export const Column2 = styled.div`
  min-height: 550px;
  /* background-color:yellow; */
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 769px) {
    /* width:100%; */
    overflow: hidden;
  }
`;

export const Header = styled.h2`
  text-align: center;
  font-size: 32px;
  @media only screen and (max-width: 769px) {
    margin-bottom:30px;
    font-size:28px;
  }

`;

const animateForm = keyframes`
    from:{
        transform:translateX(200%);
    }
    
    to{
        transform:translateX(0%);
        opacity:1;
    }
`;

export const MainForm = styled.form`
  /* background-color:#425C5A; */
  width: 60%;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  transform: translateX(200%);
  animation: ${animateForm} 0.3s forwards 0.3s ease-in-out;
  opacity: 0;

  @media only screen and (max-width: 769px) {
    width: 85%;
    box-shadow: none;
    overflow: hidden;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 40px;
  position: relative;

  @media only screen and (max-width: 769px) {
    margin-bottom:25px;
  }
`;

export const InputLabel = styled.label``;

export const LabelIcon1 = styled(HiOutlineMail)``;
export const LabelIcon2 = styled(BiLockAlt)``;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #000;
`;

export const BtnWrapper = styled.div`
  width: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Btn = styled.button`
  width: 100%;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #ffcea2;
  color: #000;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;

export const EyeOpenIcon = styled(AiOutlineEye)`
  position: absolute;
  right: 10px;
  cursor: pointer;
  z-index: 10;
  background-color: #fff;
`;
export const EyeCloseIcon = styled(AiOutlineEyeInvisible)`
  position: absolute;
  right: 10px;
  cursor: pointer;
  z-index: 10;
  background-color: #fff;
`;
