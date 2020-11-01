import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchStudents,
  logout,
  uploadDocs,
  uploadProfile,
} from "../../actions";
import Cookies from "js-cookies";
import { useEffect } from "react";
import { FaSchool, FaCity, FaRoad } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GiModernCity } from "react-icons/gi";
import { FcDepartment, FcContacts } from "react-icons/fc";
import {
  InfoContainer,
  InfoBox,
  Column1,
  InfoRowContainer,
  Column2,
  InfoTitle,
  InfoRow,
  UploadBtn,
  UploadLabel,
  PhotoInput,
  InfoHeaderProfile,
  HeaderProfile,
  HeaderClass,
  HeaderH2,
  Btn,
  BtnWrapper,
  SetIcon,
  DocForm,
  DocBox,
  DocInput,
  DocInputNo,
  DocLabel,
  DocShow,
  DocSaveBtn,
  DocHeader,
} from "./infoElements";
import Loader from '../../components/loading';

const Info = ({
  info,
  history,
  fetchStudents,
  logout,
  uploadDocs,
  uploadProfile,
}) => {
  const token = Cookies.getItem("token");
  const id = useParams().studentid;
  const Admintoken = Cookies.getItem("Admintoken");

  const [aadhar, setAadhar] = useState(null);
  const [aadharCardNo, setAadharno] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchStudents(id, token || Admintoken);
  }, [id]);
  if (!token && !Admintoken) {
    history.push("/");
  }
  console.log(photo);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("docfiles", aadhar);
    form.append("aadharCardNo", aadharCardNo);
    alert("attention!once the uploaded then cannot be edited");
    uploadDocs(id, form, token);
    setAadhar(null);
  };
  const handleProfileSave = () => {
    const form = new FormData();
    form.append("photo", photo);
    uploadProfile(id, form, token);
    setPhoto(null);
  };
  return (
    <div>
      {info ? (
        <InfoContainer>
          <InfoBox>
            <Column1>
              <InfoHeaderProfile>
                {info.gender === "male" ? (
                  <HeaderProfile
                    src={
                      info.profilePhoto
                        ? info.profilePhoto
                        : "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                    }
                  />
                ) : (
                  <HeaderProfile
                    src={
                      info.profilePhoto
                        ? info.profilePhoto
                        : "https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/048_girl_avatar_profile_woman_waiter_butler-512.png"
                    }
                  />
                )}
                {token ? (
                  <>
                    {photo ? <p>{photo.name}</p> : null}
                    <UploadLabel>
                      select photo{" "}
                      <PhotoInput
                        onChange={(e) => setPhoto(e.target.files[0])}
                        type="file"
                      />
                    </UploadLabel>
                    {photo ? (
                      <UploadBtn
                        onClick={() => {
                          handleProfileSave();
                        }}
                      >
                        save
                      </UploadBtn>
                    ) : null}
                  </>
                ) : null}
                <HeaderH2>{info.name}</HeaderH2>
                <HeaderClass>bsc cs</HeaderClass>
              </InfoHeaderProfile>
              <InfoRowContainer>
                <InfoRow>
                  <FcDepartment size={22} />
                  <InfoTitle>branch1</InfoTitle>
                </InfoRow>
                <InfoRow>
                  <FaSchool size={22} />
                  <InfoTitle>School1</InfoTitle>
                </InfoRow>
                <InfoRow>
                  <FcContacts size={22} />
                  <InfoTitle>{info.contactNo}</InfoTitle>
                </InfoRow>
                <InfoRow>
                  <MdEmail size={22} />
                  <InfoTitle>{info.email}</InfoTitle>
                </InfoRow>
                <InfoRow>
                  <GiModernCity size={22} />
                  <InfoTitle>{info.addressState}</InfoTitle>
                </InfoRow>
                <InfoRow>
                  <FaCity size={22} />
                  <InfoTitle>{info.addressCity}</InfoTitle>
                </InfoRow>
                <InfoRow>
                  <FaRoad size={22} />
                  <InfoTitle>{info.addressStreet}</InfoTitle>
                </InfoRow>
              </InfoRowContainer>
              {Admintoken ? null : (
                <BtnWrapper>
                  <Btn
                    onClick={() => {
                      logout();
                      setTimeout(() => {
                        history.push("/");
                      });
                    }}
                  >
                    Log out
                  </Btn>
                </BtnWrapper>
              )}
            </Column1>
            <Column2>
              <DocHeader>Document</DocHeader>
              <DocForm onSubmit={(e) => handleSubmit(e)}>
                <DocBox>
                  <DocInputNo
                    type="text"
                    value={info.aadharCardNo ? info.aadharCardNo : aadharCardNo}
                    disabled={info.aadharCardNo ? true : false}
                    onChange={(e) => setAadharno(e.target.value)}
                    placeholder="Enter Aadhar No"
                    required
                  />
                  {!info.aadharCardDoc ? (
                    <DocLabel>
                      <DocInput
                        type="file"
                        name="docfile"
                        onChange={(e) => setAadhar(e.target.files[0])}
                        required
                      />
                      select
                    </DocLabel>
                  ) : null}
                  <p>{aadhar ? aadhar.name : null}</p>

                  {info.aadharCardDoc ? (
                    <DocShow src={info.aadharCardDoc} />
                  ) : null}
                </DocBox>
                {!info.aadharCardDoc ? <DocSaveBtn>Save</DocSaveBtn> : null}
              </DocForm>
            </Column2>
            {Admintoken ? (
              <SetIcon to={`/info/${id}/edit`}>
                <FiSettings size={30} />
              </SetIcon>
            ) : null}
          </InfoBox>
        </InfoContainer>
      ) : <Loader />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    info: state.info.student,
    isAdmin: state.info.isAdmin,
  };
};

export default connect(mapStateToProps, {
  fetchStudents,
  logout,
  uploadProfile,
  uploadDocs,
})(Info);
