import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
// import { FormSearch } from "../FormSearch/FormSearch";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/"> Главная</Link>
      <Link to="/about"> О проекте</Link>
      {/* <FormSearch /> */}
    </div>
  );
}

export { Navigation };
