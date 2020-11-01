import React, { useEffect } from "react";
import { connect } from "react-redux";
import Form from "./studentEditForm";
import { useParams } from "react-router-dom";
import { fetchStudents, editStudent } from "../actions";
import Cookies from "js-cookies";
import Loader from "./loading";

const StudentEditForm = ({ fetchStudents, history, student, editStudent }) => {
  const studentId = useParams().studentid;
  const admintoken = Cookies.getItem("Admintoken");

  if (!admintoken) {
    history.push(`/info/${studentId}`);
  }

  const handleSubmit = (data) => {
    editStudent(studentId, data, admintoken);
    setTimeout(() => {
      fetchStudents(studentId, admintoken);
      history.push(`/info/${studentId}`);
    }, 1200);
  };

  useEffect(() => {
    fetchStudents(studentId, admintoken);
  }, []);

  return (
    <>
      {student ? (
        <Form
          onSubmit={handleSubmit}
          initialValues={{
            name: student.name,
            branch: student.branch,
            email: student.email,
            contactNo: student.contactNo,
            class: student.class,
            addressState: student.addressState,
            addressCity: student.addressCity,
            addressStreet: student.addressStreet,
          }}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.info.student,
  };
};

export default connect(mapStateToProps, { fetchStudents, editStudent })(
  StudentEditForm
);
