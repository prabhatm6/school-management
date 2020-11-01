import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import adminForm from "./components/adminForm";
import Info from "./components/infoSection";
import Main from "./components/mainSection";
import studentEditForm from "./components/form";
import StudentInfo from "./components/studentSection";
import studentForm from "./components/StudentForm";


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/info/:studentid" exact component={Info} />
      <Route path="/info/:studentid/edit" exact component={studentEditForm} />
      <Route path="/loginas/admin" exact component={adminForm} />
      <Route path="/addstudent/admin" exact component={studentForm} />
      <Route path="/studentinfo/admin" exact component={StudentInfo} />
    </BrowserRouter>
  );
}

export default App;
