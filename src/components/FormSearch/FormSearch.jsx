import { React, useState } from "react";
import "./FormSearch.css";
const FormSearch = ({ searchFunc, searchValue, setSeaarchValue }) => {
  const [value, setValue] = useState("");

  return (
    <div className="wrapper">
      <form className="form" action="">
        <input
          className="form-input"
          type="text"
          placeholder="Поиск..."
          value={searchValue}
          onChange={(e) => {
            // setValue(e.target.value);
            setSeaarchValue(e.target.value);
          }}
        />
        <input
          className="form-btn"
          type="button"
          value="Найти"
          onClick={searchFunc}
        />
      </form>
    </div>
  );
};

export { FormSearch };
