import React, { useState } from "react";
import { signin, setLoading } from "../../actions";
import { css } from "@emotion/core";
import { PulseLoader } from "react-spinners";

import {
  MainContainer,
  MainBox,
  Column1,
  Column2,
  Img,
  Logo,
  MainForm,
  Input,
  InputBox,
  InputLabel,
  LabelIcon1,
  Header,
  LabelIcon2,
  FormContainer,
  Btn,
  BtnWrapper,
  EyeCloseIcon,
  EyeOpenIcon,
} from "./mainElements";
import Cookies from "js-cookies";
import readBookImg from "../../svgs/read-book.jpg";
import { ReactComponent as School } from "../../svgs/school.svg";
import { connect } from "react-redux";
import { useEffect } from "react";

const Main = ({ signin, history, setLoading, isLoading }) => {
  const id = localStorage.getItem("id");
  const token = Cookies.getItem("token");
  const admintoken = Cookies.getItem("Admintoken");

  useEffect(() => {
    if (token) {
      history.push(`/info/${id}`);
    }
    if (admintoken) {
      history.push("/studentinfo/admin");
    }
  }, []);

  const override = css`
    display: block;
    border-color: blue;
  `;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    signin({ email, password }, (id) => {
      history.push(`/info/${id}`);
    });
  };

  return (
    <>
      <MainContainer>
        <Logo>
          <School className="header__logo" />
          <h2>School</h2>
        </Logo>
        <MainBox>
          <Column1>
            <Img src={readBookImg} />
          </Column1>

          <Column2>
            <MainForm onSubmit={(e) => handleSubmit(e)}>
              <Header>Sign In</Header>
              <FormContainer>
                <InputBox>
                  <InputLabel id="email">
                    <LabelIcon1 size={27} />
                  </InputLabel>
                  <Input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    htmlFor="email"
                    type="email"
                    placeholder="Enter Email"
                    required
                  />
                </InputBox>
                <InputBox>
                  <InputLabel id="password">
                    <LabelIcon2 size={27} />
                  </InputLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    type={`${showPass ? "text" : "password"}`}
                    placeholder="Enter password"
                    htmlFor="password"
                    required
                  />
                  <>
                    {showPass ? (
                      <EyeCloseIcon
                        onClick={() => setShowPass(false)}
                        show={showPass}
                      />
                    ) : (
                      <EyeOpenIcon
                        onClick={() => setShowPass(true)}
                        show={showPass}
                      />
                    )}
                  </>
                  <span></span>
                </InputBox>
                <BtnWrapper>
                  {isLoading ? (
                    <PulseLoader
                      css={override}
                      size={21}
                      color="blue"
                      loading={isLoading}
                    />
                  ) : (
                    <Btn>Sign in</Btn>
                  )}
                </BtnWrapper>
              </FormContainer>
            </MainForm>
          </Column2>
        </MainBox>
      </MainContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.info.loading,
  };
};

export default connect(mapStateToProps, { signin, setLoading })(Main);
