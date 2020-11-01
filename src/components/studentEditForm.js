import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const EditFormContainer = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

const FormHeader = styled.div`
  text-align: center;

  display: flex;
  justify-content: space-around;
`;
const FormBox = styled.form`
  width: 70%;
  margin: 20px auto;
  @media only screen and (max-width: 769px) {
    width: 85%;
  }

  &.gender__box {
    display: flex;
  }
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-family: inherit;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 500;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 7px;
  text-transform: capitalize;
`;

const Btn = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 8px 25px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #ff304f;
  color: #fff;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 769px) {
    font-size: 18px;
  }
  &:hover {
    background-color: greenyellow;
    color: #fff;
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;

const Formp = styled.p``;

const DashBoardIcon = styled(MdDashboard)``;

const StudentEditForm = (props) => {
  const renderInput = ({ input, label, meta }) => {
    return (
      <InputBox>
        <Label>{label}</Label>
        <Input {...input} required />
      </InputBox>
    );
  };
  return (
    <EditFormContainer>
      <FormHeader>
        <Link to="/studentinfo/admin">
          <DashBoardIcon size={25} />
        </Link>
        <Formp>Edit {props.initialValues.name}</Formp>
      </FormHeader>
      <FormBox onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field name="name" label="name" component={renderInput} />
        <Field name="email" label="email" component={renderInput} />
        <Field name="contactNo" label="contact" component={renderInput} />
        <Field name="branch" label="branch" component={renderInput} />
        <Field name="class" label="class" component={renderInput} />
        <Field name="addressState" label="state" component={renderInput} />
        <Field name="addressCity" label="city" component={renderInput} />
        <Field name="addressStreet" label="address" component={renderInput} />
        <Btn>save</Btn>
      </FormBox>
    </EditFormContainer>
  );
};

export default reduxForm({
  form: "studentEdit",
})(StudentEditForm);
