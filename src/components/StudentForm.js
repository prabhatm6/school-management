import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { fetchStudents, addStudent } from "../actions";
import Cookies from "js-cookies";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";

//styled

const AddDataContainer = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

const FormHeader = styled.div`
  text-align: center;
  display:flex;
  justify-content:space-around;
`;

const Formp = styled.p`
`

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

const GenderBox = styled.div`
  display: flex;

  & label {
    margin-right: 40px;
  }
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

const StudentForm = ({ fetchStudents, student, history, addStudent }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContact] = useState("");
  const [addressState, setState] = useState("");
  const [addressCity, setCity] = useState("");
  const [addressStreet, setStreet] = useState("");
  const [Class, setClass] = useState("");
  const [branch, setBranch] = useState("");
  const [postal, setPostal] = useState("");
  const admintoken = Cookies.getItem("Admintoken");
  useEffect(() => {
    if (!admintoken) {
      history.goBack();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(
      {
        name,
        email,
        addressCity,
        addressState,
        contactNo,
        branch,
        class: Class,
        addressStreet,
        birthDate: dob,
        gender,
      },
      admintoken
    );
    setTimeout(() => {
      history.push(`/studentinfo/admin`);
    }, 1200);
  };

  return (
    <AddDataContainer>
       <FormHeader>
        <Link to="/studentinfo/admin">
          <MdDashboard size={25} />
        </Link>
        <Formp>Add Student</Formp>
      </FormHeader>
      <FormBox onSubmit={(e) => handleSubmit(e)}>
        <InputBox>
          <Label>name</Label>
          <Input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter Full Name"
            required
          />
        </InputBox>
        <InputBox>
          <Label>Date of birth</Label>
          <Input
            type="date"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
            placeholder="Select Date of Birth"
          />
        </InputBox>
        <InputBox className="gender__box">
          <Label>select gender</Label>
          <GenderBox>
            <InputBox>
              <Label>
                male
                <Input
                  type="radio"
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                  value="male"
                  required
                />
              </Label>
            </InputBox>
            <InputBox>
              <Label>
                female
                <Input
                  type="radio"
                  name="gender"
                  onChange={(e) => console.log(e.target.value)}
                  value="female"
                  required
                />
              </Label>
            </InputBox>
          </GenderBox>
        </InputBox>
        <InputBox>
          <Label>contact No</Label>
          <Input
            type="text"
            onChange={(e) => setContact(e.target.value)}
            value={contactNo}
            placeholder="Enter Phone No"
            required
          />
        </InputBox>
        <InputBox>
          <Label>Email</Label>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Valid Email"
            required
          />
        </InputBox>
        <InputBox>
          <Label>class</Label>
          <Input
            type="text"
            onChange={(e) => setClass(e.target.value)}
            value={Class}
            placeholder="Enter Class"
            required
          />
        </InputBox>
        <InputBox>
          <Label>branch</Label>
          <Input
            type="text"
            onChange={(e) => setBranch(e.target.value)}
            value={branch}
            placeholder="Enter Branch"
            required
          />
        </InputBox>
        <InputBox>
          <Label>state</Label>
          <Input
            type="text"
            onChange={(e) => setState(e.target.value)}
            value={addressState}
            placeholder="State"
            required
          />
        </InputBox>
        <InputBox>
          <Label>city</Label>
          <Input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={addressCity}
            placeholder="city"
            required
          />
        </InputBox>
        <InputBox>
          <Label>street</Label>
          <Input
            type="text"
            onChange={(e) => setStreet(e.target.value)}
            value={addressStreet}
            placeholder="Full Address"
            required
          />
        </InputBox>
        <InputBox>
          <Label>Postal Code</Label>
          <Input
            type="text"
            onChange={(e) => setPostal(e.target.value)}
            value={postal}
            placeholder="Postal Code"
            required
          />
        </InputBox>
        <Btn>save</Btn>
      </FormBox>
    </AddDataContainer>
  );
};

export default connect(null, { addStudent, fetchStudents })(StudentForm);
