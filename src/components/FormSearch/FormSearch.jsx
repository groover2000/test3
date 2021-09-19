import { React, useState } from "react";
const FormSearch = ({ searchFunc, searchValue, setSeaarchValue }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Поиск..."
          value={searchValue}
          onChange={(e) => {
            // setValue(e.target.value);
            setSeaarchValue(e.target.value);
          }}
        />
        <input type="button" value="search" onClick={searchFunc} />
      </form>
    </div>
  );
};

export { FormSearch };
