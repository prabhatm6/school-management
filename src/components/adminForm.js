import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signinAsAdmin, setLoading } from "../actions";
import Cookies from "js-cookies";
import styled from "styled-components";
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";

const AdminFormContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AdminFormBox = styled.form`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 50px 30px;
  width: 30%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 769px) {
    width: 90%;
  }
`;
const AdminFormHeader = styled.h2`
  margin-bottom: 10px;
  font-size: 32px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
`;
const Input = styled.input`
  padding: 10px 8px;
  font-family: inherit;
  font-size: 19px;
  font-weight: 600;
  border: 2px solid #000;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const InputSubmitBtn = styled.button`
  align-self: center;
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
    font-size: 20px;
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

const override = css`
  display: block;
  border-color: blue;
  align-self: center;
`;

const AdminForm = ({ signinAsAdmin, history, isLoading, setLoading }) => {
  const adminToken = Cookies.getItem("Admintoken");
  const token = Cookies.getItem("token");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signinAsAdmin({ email, password }, () => {
      history.push("/studentinfo/admin");
    });
  };

  useEffect(() => {
    if (adminToken) {
      history.push("/studentinfo/admin");
    }
    if (token) {
      history.goBack();
    }
  }, []);

  return (
    <>
      <AdminFormContainer>
        <AdminFormHeader>Admin Form</AdminFormHeader>
        <AdminFormBox onSubmit={(e) => handleSubmit(e)}>
          <InputBox>
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </InputBox>
          <InputBox>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </InputBox>
          {isLoading ? (
            <PulseLoader css={override} />
          ) : (
            <InputSubmitBtn>sign in</InputSubmitBtn>
          )}
        </AdminFormBox>
      </AdminFormContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.info.loading,
  };
};

export default connect(mapStateToProps, { signinAsAdmin, setLoading })(
  AdminForm
);
