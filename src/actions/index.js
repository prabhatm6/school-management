import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookies";

toast.configure();
// const baseUrl = "http://localhost:5000";

const baseUrl = "https://schoolbackend-data-entry.herokuapp.com";

const noticeSuccess = (text) => {
  return toast.success(text, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
const noticeError = (text) => {
  return toast.error(text, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const setLoading = (state) => {
  return {
    type: "set_loading",
    payload: state,
  };
};

export const signin = (data, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/signin`, data);
      if (res.data.status === "success") {
        localStorage.setItem("id", res.data.data._id);
        Cookies.setItem("token", res.data.token, "10");
        if (res.data.status === "success") {
          dispatch({ type: "auth", paylaod: res.data });
          noticeSuccess("Successfully logged in");
          setTimeout(() => {
            dispatch({ type: "set_loading", payload: false });
            callback(res.data.data._id);
          }, 2000);
        }
      }
    } catch (error) {
      setTimeout(() => {
        dispatch({ type: "set_loading", payload: false });
      }, 2000);
      const err = error.response.data.message;
      noticeError(err);
    }
  };
};
export const signinAsAdmin = (data, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/signin/as/admin`, data);
      console.log(res.data);
      if (res.data.status === "success") {
        localStorage.setItem("id", res.data.data._id);
        Cookies.setItem("Admintoken", res.data.token, "10d", "/");
        noticeSuccess("Successfully logged in");
        dispatch({ type: "admin_auth", paylaod: res.data.data });
        setTimeout(() => {
          dispatch({ type: "set_loading", payload: false });
          callback();
        }, 2000);
      }
    } catch (error) {
      setTimeout(() => {
        dispatch({ type: "set_loading", payload: false });
      }, 2000);
      const err = error.response.data.message;
      noticeError(err);
    }
  };
};
export const fetchStudents = (id, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}/student/${id}/${token}`);
      dispatch({ type: "fetched_student", payload: res.data.student });
    } catch (error) {
      console.log(error.response);
    }
  };
};
export const fetchAllStudents = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}/getallstudents/${token}`);
      dispatch({ type: "fetched_allstudents", payload: res.data.students });
    } catch (error) {
      console.log(error.response);
    }
  };
};
export const addStudent = (data, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/createstudent/${token}`, data);
      dispatch({ type: "fetched_student", payload: res.data.data });

      noticeSuccess("new student is added");
    } catch (error) {
      const err = error.response.data.message;
      noticeError(err);
    }
  };
};
export const editStudent = (id, data, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.patch(
        `${baseUrl}/updatestudent/${id}/${token}`,
        data
      );
      dispatch({ type: "edit_student", payload: res.data.student });
      noticeSuccess("student is edited");
    } catch (error) {
      const err = error.response.data.message;
      noticeError(err);
    }
  };
};
export const uploadDocs = (id, data, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.patch(
        `${baseUrl}/upload/docs/${id}/${token}`,
        data
      );
      dispatch({ type: "fetched_student", payload: res.data.student });
      noticeSuccess("document is uploaded");
    } catch (error) {
      const err = error.response.data.message;
      noticeError(err);
    }
  };
};
export const uploadProfile = (id, data, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.patch(
        `${baseUrl}/upload/dp/${id}/${token}`,
        data
      );
      dispatch({ type: "fetched_student", payload: res.data.student });
    } catch (error) {
      noticeError("something went wrong");
    }
  };
};
export const logout = () => {
  Cookies.removeItem("token");
  localStorage.removeItem("id");

  setTimeout(() => {
    noticeSuccess("Logged out");
  }, 1000);

  return {
    type: "logout",
    payload: null,
  };
};
export const logoutAdmin = (callback) => {
  Cookies.removeItem("Admintoken", "/");
  localStorage.removeItem("id");
  callback();
  setTimeout(() => {
    noticeSuccess("Logged out");
  }, 1000);

  return {
    type: "logout",
    payload: null,
  };
};
