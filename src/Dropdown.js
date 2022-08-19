import React, { useState } from "react";

function Dropdown({ selected, setSelected }) {
  const [isActive, setisActive] = useState(false);
  const options = ["React", "Node", "Html", "Css"];
  return (
    <div className="main-container">
    <div className="dropdown">
      <label>Choose Course to Learn</label>
      <div className="dropdown-btn" onClick={(e) => setisActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setisActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default Dropdown;
