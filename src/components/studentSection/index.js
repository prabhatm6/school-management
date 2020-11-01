import React, { useEffect, useState } from "react";
import Cookies from "js-cookies";
import { connect } from "react-redux";
import { fetchAllStudents, logoutAdmin } from "../../actions";
import { Link } from "react-router-dom";
import {
  DashboardBox,
  DashboardContainer,
  Menu,
  StudentData,
  Student,
  SearchStudent,
  DataProfile,
  StudentProfile,
  DataBranch,
  DataClass,
  DataP,
  DataSource,
  MenuItem,
  MenuLink,
  MenuBtn,
  MenuBtnWrap,
} from "./studentInfoElement";

const StudentInfo = ({ history, logoutAdmin, fetchAllStudents, students }) => {
  const [name, setName] = useState("");
  const adminToken = Cookies.getItem("Admintoken");
  const filterStudent = () => {
    const regex = new RegExp(`^${name}|.${name}`, "i");
    return students.filter((student) => {
      return regex.test(student.name);
    });
  };
  if (!adminToken) {
    history.push("/");
  }
  useEffect(() => {
    fetchAllStudents(adminToken);
  }, []);
  const renderStudent = () => {
    if (filterStudent().length === 0) {
      return <p>No Data..😞</p>;
    } else if (filterStudent()[0]) {
      return filterStudent().map((student) => {
        return (
          <>
            <Student to={`/info/${student._id}`}>
              <DataProfile>
                <StudentProfile src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" />
                <DataP>{student.name}</DataP>
              </DataProfile>
              <DataSource>
                <DataClass>Class: {student.class}</DataClass>
                <DataBranch>Branch: {student.branch}</DataBranch>
              </DataSource>
            </Student>
          </>
        );
      });
    } else {
      return students.map((student) => {
        return (
          <>
            <Student to={`/info/${student._id}`}>
              <DataProfile>
                <StudentProfile
                  src={
                    student.profilePhoto
                      ? student.profilePhoto
                      : "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                  }
                />
                <DataP>{student.name}</DataP>
              </DataProfile>
              <DataSource>
                <DataClass>Class: {student.class}</DataClass>
                <DataBranch>Branch: {student.branch}</DataBranch>
              </DataSource>
            </Student>
          </>
        );
      });
    }
  };

  return (
    <DashboardContainer>
      {students ? (
        <DashboardBox>
          <Menu>
            <MenuItem>
              <MenuLink to="/addstudent/admin">Add student</MenuLink>
            </MenuItem>
            <MenuBtnWrap>
              <MenuBtn
                onClick={() => {
                  logoutAdmin(() => history.push("/"));
                }}
              >
                log out
              </MenuBtn>
            </MenuBtnWrap>
          </Menu>
          <StudentData>
            <SearchStudent
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Search Student"
            />
            {renderStudent()}
          </StudentData>
        </DashboardBox>
      ) : null}
    </DashboardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.info.allStudents,
  };
};

export default connect(mapStateToProps, { fetchAllStudents, logoutAdmin })(
  StudentInfo
);
