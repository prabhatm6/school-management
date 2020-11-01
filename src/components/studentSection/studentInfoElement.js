import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardContainer = styled.div`
  width: 100%;
`;
export const DashboardBox = styled.div`
  width: 70%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 30% 1fr;
  align-items: center;
  grid-gap: 20px;

  @media only screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;
export const Student = styled(Link)`
  width: 60%;
  background-color: #482ff7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 20px;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const DataProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StudentData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 650px;
  overflow-y: scroll;
  border-bottom: 2px solid #000;
  position: relative;
`;

export const SearchStudent = styled.input`
  width: 60%;
  display: flex;
  justify-content: center;
  padding: 10px 15px;
  margin: 20px 0;
  font-family: inherit;
  position: sticky;
  z-index: 20;
  top: 0;

  @media only screen and (max-width: 769px) {
    position: relative;
    width: 100%;
  }
`;

export const StudentProfile = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
`;

export const DataSource = styled.div``;

export const DataP = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;

  @media only screen and (max-width: 769px) {
    font-weight: 400;
  }
`;
export const DataClass = styled.p``;
export const DataBranch = styled.p``;

//menu

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 769px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #581b98;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 20px;

  @media only screen and (max-width: 769px) {
    margin-bottom: 0;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const MenuLink = styled(Link)`
  font-size: 18px;
  padding: 10px;
  width: 100%;
  color: #fff;
  font-weight: bold;

  @media only screen and (max-width: 769px) {
    font-size: 16px;
  }
`;
export const MenuBtnWrap = styled.div`
  align-self: center;
  margin-top: 10px;

  @media only screen and (max-width: 769px) {
    margin: 0;
  }
`;
export const MenuBtn = styled.button`
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
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 769px) {
    font-size: 18px;
  }
  &:hover {
    background-color: #ff304f;
    color: #fff;
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;
