import { act } from "react-dom/test-utils";
import { reducer } from "redux-form";

export default (
  state = {
    curUser: null,
    loading: false,
    allStudents: [],
    adminData: null,
    student: null,
  },
  action
) => {
  switch (action.type) {
    case "fetched_student":
      return { ...state, student: action.payload };
    case "edit_student":
      return { ...state, student: action.payload };
    case "logout":
      return { ...state, student: null, adminData: null, allStudents: [] };
    case "admin_auth":
      return { ...state, adminData: action.payload };
    case "fetched_allstudents":
      return { ...state, allStudents: action.payload };
    case "set_loading":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
