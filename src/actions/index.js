import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookies";

// toast.configure();
// const baseUrl = "http://localhost:5000";
const baseUrl = "https://schoolbackend-data-entry.herokuapp.com";

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
      console.log(error.response);
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
        alert("success");
        Cookies.setItem("Admintoken", res.data.token, "10d", "/");
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
      console.log(error.response);
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
      console.log(res.data);
      dispatch({ type: "fetched_student", payload: res.data.data });
    } catch (error) {
      console.log(error.response);
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
      console.log(res.data);
      dispatch({ type: "edit_student", payload: res.data.student });
    } catch (error) {
      console.log(error.response);
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
      console.log(res.data);
      dispatch({ type: "fetched_student", payload: res.data.student });
    } catch (error) {
      console.log(error.response);
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
      console.log(res.data);
      dispatch({ type: "fetched_student", payload: res.data.student });
    } catch (error) {
      console.log(error.response);
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    try {
      Cookies.removeItem("token");
      localStorage.removeItem("id");
      dispatch({ type: "logout", payload: null });
    } catch (error) {
      console.log(error.response);
    }
  };
};
export const logoutAdmin = (callback) => {
  return async (dispatch) => {
    try {
      Cookies.removeItem("Admintoken", "/");
      localStorage.removeItem("id");
      callback();
      dispatch({ type: "logout", payload: null });
    } catch (error) {
      console.log(error.response);
    }
  };
};
